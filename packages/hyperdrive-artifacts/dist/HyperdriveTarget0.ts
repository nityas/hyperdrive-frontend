export const HyperdriveTarget0 = 
{
  "abi": [
    {
      "inputs": [],
      "name": "BatchInputLengthMismatch",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "FixedPointMath_InvalidExponent",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "FixedPointMath_InvalidInput",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidCheckpointDuration",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidERC20Bridge",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidFeeAmounts",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidFeeDestination",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidMinimumShareReserves",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidPositionDuration",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidTradeSize",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NegativePresentValue",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "RestrictedZeroAddress",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "ReturnData",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "Unauthorized",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "provider",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "lpAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "baseAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "sharePrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "lpSharePrice",
          "type": "uint256"
        }
      ],
      "name": "AddLiquidity",
      "type": "event"
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
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "trader",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "assetId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "maturityTime",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "baseAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "sharePrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "bondAmount",
          "type": "uint256"
        }
      ],
      "name": "CloseLong",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "trader",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "assetId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "maturityTime",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "baseAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "sharePrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "bondAmount",
          "type": "uint256"
        }
      ],
      "name": "CloseShort",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "collector",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "fees",
          "type": "uint256"
        }
      ],
      "name": "CollectGovernanceFee",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "checkpointTime",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "sharePrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "maturedShorts",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "maturedLongs",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "lpSharePrice",
          "type": "uint256"
        }
      ],
      "name": "CreateCheckpoint",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "newGovernance",
          "type": "address"
        }
      ],
      "name": "GovernanceUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "provider",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "lpAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "baseAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "sharePrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "apr",
          "type": "uint256"
        }
      ],
      "name": "Initialize",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "trader",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "assetId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "maturityTime",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "baseAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "sharePrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "bondAmount",
          "type": "uint256"
        }
      ],
      "name": "OpenLong",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "trader",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "assetId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "maturityTime",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "baseAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "sharePrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "bondAmount",
          "type": "uint256"
        }
      ],
      "name": "OpenShort",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "newPauser",
          "type": "address"
        }
      ],
      "name": "PauserUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "provider",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "withdrawalShareAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "baseAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "sharePrice",
          "type": "uint256"
        }
      ],
      "name": "RedeemWithdrawalShares",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "provider",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "lpAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "baseAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "sharePrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "withdrawalShareAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "lpSharePrice",
          "type": "uint256"
        }
      ],
      "name": "RemoveLiquidity",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
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
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "TransferSingle",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
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
      "name": "baseToken",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
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
          "internalType": "uint256[]",
          "name": "ids",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "values",
          "type": "uint256[]"
        }
      ],
      "name": "batchTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "asBase",
              "type": "bool"
            },
            {
              "internalType": "bytes",
              "name": "extraData",
              "type": "bytes"
            }
          ],
          "internalType": "struct IHyperdrive.Options",
          "name": "_options",
          "type": "tuple"
        }
      ],
      "name": "collectGovernanceFee",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "proceeds",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_checkpointId",
          "type": "uint256"
        }
      ],
      "name": "getCheckpoint",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint128",
              "name": "sharePrice",
              "type": "uint128"
            },
            {
              "internalType": "int128",
              "name": "exposure",
              "type": "int128"
            }
          ],
          "internalType": "struct IHyperdrive.Checkpoint",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getMarketState",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint128",
              "name": "shareReserves",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "bondReserves",
              "type": "uint128"
            },
            {
              "internalType": "int128",
              "name": "shareAdjustment",
              "type": "int128"
            },
            {
              "internalType": "uint128",
              "name": "longExposure",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "longsOutstanding",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "shortsOutstanding",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "longAverageMaturityTime",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "shortAverageMaturityTime",
              "type": "uint128"
            },
            {
              "internalType": "bool",
              "name": "isInitialized",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "isPaused",
              "type": "bool"
            }
          ],
          "internalType": "struct IHyperdrive.MarketState",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getPoolConfig",
      "outputs": [
        {
          "components": [
            {
              "internalType": "contract IERC20",
              "name": "baseToken",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "linkerFactory",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "linkerCodeHash",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "initialSharePrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "minimumShareReserves",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "minimumTransactionAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "precisionThreshold",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "positionDuration",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "checkpointDuration",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "timeStretch",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "governance",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "feeCollector",
              "type": "address"
            },
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "curve",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "flat",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "governance",
                  "type": "uint256"
                }
              ],
              "internalType": "struct IHyperdrive.Fees",
              "name": "fees",
              "type": "tuple"
            }
          ],
          "internalType": "struct IHyperdrive.PoolConfig",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getPoolInfo",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "shareReserves",
              "type": "uint256"
            },
            {
              "internalType": "int256",
              "name": "shareAdjustment",
              "type": "int256"
            },
            {
              "internalType": "uint256",
              "name": "bondReserves",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "lpTotalSupply",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "sharePrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "longsOutstanding",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "longAverageMaturityTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "shortsOutstanding",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "shortAverageMaturityTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "withdrawalSharesReadyToWithdraw",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "withdrawalSharesProceeds",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "lpSharePrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "longExposure",
              "type": "uint256"
            }
          ],
          "internalType": "struct IHyperdrive.PoolInfo",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getUncollectedGovernanceFees",
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
      "name": "getWithdrawPool",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint128",
              "name": "readyToWithdraw",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "proceeds",
              "type": "uint128"
            }
          ],
          "internalType": "struct IHyperdrive.WithdrawPool",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256[]",
          "name": "_slots",
          "type": "uint256[]"
        }
      ],
      "name": "load",
      "outputs": [
        {
          "internalType": "bytes32[]",
          "name": "",
          "type": "bytes32[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "pure",
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
          "internalType": "bool",
          "name": "_status",
          "type": "bool"
        }
      ],
      "name": "pause",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "perTokenApprovals",
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
          "internalType": "uint256",
          "name": "tokenID",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "setApproval",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenID",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "caller",
          "type": "address"
        }
      ],
      "name": "setApprovalBridge",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_who",
          "type": "address"
        }
      ],
      "name": "setGovernance",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "who",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "status",
          "type": "bool"
        }
      ],
      "name": "setPauser",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
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
          "internalType": "uint256",
          "name": "tokenID",
          "type": "uint256"
        },
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
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenID",
          "type": "uint256"
        },
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
        },
        {
          "internalType": "address",
          "name": "caller",
          "type": "address"
        }
      ],
      "name": "transferFromBridge",
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
    "balanceOf(uint256,address)": "3656eec2",
    "baseToken()": "c55dae63",
    "batchTransferFrom(address,address,uint256[],uint256[])": "17fad7fc",
    "collectGovernanceFee((address,bool,bytes))": "3e691db9",
    "getCheckpoint(uint256)": "20fc4881",
    "getMarketState()": "d8165743",
    "getPoolConfig()": "b0d96580",
    "getPoolInfo()": "60246c88",
    "getUncollectedGovernanceFees()": "c69e16ad",
    "getWithdrawPool()": "fba56008",
    "isApprovedForAll(address,address)": "e985e9c5",
    "load(uint256[])": "becee9c3",
    "name(uint256)": "00ad800c",
    "nonces(address)": "7ecebe00",
    "pause(bool)": "02329a29",
    "perTokenApprovals(uint256,address,address)": "21ff32a9",
    "setApproval(uint256,address,uint256)": "9cd241af",
    "setApprovalBridge(uint256,address,uint256,address)": "4ed2d6ac",
    "setApprovalForAll(address,bool)": "a22cb465",
    "setGovernance(address)": "ab033ea9",
    "setPauser(address,bool)": "7180c8ca",
    "symbol(uint256)": "4e41a1fb",
    "totalSupply(uint256)": "bd85b039",
    "transferFrom(uint256,address,address,uint256)": "1c0f12b6",
    "transferFromBridge(uint256,address,address,uint256,address)": "e44808bc"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"BatchInputLengthMismatch\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FixedPointMath_InvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FixedPointMath_InvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidERC20Bridge\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeAmounts\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeDestination\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTradeSize\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NegativePresentValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"RestrictedZeroAddress\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"ReturnData\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"baseToken\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"batchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"collectGovernanceFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"proceeds\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointId\",\"type\":\"uint256\"}],\"name\":\"getCheckpoint\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"sharePrice\",\"type\":\"uint128\"},{\"internalType\":\"int128\",\"name\":\"exposure\",\"type\":\"int128\"}],\"internalType\":\"struct IHyperdrive.Checkpoint\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getMarketState\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"shareReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"bondReserves\",\"type\":\"uint128\"},{\"internalType\":\"int128\",\"name\":\"shareAdjustment\",\"type\":\"int128\"},{\"internalType\":\"uint128\",\"name\":\"longExposure\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"shortsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"bool\",\"name\":\"isInitialized\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"internalType\":\"struct IHyperdrive.MarketState\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPoolConfig\",\"outputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"precisionThreshold\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governance\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPoolInfo\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesReadyToWithdraw\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longExposure\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.PoolInfo\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getUncollectedGovernanceFees\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getWithdrawPool\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"readyToWithdraw\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"proceeds\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.WithdrawPool\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256[]\",\"name\":\"_slots\",\"type\":\"uint256[]\"}],\"name\":\"load\",\"outputs\":[{\"internalType\":\"bytes32[]\",\"name\":\"\",\"type\":\"bytes32[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"_status\",\"type\":\"bool\"}],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"perTokenApprovals\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"setApproval\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"setApprovalBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_who\",\"type\":\"address\"}],\"name\":\"setGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"who\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"setPauser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"transferFromBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"kind\":\"dev\",\"methods\":{\"balanceOf(uint256,address)\":{\"params\":{\"account\":\"The account.\",\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The balance.\"}},\"baseToken()\":{\"returns\":{\"_0\":\"The base token.\"}},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"params\":{\"from\":\"the source account.\",\"ids\":\"The array of token ids of the asset to transfer.\",\"to\":\"the destination account.\",\"values\":\"The amount of each token to transfer.\"}},\"collectGovernanceFee((address,bool,bytes))\":{\"params\":{\"_options\":\"The options that configure how the fees are settled.\"},\"returns\":{\"proceeds\":\"The amount of base collected.\"}},\"constructor\":{\"params\":{\"_config\":\"The configuration of the Hyperdrive pool.\"}},\"getCheckpoint(uint256)\":{\"params\":{\"_checkpointId\":\"The checkpoint ID.\"},\"returns\":{\"_0\":\"The checkpoint.\"}},\"getMarketState()\":{\"returns\":{\"_0\":\"The market state.\"}},\"getPoolConfig()\":{\"details\":\"These parameters are immutable, so this should only need to be      called once.\",\"returns\":{\"_0\":\"The PoolConfig struct.\"}},\"getPoolInfo()\":{\"returns\":{\"_0\":\"The PoolInfo struct.\"}},\"getUncollectedGovernanceFees()\":{\"returns\":{\"_0\":\"Governance fees denominated in shares yet to be collected.\"}},\"getWithdrawPool()\":{\"returns\":{\"_0\":\"Hyperdrive's withdrawal pool information.\"}},\"isApprovedForAll(address,address)\":{\"params\":{\"account\":\"The account.\",\"operator\":\"The operator.\"},\"returns\":{\"_0\":\"The approval status.\"}},\"load(uint256[])\":{\"params\":{\"_slots\":\"The storage slots the caller wants the data from.\"},\"returns\":{\"_0\":\"A raw array of loaded data.\"}},\"name(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The name.\"}},\"nonces(address)\":{\"params\":{\"account\":\"The account.\"},\"returns\":{\"_0\":\"The signature nonce.\"}},\"pause(bool)\":{\"params\":{\"_status\":\"True to pause all deposits and false to unpause them.\"}},\"perTokenApprovals(uint256,address,address)\":{\"params\":{\"account\":\"The account.\",\"spender\":\"The spender.\",\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The approval status.\"}},\"setApproval(uint256,address,uint256)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement [saving gas        on transfer].\",\"operator\":\"The address who will be able to use the tokens.\",\"tokenID\":\"The asset to approve the use of.\"}},\"setApprovalBridge(uint256,address,uint256,address)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement [saving gas        on transfer].\",\"caller\":\"The eth address which called the linking contract.\",\"operator\":\"The address who will be able to use the tokens.\",\"tokenID\":\"The asset to approve the use of.\"}},\"setApprovalForAll(address,bool)\":{\"params\":{\"approved\":\"True to approve, false to remove approval.\",\"operator\":\"The eth address which can access the caller's assets.\"}},\"setGovernance(address)\":{\"params\":{\"_who\":\"The new governance address.\"}},\"setPauser(address,bool)\":{\"params\":{\"status\":\"The new pauser status.\",\"who\":\"The address to change.\"}},\"symbol(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The symbol.\"}},\"totalSupply(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The total supply.\"}},\"transferFrom(uint256,address,address,uint256)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"from\":\"The address who's balance will be reduced.\",\"to\":\"The address who's balance will be increased.\",\"tokenID\":\"The token identifier.\"}},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"caller\":\"The msg.sender from the bridge.\",\"from\":\"The address who's balance will be reduced.\",\"to\":\"The address who's balance will be increased.\",\"tokenID\":\"The token identifier.\"}}},\"title\":\"HyperdriveTarget0\",\"version\":1},\"userdoc\":{\"errors\":{\"BatchInputLengthMismatch()\":[{\"notice\":\"###################### ### ERC20Forwarder ### ######################\"}],\"FixedPointMath_InvalidExponent()\":[{\"notice\":\"###################### ### FixedPointMath ### ######################\"}],\"InvalidTradeSize()\":[{\"notice\":\"###################### ### YieldSpaceMath ### ######################\"}],\"ReturnData(bytes)\":[{\"notice\":\"#################### ### DataProvider ### ####################\"}],\"Unauthorized()\":[{\"notice\":\"############### ### Factory ### ###############\"}]},\"kind\":\"user\",\"methods\":{\"balanceOf(uint256,address)\":{\"notice\":\"Gets an account's balance of a sub-token.\"},\"baseToken()\":{\"notice\":\"Gets the base token.\"},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"notice\":\"Transfers several assets from one account to another.\"},\"collectGovernanceFee((address,bool,bytes))\":{\"notice\":\"This function collects the governance fees accrued by the pool.\"},\"constructor\":{\"notice\":\"Instantiates target0.\"},\"getCheckpoint(uint256)\":{\"notice\":\"Gets a specified checkpoint.\"},\"getMarketState()\":{\"notice\":\"Gets the market state.\"},\"getPoolConfig()\":{\"notice\":\"Gets the pool's configuration parameters.\"},\"getPoolInfo()\":{\"notice\":\"Gets info about the pool's reserves and other state that is         important to evaluate potential trades.\"},\"getUncollectedGovernanceFees()\":{\"notice\":\"Gets info about the fees presently accrued by the pool.\"},\"getWithdrawPool()\":{\"notice\":\"Gets information about the withdrawal pool.\"},\"isApprovedForAll(address,address)\":{\"notice\":\"Gets the approval status of an operator for an account.\"},\"load(uint256[])\":{\"notice\":\"Allows plugin data libs to provide getters or other complex         logic instead of the main.\"},\"name(uint256)\":{\"notice\":\"Gets the name of a sub-token.\"},\"nonces(address)\":{\"notice\":\"Gets the permitForAll signature nonce for an account.\"},\"pause(bool)\":{\"notice\":\"Allows an authorized address to pause this contract.\"},\"perTokenApprovals(uint256,address,address)\":{\"notice\":\"Gets the approval status of an operator for an account.\"},\"setApproval(uint256,address,uint256)\":{\"notice\":\"Allows a user to set an approval for an individual asset with         specific amount.\"},\"setApprovalBridge(uint256,address,uint256,address)\":{\"notice\":\"Allows the compatibility linking contract to forward calls to         set asset approvals.\"},\"setApprovalForAll(address,bool)\":{\"notice\":\"Allows a user to approve an operator to use all of their assets.\"},\"setGovernance(address)\":{\"notice\":\"Allows governance to change governance.\"},\"setPauser(address,bool)\":{\"notice\":\"Allows governance to change the pauser status of an address.\"},\"symbol(uint256)\":{\"notice\":\"Gets the symbol of a sub-token.\"},\"totalSupply(uint256)\":{\"notice\":\"Gets the total supply of a sub-token.\"},\"transferFrom(uint256,address,address,uint256)\":{\"notice\":\"Transfers an amount of assets from the source to the destination.\"},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"notice\":\"Permissioned transfer for the bridge to access, only callable by         the ERC20 linking bridge.\"}},\"notice\":\"Hyperdrive's target 0 logic contract.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/external/HyperdriveTarget0.sol\":\"HyperdriveTarget0\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/src/external/HyperdriveTarget0.sol\":{\"keccak256\":\"0x791a42ebc20362f968036d7a109bf2bdd757ebb20391b9dd3c52be5c30e2d9a4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c9f134b44e151928670f17f17cb9bbc0b4f0ef16ba3cba5c0e3790f002c5af4\",\"dweb:/ipfs/QmT4nFLpDCCZm6SGVKBkFPHfiHPFrsiS2xn3g4WMjvyEKV\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfb57fe2ee4d8d1c6a8e2aa3b007da6f0e53d65388245b0b7d876234077ee95b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e4303c41b9752b51c6eaa9b16aa11e5bffb34fc80c5c8761302539cd5922ae36\",\"dweb:/ipfs/QmZjVYBikfgPDX47hmbGJpG6kvm3Gyt6nKkFbZH6r8U4cL\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x833d56790728bfab7d35507b8584dc7ce607b26512a382e887483f61d528f6c5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3dd009d6ff5a89d1173f7330916e81a31ffd139bf6848b3f4400673652554a70\",\"dweb:/ipfs/QmXkVovZSWqhRqrt8y9FFfHt1HWhnUuP9TMecQyd89yEQ3\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x84c73d8c4b67da41635f57fce2f30b8f04fc826ff6fb54c605de23d376f3403d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e6d636dff5c24916ae35a76695d741de2f14ee46876ea67c5393618bb7f9cf85\",\"dweb:/ipfs/QmUwxh8JeAqSFA8Z2qabVx3YWRSz7PJ9V2TQgnfctAgqPF\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993\",\"dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xcf3a4002275ea64e381f0a4aded3683e12960396ef79ba9dd153e2d1e395baad\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c9990491f7a5151fd696a45e6e5b0282a1dedf58521861dfb8c64db8cb60f5b6\",\"dweb:/ipfs/QmaywmqqQhz7DeYqZdoeykagr5h4ZhQRv6GasHqvdWqzSy\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xdb7f24663cff7307a468ef5e4c6f3e4d01ec0475157b3bbb3405890c3e9ab87d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7f631a9a395fba5b07c3d9308fccac18d5aa59d890efe23442ed2a4da9871ae8\",\"dweb:/ipfs/QmV2a4wiAPfWzSST3faYt58i2tqEyoqCLAJV8aNCdJyxVE\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0x476240ea4328bae9ab820b6f0f40afb11c74ee52d26bdbef69e4ece28dc10bdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://843f73cb21eaec4e26952fd6cbde5e6815e3a28c438df9e026e249200d25076f\",\"dweb:/ipfs/QmXzE7gsRKMaRGQfTDodA1RXxNxUuBj8RT7grTYjZUdbe6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x9b92d81f2f038fcd4bb5d069ab2b754efc153234c451d4ee4caa6d74aaca16b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8686fddc99564c6b6524ea68a6b7ff081a9988fc795fc13197bb59ddaa2041c6\",\"dweb:/ipfs/QmarJYJAgoH6Z4H1BmdPoRgqLubRu5S6NDXBNV2fDApPuW\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0xea9b7b3489ac95dd9c41ae7174c9f34a29f8ae14224ee5d2605434a8c8711784\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9076244df4f436e8a8921faadfe925f243ae9a37ac7a16cbce3dd5b4a66631a8\",\"dweb:/ipfs/QmeRunYGGcgUZjRHS3m1AarzzjgV9vtp5K9UeUjTaaCrfs\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x328a01b0720b9a6494a2d6be1113539d41da589a382525578d4241fc077e9646\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4b9d7b56fd8056ae9264da99f8e0764ef16f17dca179218cf9375cf3236ec9fc\",\"dweb:/ipfs/Qmf11fXRipobZfMWTTxaScrYz9tZFUsdVxH5eZ4aLVQQC8\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0xd846aec9e34732c384a70ae306e8015eeb4a85ba7a68861d3a741310efc9eb57\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://cdd512b5caa814e88813e3a8a03bfc5e460c78c81c4e403bc8e57300ae11a1d2\",\"dweb:/ipfs/QmUAMC52wZ6H86zUPQ7xPYVjAYjYQ97RiAfV1kn27ZYPsz\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x6779541f073ba5ce6e0656d10c7d9ef23734d2675b865b4d5310a023c30764ad\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5cc569f006ef38723c1cb893b4e08d22ca0a448dc559c8abd18b28bd6967fcb7\",\"dweb:/ipfs/QmdPfZGuM8g3qp4CPsuztZe1wcVrytWkbqHQDbsTVEKBdF\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0x45ba04560ca590427cc1ad2e98ec0122f9b6496ead2e3d4b3438339c982bd543\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ee1b36b7ab75044d12e8b91ead75c4377b9da1daa630ea7d1a0c413f963f916a\",\"dweb:/ipfs/QmPsoXubd1sfy7NNn7YWSrYTTrBEreuawVRFFjDrHQmKzZ\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0x6b85590aeffa0a73aabf0c17a958bdec064a4d59c2e3d7595a8cb2d86fb01277\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d89ad612f8624723adab39bd85311389fe95f685cf496e1a5d116bfafd6588eb\",\"dweb:/ipfs/QmPWVwrfo65BZofeWubpZsM93yzxMFjhPfoNYsaT31yn28\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0x0dc04dc0f6070d51c2c58587f1d0f0604594e6c5728bf37e46da3a5952a0e0f0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1529824590ac5cdb7d4ffb67449be6a44f3bef9db40646bfa13bb5979e1a2f2d\",\"dweb:/ipfs/QmbXKFyqUaL1vv6wn7avWn463Uf8JgJvVLN6v5rUdJbys7\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xda130fbf6651046517801d119593b7f81e7a2a824f82cb15b1852495fa7fb148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c10ab3e768804fc8eee91502f34dd1e1d2d2e7d90d8ec0a26fac40d83ed940db\",\"dweb:/ipfs/QmNMqyFM6xC49uRAMeY3MhoQ9yK2ZHdQLt3QxrsNK9Kfkw\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0xcf8493b00dd39c50754a63f66dc612f3cd466cbac8c7ea5ed0c5ea68aa99267a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1a1986d6bc80e465dde116a70d3a30027b3e75969117a9b3517c6866c2e5e73a\",\"dweb:/ipfs/QmSASHifHWyKBycGAm1pUs9dw26Uf6A61V9nkEQnFj9mya\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0xac200bd4172e6369dc6ad06bef96e3d4ce7df36a97e80ee8f1a033e622c99639\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0add90b8957805ae8e99581b76d81dec07bdf7586fdf2a05f31d2ce91f09439d\",\"dweb:/ipfs/QmRRBbguna6QmMUvANobcSfH6HM3DydFjNXSWZZr1VDKH8\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xccfb106f6bd8829c369c19d08ef4f8ffc8ebbf5c51a9e148141733ff9bbc49f3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d11ddba27aace6aefe451d75b4403ceb10f0a71cd61163e8f812728820107e62\",\"dweb:/ipfs/QmdSZJtY5LaJVnHYRwKAofo6oiihqpazC22Q1X9aL9uNbx\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5\",\"dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x42a910bd6ee869fc53f18f2991cbf75a667d663ed41b4a11e18b328546ede7db\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://77345fdb9b99d0b04fa7cf719857eae63362e20db6b99da35ac886a13bf3b56a\",\"dweb:/ipfs/QmXatm27fhzsApgrMq978mye2u8fk62D89pUgV4WsjQeyH\"]},\"lib/solmate/src/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800\",\"dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.19+commit.7dd6d404"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [],
          "type": "error",
          "name": "BatchInputLengthMismatch"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "FixedPointMath_InvalidExponent"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "FixedPointMath_InvalidInput"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidCheckpointDuration"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidERC20Bridge"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidFeeAmounts"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidFeeDestination"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidMinimumShareReserves"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidPositionDuration"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidTradeSize"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "NegativePresentValue"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "RestrictedZeroAddress"
        },
        {
          "inputs": [
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "type": "error",
          "name": "ReturnData"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "Unauthorized"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "provider",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "lpAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "baseAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "sharePrice",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "lpSharePrice",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "AddLiquidity",
          "anonymous": false
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
              "name": "account",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "operator",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "bool",
              "name": "approved",
              "type": "bool",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "ApprovalForAll",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "trader",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "assetId",
              "type": "uint256",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "maturityTime",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "baseAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "sharePrice",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "bondAmount",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "CloseLong",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "trader",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "assetId",
              "type": "uint256",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "maturityTime",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "baseAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "sharePrice",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "bondAmount",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "CloseShort",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "collector",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "fees",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "CollectGovernanceFee",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "checkpointTime",
              "type": "uint256",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "sharePrice",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "maturedShorts",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "maturedLongs",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "lpSharePrice",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "CreateCheckpoint",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newGovernance",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "GovernanceUpdated",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "provider",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "lpAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "baseAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "sharePrice",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "apr",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Initialize",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "trader",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "assetId",
              "type": "uint256",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "maturityTime",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "baseAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "sharePrice",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "bondAmount",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "OpenLong",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "trader",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "assetId",
              "type": "uint256",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "maturityTime",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "baseAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "sharePrice",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "bondAmount",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "OpenShort",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newPauser",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "PauserUpdated",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "provider",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "withdrawalShareAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "baseAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "sharePrice",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "RedeemWithdrawalShares",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "provider",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "lpAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "baseAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "sharePrice",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "withdrawalShareAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "lpSharePrice",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "RemoveLiquidity",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address",
              "indexed": true
            },
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
              "name": "id",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "TransferSingle",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
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
          "name": "baseToken",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
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
              "internalType": "uint256[]",
              "name": "ids",
              "type": "uint256[]"
            },
            {
              "internalType": "uint256[]",
              "name": "values",
              "type": "uint256[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "batchTransferFrom"
        },
        {
          "inputs": [
            {
              "internalType": "struct IHyperdrive.Options",
              "name": "_options",
              "type": "tuple",
              "components": [
                {
                  "internalType": "address",
                  "name": "destination",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "asBase",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "extraData",
                  "type": "bytes"
                }
              ]
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "collectGovernanceFee",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "proceeds",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_checkpointId",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getCheckpoint",
          "outputs": [
            {
              "internalType": "struct IHyperdrive.Checkpoint",
              "name": "",
              "type": "tuple",
              "components": [
                {
                  "internalType": "uint128",
                  "name": "sharePrice",
                  "type": "uint128"
                },
                {
                  "internalType": "int128",
                  "name": "exposure",
                  "type": "int128"
                }
              ]
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "getMarketState",
          "outputs": [
            {
              "internalType": "struct IHyperdrive.MarketState",
              "name": "",
              "type": "tuple",
              "components": [
                {
                  "internalType": "uint128",
                  "name": "shareReserves",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "bondReserves",
                  "type": "uint128"
                },
                {
                  "internalType": "int128",
                  "name": "shareAdjustment",
                  "type": "int128"
                },
                {
                  "internalType": "uint128",
                  "name": "longExposure",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "longsOutstanding",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "shortsOutstanding",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "longAverageMaturityTime",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "shortAverageMaturityTime",
                  "type": "uint128"
                },
                {
                  "internalType": "bool",
                  "name": "isInitialized",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "isPaused",
                  "type": "bool"
                }
              ]
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "getPoolConfig",
          "outputs": [
            {
              "internalType": "struct IHyperdrive.PoolConfig",
              "name": "",
              "type": "tuple",
              "components": [
                {
                  "internalType": "contract IERC20",
                  "name": "baseToken",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "linkerFactory",
                  "type": "address"
                },
                {
                  "internalType": "bytes32",
                  "name": "linkerCodeHash",
                  "type": "bytes32"
                },
                {
                  "internalType": "uint256",
                  "name": "initialSharePrice",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "minimumShareReserves",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "minimumTransactionAmount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "precisionThreshold",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "positionDuration",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "checkpointDuration",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "timeStretch",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "governance",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "feeCollector",
                  "type": "address"
                },
                {
                  "internalType": "struct IHyperdrive.Fees",
                  "name": "fees",
                  "type": "tuple",
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "curve",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "flat",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "governance",
                      "type": "uint256"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "getPoolInfo",
          "outputs": [
            {
              "internalType": "struct IHyperdrive.PoolInfo",
              "name": "",
              "type": "tuple",
              "components": [
                {
                  "internalType": "uint256",
                  "name": "shareReserves",
                  "type": "uint256"
                },
                {
                  "internalType": "int256",
                  "name": "shareAdjustment",
                  "type": "int256"
                },
                {
                  "internalType": "uint256",
                  "name": "bondReserves",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "lpTotalSupply",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "sharePrice",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "longsOutstanding",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "longAverageMaturityTime",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "shortsOutstanding",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "shortAverageMaturityTime",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "withdrawalSharesReadyToWithdraw",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "withdrawalSharesProceeds",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "lpSharePrice",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "longExposure",
                  "type": "uint256"
                }
              ]
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "getUncollectedGovernanceFees",
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
          "name": "getWithdrawPool",
          "outputs": [
            {
              "internalType": "struct IHyperdrive.WithdrawPool",
              "name": "",
              "type": "tuple",
              "components": [
                {
                  "internalType": "uint128",
                  "name": "readyToWithdraw",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "proceeds",
                  "type": "uint128"
                }
              ]
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "isApprovedForAll",
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
              "internalType": "uint256[]",
              "name": "_slots",
              "type": "uint256[]"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "load",
          "outputs": [
            {
              "internalType": "bytes32[]",
              "name": "",
              "type": "bytes32[]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "stateMutability": "pure",
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
              "name": "account",
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
              "internalType": "bool",
              "name": "_status",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "pause"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "account",
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
          "name": "perTokenApprovals",
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
              "internalType": "uint256",
              "name": "tokenID",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "operator",
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
          "name": "setApproval"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenID",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "caller",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setApprovalBridge"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setApprovalForAll"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_who",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setGovernance"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "who",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "status",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setPauser"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "stateMutability": "pure",
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
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
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
              "internalType": "uint256",
              "name": "tokenID",
              "type": "uint256"
            },
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
          "name": "transferFrom"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenID",
              "type": "uint256"
            },
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
            },
            {
              "internalType": "address",
              "name": "caller",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transferFromBridge"
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "balanceOf(uint256,address)": {
            "params": {
              "account": "The account.",
              "tokenId": "The sub-token id."
            },
            "returns": {
              "_0": "The balance."
            }
          },
          "baseToken()": {
            "returns": {
              "_0": "The base token."
            }
          },
          "batchTransferFrom(address,address,uint256[],uint256[])": {
            "params": {
              "from": "the source account.",
              "ids": "The array of token ids of the asset to transfer.",
              "to": "the destination account.",
              "values": "The amount of each token to transfer."
            }
          },
          "collectGovernanceFee((address,bool,bytes))": {
            "params": {
              "_options": "The options that configure how the fees are settled."
            },
            "returns": {
              "proceeds": "The amount of base collected."
            }
          },
          "constructor": {
            "params": {
              "_config": "The configuration of the Hyperdrive pool."
            }
          },
          "getCheckpoint(uint256)": {
            "params": {
              "_checkpointId": "The checkpoint ID."
            },
            "returns": {
              "_0": "The checkpoint."
            }
          },
          "getMarketState()": {
            "returns": {
              "_0": "The market state."
            }
          },
          "getPoolConfig()": {
            "details": "These parameters are immutable, so this should only need to be      called once.",
            "returns": {
              "_0": "The PoolConfig struct."
            }
          },
          "getPoolInfo()": {
            "returns": {
              "_0": "The PoolInfo struct."
            }
          },
          "getUncollectedGovernanceFees()": {
            "returns": {
              "_0": "Governance fees denominated in shares yet to be collected."
            }
          },
          "getWithdrawPool()": {
            "returns": {
              "_0": "Hyperdrive's withdrawal pool information."
            }
          },
          "isApprovedForAll(address,address)": {
            "params": {
              "account": "The account.",
              "operator": "The operator."
            },
            "returns": {
              "_0": "The approval status."
            }
          },
          "load(uint256[])": {
            "params": {
              "_slots": "The storage slots the caller wants the data from."
            },
            "returns": {
              "_0": "A raw array of loaded data."
            }
          },
          "name(uint256)": {
            "params": {
              "tokenId": "The sub-token id."
            },
            "returns": {
              "_0": "The name."
            }
          },
          "nonces(address)": {
            "params": {
              "account": "The account."
            },
            "returns": {
              "_0": "The signature nonce."
            }
          },
          "pause(bool)": {
            "params": {
              "_status": "True to pause all deposits and false to unpause them."
            }
          },
          "perTokenApprovals(uint256,address,address)": {
            "params": {
              "account": "The account.",
              "spender": "The spender.",
              "tokenId": "The sub-token id."
            },
            "returns": {
              "_0": "The approval status."
            }
          },
          "setApproval(uint256,address,uint256)": {
            "params": {
              "amount": "The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement [saving gas        on transfer].",
              "operator": "The address who will be able to use the tokens.",
              "tokenID": "The asset to approve the use of."
            }
          },
          "setApprovalBridge(uint256,address,uint256,address)": {
            "params": {
              "amount": "The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement [saving gas        on transfer].",
              "caller": "The eth address which called the linking contract.",
              "operator": "The address who will be able to use the tokens.",
              "tokenID": "The asset to approve the use of."
            }
          },
          "setApprovalForAll(address,bool)": {
            "params": {
              "approved": "True to approve, false to remove approval.",
              "operator": "The eth address which can access the caller's assets."
            }
          },
          "setGovernance(address)": {
            "params": {
              "_who": "The new governance address."
            }
          },
          "setPauser(address,bool)": {
            "params": {
              "status": "The new pauser status.",
              "who": "The address to change."
            }
          },
          "symbol(uint256)": {
            "params": {
              "tokenId": "The sub-token id."
            },
            "returns": {
              "_0": "The symbol."
            }
          },
          "totalSupply(uint256)": {
            "params": {
              "tokenId": "The sub-token id."
            },
            "returns": {
              "_0": "The total supply."
            }
          },
          "transferFrom(uint256,address,address,uint256)": {
            "params": {
              "amount": "The amount of token to move.",
              "from": "The address who's balance will be reduced.",
              "to": "The address who's balance will be increased.",
              "tokenID": "The token identifier."
            }
          },
          "transferFromBridge(uint256,address,address,uint256,address)": {
            "params": {
              "amount": "The amount of token to move.",
              "caller": "The msg.sender from the bridge.",
              "from": "The address who's balance will be reduced.",
              "to": "The address who's balance will be increased.",
              "tokenID": "The token identifier."
            }
          }
        },
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {
          "balanceOf(uint256,address)": {
            "notice": "Gets an account's balance of a sub-token."
          },
          "baseToken()": {
            "notice": "Gets the base token."
          },
          "batchTransferFrom(address,address,uint256[],uint256[])": {
            "notice": "Transfers several assets from one account to another."
          },
          "collectGovernanceFee((address,bool,bytes))": {
            "notice": "This function collects the governance fees accrued by the pool."
          },
          "constructor": {
            "notice": "Instantiates target0."
          },
          "getCheckpoint(uint256)": {
            "notice": "Gets a specified checkpoint."
          },
          "getMarketState()": {
            "notice": "Gets the market state."
          },
          "getPoolConfig()": {
            "notice": "Gets the pool's configuration parameters."
          },
          "getPoolInfo()": {
            "notice": "Gets info about the pool's reserves and other state that is         important to evaluate potential trades."
          },
          "getUncollectedGovernanceFees()": {
            "notice": "Gets info about the fees presently accrued by the pool."
          },
          "getWithdrawPool()": {
            "notice": "Gets information about the withdrawal pool."
          },
          "isApprovedForAll(address,address)": {
            "notice": "Gets the approval status of an operator for an account."
          },
          "load(uint256[])": {
            "notice": "Allows plugin data libs to provide getters or other complex         logic instead of the main."
          },
          "name(uint256)": {
            "notice": "Gets the name of a sub-token."
          },
          "nonces(address)": {
            "notice": "Gets the permitForAll signature nonce for an account."
          },
          "pause(bool)": {
            "notice": "Allows an authorized address to pause this contract."
          },
          "perTokenApprovals(uint256,address,address)": {
            "notice": "Gets the approval status of an operator for an account."
          },
          "setApproval(uint256,address,uint256)": {
            "notice": "Allows a user to set an approval for an individual asset with         specific amount."
          },
          "setApprovalBridge(uint256,address,uint256,address)": {
            "notice": "Allows the compatibility linking contract to forward calls to         set asset approvals."
          },
          "setApprovalForAll(address,bool)": {
            "notice": "Allows a user to approve an operator to use all of their assets."
          },
          "setGovernance(address)": {
            "notice": "Allows governance to change governance."
          },
          "setPauser(address,bool)": {
            "notice": "Allows governance to change the pauser status of an address."
          },
          "symbol(uint256)": {
            "notice": "Gets the symbol of a sub-token."
          },
          "totalSupply(uint256)": {
            "notice": "Gets the total supply of a sub-token."
          },
          "transferFrom(uint256,address,address,uint256)": {
            "notice": "Transfers an amount of assets from the source to the destination."
          },
          "transferFromBridge(uint256,address,address,uint256,address)": {
            "notice": "Permissioned transfer for the bridge to access, only callable by         the ERC20 linking bridge."
          }
        },
        "version": 1
      }
    },
    "settings": {
      "remappings": [
        "aave-v3-core/=lib/aave-v3-core/",
        "create3-factory/=lib/yield-daddy/lib/create3-factory/",
        "ds-test/=lib/forge-std/lib/ds-test/src/",
        "forge-std/=lib/forge-std/src/",
        "solmate/=lib/solmate/src/",
        "yield-daddy/=lib/yield-daddy/"
      ],
      "optimizer": {
        "enabled": true,
        "runs": 200
      },
      "metadata": {
        "bytecodeHash": "ipfs"
      },
      "compilationTarget": {
        "contracts/src/external/HyperdriveTarget0.sol": "HyperdriveTarget0"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/external/HyperdriveTarget0.sol": {
        "keccak256": "0x791a42ebc20362f968036d7a109bf2bdd757ebb20391b9dd3c52be5c30e2d9a4",
        "urls": [
          "bzz-raw://3c9f134b44e151928670f17f17cb9bbc0b4f0ef16ba3cba5c0e3790f002c5af4",
          "dweb:/ipfs/QmT4nFLpDCCZm6SGVKBkFPHfiHPFrsiS2xn3g4WMjvyEKV"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IERC20.sol": {
        "keccak256": "0xfb57fe2ee4d8d1c6a8e2aa3b007da6f0e53d65388245b0b7d876234077ee95b4",
        "urls": [
          "bzz-raw://e4303c41b9752b51c6eaa9b16aa11e5bffb34fc80c5c8761302539cd5922ae36",
          "dweb:/ipfs/QmZjVYBikfgPDX47hmbGJpG6kvm3Gyt6nKkFbZH6r8U4cL"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdrive.sol": {
        "keccak256": "0x833d56790728bfab7d35507b8584dc7ce607b26512a382e887483f61d528f6c5",
        "urls": [
          "bzz-raw://3dd009d6ff5a89d1173f7330916e81a31ffd139bf6848b3f4400673652554a70",
          "dweb:/ipfs/QmXkVovZSWqhRqrt8y9FFfHt1HWhnUuP9TMecQyd89yEQ3"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveCore.sol": {
        "keccak256": "0x84c73d8c4b67da41635f57fce2f30b8f04fc826ff6fb54c605de23d376f3403d",
        "urls": [
          "bzz-raw://e6d636dff5c24916ae35a76695d741de2f14ee46876ea67c5393618bb7f9cf85",
          "dweb:/ipfs/QmUwxh8JeAqSFA8Z2qabVx3YWRSz7PJ9V2TQgnfctAgqPF"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveRead.sol": {
        "keccak256": "0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3",
        "urls": [
          "bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993",
          "dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiToken.sol": {
        "keccak256": "0xcf3a4002275ea64e381f0a4aded3683e12960396ef79ba9dd153e2d1e395baad",
        "urls": [
          "bzz-raw://c9990491f7a5151fd696a45e6e5b0282a1dedf58521861dfb8c64db8cb60f5b6",
          "dweb:/ipfs/QmaywmqqQhz7DeYqZdoeykagr5h4ZhQRv6GasHqvdWqzSy"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenCore.sol": {
        "keccak256": "0xdb7f24663cff7307a468ef5e4c6f3e4d01ec0475157b3bbb3405890c3e9ab87d",
        "urls": [
          "bzz-raw://7f631a9a395fba5b07c3d9308fccac18d5aa59d890efe23442ed2a4da9871ae8",
          "dweb:/ipfs/QmV2a4wiAPfWzSST3faYt58i2tqEyoqCLAJV8aNCdJyxVE"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenMetadata.sol": {
        "keccak256": "0x476240ea4328bae9ab820b6f0f40afb11c74ee52d26bdbef69e4ece28dc10bdb",
        "urls": [
          "bzz-raw://843f73cb21eaec4e26952fd6cbde5e6815e3a28c438df9e026e249200d25076f",
          "dweb:/ipfs/QmXzE7gsRKMaRGQfTDodA1RXxNxUuBj8RT7grTYjZUdbe6"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenRead.sol": {
        "keccak256": "0x9b92d81f2f038fcd4bb5d069ab2b754efc153234c451d4ee4caa6d74aaca16b4",
        "urls": [
          "bzz-raw://8686fddc99564c6b6524ea68a6b7ff081a9988fc795fc13197bb59ddaa2041c6",
          "dweb:/ipfs/QmarJYJAgoH6Z4H1BmdPoRgqLubRu5S6NDXBNV2fDApPuW"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveAdmin.sol": {
        "keccak256": "0xea9b7b3489ac95dd9c41ae7174c9f34a29f8ae14224ee5d2605434a8c8711784",
        "urls": [
          "bzz-raw://9076244df4f436e8a8921faadfe925f243ae9a37ac7a16cbce3dd5b4a66631a8",
          "dweb:/ipfs/QmeRunYGGcgUZjRHS3m1AarzzjgV9vtp5K9UeUjTaaCrfs"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveBase.sol": {
        "keccak256": "0x328a01b0720b9a6494a2d6be1113539d41da589a382525578d4241fc077e9646",
        "urls": [
          "bzz-raw://4b9d7b56fd8056ae9264da99f8e0764ef16f17dca179218cf9375cf3236ec9fc",
          "dweb:/ipfs/Qmf11fXRipobZfMWTTxaScrYz9tZFUsdVxH5eZ4aLVQQC8"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveCheckpoint.sol": {
        "keccak256": "0xd846aec9e34732c384a70ae306e8015eeb4a85ba7a68861d3a741310efc9eb57",
        "urls": [
          "bzz-raw://cdd512b5caa814e88813e3a8a03bfc5e460c78c81c4e403bc8e57300ae11a1d2",
          "dweb:/ipfs/QmUAMC52wZ6H86zUPQ7xPYVjAYjYQ97RiAfV1kn27ZYPsz"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveLP.sol": {
        "keccak256": "0x6779541f073ba5ce6e0656d10c7d9ef23734d2675b865b4d5310a023c30764ad",
        "urls": [
          "bzz-raw://5cc569f006ef38723c1cb893b4e08d22ca0a448dc559c8abd18b28bd6967fcb7",
          "dweb:/ipfs/QmdPfZGuM8g3qp4CPsuztZe1wcVrytWkbqHQDbsTVEKBdF"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveLong.sol": {
        "keccak256": "0x45ba04560ca590427cc1ad2e98ec0122f9b6496ead2e3d4b3438339c982bd543",
        "urls": [
          "bzz-raw://ee1b36b7ab75044d12e8b91ead75c4377b9da1daa630ea7d1a0c413f963f916a",
          "dweb:/ipfs/QmPsoXubd1sfy7NNn7YWSrYTTrBEreuawVRFFjDrHQmKzZ"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveMultiToken.sol": {
        "keccak256": "0x6b85590aeffa0a73aabf0c17a958bdec064a4d59c2e3d7595a8cb2d86fb01277",
        "urls": [
          "bzz-raw://d89ad612f8624723adab39bd85311389fe95f685cf496e1a5d116bfafd6588eb",
          "dweb:/ipfs/QmPWVwrfo65BZofeWubpZsM93yzxMFjhPfoNYsaT31yn28"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveShort.sol": {
        "keccak256": "0x0dc04dc0f6070d51c2c58587f1d0f0604594e6c5728bf37e46da3a5952a0e0f0",
        "urls": [
          "bzz-raw://1529824590ac5cdb7d4ffb67449be6a44f3bef9db40646bfa13bb5979e1a2f2d",
          "dweb:/ipfs/QmbXKFyqUaL1vv6wn7avWn463Uf8JgJvVLN6v5rUdJbys7"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveStorage.sol": {
        "keccak256": "0xda130fbf6651046517801d119593b7f81e7a2a824f82cb15b1852495fa7fb148",
        "urls": [
          "bzz-raw://c10ab3e768804fc8eee91502f34dd1e1d2d2e7d90d8ec0a26fac40d83ed940db",
          "dweb:/ipfs/QmNMqyFM6xC49uRAMeY3MhoQ9yK2ZHdQLt3QxrsNK9Kfkw"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/AssetId.sol": {
        "keccak256": "0xcf8493b00dd39c50754a63f66dc612f3cd466cbac8c7ea5ed0c5ea68aa99267a",
        "urls": [
          "bzz-raw://1a1986d6bc80e465dde116a70d3a30027b3e75969117a9b3517c6866c2e5e73a",
          "dweb:/ipfs/QmSASHifHWyKBycGAm1pUs9dw26Uf6A61V9nkEQnFj9mya"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/FixedPointMath.sol": {
        "keccak256": "0xac200bd4172e6369dc6ad06bef96e3d4ce7df36a97e80ee8f1a033e622c99639",
        "urls": [
          "bzz-raw://0add90b8957805ae8e99581b76d81dec07bdf7586fdf2a05f31d2ce91f09439d",
          "dweb:/ipfs/QmRRBbguna6QmMUvANobcSfH6HM3DydFjNXSWZZr1VDKH8"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/HyperdriveMath.sol": {
        "keccak256": "0xccfb106f6bd8829c369c19d08ef4f8ffc8ebbf5c51a9e148141733ff9bbc49f3",
        "urls": [
          "bzz-raw://d11ddba27aace6aefe451d75b4403ceb10f0a71cd61163e8f812728820107e62",
          "dweb:/ipfs/QmdSZJtY5LaJVnHYRwKAofo6oiihqpazC22Q1X9aL9uNbx"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/SafeCast.sol": {
        "keccak256": "0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f",
        "urls": [
          "bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5",
          "dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/YieldSpaceMath.sol": {
        "keccak256": "0x42a910bd6ee869fc53f18f2991cbf75a667d663ed41b4a11e18b328546ede7db",
        "urls": [
          "bzz-raw://77345fdb9b99d0b04fa7cf719857eae63362e20db6b99da35ac886a13bf3b56a",
          "dweb:/ipfs/QmXatm27fhzsApgrMq978mye2u8fk62D89pUgV4WsjQeyH"
        ],
        "license": "Apache-2.0"
      },
      "lib/solmate/src/utils/ReentrancyGuard.sol": {
        "keccak256": "0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01",
        "urls": [
          "bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800",
          "dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j"
        ],
        "license": "AGPL-3.0-only"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/src/external/HyperdriveTarget0.sol",
    "id": 1175,
    "exportedSymbols": {
      "AssetId": [
        9781
      ],
      "FixedPointMath": [
        10533
      ],
      "HyperdriveAdmin": [
        4506
      ],
      "HyperdriveCheckpoint": [
        5801
      ],
      "HyperdriveLP": [
        6967
      ],
      "HyperdriveLong": [
        7805
      ],
      "HyperdriveMath": [
        11352
      ],
      "HyperdriveMultiToken": [
        8158
      ],
      "HyperdriveShort": [
        9192
      ],
      "HyperdriveStorage": [
        9465
      ],
      "HyperdriveTarget0": [
        1174
      ],
      "IHyperdrive": [
        3759
      ],
      "IHyperdriveRead": [
        3999
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:13968:1",
    "nodes": [
      {
        "id": 506,
        "nodeType": "PragmaDirective",
        "src": "39:23:1",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 508,
        "nodeType": "ImportDirective",
        "src": "64:60:1",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "../interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1175,
        "sourceUnit": 3760,
        "symbolAliases": [
          {
            "foreign": {
              "id": 507,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 3759,
              "src": "73:11:1",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 510,
        "nodeType": "ImportDirective",
        "src": "125:68:1",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdriveRead.sol",
        "file": "../interfaces/IHyperdriveRead.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1175,
        "sourceUnit": 4000,
        "symbolAliases": [
          {
            "foreign": {
              "id": 509,
              "name": "IHyperdriveRead",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 3999,
              "src": "134:15:1",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 512,
        "nodeType": "ImportDirective",
        "src": "194:66:1",
        "nodes": [],
        "absolutePath": "contracts/src/internal/HyperdriveAdmin.sol",
        "file": "../internal/HyperdriveAdmin.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1175,
        "sourceUnit": 4507,
        "symbolAliases": [
          {
            "foreign": {
              "id": 511,
              "name": "HyperdriveAdmin",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 4506,
              "src": "203:15:1",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 514,
        "nodeType": "ImportDirective",
        "src": "261:76:1",
        "nodes": [],
        "absolutePath": "contracts/src/internal/HyperdriveCheckpoint.sol",
        "file": "../internal/HyperdriveCheckpoint.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1175,
        "sourceUnit": 5802,
        "symbolAliases": [
          {
            "foreign": {
              "id": 513,
              "name": "HyperdriveCheckpoint",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 5801,
              "src": "270:20:1",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 516,
        "nodeType": "ImportDirective",
        "src": "338:64:1",
        "nodes": [],
        "absolutePath": "contracts/src/internal/HyperdriveLong.sol",
        "file": "../internal/HyperdriveLong.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1175,
        "sourceUnit": 7806,
        "symbolAliases": [
          {
            "foreign": {
              "id": 515,
              "name": "HyperdriveLong",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7805,
              "src": "347:14:1",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 518,
        "nodeType": "ImportDirective",
        "src": "403:60:1",
        "nodes": [],
        "absolutePath": "contracts/src/internal/HyperdriveLP.sol",
        "file": "../internal/HyperdriveLP.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1175,
        "sourceUnit": 6968,
        "symbolAliases": [
          {
            "foreign": {
              "id": 517,
              "name": "HyperdriveLP",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 6967,
              "src": "412:12:1",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 520,
        "nodeType": "ImportDirective",
        "src": "464:76:1",
        "nodes": [],
        "absolutePath": "contracts/src/internal/HyperdriveMultiToken.sol",
        "file": "../internal/HyperdriveMultiToken.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1175,
        "sourceUnit": 8159,
        "symbolAliases": [
          {
            "foreign": {
              "id": 519,
              "name": "HyperdriveMultiToken",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 8158,
              "src": "473:20:1",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 522,
        "nodeType": "ImportDirective",
        "src": "541:66:1",
        "nodes": [],
        "absolutePath": "contracts/src/internal/HyperdriveShort.sol",
        "file": "../internal/HyperdriveShort.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1175,
        "sourceUnit": 9193,
        "symbolAliases": [
          {
            "foreign": {
              "id": 521,
              "name": "HyperdriveShort",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 9192,
              "src": "550:15:1",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 524,
        "nodeType": "ImportDirective",
        "src": "608:70:1",
        "nodes": [],
        "absolutePath": "contracts/src/internal/HyperdriveStorage.sol",
        "file": "../internal/HyperdriveStorage.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1175,
        "sourceUnit": 9466,
        "symbolAliases": [
          {
            "foreign": {
              "id": 523,
              "name": "HyperdriveStorage",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 9465,
              "src": "617:17:1",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 526,
        "nodeType": "ImportDirective",
        "src": "679:51:1",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/AssetId.sol",
        "file": "../libraries/AssetId.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1175,
        "sourceUnit": 9782,
        "symbolAliases": [
          {
            "foreign": {
              "id": 525,
              "name": "AssetId",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 9781,
              "src": "688:7:1",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 528,
        "nodeType": "ImportDirective",
        "src": "731:65:1",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
        "file": "../libraries/FixedPointMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1175,
        "sourceUnit": 10534,
        "symbolAliases": [
          {
            "foreign": {
              "id": 527,
              "name": "FixedPointMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 10533,
              "src": "740:14:1",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 530,
        "nodeType": "ImportDirective",
        "src": "797:65:1",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/HyperdriveMath.sol",
        "file": "../libraries/HyperdriveMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1175,
        "sourceUnit": 11353,
        "symbolAliases": [
          {
            "foreign": {
              "id": 529,
              "name": "HyperdriveMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 11352,
              "src": "806:14:1",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 1174,
        "nodeType": "ContractDefinition",
        "src": "1184:12822:1",
        "nodes": [
          {
            "id": 548,
            "nodeType": "UsingForDirective",
            "src": "1381:33:1",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 546,
              "name": "FixedPointMath",
              "nameLocations": [
                "1387:14:1"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 10533,
              "src": "1387:14:1"
            },
            "typeName": {
              "id": 547,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1406:7:1",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 559,
            "nodeType": "FunctionDefinition",
            "src": "1523:94:1",
            "nodes": [],
            "body": {
              "id": 558,
              "nodeType": "Block",
              "src": "1615:2:1",
              "nodes": [],
              "statements": []
            },
            "documentation": {
              "id": 549,
              "nodeType": "StructuredDocumentation",
              "src": "1420:98:1",
              "text": "@notice Instantiates target0.\n @param _config The configuration of the Hyperdrive pool."
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 555,
                    "name": "_config",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 552,
                    "src": "1606:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig memory"
                    }
                  }
                ],
                "id": 556,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 554,
                  "name": "HyperdriveStorage",
                  "nameLocations": [
                    "1588:17:1"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 9465,
                  "src": "1588:17:1"
                },
                "nodeType": "ModifierInvocation",
                "src": "1588:26:1"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 553,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 552,
                  "mutability": "mutable",
                  "name": "_config",
                  "nameLocation": "1574:7:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 559,
                  "src": "1544:37:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolConfig"
                  },
                  "typeName": {
                    "id": 551,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 550,
                      "name": "IHyperdrive.PoolConfig",
                      "nameLocations": [
                        "1544:11:1",
                        "1556:10:1"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 3558,
                      "src": "1544:22:1"
                    },
                    "referencedDeclaration": 3558,
                    "src": "1544:22:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$3558_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1534:53:1"
            },
            "returnParameters": {
              "id": 557,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1615:0:1"
            },
            "scope": 1174,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 573,
            "nodeType": "FunctionDefinition",
            "src": "1854:174:1",
            "nodes": [],
            "body": {
              "id": 572,
              "nodeType": "Block",
              "src": "1973:55:1",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 569,
                        "name": "_options",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 563,
                        "src": "2012:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Options_$3608_calldata_ptr",
                          "typeString": "struct IHyperdrive.Options calldata"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Options_$3608_calldata_ptr",
                          "typeString": "struct IHyperdrive.Options calldata"
                        }
                      ],
                      "id": 568,
                      "name": "_collectGovernanceFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4427,
                      "src": "1990:21:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Options_$3608_calldata_ptr_$returns$_t_uint256_$",
                        "typeString": "function (struct IHyperdrive.Options calldata) returns (uint256)"
                      }
                    },
                    "id": 570,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1990:31:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 567,
                  "id": 571,
                  "nodeType": "Return",
                  "src": "1983:38:1"
                }
              ]
            },
            "documentation": {
              "id": 560,
              "nodeType": "StructuredDocumentation",
              "src": "1642:207:1",
              "text": "@notice This function collects the governance fees accrued by the pool.\n @param _options The options that configure how the fees are settled.\n @return proceeds The amount of base collected."
            },
            "functionSelector": "3e691db9",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "collectGovernanceFee",
            "nameLocation": "1863:20:1",
            "parameters": {
              "id": 564,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 563,
                  "mutability": "mutable",
                  "name": "_options",
                  "nameLocation": "1922:8:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 573,
                  "src": "1893:37:1",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$3608_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 562,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 561,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "1893:11:1",
                        "1905:7:1"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 3608,
                      "src": "1893:19:1"
                    },
                    "referencedDeclaration": 3608,
                    "src": "1893:19:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$3608_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1883:53:1"
            },
            "returnParameters": {
              "id": 567,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 566,
                  "mutability": "mutable",
                  "name": "proceeds",
                  "nameLocation": "1963:8:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 573,
                  "src": "1955:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 565,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1955:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1954:18:1"
            },
            "scope": 1174,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 584,
            "nodeType": "FunctionDefinition",
            "src": "2180:70:1",
            "nodes": [],
            "body": {
              "id": 583,
              "nodeType": "Block",
              "src": "2218:32:1",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 580,
                        "name": "_status",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 576,
                        "src": "2235:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 579,
                      "name": "_pause",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4451,
                      "src": "2228:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$returns$__$",
                        "typeString": "function (bool)"
                      }
                    },
                    "id": 581,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2228:15:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 582,
                  "nodeType": "ExpressionStatement",
                  "src": "2228:15:1"
                }
              ]
            },
            "documentation": {
              "id": 574,
              "nodeType": "StructuredDocumentation",
              "src": "2034:141:1",
              "text": "@notice Allows an authorized address to pause this contract.\n @param _status True to pause all deposits and false to unpause them."
            },
            "functionSelector": "02329a29",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "pause",
            "nameLocation": "2189:5:1",
            "parameters": {
              "id": 577,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 576,
                  "mutability": "mutable",
                  "name": "_status",
                  "nameLocation": "2200:7:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 584,
                  "src": "2195:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 575,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2195:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2194:14:1"
            },
            "returnParameters": {
              "id": 578,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2218:0:1"
            },
            "scope": 1174,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 595,
            "nodeType": "FunctionDefinition",
            "src": "2360:83:1",
            "nodes": [],
            "body": {
              "id": 594,
              "nodeType": "Block",
              "src": "2406:37:1",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 591,
                        "name": "_who",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 587,
                        "src": "2431:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 590,
                      "name": "_setGovernance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4476,
                      "src": "2416:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 592,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2416:20:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 593,
                  "nodeType": "ExpressionStatement",
                  "src": "2416:20:1"
                }
              ]
            },
            "documentation": {
              "id": 585,
              "nodeType": "StructuredDocumentation",
              "src": "2256:99:1",
              "text": "@notice Allows governance to change governance.\n @param _who The new governance address."
            },
            "functionSelector": "ab033ea9",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setGovernance",
            "nameLocation": "2369:13:1",
            "parameters": {
              "id": 588,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 587,
                  "mutability": "mutable",
                  "name": "_who",
                  "nameLocation": "2391:4:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 595,
                  "src": "2383:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 586,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2383:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2382:14:1"
            },
            "returnParameters": {
              "id": 589,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2406:0:1"
            },
            "scope": 1174,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 609,
            "nodeType": "FunctionDefinition",
            "src": "2613:94:1",
            "nodes": [],
            "body": {
              "id": 608,
              "nodeType": "Block",
              "src": "2667:40:1",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 604,
                        "name": "who",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 598,
                        "src": "2688:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 605,
                        "name": "status",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 600,
                        "src": "2693:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 603,
                      "name": "_setPauser",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4505,
                      "src": "2677:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bool_$returns$__$",
                        "typeString": "function (address,bool)"
                      }
                    },
                    "id": 606,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2677:23:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 607,
                  "nodeType": "ExpressionStatement",
                  "src": "2677:23:1"
                }
              ]
            },
            "documentation": {
              "id": 596,
              "nodeType": "StructuredDocumentation",
              "src": "2449:159:1",
              "text": "@notice Allows governance to change the pauser status of an address.\n @param who The address to change.\n @param status The new pauser status."
            },
            "functionSelector": "7180c8ca",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setPauser",
            "nameLocation": "2622:9:1",
            "parameters": {
              "id": 601,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 598,
                  "mutability": "mutable",
                  "name": "who",
                  "nameLocation": "2640:3:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 609,
                  "src": "2632:11:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 597,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2632:7:1",
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
                  "id": 600,
                  "mutability": "mutable",
                  "name": "status",
                  "nameLocation": "2650:6:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 609,
                  "src": "2645:11:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 599,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2645:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2631:26:1"
            },
            "returnParameters": {
              "id": 602,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2667:0:1"
            },
            "scope": 1174,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 631,
            "nodeType": "FunctionDefinition",
            "src": "3041:240:1",
            "nodes": [],
            "body": {
              "id": 630,
              "nodeType": "Block",
              "src": "3169:112:1",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 622,
                        "name": "tokenID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 612,
                        "src": "3236:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 623,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 614,
                        "src": "3245:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 624,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 616,
                        "src": "3251:2:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 625,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 618,
                        "src": "3255:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 626,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "3263:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 627,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3267:6:1",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "3263:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 621,
                      "name": "_transferFrom",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8006,
                      "src": "3222:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_address_$_t_uint256_$_t_address_$returns$__$",
                        "typeString": "function (uint256,address,address,uint256,address)"
                      }
                    },
                    "id": 628,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3222:52:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 629,
                  "nodeType": "ExpressionStatement",
                  "src": "3222:52:1"
                }
              ]
            },
            "documentation": {
              "id": 610,
              "nodeType": "StructuredDocumentation",
              "src": "2737:299:1",
              "text": "@notice Transfers an amount of assets from the source to the destination.\n @param tokenID The token identifier.\n @param from The address who's balance will be reduced.\n @param to The address who's balance will be increased.\n @param amount The amount of token to move."
            },
            "functionSelector": "1c0f12b6",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "transferFrom",
            "nameLocation": "3050:12:1",
            "parameters": {
              "id": 619,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 612,
                  "mutability": "mutable",
                  "name": "tokenID",
                  "nameLocation": "3080:7:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 631,
                  "src": "3072:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 611,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3072:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 614,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "3105:4:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 631,
                  "src": "3097:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 613,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3097:7:1",
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
                  "id": 616,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "3127:2:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 631,
                  "src": "3119:10:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 615,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3119:7:1",
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
                  "id": 618,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "3147:6:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 631,
                  "src": "3139:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 617,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3139:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3062:97:1"
            },
            "returnParameters": {
              "id": 620,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3169:0:1"
            },
            "scope": 1174,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 657,
            "nodeType": "FunctionDefinition",
            "src": "3686:285:1",
            "nodes": [],
            "body": {
              "id": 656,
              "nodeType": "Block",
              "src": "3864:107:1",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 649,
                        "name": "tokenID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 634,
                        "src": "3930:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 650,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 636,
                        "src": "3939:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 651,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 638,
                        "src": "3945:2:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 652,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 640,
                        "src": "3949:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 653,
                        "name": "caller",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 642,
                        "src": "3957:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 648,
                      "name": "_transferFrom",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8006,
                      "src": "3916:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_address_$_t_uint256_$_t_address_$returns$__$",
                        "typeString": "function (uint256,address,address,uint256,address)"
                      }
                    },
                    "id": 654,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3916:48:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 655,
                  "nodeType": "ExpressionStatement",
                  "src": "3916:48:1"
                }
              ]
            },
            "documentation": {
              "id": 632,
              "nodeType": "StructuredDocumentation",
              "src": "3287:394:1",
              "text": "@notice Permissioned transfer for the bridge to access, only callable by\n         the ERC20 linking bridge.\n @param tokenID The token identifier.\n @param from The address who's balance will be reduced.\n @param to The address who's balance will be increased.\n @param amount The amount of token to move.\n @param caller The msg.sender from the bridge."
            },
            "functionSelector": "e44808bc",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 645,
                    "name": "tokenID",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 634,
                    "src": "3855:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 646,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 644,
                  "name": "onlyLinker",
                  "nameLocations": [
                    "3844:10:1"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 7834,
                  "src": "3844:10:1"
                },
                "nodeType": "ModifierInvocation",
                "src": "3844:19:1"
              }
            ],
            "name": "transferFromBridge",
            "nameLocation": "3695:18:1",
            "parameters": {
              "id": 643,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 634,
                  "mutability": "mutable",
                  "name": "tokenID",
                  "nameLocation": "3731:7:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 657,
                  "src": "3723:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 633,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3723:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 636,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "3756:4:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 657,
                  "src": "3748:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 635,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3748:7:1",
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
                  "id": 638,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "3778:2:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 657,
                  "src": "3770:10:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 637,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3770:7:1",
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
                  "id": 640,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "3798:6:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 657,
                  "src": "3790:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 639,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3790:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 642,
                  "mutability": "mutable",
                  "name": "caller",
                  "nameLocation": "3822:6:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 657,
                  "src": "3814:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 641,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3814:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3713:121:1"
            },
            "returnParameters": {
              "id": 647,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3864:0:1"
            },
            "scope": 1174,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 680,
            "nodeType": "FunctionDefinition",
            "src": "4478:225:1",
            "nodes": [],
            "body": {
              "id": 679,
              "nodeType": "Block",
              "src": "4639:64:1",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 673,
                        "name": "tokenID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 660,
                        "src": "4662:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 674,
                        "name": "operator",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 662,
                        "src": "4671:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 675,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 664,
                        "src": "4681:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 676,
                        "name": "caller",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 666,
                        "src": "4689:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 672,
                      "name": "_setApproval",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8035,
                      "src": "4649:12:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_uint256_$_t_address_$returns$__$",
                        "typeString": "function (uint256,address,uint256,address)"
                      }
                    },
                    "id": 677,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4649:47:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 678,
                  "nodeType": "ExpressionStatement",
                  "src": "4649:47:1"
                }
              ]
            },
            "documentation": {
              "id": 658,
              "nodeType": "StructuredDocumentation",
              "src": "3977:496:1",
              "text": "@notice Allows the compatibility linking contract to forward calls to\n         set asset approvals.\n @param tokenID The asset to approve the use of.\n @param operator The address who will be able to use the tokens.\n @param amount The max tokens the approved person can use, setting to\n        uint256.max will cause the value to never decrement [saving gas\n        on transfer].\n @param caller The eth address which called the linking contract."
            },
            "functionSelector": "4ed2d6ac",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 669,
                    "name": "tokenID",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 660,
                    "src": "4630:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 670,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 668,
                  "name": "onlyLinker",
                  "nameLocations": [
                    "4619:10:1"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 7834,
                  "src": "4619:10:1"
                },
                "nodeType": "ModifierInvocation",
                "src": "4619:19:1"
              }
            ],
            "name": "setApprovalBridge",
            "nameLocation": "4487:17:1",
            "parameters": {
              "id": 667,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 660,
                  "mutability": "mutable",
                  "name": "tokenID",
                  "nameLocation": "4522:7:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 680,
                  "src": "4514:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 659,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4514:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 662,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "4547:8:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 680,
                  "src": "4539:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 661,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4539:7:1",
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
                  "id": 664,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "4573:6:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 680,
                  "src": "4565:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 663,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4565:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 666,
                  "mutability": "mutable",
                  "name": "caller",
                  "nameLocation": "4597:6:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 680,
                  "src": "4589:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 665,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4589:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4504:105:1"
            },
            "returnParameters": {
              "id": 671,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4639:0:1"
            },
            "scope": 1174,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 705,
            "nodeType": "FunctionDefinition",
            "src": "4935:277:1",
            "nodes": [],
            "body": {
              "id": 704,
              "nodeType": "Block",
              "src": "5004:208:1",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 695,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "baseExpression": {
                          "id": 688,
                          "name": "_isApprovedForAll",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9298,
                          "src": "5051:17:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                            "typeString": "mapping(address => mapping(address => bool))"
                          }
                        },
                        "id": 692,
                        "indexExpression": {
                          "expression": {
                            "id": 689,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "5069:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 690,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5073:6:1",
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "5069:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "5051:29:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 693,
                      "indexExpression": {
                        "id": 691,
                        "name": "operator",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 683,
                        "src": "5081:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "5051:39:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 694,
                      "name": "approved",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 685,
                      "src": "5093:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "5051:50:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 696,
                  "nodeType": "ExpressionStatement",
                  "src": "5051:50:1"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 698,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "5174:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 699,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5178:6:1",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "5174:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 700,
                        "name": "operator",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 683,
                        "src": "5186:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 701,
                        "name": "approved",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 685,
                        "src": "5196:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 697,
                      "name": "ApprovalForAll",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4682,
                      "src": "5159:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_bool_$returns$__$",
                        "typeString": "function (address,address,bool)"
                      }
                    },
                    "id": 702,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5159:46:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 703,
                  "nodeType": "EmitStatement",
                  "src": "5154:51:1"
                }
              ]
            },
            "documentation": {
              "id": 681,
              "nodeType": "StructuredDocumentation",
              "src": "4709:221:1",
              "text": "@notice Allows a user to approve an operator to use all of their assets.\n @param operator The eth address which can access the caller's assets.\n @param approved True to approve, false to remove approval."
            },
            "functionSelector": "a22cb465",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setApprovalForAll",
            "nameLocation": "4944:17:1",
            "parameters": {
              "id": 686,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 683,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "4970:8:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 705,
                  "src": "4962:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 682,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4962:7:1",
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
                  "id": 685,
                  "mutability": "mutable",
                  "name": "approved",
                  "nameLocation": "4985:8:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 705,
                  "src": "4980:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 684,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "4980:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4961:33:1"
            },
            "returnParameters": {
              "id": 687,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5004:0:1"
            },
            "scope": 1174,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 724,
            "nodeType": "FunctionDefinition",
            "src": "5642:179:1",
            "nodes": [],
            "body": {
              "id": 723,
              "nodeType": "Block",
              "src": "5753:68:1",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 716,
                        "name": "tokenID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 708,
                        "src": "5776:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 717,
                        "name": "operator",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 710,
                        "src": "5785:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 718,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 712,
                        "src": "5795:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 719,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "5803:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 720,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5807:6:1",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "5803:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 715,
                      "name": "_setApproval",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8035,
                      "src": "5763:12:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_uint256_$_t_address_$returns$__$",
                        "typeString": "function (uint256,address,uint256,address)"
                      }
                    },
                    "id": 721,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5763:51:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 722,
                  "nodeType": "ExpressionStatement",
                  "src": "5763:51:1"
                }
              ]
            },
            "documentation": {
              "id": 706,
              "nodeType": "StructuredDocumentation",
              "src": "5218:419:1",
              "text": "@notice Allows a user to set an approval for an individual asset with\n         specific amount.\n @param tokenID The asset to approve the use of.\n @param operator The address who will be able to use the tokens.\n @param amount The max tokens the approved person can use, setting to\n        uint256.max will cause the value to never decrement [saving gas\n        on transfer]."
            },
            "functionSelector": "9cd241af",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setApproval",
            "nameLocation": "5651:11:1",
            "parameters": {
              "id": 713,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 708,
                  "mutability": "mutable",
                  "name": "tokenID",
                  "nameLocation": "5680:7:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 724,
                  "src": "5672:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 707,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5672:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 710,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "5705:8:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 724,
                  "src": "5697:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 709,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5697:7:1",
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
                  "id": 712,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "5731:6:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 724,
                  "src": "5723:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 711,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5723:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5662:81:1"
            },
            "returnParameters": {
              "id": 714,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5753:0:1"
            },
            "scope": 1174,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 746,
            "nodeType": "FunctionDefinition",
            "src": "6108:209:1",
            "nodes": [],
            "body": {
              "id": 745,
              "nodeType": "Block",
              "src": "6259:58:1",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 739,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 727,
                        "src": "6288:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 740,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 729,
                        "src": "6294:2:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 741,
                        "name": "ids",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 732,
                        "src": "6298:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                          "typeString": "uint256[] calldata"
                        }
                      },
                      {
                        "id": 742,
                        "name": "values",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 735,
                        "src": "6303:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                          "typeString": "uint256[] calldata"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                          "typeString": "uint256[] calldata"
                        },
                        {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                          "typeString": "uint256[] calldata"
                        }
                      ],
                      "id": 738,
                      "name": "_batchTransferFrom",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7906,
                      "src": "6269:18:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_array$_t_uint256_$dyn_calldata_ptr_$_t_array$_t_uint256_$dyn_calldata_ptr_$returns$__$",
                        "typeString": "function (address,address,uint256[] calldata,uint256[] calldata)"
                      }
                    },
                    "id": 743,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6269:41:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 744,
                  "nodeType": "ExpressionStatement",
                  "src": "6269:41:1"
                }
              ]
            },
            "documentation": {
              "id": 725,
              "nodeType": "StructuredDocumentation",
              "src": "5827:276:1",
              "text": "@notice Transfers several assets from one account to another.\n @param from the source account.\n @param to the destination account.\n @param ids The array of token ids of the asset to transfer.\n @param values The amount of each token to transfer."
            },
            "functionSelector": "17fad7fc",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "batchTransferFrom",
            "nameLocation": "6117:17:1",
            "parameters": {
              "id": 736,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 727,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "6152:4:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 746,
                  "src": "6144:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 726,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6144:7:1",
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
                  "id": 729,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "6174:2:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 746,
                  "src": "6166:10:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 728,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6166:7:1",
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
                  "id": 732,
                  "mutability": "mutable",
                  "name": "ids",
                  "nameLocation": "6205:3:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 746,
                  "src": "6186:22:1",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 730,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "6186:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 731,
                    "nodeType": "ArrayTypeName",
                    "src": "6186:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 735,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "6237:6:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 746,
                  "src": "6218:25:1",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 733,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "6218:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 734,
                    "nodeType": "ArrayTypeName",
                    "src": "6218:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6134:115:1"
            },
            "returnParameters": {
              "id": 737,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6259:0:1"
            },
            "scope": 1174,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 760,
            "nodeType": "FunctionDefinition",
            "src": "6413:101:1",
            "nodes": [],
            "body": {
              "id": 759,
              "nodeType": "Block",
              "src": "6466:48:1",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 755,
                            "name": "_baseToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9215,
                            "src": "6495:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$3030",
                              "typeString": "contract IERC20"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_IERC20_$3030",
                              "typeString": "contract IERC20"
                            }
                          ],
                          "expression": {
                            "id": 753,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "6484:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 754,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "6488:6:1",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "6484:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 756,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6484:22:1",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 752,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1173,
                      "src": "6476:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 757,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6476:31:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 758,
                  "nodeType": "ExpressionStatement",
                  "src": "6476:31:1"
                }
              ]
            },
            "baseFunctions": [
              3952
            ],
            "documentation": {
              "id": 747,
              "nodeType": "StructuredDocumentation",
              "src": "6344:64:1",
              "text": "@notice Gets the base token.\n @return The base token."
            },
            "functionSelector": "c55dae63",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "baseToken",
            "nameLocation": "6422:9:1",
            "parameters": {
              "id": 748,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6431:2:1"
            },
            "returnParameters": {
              "id": 751,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 750,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 760,
                  "src": "6457:7:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 749,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6457:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6456:9:1"
            },
            "scope": 1174,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 779,
            "nodeType": "FunctionDefinition",
            "src": "6645:179:1",
            "nodes": [],
            "body": {
              "id": 778,
              "nodeType": "Block",
              "src": "6759:65:1",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "baseExpression": {
                              "id": 772,
                              "name": "_checkpoints",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9259,
                              "src": "6788:12:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$3499_storage_$",
                                "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint storage ref)"
                              }
                            },
                            "id": 774,
                            "indexExpression": {
                              "id": 773,
                              "name": "_checkpointId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 763,
                              "src": "6801:13:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "6788:27:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Checkpoint_$3499_storage",
                              "typeString": "struct IHyperdrive.Checkpoint storage ref"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_Checkpoint_$3499_storage",
                              "typeString": "struct IHyperdrive.Checkpoint storage ref"
                            }
                          ],
                          "expression": {
                            "id": 770,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "6777:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 771,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "6781:6:1",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "6777:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 775,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6777:39:1",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 769,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1173,
                      "src": "6769:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 776,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6769:48:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 777,
                  "nodeType": "ExpressionStatement",
                  "src": "6769:48:1"
                }
              ]
            },
            "baseFunctions": [
              3960
            ],
            "documentation": {
              "id": 761,
              "nodeType": "StructuredDocumentation",
              "src": "6520:120:1",
              "text": "@notice Gets a specified checkpoint.\n @param _checkpointId The checkpoint ID.\n @return The checkpoint."
            },
            "functionSelector": "20fc4881",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getCheckpoint",
            "nameLocation": "6654:13:1",
            "parameters": {
              "id": 764,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 763,
                  "mutability": "mutable",
                  "name": "_checkpointId",
                  "nameLocation": "6685:13:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 779,
                  "src": "6677:21:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 762,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6677:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6667:37:1"
            },
            "returnParameters": {
              "id": 768,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 767,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 779,
                  "src": "6728:29:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Checkpoint_$3499_memory_ptr",
                    "typeString": "struct IHyperdrive.Checkpoint"
                  },
                  "typeName": {
                    "id": 766,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 765,
                      "name": "IHyperdrive.Checkpoint",
                      "nameLocations": [
                        "6728:11:1",
                        "6740:10:1"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 3499,
                      "src": "6728:22:1"
                    },
                    "referencedDeclaration": 3499,
                    "src": "6728:22:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Checkpoint_$3499_storage_ptr",
                      "typeString": "struct IHyperdrive.Checkpoint"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6727:31:1"
            },
            "scope": 1174,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 814,
            "nodeType": "FunctionDefinition",
            "src": "7029:984:1",
            "nodes": [],
            "body": {
              "id": 813,
              "nodeType": "Block",
              "src": "7136:877:1",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 791,
                                "name": "_baseToken",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9215,
                                "src": "7251:10:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC20_$3030",
                                  "typeString": "contract IERC20"
                                }
                              },
                              {
                                "id": 792,
                                "name": "_linkerFactory",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9276,
                                "src": "7298:14:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "id": 793,
                                "name": "_linkerCodeHash",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9279,
                                "src": "7350:15:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              {
                                "id": 794,
                                "name": "_initialSharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9236,
                                "src": "7406:18:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 795,
                                "name": "_minimumShareReserves",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9239,
                                "src": "7468:21:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 796,
                                "name": "_minimumTransactionAmount",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9242,
                                "src": "7537:25:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 797,
                                "name": "_precisionThreshold",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9245,
                                "src": "7604:19:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 798,
                                "name": "_positionDuration",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9221,
                                "src": "7663:17:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 799,
                                "name": "_checkpointDuration",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9218,
                                "src": "7722:19:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 800,
                                "name": "_timeStretch",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9224,
                                "src": "7776:12:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 801,
                                "name": "_governance",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9265,
                                "src": "7822:11:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "id": 802,
                                "name": "_feeCollector",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9262,
                                "src": "7869:13:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "arguments": [
                                  {
                                    "id": 805,
                                    "name": "_curveFee",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 9227,
                                    "src": "7927:9:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  {
                                    "id": 806,
                                    "name": "_flatFee",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 9230,
                                    "src": "7938:8:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  {
                                    "id": 807,
                                    "name": "_governanceFee",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 9233,
                                    "src": "7948:14:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "expression": {
                                    "id": 803,
                                    "name": "IHyperdrive",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 3759,
                                    "src": "7910:11:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$3759_$",
                                      "typeString": "type(contract IHyperdrive)"
                                    }
                                  },
                                  "id": 804,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "7922:4:1",
                                  "memberName": "Fees",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 3516,
                                  "src": "7910:16:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_struct$_Fees_$3516_storage_ptr_$",
                                    "typeString": "type(struct IHyperdrive.Fees storage pointer)"
                                  }
                                },
                                "id": 808,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "structConstructorCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "7910:53:1",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Fees_$3516_memory_ptr",
                                  "typeString": "struct IHyperdrive.Fees memory"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_IERC20_$3030",
                                  "typeString": "contract IERC20"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_struct$_Fees_$3516_memory_ptr",
                                  "typeString": "struct IHyperdrive.Fees memory"
                                }
                              ],
                              "expression": {
                                "id": 789,
                                "name": "IHyperdrive",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 3759,
                                "src": "7195:11:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$3759_$",
                                  "typeString": "type(contract IHyperdrive)"
                                }
                              },
                              "id": 790,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "7207:10:1",
                              "memberName": "PoolConfig",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 3558,
                              "src": "7195:22:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_struct$_PoolConfig_$3558_storage_ptr_$",
                                "typeString": "type(struct IHyperdrive.PoolConfig storage pointer)"
                              }
                            },
                            "id": 809,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "structConstructorCall",
                            "lValueRequested": false,
                            "nameLocations": [
                              "7240:9:1",
                              "7283:13:1",
                              "7334:14:1",
                              "7387:17:1",
                              "7446:20:1",
                              "7511:24:1",
                              "7584:18:1",
                              "7645:16:1",
                              "7702:18:1",
                              "7763:11:1",
                              "7810:10:1",
                              "7855:12:1",
                              "7904:4:1"
                            ],
                            "names": [
                              "baseToken",
                              "linkerFactory",
                              "linkerCodeHash",
                              "initialSharePrice",
                              "minimumShareReserves",
                              "minimumTransactionAmount",
                              "precisionThreshold",
                              "positionDuration",
                              "checkpointDuration",
                              "timeStretch",
                              "governance",
                              "feeCollector",
                              "fees"
                            ],
                            "nodeType": "FunctionCall",
                            "src": "7195:787:1",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            }
                          ],
                          "expression": {
                            "id": 787,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "7167:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 788,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "7171:6:1",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "7167:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 810,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7167:829:1",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 786,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1173,
                      "src": "7146:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 811,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7146:860:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 812,
                  "nodeType": "ExpressionStatement",
                  "src": "7146:860:1"
                }
              ]
            },
            "baseFunctions": [
              3972
            ],
            "documentation": {
              "id": 780,
              "nodeType": "StructuredDocumentation",
              "src": "6830:194:1",
              "text": "@notice Gets the pool's configuration parameters.\n @dev These parameters are immutable, so this should only need to be\n      called once.\n @return The PoolConfig struct."
            },
            "functionSelector": "b0d96580",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getPoolConfig",
            "nameLocation": "7038:13:1",
            "parameters": {
              "id": 781,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7051:2:1"
            },
            "returnParameters": {
              "id": 785,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 784,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 814,
                  "src": "7101:29:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolConfig"
                  },
                  "typeName": {
                    "id": 783,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 782,
                      "name": "IHyperdrive.PoolConfig",
                      "nameLocations": [
                        "7101:11:1",
                        "7113:10:1"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 3558,
                      "src": "7101:22:1"
                    },
                    "referencedDeclaration": 3558,
                    "src": "7101:22:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$3558_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7100:31:1"
            },
            "scope": 1174,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 906,
            "nodeType": "FunctionDefinition",
            "src": "8188:1460:1",
            "nodes": [],
            "body": {
              "id": 905,
              "nodeType": "Block",
              "src": "8263:1385:1",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    822
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 822,
                      "mutability": "mutable",
                      "name": "sharePrice",
                      "nameLocation": "8281:10:1",
                      "nodeType": "VariableDeclaration",
                      "scope": 905,
                      "src": "8273:18:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 821,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "8273:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 825,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 823,
                      "name": "_pricePerShare",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4716,
                      "src": "8294:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                        "typeString": "function () view returns (uint256)"
                      }
                    },
                    "id": 824,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8294:16:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8273:37:1"
                },
                {
                  "assignments": [
                    827
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 827,
                      "mutability": "mutable",
                      "name": "lpTotalSupply",
                      "nameLocation": "8328:13:1",
                      "nodeType": "VariableDeclaration",
                      "scope": 905,
                      "src": "8320:21:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 826,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "8320:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 840,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 839,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 836,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "baseExpression": {
                          "id": 828,
                          "name": "_totalSupply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9291,
                          "src": "8344:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                            "typeString": "mapping(uint256 => uint256)"
                          }
                        },
                        "id": 831,
                        "indexExpression": {
                          "expression": {
                            "id": 829,
                            "name": "AssetId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9781,
                            "src": "8357:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_AssetId_$9781_$",
                              "typeString": "type(library AssetId)"
                            }
                          },
                          "id": 830,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "8365:12:1",
                          "memberName": "_LP_ASSET_ID",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 9473,
                          "src": "8357:20:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "8344:34:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "+",
                      "rightExpression": {
                        "baseExpression": {
                          "id": 832,
                          "name": "_totalSupply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9291,
                          "src": "8393:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                            "typeString": "mapping(uint256 => uint256)"
                          }
                        },
                        "id": 835,
                        "indexExpression": {
                          "expression": {
                            "id": 833,
                            "name": "AssetId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9781,
                            "src": "8406:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_AssetId_$9781_$",
                              "typeString": "type(library AssetId)"
                            }
                          },
                          "id": 834,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "8414:26:1",
                          "memberName": "_WITHDRAWAL_SHARE_ASSET_ID",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 9482,
                          "src": "8406:34:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "8393:48:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "8344:97:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "expression": {
                        "id": 837,
                        "name": "_withdrawPool",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9253,
                        "src": "8456:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_WithdrawPool_$3506_storage",
                          "typeString": "struct IHyperdrive.WithdrawPool storage ref"
                        }
                      },
                      "id": 838,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "8470:15:1",
                      "memberName": "readyToWithdraw",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3502,
                      "src": "8456:29:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "src": "8344:141:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8320:165:1"
                },
                {
                  "assignments": [
                    842
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 842,
                      "mutability": "mutable",
                      "name": "presentValue",
                      "nameLocation": "8503:12:1",
                      "nodeType": "VariableDeclaration",
                      "scope": 905,
                      "src": "8495:20:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 841,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "8495:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 857,
                  "initialValue": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 845,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 843,
                        "name": "sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 822,
                        "src": "8518:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 844,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8531:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "8518:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "hexValue": "30",
                      "id": 855,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "8688:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "id": 856,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "8518:171:1",
                    "trueExpression": {
                      "arguments": [
                        {
                          "id": 853,
                          "name": "sharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 822,
                          "src": "8662:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "id": 849,
                                  "name": "sharePrice",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 822,
                                  "src": "8624:10:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "id": 848,
                                "name": "_getPresentValueParams",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4880,
                                "src": "8601:22:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_struct$_PresentValueParams_$11027_memory_ptr_$",
                                  "typeString": "function (uint256) view returns (struct HyperdriveMath.PresentValueParams memory)"
                                }
                              },
                              "id": 850,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "8601:34:1",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_PresentValueParams_$11027_memory_ptr",
                                "typeString": "struct HyperdriveMath.PresentValueParams memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_struct$_PresentValueParams_$11027_memory_ptr",
                                "typeString": "struct HyperdriveMath.PresentValueParams memory"
                              }
                            ],
                            "expression": {
                              "id": 846,
                              "name": "HyperdriveMath",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11352,
                              "src": "8547:14:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$11352_$",
                                "typeString": "type(library HyperdriveMath)"
                              }
                            },
                            "id": 847,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "8579:21:1",
                            "memberName": "calculatePresentValue",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 11269,
                            "src": "8547:53:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_struct$_PresentValueParams_$11027_memory_ptr_$returns$_t_uint256_$",
                              "typeString": "function (struct HyperdriveMath.PresentValueParams memory) pure returns (uint256)"
                            }
                          },
                          "id": 851,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8547:89:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 852,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "8654:7:1",
                        "memberName": "mulDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9831,
                        "src": "8547:114:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 854,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8547:126:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8495:194:1"
                },
                {
                  "assignments": [
                    862
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 862,
                      "mutability": "mutable",
                      "name": "poolInfo",
                      "nameLocation": "8727:8:1",
                      "nodeType": "VariableDeclaration",
                      "scope": 905,
                      "src": "8699:36:1",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_PoolInfo_$3598_memory_ptr",
                        "typeString": "struct IHyperdrive.PoolInfo"
                      },
                      "typeName": {
                        "id": 861,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 860,
                          "name": "IHyperdrive.PoolInfo",
                          "nameLocations": [
                            "8699:11:1",
                            "8711:8:1"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 3598,
                          "src": "8699:20:1"
                        },
                        "referencedDeclaration": 3598,
                        "src": "8699:20:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolInfo_$3598_storage_ptr",
                          "typeString": "struct IHyperdrive.PoolInfo"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 897,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 865,
                          "name": "_marketState",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9249,
                          "src": "8788:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_MarketState_$3492_storage",
                            "typeString": "struct IHyperdrive.MarketState storage ref"
                          }
                        },
                        "id": 866,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "8801:13:1",
                        "memberName": "shareReserves",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 3464,
                        "src": "8788:26:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
                        }
                      },
                      {
                        "expression": {
                          "id": 867,
                          "name": "_marketState",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9249,
                          "src": "8845:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_MarketState_$3492_storage",
                            "typeString": "struct IHyperdrive.MarketState storage ref"
                          }
                        },
                        "id": 868,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "8858:15:1",
                        "memberName": "shareAdjustment",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 3470,
                        "src": "8845:28:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int128",
                          "typeString": "int128"
                        }
                      },
                      {
                        "expression": {
                          "id": 869,
                          "name": "_marketState",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9249,
                          "src": "8901:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_MarketState_$3492_storage",
                            "typeString": "struct IHyperdrive.MarketState storage ref"
                          }
                        },
                        "id": 870,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "8914:12:1",
                        "memberName": "bondReserves",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 3467,
                        "src": "8901:25:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
                        }
                      },
                      {
                        "id": 871,
                        "name": "sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 822,
                        "src": "8952:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 872,
                          "name": "_marketState",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9249,
                          "src": "8994:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_MarketState_$3492_storage",
                            "typeString": "struct IHyperdrive.MarketState storage ref"
                          }
                        },
                        "id": 873,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "9007:16:1",
                        "memberName": "longsOutstanding",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 3476,
                        "src": "8994:29:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
                        }
                      },
                      {
                        "expression": {
                          "id": 874,
                          "name": "_marketState",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9249,
                          "src": "9062:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_MarketState_$3492_storage",
                            "typeString": "struct IHyperdrive.MarketState storage ref"
                          }
                        },
                        "id": 875,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "9075:23:1",
                        "memberName": "longAverageMaturityTime",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 3482,
                        "src": "9062:36:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
                        }
                      },
                      {
                        "expression": {
                          "id": 876,
                          "name": "_marketState",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9249,
                          "src": "9131:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_MarketState_$3492_storage",
                            "typeString": "struct IHyperdrive.MarketState storage ref"
                          }
                        },
                        "id": 877,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "9144:17:1",
                        "memberName": "shortsOutstanding",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 3479,
                        "src": "9131:30:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
                        }
                      },
                      {
                        "expression": {
                          "id": 878,
                          "name": "_marketState",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9249,
                          "src": "9201:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_MarketState_$3492_storage",
                            "typeString": "struct IHyperdrive.MarketState storage ref"
                          }
                        },
                        "id": 879,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "9214:24:1",
                        "memberName": "shortAverageMaturityTime",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 3485,
                        "src": "9201:37:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
                        }
                      },
                      {
                        "id": 880,
                        "name": "lpTotalSupply",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 827,
                        "src": "9267:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 883,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 881,
                            "name": "lpTotalSupply",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 827,
                            "src": "9308:13:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 882,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9325:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "9308:18:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseExpression": {
                          "arguments": [
                            {
                              "id": 887,
                              "name": "lpTotalSupply",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 827,
                              "src": "9386:13:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "id": 885,
                              "name": "presentValue",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 842,
                              "src": "9365:12:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 886,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "9378:7:1",
                            "memberName": "divDown",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 9849,
                            "src": "9365:20:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 888,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9365:35:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 889,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "Conditional",
                        "src": "9308:92:1",
                        "trueExpression": {
                          "hexValue": "30",
                          "id": 884,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "9345:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 890,
                          "name": "_withdrawPool",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9253,
                          "src": "9447:13:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_WithdrawPool_$3506_storage",
                            "typeString": "struct IHyperdrive.WithdrawPool storage ref"
                          }
                        },
                        "id": 891,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "9461:15:1",
                        "memberName": "readyToWithdraw",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 3502,
                        "src": "9447:29:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
                        }
                      },
                      {
                        "expression": {
                          "id": 892,
                          "name": "_withdrawPool",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9253,
                          "src": "9516:13:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_WithdrawPool_$3506_storage",
                            "typeString": "struct IHyperdrive.WithdrawPool storage ref"
                          }
                        },
                        "id": 893,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "9530:8:1",
                        "memberName": "proceeds",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 3505,
                        "src": "9516:22:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
                        }
                      },
                      {
                        "expression": {
                          "id": 894,
                          "name": "_marketState",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9249,
                          "src": "9566:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_MarketState_$3492_storage",
                            "typeString": "struct IHyperdrive.MarketState storage ref"
                          }
                        },
                        "id": 895,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "9579:12:1",
                        "memberName": "longExposure",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 3473,
                        "src": "9566:25:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
                        },
                        {
                          "typeIdentifier": "t_int128",
                          "typeString": "int128"
                        },
                        {
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
                        },
                        {
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
                        },
                        {
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
                        },
                        {
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
                        },
                        {
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
                        },
                        {
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
                        }
                      ],
                      "expression": {
                        "id": 863,
                        "name": "IHyperdrive",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3759,
                        "src": "8738:11:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$3759_$",
                          "typeString": "type(contract IHyperdrive)"
                        }
                      },
                      "id": 864,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "8750:8:1",
                      "memberName": "PoolInfo",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3598,
                      "src": "8738:20:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_struct$_PoolInfo_$3598_storage_ptr_$",
                        "typeString": "type(struct IHyperdrive.PoolInfo storage pointer)"
                      }
                    },
                    "id": 896,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "structConstructorCall",
                    "lValueRequested": false,
                    "nameLocations": [
                      "8773:13:1",
                      "8828:15:1",
                      "8887:12:1",
                      "8940:10:1",
                      "8976:16:1",
                      "9037:23:1",
                      "9112:17:1",
                      "9175:24:1",
                      "9252:13:1",
                      "9294:12:1",
                      "9414:31:1",
                      "9490:24:1",
                      "9552:12:1"
                    ],
                    "names": [
                      "shareReserves",
                      "shareAdjustment",
                      "bondReserves",
                      "sharePrice",
                      "longsOutstanding",
                      "longAverageMaturityTime",
                      "shortsOutstanding",
                      "shortAverageMaturityTime",
                      "lpTotalSupply",
                      "lpSharePrice",
                      "withdrawalSharesReadyToWithdraw",
                      "withdrawalSharesProceeds",
                      "longExposure"
                    ],
                    "nodeType": "FunctionCall",
                    "src": "8738:864:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolInfo_$3598_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolInfo memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8699:903:1"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 901,
                            "name": "poolInfo",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 862,
                            "src": "9631:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PoolInfo_$3598_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolInfo memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_PoolInfo_$3598_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolInfo memory"
                            }
                          ],
                          "expression": {
                            "id": 899,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "9620:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 900,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "9624:6:1",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "9620:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 902,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9620:20:1",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 898,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1173,
                      "src": "9612:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 903,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9612:29:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 904,
                  "nodeType": "ExpressionStatement",
                  "src": "9612:29:1"
                }
              ]
            },
            "baseFunctions": [
              3989
            ],
            "documentation": {
              "id": 815,
              "nodeType": "StructuredDocumentation",
              "src": "8019:164:1",
              "text": "@notice Gets info about the pool's reserves and other state that is\n         important to evaluate potential trades.\n @return The PoolInfo struct."
            },
            "functionSelector": "60246c88",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getPoolInfo",
            "nameLocation": "8197:11:1",
            "parameters": {
              "id": 816,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8208:2:1"
            },
            "returnParameters": {
              "id": 820,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 819,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 906,
                  "src": "8234:27:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolInfo_$3598_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolInfo"
                  },
                  "typeName": {
                    "id": 818,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 817,
                      "name": "IHyperdrive.PoolInfo",
                      "nameLocations": [
                        "8234:11:1",
                        "8246:8:1"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 3598,
                      "src": "8234:20:1"
                    },
                    "referencedDeclaration": 3598,
                    "src": "8234:20:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolInfo_$3598_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolInfo"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8233:29:1"
            },
            "scope": 1174,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 927,
            "nodeType": "FunctionDefinition",
            "src": "9772:367:1",
            "nodes": [],
            "body": {
              "id": 926,
              "nodeType": "Block",
              "src": "9883:256:1",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "expression": {
                                  "id": 918,
                                  "name": "_withdrawPool",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 9253,
                                  "src": "10006:13:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_WithdrawPool_$3506_storage",
                                    "typeString": "struct IHyperdrive.WithdrawPool storage ref"
                                  }
                                },
                                "id": 919,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "10020:15:1",
                                "memberName": "readyToWithdraw",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 3502,
                                "src": "10006:29:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint128",
                                  "typeString": "uint128"
                                }
                              },
                              {
                                "expression": {
                                  "id": 920,
                                  "name": "_withdrawPool",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 9253,
                                  "src": "10067:13:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_WithdrawPool_$3506_storage",
                                    "typeString": "struct IHyperdrive.WithdrawPool storage ref"
                                  }
                                },
                                "id": 921,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "10081:8:1",
                                "memberName": "proceeds",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 3505,
                                "src": "10067:22:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint128",
                                  "typeString": "uint128"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint128",
                                  "typeString": "uint128"
                                },
                                {
                                  "typeIdentifier": "t_uint128",
                                  "typeString": "uint128"
                                }
                              ],
                              "expression": {
                                "id": 916,
                                "name": "IHyperdrive",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 3759,
                                "src": "9942:11:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$3759_$",
                                  "typeString": "type(contract IHyperdrive)"
                                }
                              },
                              "id": 917,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "9954:12:1",
                              "memberName": "WithdrawPool",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 3506,
                              "src": "9942:24:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_struct$_WithdrawPool_$3506_storage_ptr_$",
                                "typeString": "type(struct IHyperdrive.WithdrawPool storage pointer)"
                              }
                            },
                            "id": 922,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "structConstructorCall",
                            "lValueRequested": false,
                            "nameLocations": [
                              "9989:15:1",
                              "10057:8:1"
                            ],
                            "names": [
                              "readyToWithdraw",
                              "proceeds"
                            ],
                            "nodeType": "FunctionCall",
                            "src": "9942:166:1",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_WithdrawPool_$3506_memory_ptr",
                              "typeString": "struct IHyperdrive.WithdrawPool memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_WithdrawPool_$3506_memory_ptr",
                              "typeString": "struct IHyperdrive.WithdrawPool memory"
                            }
                          ],
                          "expression": {
                            "id": 914,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "9914:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 915,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "9918:6:1",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "9914:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 923,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9914:208:1",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 913,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1173,
                      "src": "9893:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 924,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9893:239:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 925,
                  "nodeType": "ExpressionStatement",
                  "src": "9893:239:1"
                }
              ]
            },
            "baseFunctions": [
              3966
            ],
            "documentation": {
              "id": 907,
              "nodeType": "StructuredDocumentation",
              "src": "9654:113:1",
              "text": "@notice Gets information about the withdrawal pool.\n @return Hyperdrive's withdrawal pool information."
            },
            "functionSelector": "fba56008",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getWithdrawPool",
            "nameLocation": "9781:15:1",
            "parameters": {
              "id": 908,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9796:2:1"
            },
            "returnParameters": {
              "id": 912,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 911,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 927,
                  "src": "9846:31:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_WithdrawPool_$3506_memory_ptr",
                    "typeString": "struct IHyperdrive.WithdrawPool"
                  },
                  "typeName": {
                    "id": 910,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 909,
                      "name": "IHyperdrive.WithdrawPool",
                      "nameLocations": [
                        "9846:11:1",
                        "9858:12:1"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 3506,
                      "src": "9846:24:1"
                    },
                    "referencedDeclaration": 3506,
                    "src": "9846:24:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_WithdrawPool_$3506_storage_ptr",
                      "typeString": "struct IHyperdrive.WithdrawPool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9845:33:1"
            },
            "scope": 1174,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 941,
            "nodeType": "FunctionDefinition",
            "src": "10292:132:1",
            "nodes": [],
            "body": {
              "id": 940,
              "nodeType": "Block",
              "src": "10364:60:1",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 936,
                            "name": "_governanceFeesAccrued",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9268,
                            "src": "10393:22:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "id": 934,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "10382:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 935,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "10386:6:1",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "10382:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 937,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10382:34:1",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 933,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1173,
                      "src": "10374:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 938,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10374:43:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 939,
                  "nodeType": "ExpressionStatement",
                  "src": "10374:43:1"
                }
              ]
            },
            "baseFunctions": [
              3983
            ],
            "documentation": {
              "id": 928,
              "nodeType": "StructuredDocumentation",
              "src": "10145:142:1",
              "text": "@notice Gets info about the fees presently accrued by the pool.\n @return Governance fees denominated in shares yet to be collected."
            },
            "functionSelector": "c69e16ad",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getUncollectedGovernanceFees",
            "nameLocation": "10301:28:1",
            "parameters": {
              "id": 929,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10329:2:1"
            },
            "returnParameters": {
              "id": 932,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 931,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 941,
                  "src": "10355:7:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 930,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10355:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10354:9:1"
            },
            "scope": 1174,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 956,
            "nodeType": "FunctionDefinition",
            "src": "10503:159:1",
            "nodes": [],
            "body": {
              "id": 955,
              "nodeType": "Block",
              "src": "10612:50:1",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 951,
                            "name": "_marketState",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9249,
                            "src": "10641:12:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_MarketState_$3492_storage",
                              "typeString": "struct IHyperdrive.MarketState storage ref"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_MarketState_$3492_storage",
                              "typeString": "struct IHyperdrive.MarketState storage ref"
                            }
                          ],
                          "expression": {
                            "id": 949,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "10630:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 950,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "10634:6:1",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "10630:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 952,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10630:24:1",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 948,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1173,
                      "src": "10622:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 953,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10622:33:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 954,
                  "nodeType": "ExpressionStatement",
                  "src": "10622:33:1"
                }
              ]
            },
            "baseFunctions": [
              3978
            ],
            "documentation": {
              "id": 942,
              "nodeType": "StructuredDocumentation",
              "src": "10430:68:1",
              "text": "@notice Gets the market state.\n @return The market state."
            },
            "functionSelector": "d8165743",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getMarketState",
            "nameLocation": "10512:14:1",
            "parameters": {
              "id": 943,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10526:2:1"
            },
            "returnParameters": {
              "id": 947,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 946,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 956,
                  "src": "10576:30:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_MarketState_$3492_memory_ptr",
                    "typeString": "struct IHyperdrive.MarketState"
                  },
                  "typeName": {
                    "id": 945,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 944,
                      "name": "IHyperdrive.MarketState",
                      "nameLocations": [
                        "10576:11:1",
                        "10588:11:1"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 3492,
                      "src": "10576:23:1"
                    },
                    "referencedDeclaration": 3492,
                    "src": "10576:23:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_MarketState_$3492_storage_ptr",
                      "typeString": "struct IHyperdrive.MarketState"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10575:32:1"
            },
            "scope": 1174,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 1016,
            "nodeType": "FunctionDefinition",
            "src": "10903:565:1",
            "nodes": [],
            "body": {
              "id": 1015,
              "nodeType": "Block",
              "src": "10999:469:1",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    970
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 970,
                      "mutability": "mutable",
                      "name": "loaded",
                      "nameLocation": "11026:6:1",
                      "nodeType": "VariableDeclaration",
                      "scope": 1015,
                      "src": "11009:23:1",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                        "typeString": "bytes32[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 968,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "11009:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 969,
                        "nodeType": "ArrayTypeName",
                        "src": "11009:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                          "typeString": "bytes32[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 977,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 974,
                          "name": "_slots",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 960,
                          "src": "11049:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                            "typeString": "uint256[] calldata"
                          }
                        },
                        "id": 975,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "11056:6:1",
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "11049:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 973,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "11035:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_bytes32_$dyn_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (bytes32[] memory)"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 971,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "11039:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 972,
                        "nodeType": "ArrayTypeName",
                        "src": "11039:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                          "typeString": "bytes32[]"
                        }
                      }
                    },
                    "id": 976,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11035:28:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                      "typeString": "bytes32[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11009:54:1"
                },
                {
                  "body": {
                    "id": 1006,
                    "nodeType": "Block",
                    "src": "11171:253:1",
                    "statements": [
                      {
                        "assignments": [
                          987
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 987,
                            "mutability": "mutable",
                            "name": "slot",
                            "nameLocation": "11193:4:1",
                            "nodeType": "VariableDeclaration",
                            "scope": 1006,
                            "src": "11185:12:1",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 986,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "11185:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 991,
                        "initialValue": {
                          "baseExpression": {
                            "id": 988,
                            "name": "_slots",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 960,
                            "src": "11200:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                              "typeString": "uint256[] calldata"
                            }
                          },
                          "id": 990,
                          "indexExpression": {
                            "id": 989,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 979,
                            "src": "11207:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "11200:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "11185:24:1"
                      },
                      {
                        "assignments": [
                          993
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 993,
                            "mutability": "mutable",
                            "name": "data",
                            "nameLocation": "11231:4:1",
                            "nodeType": "VariableDeclaration",
                            "scope": 1006,
                            "src": "11223:12:1",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            "typeName": {
                              "id": 992,
                              "name": "bytes32",
                              "nodeType": "ElementaryTypeName",
                              "src": "11223:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 994,
                        "nodeType": "VariableDeclarationStatement",
                        "src": "11223:12:1"
                      },
                      {
                        "AST": {
                          "nodeType": "YulBlock",
                          "src": "11274:51:1",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "11292:19:1",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "slot",
                                    "nodeType": "YulIdentifier",
                                    "src": "11306:4:1"
                                  }
                                ],
                                "functionName": {
                                  "name": "sload",
                                  "nodeType": "YulIdentifier",
                                  "src": "11300:5:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "11300:11:1"
                              },
                              "variableNames": [
                                {
                                  "name": "data",
                                  "nodeType": "YulIdentifier",
                                  "src": "11292:4:1"
                                }
                              ]
                            }
                          ]
                        },
                        "evmVersion": "paris",
                        "externalReferences": [
                          {
                            "declaration": 993,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "11292:4:1",
                            "valueSize": 1
                          },
                          {
                            "declaration": 987,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "11306:4:1",
                            "valueSize": 1
                          }
                        ],
                        "flags": [
                          "memory-safe"
                        ],
                        "id": 995,
                        "nodeType": "InlineAssembly",
                        "src": "11249:76:1"
                      },
                      {
                        "expression": {
                          "id": 1000,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 996,
                              "name": "loaded",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 970,
                              "src": "11338:6:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                "typeString": "bytes32[] memory"
                              }
                            },
                            "id": 998,
                            "indexExpression": {
                              "id": 997,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 979,
                              "src": "11345:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "11338:9:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "id": 999,
                            "name": "data",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 993,
                            "src": "11350:4:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "src": "11338:16:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 1001,
                        "nodeType": "ExpressionStatement",
                        "src": "11338:16:1"
                      },
                      {
                        "id": 1005,
                        "nodeType": "UncheckedBlock",
                        "src": "11368:46:1",
                        "statements": [
                          {
                            "expression": {
                              "id": 1003,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "UnaryOperation",
                              "operator": "++",
                              "prefix": true,
                              "src": "11396:3:1",
                              "subExpression": {
                                "id": 1002,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 979,
                                "src": "11398:1:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 1004,
                            "nodeType": "ExpressionStatement",
                            "src": "11396:3:1"
                          }
                        ]
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 985,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 982,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 979,
                      "src": "11150:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 983,
                        "name": "_slots",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 960,
                        "src": "11154:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                          "typeString": "uint256[] calldata"
                        }
                      },
                      "id": 984,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "11161:6:1",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "11154:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "11150:17:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 1007,
                  "initializationExpression": {
                    "assignments": [
                      979
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 979,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "11143:1:1",
                        "nodeType": "VariableDeclaration",
                        "scope": 1007,
                        "src": "11135:9:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 978,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "11135:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 981,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 980,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "11147:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "11135:13:1"
                  },
                  "nodeType": "ForStatement",
                  "src": "11130:294:1"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 1011,
                            "name": "loaded",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 970,
                            "src": "11453:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                              "typeString": "bytes32[] memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                              "typeString": "bytes32[] memory"
                            }
                          ],
                          "expression": {
                            "id": 1009,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "11442:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 1010,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "11446:6:1",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "11442:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 1012,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "11442:18:1",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 1008,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1173,
                      "src": "11434:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 1013,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11434:27:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1014,
                  "nodeType": "ExpressionStatement",
                  "src": "11434:27:1"
                }
              ]
            },
            "baseFunctions": [
              3998
            ],
            "documentation": {
              "id": 957,
              "nodeType": "StructuredDocumentation",
              "src": "10668:230:1",
              "text": "@notice Allows plugin data libs to provide getters or other complex\n         logic instead of the main.\n @param _slots The storage slots the caller wants the data from.\n @return A raw array of loaded data."
            },
            "functionSelector": "becee9c3",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "load",
            "nameLocation": "10912:4:1",
            "parameters": {
              "id": 961,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 960,
                  "mutability": "mutable",
                  "name": "_slots",
                  "nameLocation": "10945:6:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1016,
                  "src": "10926:25:1",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 958,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "10926:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 959,
                    "nodeType": "ArrayTypeName",
                    "src": "10926:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10916:41:1"
            },
            "returnParameters": {
              "id": 965,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 964,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1016,
                  "src": "10981:16:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 962,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "10981:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 963,
                    "nodeType": "ArrayTypeName",
                    "src": "10981:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10980:18:1"
            },
            "scope": 1174,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 1038,
            "nodeType": "FunctionDefinition",
            "src": "11638:173:1",
            "nodes": [],
            "body": {
              "id": 1037,
              "nodeType": "Block",
              "src": "11745:66:1",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "baseExpression": {
                              "baseExpression": {
                                "id": 1029,
                                "name": "_balanceOf",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9286,
                                "src": "11774:10:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                                  "typeString": "mapping(uint256 => mapping(address => uint256))"
                                }
                              },
                              "id": 1031,
                              "indexExpression": {
                                "id": 1030,
                                "name": "tokenId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1019,
                                "src": "11785:7:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "11774:19:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 1033,
                            "indexExpression": {
                              "id": 1032,
                              "name": "account",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1021,
                              "src": "11794:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "11774:28:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "id": 1027,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "11763:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 1028,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "11767:6:1",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "11763:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 1034,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "11763:40:1",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 1026,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1173,
                      "src": "11755:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 1035,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11755:49:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1036,
                  "nodeType": "ExpressionStatement",
                  "src": "11755:49:1"
                }
              ]
            },
            "baseFunctions": [
              4317
            ],
            "documentation": {
              "id": 1017,
              "nodeType": "StructuredDocumentation",
              "src": "11474:159:1",
              "text": "@notice Gets an account's balance of a sub-token.\n @param tokenId The sub-token id.\n @param account The account.\n @return The balance."
            },
            "functionSelector": "3656eec2",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "balanceOf",
            "nameLocation": "11647:9:1",
            "parameters": {
              "id": 1022,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1019,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "11674:7:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1038,
                  "src": "11666:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1018,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11666:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1021,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "11699:7:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1038,
                  "src": "11691:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1020,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "11691:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11656:56:1"
            },
            "returnParameters": {
              "id": 1025,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1024,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1038,
                  "src": "11736:7:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1023,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11736:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11735:9:1"
            },
            "scope": 1174,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 1056,
            "nodeType": "FunctionDefinition",
            "src": "11946:129:1",
            "nodes": [],
            "body": {
              "id": 1055,
              "nodeType": "Block",
              "src": "12016:59:1",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "baseExpression": {
                              "id": 1049,
                              "name": "_totalSupply",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9291,
                              "src": "12045:12:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                "typeString": "mapping(uint256 => uint256)"
                              }
                            },
                            "id": 1051,
                            "indexExpression": {
                              "id": 1050,
                              "name": "tokenId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1041,
                              "src": "12058:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "12045:21:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "id": 1047,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "12034:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 1048,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "12038:6:1",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "12034:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 1052,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "12034:33:1",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 1046,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1173,
                      "src": "12026:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 1053,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12026:42:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1054,
                  "nodeType": "ExpressionStatement",
                  "src": "12026:42:1"
                }
              ]
            },
            "baseFunctions": [
              4288
            ],
            "documentation": {
              "id": 1039,
              "nodeType": "StructuredDocumentation",
              "src": "11817:124:1",
              "text": "@notice Gets the total supply of a sub-token.\n @param tokenId The sub-token id.\n @return The total supply."
            },
            "functionSelector": "bd85b039",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "totalSupply",
            "nameLocation": "11955:11:1",
            "parameters": {
              "id": 1042,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1041,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "11975:7:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1056,
                  "src": "11967:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1040,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11967:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11966:17:1"
            },
            "returnParameters": {
              "id": 1045,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1044,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1056,
                  "src": "12007:7:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1043,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12007:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12006:9:1"
            },
            "scope": 1174,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 1078,
            "nodeType": "FunctionDefinition",
            "src": "12264:186:1",
            "nodes": [],
            "body": {
              "id": 1077,
              "nodeType": "Block",
              "src": "12376:74:1",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "baseExpression": {
                              "baseExpression": {
                                "id": 1069,
                                "name": "_isApprovedForAll",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9298,
                                "src": "12405:17:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                                  "typeString": "mapping(address => mapping(address => bool))"
                                }
                              },
                              "id": 1071,
                              "indexExpression": {
                                "id": 1070,
                                "name": "account",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1059,
                                "src": "12423:7:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "12405:26:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                "typeString": "mapping(address => bool)"
                              }
                            },
                            "id": 1073,
                            "indexExpression": {
                              "id": 1072,
                              "name": "operator",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1061,
                              "src": "12432:8:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "12405:36:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          ],
                          "expression": {
                            "id": 1067,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "12394:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 1068,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "12398:6:1",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "12394:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 1074,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "12394:48:1",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 1066,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1173,
                      "src": "12386:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 1075,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12386:57:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1076,
                  "nodeType": "ExpressionStatement",
                  "src": "12386:57:1"
                }
              ]
            },
            "baseFunctions": [
              4297
            ],
            "documentation": {
              "id": 1057,
              "nodeType": "StructuredDocumentation",
              "src": "12081:178:1",
              "text": "@notice Gets the approval status of an operator for an account.\n @param account The account.\n @param operator The operator.\n @return The approval status."
            },
            "functionSelector": "e985e9c5",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isApprovedForAll",
            "nameLocation": "12273:16:1",
            "parameters": {
              "id": 1062,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1059,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "12307:7:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1078,
                  "src": "12299:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1058,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12299:7:1",
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
                  "id": 1061,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "12332:8:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1078,
                  "src": "12324:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1060,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12324:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12289:57:1"
            },
            "returnParameters": {
              "id": 1065,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1064,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1078,
                  "src": "12370:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1063,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "12370:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12369:6:1"
            },
            "scope": 1174,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 1104,
            "nodeType": "FunctionDefinition",
            "src": "12678:223:1",
            "nodes": [],
            "body": {
              "id": 1103,
              "nodeType": "Block",
              "src": "12818:83:1",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "baseExpression": {
                              "baseExpression": {
                                "baseExpression": {
                                  "id": 1093,
                                  "name": "_perTokenApprovals",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 9307,
                                  "src": "12847:18:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$_$",
                                    "typeString": "mapping(uint256 => mapping(address => mapping(address => uint256)))"
                                  }
                                },
                                "id": 1095,
                                "indexExpression": {
                                  "id": 1094,
                                  "name": "tokenId",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1081,
                                  "src": "12866:7:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "12847:27:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                  "typeString": "mapping(address => mapping(address => uint256))"
                                }
                              },
                              "id": 1097,
                              "indexExpression": {
                                "id": 1096,
                                "name": "account",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1083,
                                "src": "12875:7:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "12847:36:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 1099,
                            "indexExpression": {
                              "id": 1098,
                              "name": "spender",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1085,
                              "src": "12884:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "12847:45:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "id": 1091,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "12836:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 1092,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "12840:6:1",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "12836:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 1100,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "12836:57:1",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 1090,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1173,
                      "src": "12828:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 1101,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12828:66:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1102,
                  "nodeType": "ExpressionStatement",
                  "src": "12828:66:1"
                }
              ]
            },
            "baseFunctions": [
              4308
            ],
            "documentation": {
              "id": 1079,
              "nodeType": "StructuredDocumentation",
              "src": "12456:217:1",
              "text": "@notice Gets the approval status of an operator for an account.\n @param tokenId The sub-token id.\n @param account The account.\n @param spender The spender.\n @return The approval status."
            },
            "functionSelector": "21ff32a9",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "perTokenApprovals",
            "nameLocation": "12687:17:1",
            "parameters": {
              "id": 1086,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1081,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "12722:7:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1104,
                  "src": "12714:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1080,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12714:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1083,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "12747:7:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1104,
                  "src": "12739:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1082,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12739:7:1",
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
                  "id": 1085,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "12772:7:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1104,
                  "src": "12764:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1084,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12764:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12704:81:1"
            },
            "returnParameters": {
              "id": 1089,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1088,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1104,
                  "src": "12809:7:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1087,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12809:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12808:9:1"
            },
            "scope": 1174,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 1123,
            "nodeType": "FunctionDefinition",
            "src": "13020:137:1",
            "nodes": [],
            "body": {
              "id": 1122,
              "nodeType": "Block",
              "src": "13089:68:1",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 1117,
                                "name": "tokenId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1107,
                                "src": "13140:7:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "id": 1115,
                                "name": "AssetId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9781,
                                "src": "13118:7:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_AssetId_$9781_$",
                                  "typeString": "type(library AssetId)"
                                }
                              },
                              "id": 1116,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "13126:13:1",
                              "memberName": "assetIdToName",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 9607,
                              "src": "13118:21:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                "typeString": "function (uint256) pure returns (string memory)"
                              }
                            },
                            "id": 1118,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "13118:30:1",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          ],
                          "expression": {
                            "id": 1113,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "13107:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 1114,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "13111:6:1",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "13107:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 1119,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "13107:42:1",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 1112,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1173,
                      "src": "13099:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 1120,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "13099:51:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1121,
                  "nodeType": "ExpressionStatement",
                  "src": "13099:51:1"
                }
              ]
            },
            "baseFunctions": [
              4274
            ],
            "documentation": {
              "id": 1105,
              "nodeType": "StructuredDocumentation",
              "src": "12907:108:1",
              "text": "@notice Gets the name of a sub-token.\n @param tokenId The sub-token id.\n @return The name."
            },
            "functionSelector": "00ad800c",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "name",
            "nameLocation": "13029:4:1",
            "parameters": {
              "id": 1108,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1107,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "13042:7:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1123,
                  "src": "13034:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1106,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13034:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13033:17:1"
            },
            "returnParameters": {
              "id": 1111,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1110,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1123,
                  "src": "13074:13:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1109,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "13074:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13073:15:1"
            },
            "scope": 1174,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 1142,
            "nodeType": "FunctionDefinition",
            "src": "13280:141:1",
            "nodes": [],
            "body": {
              "id": 1141,
              "nodeType": "Block",
              "src": "13351:70:1",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 1136,
                                "name": "tokenId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1126,
                                "src": "13404:7:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "id": 1134,
                                "name": "AssetId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9781,
                                "src": "13380:7:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_AssetId_$9781_$",
                                  "typeString": "type(library AssetId)"
                                }
                              },
                              "id": 1135,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "13388:15:1",
                              "memberName": "assetIdToSymbol",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 9691,
                              "src": "13380:23:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                "typeString": "function (uint256) pure returns (string memory)"
                              }
                            },
                            "id": 1137,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "13380:32:1",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          ],
                          "expression": {
                            "id": 1132,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "13369:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 1133,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "13373:6:1",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "13369:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 1138,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "13369:44:1",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 1131,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1173,
                      "src": "13361:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 1139,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "13361:53:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1140,
                  "nodeType": "ExpressionStatement",
                  "src": "13361:53:1"
                }
              ]
            },
            "baseFunctions": [
              4281
            ],
            "documentation": {
              "id": 1124,
              "nodeType": "StructuredDocumentation",
              "src": "13163:112:1",
              "text": "@notice Gets the symbol of a sub-token.\n @param tokenId The sub-token id.\n @return The symbol."
            },
            "functionSelector": "4e41a1fb",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "symbol",
            "nameLocation": "13289:6:1",
            "parameters": {
              "id": 1127,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1126,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "13304:7:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1142,
                  "src": "13296:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1125,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13296:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13295:17:1"
            },
            "returnParameters": {
              "id": 1130,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1129,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1142,
                  "src": "13336:13:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1128,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "13336:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13335:15:1"
            },
            "scope": 1174,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 1160,
            "nodeType": "FunctionDefinition",
            "src": "13570:119:1",
            "nodes": [],
            "body": {
              "id": 1159,
              "nodeType": "Block",
              "src": "13635:54:1",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "baseExpression": {
                              "id": 1153,
                              "name": "_nonces",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9312,
                              "src": "13664:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 1155,
                            "indexExpression": {
                              "id": 1154,
                              "name": "account",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1145,
                              "src": "13672:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "13664:16:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "id": 1151,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "13653:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 1152,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "13657:6:1",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "13653:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 1156,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "13653:28:1",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 1150,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1173,
                      "src": "13645:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 1157,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "13645:37:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1158,
                  "nodeType": "ExpressionStatement",
                  "src": "13645:37:1"
                }
              ]
            },
            "baseFunctions": [
              4324
            ],
            "documentation": {
              "id": 1143,
              "nodeType": "StructuredDocumentation",
              "src": "13427:138:1",
              "text": "@notice Gets the permitForAll signature nonce for an account.\n @param account The account.\n @return The signature nonce."
            },
            "functionSelector": "7ecebe00",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "nonces",
            "nameLocation": "13579:6:1",
            "parameters": {
              "id": 1146,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1145,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "13594:7:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1160,
                  "src": "13586:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1144,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "13586:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13585:17:1"
            },
            "returnParameters": {
              "id": 1149,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1148,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1160,
                  "src": "13626:7:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1147,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13626:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13625:9:1"
            },
            "scope": 1174,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 1173,
            "nodeType": "FunctionDefinition",
            "src": "13898:106:1",
            "nodes": [],
            "body": {
              "id": 1172,
              "nodeType": "Block",
              "src": "13950:54:1",
              "nodes": [],
              "statements": [
                {
                  "errorCall": {
                    "arguments": [
                      {
                        "id": 1169,
                        "name": "_bytes",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1163,
                        "src": "13990:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "expression": {
                        "id": 1166,
                        "name": "IHyperdrive",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3759,
                        "src": "13967:11:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$3759_$",
                          "typeString": "type(contract IHyperdrive)"
                        }
                      },
                      "id": 1168,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "13979:10:1",
                      "memberName": "ReturnData",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3677,
                      "src": "13967:22:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_error_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 1170,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "13967:30:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1171,
                  "nodeType": "RevertStatement",
                  "src": "13960:37:1"
                }
              ]
            },
            "documentation": {
              "id": 1161,
              "nodeType": "StructuredDocumentation",
              "src": "13716:177:1",
              "text": "@dev Reverts with the provided bytes. This is useful in getters used\n      with the force-revert delegatecall pattern.\n @param _bytes The bytes to revert with."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_revert",
            "nameLocation": "13907:7:1",
            "parameters": {
              "id": 1164,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1163,
                  "mutability": "mutable",
                  "name": "_bytes",
                  "nameLocation": "13928:6:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1173,
                  "src": "13915:19:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1162,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "13915:5:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13914:21:1"
            },
            "returnParameters": {
              "id": 1165,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "13950:0:1"
            },
            "scope": 1174,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 532,
              "name": "IHyperdriveRead",
              "nameLocations": [
                "1227:15:1"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 3999,
              "src": "1227:15:1"
            },
            "id": 533,
            "nodeType": "InheritanceSpecifier",
            "src": "1227:15:1"
          },
          {
            "baseName": {
              "id": 534,
              "name": "HyperdriveAdmin",
              "nameLocations": [
                "1248:15:1"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 4506,
              "src": "1248:15:1"
            },
            "id": 535,
            "nodeType": "InheritanceSpecifier",
            "src": "1248:15:1"
          },
          {
            "baseName": {
              "id": 536,
              "name": "HyperdriveMultiToken",
              "nameLocations": [
                "1269:20:1"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 8158,
              "src": "1269:20:1"
            },
            "id": 537,
            "nodeType": "InheritanceSpecifier",
            "src": "1269:20:1"
          },
          {
            "baseName": {
              "id": 538,
              "name": "HyperdriveLP",
              "nameLocations": [
                "1295:12:1"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 6967,
              "src": "1295:12:1"
            },
            "id": 539,
            "nodeType": "InheritanceSpecifier",
            "src": "1295:12:1"
          },
          {
            "baseName": {
              "id": 540,
              "name": "HyperdriveLong",
              "nameLocations": [
                "1313:14:1"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 7805,
              "src": "1313:14:1"
            },
            "id": 541,
            "nodeType": "InheritanceSpecifier",
            "src": "1313:14:1"
          },
          {
            "baseName": {
              "id": 542,
              "name": "HyperdriveShort",
              "nameLocations": [
                "1333:15:1"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 9192,
              "src": "1333:15:1"
            },
            "id": 543,
            "nodeType": "InheritanceSpecifier",
            "src": "1333:15:1"
          },
          {
            "baseName": {
              "id": 544,
              "name": "HyperdriveCheckpoint",
              "nameLocations": [
                "1354:20:1"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 5801,
              "src": "1354:20:1"
            },
            "id": 545,
            "nodeType": "InheritanceSpecifier",
            "src": "1354:20:1"
          }
        ],
        "canonicalName": "HyperdriveTarget0",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 531,
          "nodeType": "StructuredDocumentation",
          "src": "864:320:1",
          "text": "@author DELV\n @title HyperdriveTarget0\n @notice Hyperdrive's target 0 logic contract.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          1174,
          5801,
          9192,
          7805,
          6967,
          8158,
          4506,
          5354,
          9465,
          60564,
          3999,
          4325
        ],
        "name": "HyperdriveTarget0",
        "nameLocation": "1202:17:1",
        "scope": 1175,
        "usedErrors": [
          3625,
          3631,
          3633,
          3637,
          3639,
          3643,
          3677,
          3686,
          3703,
          3709,
          3711,
          3733,
          3735,
          3742
        ]
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 1
} as const;