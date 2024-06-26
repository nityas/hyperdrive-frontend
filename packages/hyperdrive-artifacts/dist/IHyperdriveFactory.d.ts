export declare const IHyperdriveFactory: {
    readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "DeployerCoordinatorAlreadyAdded";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "DeployerCoordinatorIndexMismatch";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "DeployerCoordinatorNotAdded";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "EndIndexTooLarge";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidCheckpointDuration";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidCheckpointDurationResolution";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidDeployConfig";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidDeployerCoordinator";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidFees";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidFixedAPR";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidIndexes";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidMaxCheckpointDuration";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidMaxFees";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidMaxFixedAPR";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidMaxPositionDuration";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidMaxTimeStretchAPR";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidMinCheckpointDuration";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidMinFees";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidMinFixedAPR";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidMinPositionDuration";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidMinTimeStretchAPR";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidPositionDuration";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidTimeStretchAPR";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ReceiveLocked";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "TransferFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Unauthorized";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newCheckpointDurationResolution";
            readonly type: "uint256";
        }];
        readonly name: "CheckpointDurationResolutionUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address[]";
            readonly name: "newDefaultPausers";
            readonly type: "address[]";
        }];
        readonly name: "DefaultPausersUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "deployerCoordinator";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "hyperdrive";
            readonly type: "address";
        }, {
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
            readonly indexed: false;
            readonly internalType: "struct IHyperdrive.PoolDeployConfig";
            readonly name: "config";
            readonly type: "tuple";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "extraData";
            readonly type: "bytes";
        }];
        readonly name: "Deployed";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "deployerCoordinator";
            readonly type: "address";
        }];
        readonly name: "DeployerCoordinatorAdded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "deployerCoordinator";
            readonly type: "address";
        }];
        readonly name: "DeployerCoordinatorRemoved";
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
            readonly name: "governance";
            readonly type: "address";
        }];
        readonly name: "GovernanceUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "hyperdriveGovernance";
            readonly type: "address";
        }];
        readonly name: "HyperdriveGovernanceUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "newLinkerCodeHash";
            readonly type: "bytes32";
        }];
        readonly name: "LinkerCodeHashUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newLinkerFactory";
            readonly type: "address";
        }];
        readonly name: "LinkerFactoryUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newMaxCheckpointDuration";
            readonly type: "uint256";
        }];
        readonly name: "MaxCheckpointDurationUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
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
            readonly indexed: false;
            readonly internalType: "struct IHyperdrive.Fees";
            readonly name: "newMaxFees";
            readonly type: "tuple";
        }];
        readonly name: "MaxFeesUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newMaxFixedAPR";
            readonly type: "uint256";
        }];
        readonly name: "MaxFixedAPRUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newMaxPositionDuration";
            readonly type: "uint256";
        }];
        readonly name: "MaxPositionDurationUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newMaxTimeStretchAPR";
            readonly type: "uint256";
        }];
        readonly name: "MaxTimeStretchAPRUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newMinCheckpointDuration";
            readonly type: "uint256";
        }];
        readonly name: "MinCheckpointDurationUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
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
            readonly indexed: false;
            readonly internalType: "struct IHyperdrive.Fees";
            readonly name: "newMinFees";
            readonly type: "tuple";
        }];
        readonly name: "MinFeesUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newMinFixedAPR";
            readonly type: "uint256";
        }];
        readonly name: "MinFixedAPRUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newMinPositionDuration";
            readonly type: "uint256";
        }];
        readonly name: "MinPositionDurationUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newMinTimeStretchAPR";
            readonly type: "uint256";
        }];
        readonly name: "MinTimeStretchAPRUpdated";
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
    readonly methodIdentifiers: {};
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"DeployerCoordinatorAlreadyAdded\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"DeployerCoordinatorIndexMismatch\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"DeployerCoordinatorNotAdded\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"EndIndexTooLarge\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDurationResolution\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidDeployConfig\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidDeployerCoordinator\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFees\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFixedAPR\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidIndexes\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMaxCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMaxFees\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMaxFixedAPR\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMaxPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMaxTimeStretchAPR\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinFees\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinFixedAPR\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinTimeStretchAPR\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTimeStretchAPR\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReceiveLocked\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TransferFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newCheckpointDurationResolution\",\"type\":\"uint256\"}],\"name\":\"CheckpointDurationResolutionUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address[]\",\"name\":\"newDefaultPausers\",\"type\":\"address[]\"}],\"name\":\"DefaultPausersUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"deployerCoordinator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"hyperdrive\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"contract IERC20\",\"name\":\"vaultSharesToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"sweepCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"indexed\":false,\"internalType\":\"struct IHyperdrive.PoolDeployConfig\",\"name\":\"config\",\"type\":\"tuple\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"name\":\"Deployed\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"deployerCoordinator\",\"type\":\"address\"}],\"name\":\"DeployerCoordinatorAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"deployerCoordinator\",\"type\":\"address\"}],\"name\":\"DeployerCoordinatorRemoved\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newFeeCollector\",\"type\":\"address\"}],\"name\":\"FeeCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"hyperdriveGovernance\",\"type\":\"address\"}],\"name\":\"HyperdriveGovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"newLinkerCodeHash\",\"type\":\"bytes32\"}],\"name\":\"LinkerCodeHashUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newLinkerFactory\",\"type\":\"address\"}],\"name\":\"LinkerFactoryUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMaxCheckpointDuration\",\"type\":\"uint256\"}],\"name\":\"MaxCheckpointDurationUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"indexed\":false,\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"newMaxFees\",\"type\":\"tuple\"}],\"name\":\"MaxFeesUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMaxFixedAPR\",\"type\":\"uint256\"}],\"name\":\"MaxFixedAPRUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMaxPositionDuration\",\"type\":\"uint256\"}],\"name\":\"MaxPositionDurationUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMaxTimeStretchAPR\",\"type\":\"uint256\"}],\"name\":\"MaxTimeStretchAPRUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMinCheckpointDuration\",\"type\":\"uint256\"}],\"name\":\"MinCheckpointDurationUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"indexed\":false,\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"newMinFees\",\"type\":\"tuple\"}],\"name\":\"MinFeesUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMinFixedAPR\",\"type\":\"uint256\"}],\"name\":\"MinFixedAPRUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMinPositionDuration\",\"type\":\"uint256\"}],\"name\":\"MinPositionDurationUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMinTimeStretchAPR\",\"type\":\"uint256\"}],\"name\":\"MinTimeStretchAPRUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newSweepCollector\",\"type\":\"address\"}],\"name\":\"SweepCollectorUpdated\",\"type\":\"event\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"errors\":{\"DeployerCoordinatorAlreadyAdded()\":[{\"notice\":\"Thrown when governance attempts to add a deployer coordinator         that has already been added.\"}],\"DeployerCoordinatorIndexMismatch()\":[{\"notice\":\"Thrown when governance attempts to remove a deployer coordinator         but specifies the wrong index within the list of deployer         coordinators.\"}],\"DeployerCoordinatorNotAdded()\":[{\"notice\":\"Thrown when governance attempts to remove a deployer coordinator         that was never added.\"}],\"EndIndexTooLarge()\":[{\"notice\":\"Thrown when the ending index of a range is larger than the         underlying list.\"}],\"InvalidCheckpointDuration()\":[{\"notice\":\"Thrown when the checkpoint duration supplied to `deployTarget`         or `deployAndInitialize` isn't a multiple of the checkpoint         duration resolution or isn't within the range specified by the         minimum and maximum checkpoint durations.\"}],\"InvalidCheckpointDurationResolution()\":[{\"notice\":\"Thrown when governance attempts to set the checkpoint duration         resolution to a value that doesn't evenly divide the minimum         checkpoint duration, maximum checkpoint duration, minimum         position duration, or maximum position duration.\"}],\"InvalidDeployConfig()\":[{\"notice\":\"Thrown when the deploy configuration passed to         `deployAndInitialize` has fields set that will be overridden by         governance.\"}],\"InvalidDeployerCoordinator()\":[{\"notice\":\"Thrown when the deployer coordinator passed to         `deployAndInitialize` hasn't been added to the factory.\"}],\"InvalidFees()\":[{\"notice\":\"Thrown when the fee parameters passed to `deployAndInitialize`         aren't within the range specified by the minimum and maximum         fees.\"}],\"InvalidFixedAPR()\":[{\"notice\":\"Thrown when the fixed APR passed to `deployAndInitialize` isn't         within the range specified by the minimum and maximum fixed         APRs.\"}],\"InvalidIndexes()\":[{\"notice\":\"Thrown when the starting index of a range is larger than the         ending index.\"}],\"InvalidMaxCheckpointDuration()\":[{\"notice\":\"Thrown when governance attempts to set the maximum checkpoint         duration to a value that isn't a multiple of the checkpoint         duration resolution or is smaller than the minimum checkpoint         duration.\"}],\"InvalidMaxFees()\":[{\"notice\":\"Thrown when governance attempts to set one of the maximum fee         parameters to a smaller value than the corresponding minimum fee         parameter.\"}],\"InvalidMaxFixedAPR()\":[{\"notice\":\"Thrown when governance attempts to set the maximum fixed APR to         a value that is smaller than the minimum fixed APR.\"}],\"InvalidMaxPositionDuration()\":[{\"notice\":\"Thrown when governance attempts to set the maximum position         duration to a value that isn't a multiple of the checkpoint         duration resolution or is smaller than the minimum position         duration.\"}],\"InvalidMaxTimeStretchAPR()\":[{\"notice\":\"Thrown when governance attempts to set the maximum time stretch         APR to a value that is smaller than the minimum time stretch         APR.\"}],\"InvalidMinCheckpointDuration()\":[{\"notice\":\"Thrown when governance attempts to set the minimum checkpoint         duration to a value that isn't a multiple of the checkpoint         duration resolution or is larger than the maximum checkpoint         duration.\"}],\"InvalidMinFees()\":[{\"notice\":\"Thrown when governance attempts to set one of the minimum fee         parameters to a larger value than the corresponding maximum fee         parameter.\"}],\"InvalidMinFixedAPR()\":[{\"notice\":\"Thrown when governance attempts to set the minimum fixed APR to         a value that is larger than the maximum fixed APR.\"}],\"InvalidMinPositionDuration()\":[{\"notice\":\"Thrown when governance attempts to set the minimum position         duration to a value that isn't a multiple of the checkpoint         duration resolution or is larger than the maximum position         duration.\"}],\"InvalidMinTimeStretchAPR()\":[{\"notice\":\"Thrown when governance attempts to set the minimum time stretch         APR to a value that is larger than the maximum time stretch         APR.\"}],\"InvalidPositionDuration()\":[{\"notice\":\"Thrown when the position duration passed to `deployAndInitialize`         doesn't fall within the range specified by the minimum and         maximum position durations.\"}],\"InvalidTimeStretchAPR()\":[{\"notice\":\"Thrown when a time stretch APR is passed to `deployAndInitialize`         that isn't within the range specified by the minimum and maximum         time stretch APRs or doesn't satisfy the lower and upper safe         bounds implied by the fixed APR.\"}],\"ReceiveLocked()\":[{\"notice\":\"Thrown when ether is sent to the factory when `receive` is         locked.\"}],\"TransferFailed()\":[{\"notice\":\"Thrown when an ether transfer fails.\"}],\"Unauthorized()\":[{\"notice\":\"Thrown when an unauthorized caller attempts to update one of the         governance administered parameters.\"}]},\"events\":{\"CheckpointDurationResolutionUpdated(uint256)\":{\"notice\":\"Emitted when the checkpoint duration resolution is updated.\"},\"DefaultPausersUpdated(address[])\":{\"notice\":\"Emitted when the list of default pausers is updated.\"},\"Deployed(address,address,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes)\":{\"notice\":\"Emitted when a Hyperdrive pool is deployed.\"},\"DeployerCoordinatorAdded(address)\":{\"notice\":\"Emitted when a deployer coordinator is added.\"},\"DeployerCoordinatorRemoved(address)\":{\"notice\":\"Emitted when a deployer coordinator is removed.\"},\"FeeCollectorUpdated(address)\":{\"notice\":\"Emitted when the fee collector used in new deployments is updated.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the factory's governance is updated.\"},\"HyperdriveGovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address used in new deployments is         updated.\"},\"LinkerCodeHashUpdated(bytes32)\":{\"notice\":\"Emitted when the linker code hash used in new deployments is         updated.\"},\"LinkerFactoryUpdated(address)\":{\"notice\":\"Emitted when the linker factory used in new deployments is         updated.\"},\"MaxCheckpointDurationUpdated(uint256)\":{\"notice\":\"Emitted when the maximum checkpoint duration is updated.\"},\"MaxFeesUpdated((uint256,uint256,uint256,uint256))\":{\"notice\":\"Emitted when the maximum fees are updated.\"},\"MaxFixedAPRUpdated(uint256)\":{\"notice\":\"Emitted when the maximum fixed APR is updated.\"},\"MaxPositionDurationUpdated(uint256)\":{\"notice\":\"Emitted when the maximum position duration is updated.\"},\"MaxTimeStretchAPRUpdated(uint256)\":{\"notice\":\"Emitted when the maximum time stretch APR is updated.\"},\"MinCheckpointDurationUpdated(uint256)\":{\"notice\":\"Emitted when the minimum checkpoint duration is updated.\"},\"MinFeesUpdated((uint256,uint256,uint256,uint256))\":{\"notice\":\"Emitted when the minimum fees are updated.\"},\"MinFixedAPRUpdated(uint256)\":{\"notice\":\"Emitted when the minimum fixed APR is updated.\"},\"MinPositionDurationUpdated(uint256)\":{\"notice\":\"Emitted when the minimum position duration is updated.\"},\"MinTimeStretchAPRUpdated(uint256)\":{\"notice\":\"Emitted when the minimum time stretch APR is updated.\"},\"SweepCollectorUpdated(address)\":{\"notice\":\"Emitted when the sweep collector used in new deployments is         updated.\"}},\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IHyperdriveFactory.sol\":\"IHyperdriveFactory\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x8b726cbf87e5dbec80207d47b64bb20e35a9fb42667b9d1612a87ad8b2d361b5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b2015112addc7b4ba33c0626a14c963294164906afce52296f3dc209737a7339\",\"dweb:/ipfs/QmZYR6qwGspufCtiofdvYbaHhxSrguNnP52rd3y3zXWiDz\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0xa48349cf2fcd27ce3aafcffeba25647d289e17653dc1a4e643c3de0b47e5c75f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4dee6d2061cc68e3bc52acfa0d35c973785e49170f49d2e09efd50ead85e2a19\",\"dweb:/ipfs/QmX6tpGgXTnVGt1CdD796N5kn8YrZWFX1FcRLqtBBhB5qk\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa\",\"dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9\"]},\"contracts/src/interfaces/IHyperdriveFactory.sol\":{\"keccak256\":\"0x5f7850059953850a99bba38ebd44d8c6346cd151e2d7f7af250a06edec603e9f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://01c6772ed3e05ac9148c2b1cba8efb582d90fc8cd770fc14e80a2807bee93cc6\",\"dweb:/ipfs/QmThmQJSqs7qwKDyVa2NniN7sqT8Ez6zyLGdTMWr3Hfaew\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "DeployerCoordinatorAlreadyAdded";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "DeployerCoordinatorIndexMismatch";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "DeployerCoordinatorNotAdded";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "EndIndexTooLarge";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidCheckpointDuration";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidCheckpointDurationResolution";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidDeployConfig";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidDeployerCoordinator";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidFees";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidFixedAPR";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidIndexes";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidMaxCheckpointDuration";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidMaxFees";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidMaxFixedAPR";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidMaxPositionDuration";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidMaxTimeStretchAPR";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidMinCheckpointDuration";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidMinFees";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidMinFixedAPR";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidMinPositionDuration";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidMinTimeStretchAPR";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidPositionDuration";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidTimeStretchAPR";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "ReceiveLocked";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "TransferFailed";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "Unauthorized";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "newCheckpointDurationResolution";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "CheckpointDurationResolutionUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address[]";
                    readonly name: "newDefaultPausers";
                    readonly type: "address[]";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "DefaultPausersUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "deployerCoordinator";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "address";
                    readonly name: "hyperdrive";
                    readonly type: "address";
                    readonly indexed: false;
                }, {
                    readonly internalType: "struct IHyperdrive.PoolDeployConfig";
                    readonly name: "config";
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
                    readonly indexed: false;
                }, {
                    readonly internalType: "bytes";
                    readonly name: "extraData";
                    readonly type: "bytes";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "Deployed";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "deployerCoordinator";
                    readonly type: "address";
                    readonly indexed: true;
                }];
                readonly type: "event";
                readonly name: "DeployerCoordinatorAdded";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "deployerCoordinator";
                    readonly type: "address";
                    readonly indexed: true;
                }];
                readonly type: "event";
                readonly name: "DeployerCoordinatorRemoved";
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
                    readonly name: "governance";
                    readonly type: "address";
                    readonly indexed: true;
                }];
                readonly type: "event";
                readonly name: "GovernanceUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "hyperdriveGovernance";
                    readonly type: "address";
                    readonly indexed: true;
                }];
                readonly type: "event";
                readonly name: "HyperdriveGovernanceUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "newLinkerCodeHash";
                    readonly type: "bytes32";
                    readonly indexed: true;
                }];
                readonly type: "event";
                readonly name: "LinkerCodeHashUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "newLinkerFactory";
                    readonly type: "address";
                    readonly indexed: true;
                }];
                readonly type: "event";
                readonly name: "LinkerFactoryUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "newMaxCheckpointDuration";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "MaxCheckpointDurationUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "struct IHyperdrive.Fees";
                    readonly name: "newMaxFees";
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
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "MaxFeesUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "newMaxFixedAPR";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "MaxFixedAPRUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "newMaxPositionDuration";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "MaxPositionDurationUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "newMaxTimeStretchAPR";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "MaxTimeStretchAPRUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "newMinCheckpointDuration";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "MinCheckpointDurationUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "struct IHyperdrive.Fees";
                    readonly name: "newMinFees";
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
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "MinFeesUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "newMinFixedAPR";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "MinFixedAPRUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "newMinPositionDuration";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "MinPositionDurationUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "newMinTimeStretchAPR";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "MinTimeStretchAPRUpdated";
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
                readonly "contracts/src/interfaces/IHyperdriveFactory.sol": "IHyperdriveFactory";
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
                readonly keccak256: "0x8b726cbf87e5dbec80207d47b64bb20e35a9fb42667b9d1612a87ad8b2d361b5";
                readonly urls: readonly ["bzz-raw://b2015112addc7b4ba33c0626a14c963294164906afce52296f3dc209737a7339", "dweb:/ipfs/QmZYR6qwGspufCtiofdvYbaHhxSrguNnP52rd3y3zXWiDz"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveCore.sol": {
                readonly keccak256: "0xa48349cf2fcd27ce3aafcffeba25647d289e17653dc1a4e643c3de0b47e5c75f";
                readonly urls: readonly ["bzz-raw://4dee6d2061cc68e3bc52acfa0d35c973785e49170f49d2e09efd50ead85e2a19", "dweb:/ipfs/QmX6tpGgXTnVGt1CdD796N5kn8YrZWFX1FcRLqtBBhB5qk"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveEvents.sol": {
                readonly keccak256: "0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784";
                readonly urls: readonly ["bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa", "dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveFactory.sol": {
                readonly keccak256: "0x5f7850059953850a99bba38ebd44d8c6346cd151e2d7f7af250a06edec603e9f";
                readonly urls: readonly ["bzz-raw://01c6772ed3e05ac9148c2b1cba8efb582d90fc8cd770fc14e80a2807bee93cc6", "dweb:/ipfs/QmThmQJSqs7qwKDyVa2NniN7sqT8Ez6zyLGdTMWr3Hfaew"];
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
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/src/interfaces/IHyperdriveFactory.sol";
        readonly id: 11086;
        readonly exportedSymbols: {
            readonly IHyperdrive: readonly [10351];
            readonly IHyperdriveFactory: readonly [11085];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:8900:90";
        readonly nodes: readonly [{
            readonly id: 10889;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:90";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 10891;
            readonly nodeType: "ImportDirective";
            readonly src: "64:48:90";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdrive.sol";
            readonly file: "./IHyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 11086;
            readonly sourceUnit: 10352;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 10890;
                    readonly name: "IHyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 10351;
                    readonly src: "73:11:90";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 11085;
            readonly nodeType: "ContractDefinition";
            readonly src: "114:8824:90";
            readonly nodes: readonly [{
                readonly id: 10903;
                readonly nodeType: "EventDefinition";
                readonly src: "229:164:90";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 10892;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "169:55:90";
                    readonly text: "@notice Emitted when a Hyperdrive pool is deployed.";
                };
                readonly eventSelector: "d371ed88cc563fd25b2a95ce8bb8d0adbf9bb4d8725c94996d2cae1d0ddf2a72";
                readonly name: "Deployed";
                readonly nameLocation: "235:8:90";
                readonly parameters: {
                    readonly id: 10902;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10894;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "deployerCoordinator";
                        readonly nameLocation: "269:19:90";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10903;
                        readonly src: "253:35:90";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 10893;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "253:7:90";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 10896;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "hyperdrive";
                        readonly nameLocation: "306:10:90";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10903;
                        readonly src: "298:18:90";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 10895;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "298:7:90";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 10899;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "config";
                        readonly nameLocation: "355:6:90";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10903;
                        readonly src: "326:35:90";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                        };
                        readonly typeName: {
                            readonly id: 10898;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 10897;
                                readonly name: "IHyperdrive.PoolDeployConfig";
                                readonly nameLocations: readonly ["326:11:90", "338:16:90"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10108;
                                readonly src: "326:28:90";
                            };
                            readonly referencedDeclaration: 10108;
                            readonly src: "326:28:90";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 10901;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "extraData";
                        readonly nameLocation: "377:9:90";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10903;
                        readonly src: "371:15:90";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 10900;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "371:5:90";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "243:149:90";
                };
            }, {
                readonly id: 10908;
                readonly nodeType: "EventDefinition";
                readonly src: "461:68:90";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 10904;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "399:57:90";
                    readonly text: "@notice Emitted when a deployer coordinator is added.";
                };
                readonly eventSelector: "16ce88285cfd59829a5aa04370a5ec8090a18c14e7e7fb9d4b12a42291c098e3";
                readonly name: "DeployerCoordinatorAdded";
                readonly nameLocation: "467:24:90";
                readonly parameters: {
                    readonly id: 10907;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10906;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "deployerCoordinator";
                        readonly nameLocation: "508:19:90";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10908;
                        readonly src: "492:35:90";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 10905;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "492:7:90";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "491:37:90";
                };
            }, {
                readonly id: 10913;
                readonly nodeType: "EventDefinition";
                readonly src: "599:70:90";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 10909;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "535:59:90";
                    readonly text: "@notice Emitted when a deployer coordinator is removed.";
                };
                readonly eventSelector: "709b7450bfafda93efd91d29149870a794637ac9d696ca61625fd2f53548afe0";
                readonly name: "DeployerCoordinatorRemoved";
                readonly nameLocation: "605:26:90";
                readonly parameters: {
                    readonly id: 10912;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10911;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "deployerCoordinator";
                        readonly nameLocation: "648:19:90";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10913;
                        readonly src: "632:35:90";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 10910;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "632:7:90";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "631:37:90";
                };
            }, {
                readonly id: 10919;
                readonly nodeType: "EventDefinition";
                readonly src: "744:57:90";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 10914;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "675:64:90";
                    readonly text: "@notice Emitted when the list of default pausers is updated.";
                };
                readonly eventSelector: "2a85276cf604a3822e19b29a3e97aebfbc47a19025c2e8f6e80b3af774dcbc38";
                readonly name: "DefaultPausersUpdated";
                readonly nameLocation: "750:21:90";
                readonly parameters: {
                    readonly id: 10918;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10917;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "newDefaultPausers";
                        readonly nameLocation: "782:17:90";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10919;
                        readonly src: "772:27:90";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                            readonly typeString: "address[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 10915;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "772:7:90";
                                readonly stateMutability: "nonpayable";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly id: 10916;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "772:9:90";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_address_$dyn_storage_ptr";
                                readonly typeString: "address[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "771:29:90";
                };
            }, {
                readonly id: 10924;
                readonly nodeType: "EventDefinition";
                readonly src: "890:59:90";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 10920;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "807:78:90";
                    readonly text: "@notice Emitted when the fee collector used in new deployments is updated.";
                };
                readonly eventSelector: "e5693914d19c789bdee50a362998c0bc8d035a835f9871da5d51152f0582c34f";
                readonly name: "FeeCollectorUpdated";
                readonly nameLocation: "896:19:90";
                readonly parameters: {
                    readonly id: 10923;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10922;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "newFeeCollector";
                        readonly nameLocation: "932:15:90";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10924;
                        readonly src: "916:31:90";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 10921;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "916:7:90";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "915:33:90";
                };
            }, {
                readonly id: 10929;
                readonly nodeType: "EventDefinition";
                readonly src: "1056:63:90";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 10925;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "955:96:90";
                    readonly text: "@notice Emitted when the sweep collector used in new deployments is\n         updated.";
                };
                readonly eventSelector: "c049058b1df2dd8902739ceb78992df12fa8369c06c450b3c6787137b452fdd2";
                readonly name: "SweepCollectorUpdated";
                readonly nameLocation: "1062:21:90";
                readonly parameters: {
                    readonly id: 10928;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10927;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "newSweepCollector";
                        readonly nameLocation: "1100:17:90";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10929;
                        readonly src: "1084:33:90";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 10926;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1084:7:90";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1083:35:90";
                };
            }, {
                readonly id: 10934;
                readonly nodeType: "EventDefinition";
                readonly src: "1191:52:90";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 10930;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1125:61:90";
                    readonly text: "@notice Emitted when the factory's governance is updated.";
                };
                readonly eventSelector: "9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab";
                readonly name: "GovernanceUpdated";
                readonly nameLocation: "1197:17:90";
                readonly parameters: {
                    readonly id: 10933;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10932;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "governance";
                        readonly nameLocation: "1231:10:90";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10934;
                        readonly src: "1215:26:90";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 10931;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1215:7:90";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1214:28:90";
                };
            }, {
                readonly id: 10939;
                readonly nodeType: "EventDefinition";
                readonly src: "1353:72:90";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 10935;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1249:99:90";
                    readonly text: "@notice Emitted when the governance address used in new deployments is\n         updated.";
                };
                readonly eventSelector: "f3e07b4bb4394f2ff320bd1dd151551dff304d5e948b401d8558b228482c97d8";
                readonly name: "HyperdriveGovernanceUpdated";
                readonly nameLocation: "1359:27:90";
                readonly parameters: {
                    readonly id: 10938;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10937;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "hyperdriveGovernance";
                        readonly nameLocation: "1403:20:90";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10939;
                        readonly src: "1387:36:90";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 10936;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1387:7:90";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1386:38:90";
                };
            }, {
                readonly id: 10944;
                readonly nodeType: "EventDefinition";
                readonly src: "1531:61:90";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 10940;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1431:95:90";
                    readonly text: "@notice Emitted when the linker factory used in new deployments is\n         updated.";
                };
                readonly eventSelector: "03aa5b0fb65014eea89fda04a7bc11742014881f3c078f2c75b7226ce10d9418";
                readonly name: "LinkerFactoryUpdated";
                readonly nameLocation: "1537:20:90";
                readonly parameters: {
                    readonly id: 10943;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10942;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "newLinkerFactory";
                        readonly nameLocation: "1574:16:90";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10944;
                        readonly src: "1558:32:90";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 10941;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1558:7:90";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1557:34:90";
                };
            }, {
                readonly id: 10949;
                readonly nodeType: "EventDefinition";
                readonly src: "1700:63:90";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 10945;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1598:97:90";
                    readonly text: "@notice Emitted when the linker code hash used in new deployments is\n         updated.";
                };
                readonly eventSelector: "395a61259037298d1c4cd4bf177b64ad5995d38a9394573fcd9060d649314ad0";
                readonly name: "LinkerCodeHashUpdated";
                readonly nameLocation: "1706:21:90";
                readonly parameters: {
                    readonly id: 10948;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10947;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "newLinkerCodeHash";
                        readonly nameLocation: "1744:17:90";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10949;
                        readonly src: "1728:33:90";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 10946;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1728:7:90";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1727:35:90";
                };
            }, {
                readonly id: 10954;
                readonly nodeType: "EventDefinition";
                readonly src: "1845:97:90";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 10950;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1769:71:90";
                    readonly text: "@notice Emitted when the checkpoint duration resolution is updated.";
                };
                readonly eventSelector: "04ed835b488b4fcf0a212a46ed67cbbffc2fc81b5cb6a12c546572cbf7b7e06a";
                readonly name: "CheckpointDurationResolutionUpdated";
                readonly nameLocation: "1851:35:90";
                readonly parameters: {
                    readonly id: 10953;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10952;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "newCheckpointDurationResolution";
                        readonly nameLocation: "1904:31:90";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10954;
                        readonly src: "1896:39:90";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10951;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1896:7:90";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1886:55:90";
                };
            }, {
                readonly id: 10959;
                readonly nodeType: "EventDefinition";
                readonly src: "2021:69:90";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 10955;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1948:68:90";
                    readonly text: "@notice Emitted when the maximum checkpoint duration is updated.";
                };
                readonly eventSelector: "31407ddd1722f500b8aa2c18e112398626dd7c2869a5f80731ec30b244d9b5f2";
                readonly name: "MaxCheckpointDurationUpdated";
                readonly nameLocation: "2027:28:90";
                readonly parameters: {
                    readonly id: 10958;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10957;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "newMaxCheckpointDuration";
                        readonly nameLocation: "2064:24:90";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10959;
                        readonly src: "2056:32:90";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10956;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2056:7:90";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2055:34:90";
                };
            }, {
                readonly id: 10964;
                readonly nodeType: "EventDefinition";
                readonly src: "2169:69:90";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 10960;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2096:68:90";
                    readonly text: "@notice Emitted when the minimum checkpoint duration is updated.";
                };
                readonly eventSelector: "6f8175cdbac1b4d238abba24a17d2554d7b9750bbeda6414e191c478384b7631";
                readonly name: "MinCheckpointDurationUpdated";
                readonly nameLocation: "2175:28:90";
                readonly parameters: {
                    readonly id: 10963;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10962;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "newMinCheckpointDuration";
                        readonly nameLocation: "2212:24:90";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10964;
                        readonly src: "2204:32:90";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10961;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2204:7:90";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2203:34:90";
                };
            }, {
                readonly id: 10969;
                readonly nodeType: "EventDefinition";
                readonly src: "2315:65:90";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 10965;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2244:66:90";
                    readonly text: "@notice Emitted when the maximum position duration is updated.";
                };
                readonly eventSelector: "866fe9485f9983afceaa1385307b6eb0fd3df5a250ae2b0bf76dc9ddd316926b";
                readonly name: "MaxPositionDurationUpdated";
                readonly nameLocation: "2321:26:90";
                readonly parameters: {
                    readonly id: 10968;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10967;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "newMaxPositionDuration";
                        readonly nameLocation: "2356:22:90";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10969;
                        readonly src: "2348:30:90";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10966;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2348:7:90";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2347:32:90";
                };
            }, {
                readonly id: 10974;
                readonly nodeType: "EventDefinition";
                readonly src: "2457:65:90";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 10970;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2386:66:90";
                    readonly text: "@notice Emitted when the minimum position duration is updated.";
                };
                readonly eventSelector: "e9ef3e93dff799d4db8a12ff79e0918a5a78d75b10527864f4b1c920f6f4f178";
                readonly name: "MinPositionDurationUpdated";
                readonly nameLocation: "2463:26:90";
                readonly parameters: {
                    readonly id: 10973;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10972;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "newMinPositionDuration";
                        readonly nameLocation: "2498:22:90";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10974;
                        readonly src: "2490:30:90";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10971;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2490:7:90";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2489:32:90";
                };
            }, {
                readonly id: 10979;
                readonly nodeType: "EventDefinition";
                readonly src: "2591:49:90";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 10975;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2528:58:90";
                    readonly text: "@notice Emitted when the maximum fixed APR is updated.";
                };
                readonly eventSelector: "4fa35c11ce9a45ae882c154ecb53ab5cac52a74a5b9b0373be36deb30c782978";
                readonly name: "MaxFixedAPRUpdated";
                readonly nameLocation: "2597:18:90";
                readonly parameters: {
                    readonly id: 10978;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10977;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "newMaxFixedAPR";
                        readonly nameLocation: "2624:14:90";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10979;
                        readonly src: "2616:22:90";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10976;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2616:7:90";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2615:24:90";
                };
            }, {
                readonly id: 10984;
                readonly nodeType: "EventDefinition";
                readonly src: "2709:49:90";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 10980;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2646:58:90";
                    readonly text: "@notice Emitted when the minimum fixed APR is updated.";
                };
                readonly eventSelector: "aab0ee9100629c405a4d75336e1640cc81e0608fb0d7f17389c06ee8d4f02191";
                readonly name: "MinFixedAPRUpdated";
                readonly nameLocation: "2715:18:90";
                readonly parameters: {
                    readonly id: 10983;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10982;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "newMinFixedAPR";
                        readonly nameLocation: "2742:14:90";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10984;
                        readonly src: "2734:22:90";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10981;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2734:7:90";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2733:24:90";
                };
            }, {
                readonly id: 10989;
                readonly nodeType: "EventDefinition";
                readonly src: "2834:61:90";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 10985;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2764:65:90";
                    readonly text: "@notice Emitted when the maximum time stretch APR is updated.";
                };
                readonly eventSelector: "a9e7961bb3342715dbecc208087a6a9df8986d524b3a0a829fd90f5a2f5ba53e";
                readonly name: "MaxTimeStretchAPRUpdated";
                readonly nameLocation: "2840:24:90";
                readonly parameters: {
                    readonly id: 10988;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10987;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "newMaxTimeStretchAPR";
                        readonly nameLocation: "2873:20:90";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10989;
                        readonly src: "2865:28:90";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10986;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2865:7:90";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2864:30:90";
                };
            }, {
                readonly id: 10994;
                readonly nodeType: "EventDefinition";
                readonly src: "2971:61:90";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 10990;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2901:65:90";
                    readonly text: "@notice Emitted when the minimum time stretch APR is updated.";
                };
                readonly eventSelector: "490eb2a91746aa933c9ffe2f7939aa06498f3259139f8805f008b12c8c697a46";
                readonly name: "MinTimeStretchAPRUpdated";
                readonly nameLocation: "2977:24:90";
                readonly parameters: {
                    readonly id: 10993;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10992;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "newMinTimeStretchAPR";
                        readonly nameLocation: "3010:20:90";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10994;
                        readonly src: "3002:28:90";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10991;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3002:7:90";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3001:30:90";
                };
            }, {
                readonly id: 11000;
                readonly nodeType: "EventDefinition";
                readonly src: "3097:50:90";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 10995;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3038:54:90";
                    readonly text: "@notice Emitted when the maximum fees are updated.";
                };
                readonly eventSelector: "8c6093c7e65dd862e88162770c4e156e8a0da57d25d961e0fb6f28cfb7ff89a7";
                readonly name: "MaxFeesUpdated";
                readonly nameLocation: "3103:14:90";
                readonly parameters: {
                    readonly id: 10999;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10998;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "newMaxFees";
                        readonly nameLocation: "3135:10:90";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11000;
                        readonly src: "3118:27:90";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Fees_$10065_memory_ptr";
                            readonly typeString: "struct IHyperdrive.Fees";
                        };
                        readonly typeName: {
                            readonly id: 10997;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 10996;
                                readonly name: "IHyperdrive.Fees";
                                readonly nameLocations: readonly ["3118:11:90", "3130:4:90"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10065;
                                readonly src: "3118:16:90";
                            };
                            readonly referencedDeclaration: 10065;
                            readonly src: "3118:16:90";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Fees_$10065_storage_ptr";
                                readonly typeString: "struct IHyperdrive.Fees";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3117:29:90";
                };
            }, {
                readonly id: 11006;
                readonly nodeType: "EventDefinition";
                readonly src: "3212:50:90";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 11001;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3153:54:90";
                    readonly text: "@notice Emitted when the minimum fees are updated.";
                };
                readonly eventSelector: "e1c45f8aeb543f30b37cc2fccfbac0f32cc8f234284df921d71cff04e51ef421";
                readonly name: "MinFeesUpdated";
                readonly nameLocation: "3218:14:90";
                readonly parameters: {
                    readonly id: 11005;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11004;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "newMinFees";
                        readonly nameLocation: "3250:10:90";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11006;
                        readonly src: "3233:27:90";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Fees_$10065_memory_ptr";
                            readonly typeString: "struct IHyperdrive.Fees";
                        };
                        readonly typeName: {
                            readonly id: 11003;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 11002;
                                readonly name: "IHyperdrive.Fees";
                                readonly nameLocations: readonly ["3233:11:90", "3245:4:90"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10065;
                                readonly src: "3233:16:90";
                            };
                            readonly referencedDeclaration: 10065;
                            readonly src: "3233:16:90";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Fees_$10065_storage_ptr";
                                readonly typeString: "struct IHyperdrive.Fees";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3232:29:90";
                };
            }, {
                readonly id: 11009;
                readonly nodeType: "ErrorDefinition";
                readonly src: "3411:40:90";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11007;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3288:118:90";
                    readonly text: "@notice Thrown when governance attempts to add a deployer coordinator\n         that has already been added.";
                };
                readonly errorSelector: "bd34634f";
                readonly name: "DeployerCoordinatorAlreadyAdded";
                readonly nameLocation: "3417:31:90";
                readonly parameters: {
                    readonly id: 11008;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "3448:2:90";
                };
            }, {
                readonly id: 11012;
                readonly nodeType: "ErrorDefinition";
                readonly src: "3576:36:90";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11010;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3457:114:90";
                    readonly text: "@notice Thrown when governance attempts to remove a deployer coordinator\n         that was never added.";
                };
                readonly errorSelector: "4bf121ab";
                readonly name: "DeployerCoordinatorNotAdded";
                readonly nameLocation: "3582:27:90";
                readonly parameters: {
                    readonly id: 11011;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "3609:2:90";
                };
            }, {
                readonly id: 11015;
                readonly nodeType: "ErrorDefinition";
                readonly src: "3803:41:90";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11013;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3618:180:90";
                    readonly text: "@notice Thrown when governance attempts to remove a deployer coordinator\n         but specifies the wrong index within the list of deployer\n         coordinators.";
                };
                readonly errorSelector: "3c9c032c";
                readonly name: "DeployerCoordinatorIndexMismatch";
                readonly nameLocation: "3809:32:90";
                readonly parameters: {
                    readonly id: 11014;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "3841:2:90";
                };
            }, {
                readonly id: 11018;
                readonly nodeType: "ErrorDefinition";
                readonly src: "3958:25:90";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11016;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3850:103:90";
                    readonly text: "@notice Thrown when the ending index of a range is larger than the\n         underlying list.";
                };
                readonly errorSelector: "e0f7becb";
                readonly name: "EndIndexTooLarge";
                readonly nameLocation: "3964:16:90";
                readonly parameters: {
                    readonly id: 11017;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "3980:2:90";
                };
            }, {
                readonly id: 11021;
                readonly nodeType: "ErrorDefinition";
                readonly src: "4281:34:90";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11019;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3989:287:90";
                    readonly text: "@notice Thrown when the checkpoint duration supplied to `deployTarget`\n         or `deployAndInitialize` isn't a multiple of the checkpoint\n         duration resolution or isn't within the range specified by the\n         minimum and maximum checkpoint durations.";
                };
                readonly errorSelector: "5428734d";
                readonly name: "InvalidCheckpointDuration";
                readonly nameLocation: "4287:25:90";
                readonly parameters: {
                    readonly id: 11020;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "4312:2:90";
                };
            }, {
                readonly id: 11024;
                readonly nodeType: "ErrorDefinition";
                readonly src: "4616:44:90";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11022;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4321:290:90";
                    readonly text: "@notice Thrown when governance attempts to set the checkpoint duration\n         resolution to a value that doesn't evenly divide the minimum\n         checkpoint duration, maximum checkpoint duration, minimum\n         position duration, or maximum position duration.";
                };
                readonly errorSelector: "8dbae0a8";
                readonly name: "InvalidCheckpointDurationResolution";
                readonly nameLocation: "4622:35:90";
                readonly parameters: {
                    readonly id: 11023;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "4657:2:90";
                };
            }, {
                readonly id: 11027;
                readonly nodeType: "ErrorDefinition";
                readonly src: "4837:28:90";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11025;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4666:166:90";
                    readonly text: "@notice Thrown when the deploy configuration passed to\n         `deployAndInitialize` has fields set that will be overridden by\n         governance.";
                };
                readonly errorSelector: "e8c02dd7";
                readonly name: "InvalidDeployConfig";
                readonly nameLocation: "4843:19:90";
                readonly parameters: {
                    readonly id: 11026;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "4862:2:90";
                };
            }, {
                readonly id: 11030;
                readonly nodeType: "ErrorDefinition";
                readonly src: "5006:35:90";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11028;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4871:130:90";
                    readonly text: "@notice Thrown when the deployer coordinator passed to\n         `deployAndInitialize` hasn't been added to the factory.";
                };
                readonly errorSelector: "6e623f0f";
                readonly name: "InvalidDeployerCoordinator";
                readonly nameLocation: "5012:26:90";
                readonly parameters: {
                    readonly id: 11029;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "5038:2:90";
                };
            }, {
                readonly id: 11033;
                readonly nodeType: "ErrorDefinition";
                readonly src: "5225:20:90";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11031;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "5047:173:90";
                    readonly text: "@notice Thrown when the fee parameters passed to `deployAndInitialize`\n         aren't within the range specified by the minimum and maximum\n         fees.";
                };
                readonly errorSelector: "2d8768f9";
                readonly name: "InvalidFees";
                readonly nameLocation: "5231:11:90";
                readonly parameters: {
                    readonly id: 11032;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "5242:2:90";
                };
            }, {
                readonly id: 11036;
                readonly nodeType: "ErrorDefinition";
                readonly src: "5358:23:90";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11034;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "5251:102:90";
                    readonly text: "@notice Thrown when the starting index of a range is larger than the\n         ending index.";
                };
                readonly errorSelector: "764e6b56";
                readonly name: "InvalidIndexes";
                readonly nameLocation: "5364:14:90";
                readonly parameters: {
                    readonly id: 11035;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "5378:2:90";
                };
            }, {
                readonly id: 11039;
                readonly nodeType: "ErrorDefinition";
                readonly src: "5573:23:90";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11037;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "5387:181:90";
                    readonly text: "@notice Thrown when governance attempts to set one of the maximum fee\n         parameters to a smaller value than the corresponding minimum fee\n         parameter.";
                };
                readonly errorSelector: "2c20e3f6";
                readonly name: "InvalidMaxFees";
                readonly nameLocation: "5579:14:90";
                readonly parameters: {
                    readonly id: 11038;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "5593:2:90";
                };
            }, {
                readonly id: 11042;
                readonly nodeType: "ErrorDefinition";
                readonly src: "5787:23:90";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11040;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "5602:180:90";
                    readonly text: "@notice Thrown when governance attempts to set one of the minimum fee\n         parameters to a larger value than the corresponding maximum fee\n         parameter.";
                };
                readonly errorSelector: "15b05a8f";
                readonly name: "InvalidMinFees";
                readonly nameLocation: "5793:14:90";
                readonly parameters: {
                    readonly id: 11041;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "5807:2:90";
                };
            }, {
                readonly id: 11045;
                readonly nodeType: "ErrorDefinition";
                readonly src: "6074:37:90";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11043;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "5816:253:90";
                    readonly text: "@notice Thrown when governance attempts to set the maximum checkpoint\n         duration to a value that isn't a multiple of the checkpoint\n         duration resolution or is smaller than the minimum checkpoint\n         duration.";
                };
                readonly errorSelector: "f9c0959d";
                readonly name: "InvalidMaxCheckpointDuration";
                readonly nameLocation: "6080:28:90";
                readonly parameters: {
                    readonly id: 11044;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "6108:2:90";
                };
            }, {
                readonly id: 11048;
                readonly nodeType: "ErrorDefinition";
                readonly src: "6374:37:90";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11046;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "6117:252:90";
                    readonly text: "@notice Thrown when governance attempts to set the minimum checkpoint\n         duration to a value that isn't a multiple of the checkpoint\n         duration resolution or is larger than the maximum checkpoint\n         duration.";
                };
                readonly errorSelector: "0433acc6";
                readonly name: "InvalidMinCheckpointDuration";
                readonly nameLocation: "6380:28:90";
                readonly parameters: {
                    readonly id: 11047;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "6408:2:90";
                };
            }, {
                readonly id: 11051;
                readonly nodeType: "ErrorDefinition";
                readonly src: "6671:35:90";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11049;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "6417:249:90";
                    readonly text: "@notice Thrown when governance attempts to set the maximum position\n         duration to a value that isn't a multiple of the checkpoint\n         duration resolution or is smaller than the minimum position\n         duration.";
                };
                readonly errorSelector: "cfb699cb";
                readonly name: "InvalidMaxPositionDuration";
                readonly nameLocation: "6677:26:90";
                readonly parameters: {
                    readonly id: 11050;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "6703:2:90";
                };
            }, {
                readonly id: 11054;
                readonly nodeType: "ErrorDefinition";
                readonly src: "6965:35:90";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11052;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "6712:248:90";
                    readonly text: "@notice Thrown when governance attempts to set the minimum position\n         duration to a value that isn't a multiple of the checkpoint\n         duration resolution or is larger than the maximum position\n         duration.";
                };
                readonly errorSelector: "600f5a02";
                readonly name: "InvalidMinPositionDuration";
                readonly nameLocation: "6971:26:90";
                readonly parameters: {
                    readonly id: 11053;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "6997:2:90";
                };
            }, {
                readonly id: 11057;
                readonly nodeType: "ErrorDefinition";
                readonly src: "7207:32:90";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11055;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "7006:196:90";
                    readonly text: "@notice Thrown when the position duration passed to `deployAndInitialize`\n         doesn't fall within the range specified by the minimum and\n         maximum position durations.";
                };
                readonly errorSelector: "4a7fff9e";
                readonly name: "InvalidPositionDuration";
                readonly nameLocation: "7213:23:90";
                readonly parameters: {
                    readonly id: 11056;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "7236:2:90";
                };
            }, {
                readonly id: 11060;
                readonly nodeType: "ErrorDefinition";
                readonly src: "7393:27:90";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11058;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "7245:143:90";
                    readonly text: "@notice Thrown when governance attempts to set the maximum fixed APR to\n         a value that is smaller than the minimum fixed APR.";
                };
                readonly errorSelector: "673edec0";
                readonly name: "InvalidMaxFixedAPR";
                readonly nameLocation: "7399:18:90";
                readonly parameters: {
                    readonly id: 11059;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "7417:2:90";
                };
            }, {
                readonly id: 11063;
                readonly nodeType: "ErrorDefinition";
                readonly src: "7573:27:90";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11061;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "7426:142:90";
                    readonly text: "@notice Thrown when governance attempts to set the minimum fixed APR to\n         a value that is larger than the maximum fixed APR.";
                };
                readonly errorSelector: "1670f797";
                readonly name: "InvalidMinFixedAPR";
                readonly nameLocation: "7579:18:90";
                readonly parameters: {
                    readonly id: 11062;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "7597:2:90";
                };
            }, {
                readonly id: 11066;
                readonly nodeType: "ErrorDefinition";
                readonly src: "7784:24:90";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11064;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "7606:173:90";
                    readonly text: "@notice Thrown when the fixed APR passed to `deployAndInitialize` isn't\n         within the range specified by the minimum and maximum fixed\n         APRs.";
                };
                readonly errorSelector: "30554de1";
                readonly name: "InvalidFixedAPR";
                readonly nameLocation: "7790:15:90";
                readonly parameters: {
                    readonly id: 11065;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "7805:2:90";
                };
            }, {
                readonly id: 11069;
                readonly nodeType: "ErrorDefinition";
                readonly src: "7992:33:90";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11067;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "7814:173:90";
                    readonly text: "@notice Thrown when governance attempts to set the maximum time stretch\n         APR to a value that is smaller than the minimum time stretch\n         APR.";
                };
                readonly errorSelector: "a35539d0";
                readonly name: "InvalidMaxTimeStretchAPR";
                readonly nameLocation: "7998:24:90";
                readonly parameters: {
                    readonly id: 11068;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "8022:2:90";
                };
            }, {
                readonly id: 11072;
                readonly nodeType: "ErrorDefinition";
                readonly src: "8208:33:90";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11070;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "8031:172:90";
                    readonly text: "@notice Thrown when governance attempts to set the minimum time stretch\n         APR to a value that is larger than the maximum time stretch\n         APR.";
                };
                readonly errorSelector: "5a8f6557";
                readonly name: "InvalidMinTimeStretchAPR";
                readonly nameLocation: "8214:24:90";
                readonly parameters: {
                    readonly id: 11071;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "8238:2:90";
                };
            }, {
                readonly id: 11075;
                readonly nodeType: "ErrorDefinition";
                readonly src: "8537:30:90";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11073;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "8247:285:90";
                    readonly text: "@notice Thrown when a time stretch APR is passed to `deployAndInitialize`\n         that isn't within the range specified by the minimum and maximum\n         time stretch APRs or doesn't satisfy the lower and upper safe\n         bounds implied by the fixed APR.";
                };
                readonly errorSelector: "83ebdfb7";
                readonly name: "InvalidTimeStretchAPR";
                readonly nameLocation: "8543:21:90";
                readonly parameters: {
                    readonly id: 11074;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "8564:2:90";
                };
            }, {
                readonly id: 11078;
                readonly nodeType: "ErrorDefinition";
                readonly src: "8672:22:90";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11076;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "8573:94:90";
                    readonly text: "@notice Thrown when ether is sent to the factory when `receive` is\n         locked.";
                };
                readonly errorSelector: "5563ada8";
                readonly name: "ReceiveLocked";
                readonly nameLocation: "8678:13:90";
                readonly parameters: {
                    readonly id: 11077;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "8691:2:90";
                };
            }, {
                readonly id: 11081;
                readonly nodeType: "ErrorDefinition";
                readonly src: "8753:23:90";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11079;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "8700:48:90";
                    readonly text: "@notice Thrown when an ether transfer fails.";
                };
                readonly errorSelector: "90b8ec18";
                readonly name: "TransferFailed";
                readonly nameLocation: "8759:14:90";
                readonly parameters: {
                    readonly id: 11080;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "8773:2:90";
                };
            }, {
                readonly id: 11084;
                readonly nodeType: "ErrorDefinition";
                readonly src: "8915:21:90";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11082;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "8782:128:90";
                    readonly text: "@notice Thrown when an unauthorized caller attempts to update one of the\n         governance administered parameters.";
                };
                readonly errorSelector: "82b42900";
                readonly name: "Unauthorized";
                readonly nameLocation: "8921:12:90";
                readonly parameters: {
                    readonly id: 11083;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "8933:2:90";
                };
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "IHyperdriveFactory";
            readonly contractDependencies: readonly [];
            readonly contractKind: "interface";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [11085];
            readonly name: "IHyperdriveFactory";
            readonly nameLocation: "124:18:90";
            readonly scope: 11086;
            readonly usedErrors: readonly [11009, 11012, 11015, 11018, 11021, 11024, 11027, 11030, 11033, 11036, 11039, 11042, 11045, 11048, 11051, 11054, 11057, 11060, 11063, 11066, 11069, 11072, 11075, 11078, 11081, 11084];
            readonly usedEvents: readonly [10903, 10908, 10913, 10919, 10924, 10929, 10934, 10939, 10944, 10949, 10954, 10959, 10964, 10969, 10974, 10979, 10984, 10989, 10994, 11000, 11006];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 90;
};
//# sourceMappingURL=IHyperdriveFactory.d.ts.map