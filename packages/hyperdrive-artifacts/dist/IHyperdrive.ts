export const IHyperdrive = 
{
  "abi": [
    {
      "inputs": [],
      "name": "AlreadyClosed",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ApprovalFailed",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "BaseBufferExceedsShareReserves",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "BatchInputLengthMismatch",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "BelowMinimumContribution",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "BelowMinimumShareReserves",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "BondMatured",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "BondNotMatured",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "underlyingError",
          "type": "bytes4"
        }
      ],
      "name": "CallFailed",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ExpiredDeadline",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "FeeTooHigh",
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
      "name": "FixedPointMath_NegativeInput",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "FixedPointMath_NegativeOrZeroInput",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InputLengthMismatch",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InsufficientPrice",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidApr",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidBaseToken",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidCheckpointDuration",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidCheckpointTime",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidContribution",
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
      "name": "InvalidForwarderAddress",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidInitialSharePrice",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidMaturityTime",
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
      "name": "InvalidShareReserves",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidSignature",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidTimestamp",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidToken",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidTradeSize",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "MaxFeeTooHigh",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "MinimumSharePrice",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "MinimumTransactionAmount",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "MintPercentTooHigh",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NegativeInterest",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NegativePresentValue",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NoAssetsToWithdraw",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NonPayableInitialization",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NotPayable",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "OutputLimit",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "Paused",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "PoolAlreadyInitialized",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "QueryOutOfRange",
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
      "name": "ShareReservesDeltaExceedsBondReservesDelta",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TransferFailed",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "Unauthorized",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "UnexpectedAssetId",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "UnexpectedSender",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "UnexpectedSuccess",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "UnsafeCastToInt128",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "UnsafeCastToUint128",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "UnsupportedToken",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ZeroLpTotalSupply",
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
          "name": "baseFees",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "sharePrice",
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
          "internalType": "uint256",
          "name": "_contribution",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_minApr",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_maxApr",
          "type": "uint256"
        },
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
      "name": "addLiquidity",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "lpShares",
          "type": "uint256"
        }
      ],
      "stateMutability": "payable",
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
          "name": "owner",
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
          "internalType": "uint256",
          "name": "_checkpointTime",
          "type": "uint256"
        }
      ],
      "name": "checkpoint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_maturityTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_bondAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_minOutput",
          "type": "uint256"
        },
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
      "name": "closeLong",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
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
          "name": "_maturityTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_bondAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_minOutput",
          "type": "uint256"
        },
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
      "name": "closeShort",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
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
      "inputs": [],
      "name": "dataProvider",
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
      "inputs": [],
      "name": "factory",
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
              "name": "longExposure",
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
            },
            {
              "internalType": "uint256",
              "name": "oracleSize",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "updateGap",
              "type": "uint256"
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
          "internalType": "uint256",
          "name": "_contribution",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_apr",
          "type": "uint256"
        },
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
      "name": "initialize",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "lpShares",
          "type": "uint256"
        }
      ],
      "stateMutability": "payable",
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
      "inputs": [],
      "name": "linkerCodeHash",
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
          "name": "id",
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
          "internalType": "uint256",
          "name": "_baseAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_minOutput",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_minSharePrice",
          "type": "uint256"
        },
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
      "name": "openLong",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "maturityTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "bondProceeds",
          "type": "uint256"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_bondAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_maxDeposit",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_minSharePrice",
          "type": "uint256"
        },
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
      "name": "openShort",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "maturityTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "traderDeposit",
          "type": "uint256"
        }
      ],
      "stateMutability": "payable",
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
          "name": "owner",
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
          "internalType": "bool",
          "name": "_approved",
          "type": "bool"
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
      "name": "permitForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_shares",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_minOutput",
          "type": "uint256"
        },
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
      "name": "redeemWithdrawalShares",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "proceeds",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "sharesRedeemed",
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
          "name": "_shares",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_minOutput",
          "type": "uint256"
        },
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
      "name": "removeLiquidity",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "baseProceeds",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "withdrawalShares",
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
          "name": "_who",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_status",
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
          "name": "id",
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
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
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
    "DOMAIN_SEPARATOR()": "3644e515",
    "addLiquidity(uint256,uint256,uint256,(address,bool,bytes))": "9aa68462",
    "balanceOf(uint256,address)": "3656eec2",
    "baseToken()": "c55dae63",
    "batchTransferFrom(address,address,uint256[],uint256[])": "17fad7fc",
    "checkpoint(uint256)": "ed64bab2",
    "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
    "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1",
    "collectGovernanceFee((address,bool,bytes))": "3e691db9",
    "dataProvider()": "b334ed86",
    "factory()": "c45a0155",
    "getCheckpoint(uint256)": "20fc4881",
    "getMarketState()": "d8165743",
    "getPoolConfig()": "b0d96580",
    "getPoolInfo()": "60246c88",
    "getUncollectedGovernanceFees()": "c69e16ad",
    "getWithdrawPool()": "fba56008",
    "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4",
    "isApprovedForAll(address,address)": "e985e9c5",
    "linkerCodeHash()": "c905a4b5",
    "load(uint256[])": "becee9c3",
    "name(uint256)": "00ad800c",
    "nonces(address)": "7ecebe00",
    "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
    "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070",
    "pause(bool)": "02329a29",
    "perTokenApprovals(uint256,address,address)": "21ff32a9",
    "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": "9032c726",
    "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
    "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434",
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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"AlreadyClosed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ApprovalFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"BaseBufferExceedsShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"BatchInputLengthMismatch\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"BelowMinimumContribution\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"BelowMinimumShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"BondMatured\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"BondNotMatured\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"underlyingError\",\"type\":\"bytes4\"}],\"name\":\"CallFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpiredDeadline\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FeeTooHigh\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FixedPointMath_InvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FixedPointMath_InvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FixedPointMath_NegativeInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FixedPointMath_NegativeOrZeroInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InputLengthMismatch\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InsufficientPrice\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidApr\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidBaseToken\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointTime\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidContribution\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidERC20Bridge\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeAmounts\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeDestination\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidForwarderAddress\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidInitialSharePrice\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMaturityTime\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidSignature\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTimestamp\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidToken\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTradeSize\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MaxFeeTooHigh\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MinimumSharePrice\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MinimumTransactionAmount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MintPercentTooHigh\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NegativeInterest\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NegativePresentValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NoAssetsToWithdraw\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NonPayableInitialization\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotPayable\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"OutputLimit\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Paused\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"PoolAlreadyInitialized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"QueryOutOfRange\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"RestrictedZeroAddress\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"ReturnData\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ShareReservesDeltaExceedsBondReservesDelta\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TransferFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnexpectedAssetId\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnexpectedSender\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnexpectedSuccess\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt128\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToUint128\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsupportedToken\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ZeroLpTotalSupply\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseFees\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_contribution\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minApr\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_maxApr\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"addLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"lpShares\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"baseToken\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"batchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"checkpoint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"closeLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"closeShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"collectGovernanceFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"proceeds\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"dataProvider\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"factory\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointId\",\"type\":\"uint256\"}],\"name\":\"getCheckpoint\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"sharePrice\",\"type\":\"uint128\"},{\"internalType\":\"int128\",\"name\":\"longExposure\",\"type\":\"int128\"}],\"internalType\":\"struct IHyperdrive.Checkpoint\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getMarketState\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"shareReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"bondReserves\",\"type\":\"uint128\"},{\"internalType\":\"int128\",\"name\":\"shareAdjustment\",\"type\":\"int128\"},{\"internalType\":\"uint128\",\"name\":\"longExposure\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"shortsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"bool\",\"name\":\"isInitialized\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"internalType\":\"struct IHyperdrive.MarketState\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPoolConfig\",\"outputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"initialSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governance\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"oracleSize\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"updateGap\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPoolInfo\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesReadyToWithdraw\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longExposure\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.PoolInfo\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getUncollectedGovernanceFees\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getWithdrawPool\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"readyToWithdraw\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"proceeds\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.WithdrawPool\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_contribution\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_apr\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"initialize\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"lpShares\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"linkerCodeHash\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256[]\",\"name\":\"_slots\",\"type\":\"uint256[]\"}],\"name\":\"load\",\"outputs\":[{\"internalType\":\"bytes32[]\",\"name\":\"\",\"type\":\"bytes32[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_baseAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minSharePrice\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"openLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bondProceeds\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_maxDeposit\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minSharePrice\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"openShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"traderDeposit\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"_status\",\"type\":\"bool\"}],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"perTokenApprovals\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shares\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"redeemWithdrawalShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"proceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"sharesRedeemed\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shares\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"removeLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalShares\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"setApproval\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"setApprovalBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_who\",\"type\":\"address\"}],\"name\":\"setGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_who\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_status\",\"type\":\"bool\"}],\"name\":\"setPauser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"transferFromBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"errors\":{\"AlreadyClosed()\":[{\"notice\":\"##################### ### BondWrapper ### #####################\"}],\"ApprovalFailed()\":[{\"notice\":\"################## ### Hyperdrive ### ##################\"}],\"BatchInputLengthMismatch()\":[{\"notice\":\"###################### ### ERC20Forwarder ### ######################\"}],\"FixedPointMath_InvalidExponent()\":[{\"notice\":\"###################### ### FixedPointMath ### ######################\"}],\"InvalidForwarderAddress()\":[{\"notice\":\"############################# ### ERC20ForwarderFactory ### #############################\"}],\"InvalidTimestamp()\":[{\"notice\":\"############### ### AssetId ### ###############\"}],\"InvalidTradeSize()\":[{\"notice\":\"###################### ### YieldSpaceMath ### ######################\"}],\"QueryOutOfRange()\":[{\"notice\":\"############ ### TWAP ### ############\"}],\"ReturnData(bytes)\":[{\"notice\":\"#################### ### DataProvider ### ####################\"}],\"Unauthorized()\":[{\"notice\":\"############### ### Factory ### ###############\"}],\"UnsafeCastToUint128()\":[{\"notice\":\"###################### ### SafeCast ### ######################\"}]},\"events\":{\"Initialize(address,uint256,uint256,uint256,uint256)\":{\"notice\":\"Events ///\"}},\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IHyperdrive.sol\":\"IHyperdrive\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/src/interfaces/IDataProvider.sol\":{\"keccak256\":\"0xb5540e954a8d9311a4ddc94f1b1a893f419965c4059e5f64d3f966fa5d7bf843\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4322256d8ef1c32e16441b7be365169cbbfa72c6d952536ed0c2a4dab5befd15\",\"dweb:/ipfs/QmT1Zx7tHjgW52qb1e5C9KTjTbZaoniFxuyvZb3cWedUu7\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672\",\"dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x5f4ebd8ae035c05b0a1f3f740dba21a1414306796082b814bcaa2e190ab845b7\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1353dab25f7e01c7169f602b7d013ff90c77fe36d62d382e179649a10ae41e78\",\"dweb:/ipfs/QmXQdQBcx6rKeVcoV5s7NG52DrqVvhBhgMNQwTxddAstE5\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993\",\"dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt\"]},\"contracts/src/interfaces/IHyperdriveWrite.sol\":{\"keccak256\":\"0xd83e23e1894f3f4812d4812c5775c7a5267f3bfb80148b11f3ede3174ea936bc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ae5e91bb578ae9271426728ba69689ad659c6450853aa5ef0c52dd6d7c433206\",\"dweb:/ipfs/QmR5VU1UmZ8BN3azCs3zmHkCqJHzDKTUnVecdPjNQr8vYt\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0\",\"dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87\",\"dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939\",\"dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x\"]},\"contracts/src/interfaces/IMultiTokenWrite.sol\":{\"keccak256\":\"0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a\",\"dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1\",\"dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0\",\"dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577\",\"dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f\",\"dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD\"]}},\"version\":1}",
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
          "name": "AlreadyClosed"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "ApprovalFailed"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "BaseBufferExceedsShareReserves"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "BatchInputLengthMismatch"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "BelowMinimumContribution"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "BelowMinimumShareReserves"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "BondMatured"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "BondNotMatured"
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "underlyingError",
              "type": "bytes4"
            }
          ],
          "type": "error",
          "name": "CallFailed"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "ExpiredDeadline"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "FeeTooHigh"
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
          "name": "FixedPointMath_NegativeInput"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "FixedPointMath_NegativeOrZeroInput"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InputLengthMismatch"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InsufficientPrice"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidApr"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidBaseToken"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidCheckpointDuration"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidCheckpointTime"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidContribution"
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
          "name": "InvalidForwarderAddress"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidInitialSharePrice"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidMaturityTime"
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
          "name": "InvalidShareReserves"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidSignature"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidTimestamp"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidToken"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidTradeSize"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "MaxFeeTooHigh"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "MinimumSharePrice"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "MinimumTransactionAmount"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "MintPercentTooHigh"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "NegativeInterest"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "NegativePresentValue"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "NoAssetsToWithdraw"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "NonPayableInitialization"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "NotPayable"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "OutputLimit"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "Paused"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "PoolAlreadyInitialized"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "QueryOutOfRange"
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
          "name": "ShareReservesDeltaExceedsBondReservesDelta"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "TransferFailed"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "Unauthorized"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "UnexpectedAssetId"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "UnexpectedSender"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "UnexpectedSuccess"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "UnsafeCastToInt128"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "UnsafeCastToUint128"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "UnsupportedToken"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "ZeroLpTotalSupply"
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
              "name": "baseFees",
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
              "internalType": "uint256",
              "name": "_contribution",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_minApr",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_maxApr",
              "type": "uint256"
            },
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
          "stateMutability": "payable",
          "type": "function",
          "name": "addLiquidity",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "lpShares",
              "type": "uint256"
            }
          ]
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
              "name": "owner",
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
              "internalType": "uint256",
              "name": "_checkpointTime",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "checkpoint"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_maturityTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_bondAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_minOutput",
              "type": "uint256"
            },
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
          "name": "closeLong",
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
              "name": "_maturityTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_bondAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_minOutput",
              "type": "uint256"
            },
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
          "name": "closeShort",
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
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "dataProvider",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "factory",
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
                  "name": "longExposure",
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
                },
                {
                  "internalType": "uint256",
                  "name": "oracleSize",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "updateGap",
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
              "internalType": "uint256",
              "name": "_contribution",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_apr",
              "type": "uint256"
            },
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
          "stateMutability": "payable",
          "type": "function",
          "name": "initialize",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "lpShares",
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
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "linkerCodeHash",
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
              "name": "id",
              "type": "uint256"
            }
          ],
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
              "internalType": "uint256",
              "name": "_baseAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_minOutput",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_minSharePrice",
              "type": "uint256"
            },
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
          "stateMutability": "payable",
          "type": "function",
          "name": "openLong",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "maturityTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "bondProceeds",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_bondAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_maxDeposit",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_minSharePrice",
              "type": "uint256"
            },
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
          "stateMutability": "payable",
          "type": "function",
          "name": "openShort",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "maturityTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "traderDeposit",
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
              "internalType": "bool",
              "name": "_approved",
              "type": "bool"
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
          "name": "permitForAll"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_shares",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_minOutput",
              "type": "uint256"
            },
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
          "name": "redeemWithdrawalShares",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "proceeds",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "sharesRedeemed",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_shares",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_minOutput",
              "type": "uint256"
            },
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
          "name": "removeLiquidity",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "baseProceeds",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "withdrawalShares",
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
              "name": "_who",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "_status",
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
              "name": "id",
              "type": "uint256"
            }
          ],
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
          "inputs": [
            {
              "internalType": "uint256",
              "name": "id",
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
        "methods": {},
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
        "@aave/=lib/aave-v3-core/contracts/",
        "aave-v3-core/=lib/aave-v3-core/",
        "create3-factory/=lib/yield-daddy/lib/create3-factory/",
        "ds-test/=lib/forge-std/lib/ds-test/src/",
        "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
        "forge-std/=lib/forge-std/src/",
        "openzeppelin-contracts/=lib/openzeppelin-contracts/",
        "openzeppelin/=lib/openzeppelin-contracts/contracts/",
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
        "contracts/src/interfaces/IHyperdrive.sol": "IHyperdrive"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/interfaces/IDataProvider.sol": {
        "keccak256": "0xb5540e954a8d9311a4ddc94f1b1a893f419965c4059e5f64d3f966fa5d7bf843",
        "urls": [
          "bzz-raw://4322256d8ef1c32e16441b7be365169cbbfa72c6d952536ed0c2a4dab5befd15",
          "dweb:/ipfs/QmT1Zx7tHjgW52qb1e5C9KTjTbZaoniFxuyvZb3cWedUu7"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IERC20.sol": {
        "keccak256": "0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c",
        "urls": [
          "bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672",
          "dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w"
        ],
        "license": "MIT"
      },
      "contracts/src/interfaces/IHyperdrive.sol": {
        "keccak256": "0x5f4ebd8ae035c05b0a1f3f740dba21a1414306796082b814bcaa2e190ab845b7",
        "urls": [
          "bzz-raw://1353dab25f7e01c7169f602b7d013ff90c77fe36d62d382e179649a10ae41e78",
          "dweb:/ipfs/QmXQdQBcx6rKeVcoV5s7NG52DrqVvhBhgMNQwTxddAstE5"
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
      "contracts/src/interfaces/IHyperdriveWrite.sol": {
        "keccak256": "0xd83e23e1894f3f4812d4812c5775c7a5267f3bfb80148b11f3ede3174ea936bc",
        "urls": [
          "bzz-raw://ae5e91bb578ae9271426728ba69689ad659c6450853aa5ef0c52dd6d7c433206",
          "dweb:/ipfs/QmR5VU1UmZ8BN3azCs3zmHkCqJHzDKTUnVecdPjNQr8vYt"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiToken.sol": {
        "keccak256": "0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a",
        "urls": [
          "bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0",
          "dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenMetadata.sol": {
        "keccak256": "0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc",
        "urls": [
          "bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87",
          "dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenRead.sol": {
        "keccak256": "0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05",
        "urls": [
          "bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939",
          "dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenWrite.sol": {
        "keccak256": "0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8",
        "urls": [
          "bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a",
          "dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe"
        ],
        "license": "Apache-2.0"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol": {
        "keccak256": "0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0",
        "urls": [
          "bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1",
          "dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol": {
        "keccak256": "0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb",
        "urls": [
          "bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0",
          "dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol": {
        "keccak256": "0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a",
        "urls": [
          "bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577",
          "dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/Address.sol": {
        "keccak256": "0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26",
        "urls": [
          "bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f",
          "dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
    "id": 7432,
    "exportedSymbols": {
      "IDataProvider": [
        6652
      ],
      "IERC20": [
        6731
      ],
      "IHyperdrive": [
        7431
      ],
      "IHyperdriveRead": [
        7515
      ],
      "IHyperdriveWrite": [
        7668
      ],
      "IMultiToken": [
        7790
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:10754:21",
    "nodes": [
      {
        "id": 7001,
        "nodeType": "PragmaDirective",
        "src": "39:23:21",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 7003,
        "nodeType": "ImportDirective",
        "src": "64:52:21",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IDataProvider.sol",
        "file": "./IDataProvider.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 7432,
        "sourceUnit": 6653,
        "symbolAliases": [
          {
            "foreign": {
              "id": 7002,
              "name": "IDataProvider",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 6652,
              "src": "73:13:21",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 7005,
        "nodeType": "ImportDirective",
        "src": "117:38:21",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IERC20.sol",
        "file": "./IERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 7432,
        "sourceUnit": 6732,
        "symbolAliases": [
          {
            "foreign": {
              "id": 7004,
              "name": "IERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 6731,
              "src": "126:6:21",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 7007,
        "nodeType": "ImportDirective",
        "src": "156:56:21",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdriveRead.sol",
        "file": "./IHyperdriveRead.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 7432,
        "sourceUnit": 7516,
        "symbolAliases": [
          {
            "foreign": {
              "id": 7006,
              "name": "IHyperdriveRead",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7515,
              "src": "165:15:21",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 7009,
        "nodeType": "ImportDirective",
        "src": "213:58:21",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdriveWrite.sol",
        "file": "./IHyperdriveWrite.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 7432,
        "sourceUnit": 7669,
        "symbolAliases": [
          {
            "foreign": {
              "id": 7008,
              "name": "IHyperdriveWrite",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7668,
              "src": "222:16:21",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 7011,
        "nodeType": "ImportDirective",
        "src": "272:48:21",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IMultiToken.sol",
        "file": "./IMultiToken.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 7432,
        "sourceUnit": 7791,
        "symbolAliases": [
          {
            "foreign": {
              "id": 7010,
              "name": "IMultiToken",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7790,
              "src": "281:11:21",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 7431,
        "nodeType": "ContractDefinition",
        "src": "322:10470:21",
        "nodes": [
          {
            "id": 7032,
            "nodeType": "EventDefinition",
            "src": "451:160:21",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 7020,
              "nodeType": "StructuredDocumentation",
              "src": "431:15:21",
              "text": "Events ///"
            },
            "eventSelector": "d93ddcd36a9d44373680f40bd3bcafe3c7e738748e10c90213e70453cff44231",
            "name": "Initialize",
            "nameLocation": "457:10:21",
            "parameters": {
              "id": 7031,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7022,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "provider",
                  "nameLocation": "493:8:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7032,
                  "src": "477:24:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7021,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "477:7:21",
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
                  "id": 7024,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "lpAmount",
                  "nameLocation": "519:8:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7032,
                  "src": "511:16:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7023,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "511:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7026,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "baseAmount",
                  "nameLocation": "545:10:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7032,
                  "src": "537:18:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7025,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "537:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7028,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "573:10:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7032,
                  "src": "565:18:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7027,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "565:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7030,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "apr",
                  "nameLocation": "601:3:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7032,
                  "src": "593:11:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7029,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "593:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "467:143:21"
            }
          },
          {
            "id": 7044,
            "nodeType": "EventDefinition",
            "src": "617:171:21",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "d92dda7384b5f0fa573be9bbf63d63ac81a5bbb08ebc31f00c0f066e50239609",
            "name": "AddLiquidity",
            "nameLocation": "623:12:21",
            "parameters": {
              "id": 7043,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7034,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "provider",
                  "nameLocation": "661:8:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7044,
                  "src": "645:24:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7033,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "645:7:21",
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
                  "id": 7036,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "lpAmount",
                  "nameLocation": "687:8:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7044,
                  "src": "679:16:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7035,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "679:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7038,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "baseAmount",
                  "nameLocation": "713:10:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7044,
                  "src": "705:18:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7037,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "705:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7040,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "741:10:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7044,
                  "src": "733:18:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7039,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "733:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7042,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "lpSharePrice",
                  "nameLocation": "769:12:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7044,
                  "src": "761:20:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7041,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "761:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "635:152:21"
            }
          },
          {
            "id": 7058,
            "nodeType": "EventDefinition",
            "src": "794:213:21",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "ae97bda5fb1ee457c0490e5804bc10c54ab31a1fd9b01e2f85a1855072150be8",
            "name": "RemoveLiquidity",
            "nameLocation": "800:15:21",
            "parameters": {
              "id": 7057,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7046,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "provider",
                  "nameLocation": "841:8:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7058,
                  "src": "825:24:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7045,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "825:7:21",
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
                  "id": 7048,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "lpAmount",
                  "nameLocation": "867:8:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7058,
                  "src": "859:16:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7047,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "859:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7050,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "baseAmount",
                  "nameLocation": "893:10:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7058,
                  "src": "885:18:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7049,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "885:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7052,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "921:10:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7058,
                  "src": "913:18:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7051,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "913:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7054,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "withdrawalShareAmount",
                  "nameLocation": "949:21:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7058,
                  "src": "941:29:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7053,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "941:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7056,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "lpSharePrice",
                  "nameLocation": "988:12:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7058,
                  "src": "980:20:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7055,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "980:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "815:191:21"
            }
          },
          {
            "id": 7068,
            "nodeType": "EventDefinition",
            "src": "1013:164:21",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "7986a4c20efd1390450c45fb0b11e794754bdce25f47ab5488efc8104169f754",
            "name": "RedeemWithdrawalShares",
            "nameLocation": "1019:22:21",
            "parameters": {
              "id": 7067,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7060,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "provider",
                  "nameLocation": "1067:8:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7068,
                  "src": "1051:24:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7059,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1051:7:21",
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
                  "id": 7062,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "withdrawalShareAmount",
                  "nameLocation": "1093:21:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7068,
                  "src": "1085:29:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7061,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1085:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7064,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "baseAmount",
                  "nameLocation": "1132:10:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7068,
                  "src": "1124:18:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7063,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1124:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7066,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "1160:10:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7068,
                  "src": "1152:18:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7065,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1152:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1041:135:21"
            }
          },
          {
            "id": 7082,
            "nodeType": "EventDefinition",
            "src": "1183:200:21",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "8daa42046d321d073674dbdf323d82d84f6020561cd24ffb2c3dd3e263cda686",
            "name": "OpenLong",
            "nameLocation": "1189:8:21",
            "parameters": {
              "id": 7081,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7070,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "trader",
                  "nameLocation": "1223:6:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7082,
                  "src": "1207:22:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7069,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1207:7:21",
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
                  "id": 7072,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "assetId",
                  "nameLocation": "1255:7:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7082,
                  "src": "1239:23:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7071,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1239:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7074,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "maturityTime",
                  "nameLocation": "1280:12:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7082,
                  "src": "1272:20:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7073,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1272:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7076,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "baseAmount",
                  "nameLocation": "1310:10:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7082,
                  "src": "1302:18:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7075,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1302:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7078,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "1338:10:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7082,
                  "src": "1330:18:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7077,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1330:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7080,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "bondAmount",
                  "nameLocation": "1366:10:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7082,
                  "src": "1358:18:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7079,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1358:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1197:185:21"
            }
          },
          {
            "id": 7096,
            "nodeType": "EventDefinition",
            "src": "1389:201:21",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "80aa5907299c704704d0d55e06e3c04e3b331a7c40d5a6b2b3031b0ea12fef95",
            "name": "OpenShort",
            "nameLocation": "1395:9:21",
            "parameters": {
              "id": 7095,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7084,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "trader",
                  "nameLocation": "1430:6:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7096,
                  "src": "1414:22:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7083,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1414:7:21",
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
                  "id": 7086,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "assetId",
                  "nameLocation": "1462:7:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7096,
                  "src": "1446:23:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7085,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1446:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7088,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "maturityTime",
                  "nameLocation": "1487:12:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7096,
                  "src": "1479:20:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7087,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1479:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7090,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "baseAmount",
                  "nameLocation": "1517:10:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7096,
                  "src": "1509:18:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7089,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1509:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7092,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "1545:10:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7096,
                  "src": "1537:18:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7091,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1537:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7094,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "bondAmount",
                  "nameLocation": "1573:10:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7096,
                  "src": "1565:18:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7093,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1565:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1404:185:21"
            }
          },
          {
            "id": 7110,
            "nodeType": "EventDefinition",
            "src": "1596:201:21",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "4c68e40241b8ae371bc7dae7035400158b60d0b7d69b35477b693759bb2c0ca0",
            "name": "CloseLong",
            "nameLocation": "1602:9:21",
            "parameters": {
              "id": 7109,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7098,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "trader",
                  "nameLocation": "1637:6:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7110,
                  "src": "1621:22:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7097,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1621:7:21",
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
                  "id": 7100,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "assetId",
                  "nameLocation": "1669:7:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7110,
                  "src": "1653:23:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7099,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1653:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7102,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "maturityTime",
                  "nameLocation": "1694:12:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7110,
                  "src": "1686:20:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7101,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1686:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7104,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "baseAmount",
                  "nameLocation": "1724:10:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7110,
                  "src": "1716:18:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7103,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1716:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7106,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "1752:10:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7110,
                  "src": "1744:18:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7105,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1744:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7108,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "bondAmount",
                  "nameLocation": "1780:10:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7110,
                  "src": "1772:18:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7107,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1772:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1611:185:21"
            }
          },
          {
            "id": 7124,
            "nodeType": "EventDefinition",
            "src": "1803:202:21",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "32f37298489a8da0fde394937191ad6035015dd8a04bc97c304d59858e3bfd67",
            "name": "CloseShort",
            "nameLocation": "1809:10:21",
            "parameters": {
              "id": 7123,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7112,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "trader",
                  "nameLocation": "1845:6:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7124,
                  "src": "1829:22:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7111,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1829:7:21",
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
                  "id": 7114,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "assetId",
                  "nameLocation": "1877:7:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7124,
                  "src": "1861:23:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7113,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1861:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7116,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "maturityTime",
                  "nameLocation": "1902:12:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7124,
                  "src": "1894:20:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7115,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1894:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7118,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "baseAmount",
                  "nameLocation": "1932:10:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7124,
                  "src": "1924:18:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7117,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1924:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7120,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "1960:10:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7124,
                  "src": "1952:18:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7119,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1952:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7122,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "bondAmount",
                  "nameLocation": "1988:10:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7124,
                  "src": "1980:18:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7121,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1980:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1819:185:21"
            }
          },
          {
            "id": 7136,
            "nodeType": "EventDefinition",
            "src": "2011:188:21",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "5012836090f6cac0f5b321be3188c3cd9c82c8252a23afea128ea014a6fd1551",
            "name": "CreateCheckpoint",
            "nameLocation": "2017:16:21",
            "parameters": {
              "id": 7135,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7126,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "checkpointTime",
                  "nameLocation": "2059:14:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7136,
                  "src": "2043:30:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7125,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2043:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7128,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "2091:10:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7136,
                  "src": "2083:18:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7127,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2083:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7130,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "maturedShorts",
                  "nameLocation": "2119:13:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7136,
                  "src": "2111:21:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7129,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2111:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7132,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "maturedLongs",
                  "nameLocation": "2150:12:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7136,
                  "src": "2142:20:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7131,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2142:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7134,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "lpSharePrice",
                  "nameLocation": "2180:12:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7136,
                  "src": "2172:20:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7133,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2172:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2033:165:21"
            }
          },
          {
            "id": 7144,
            "nodeType": "EventDefinition",
            "src": "2205:122:21",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "a766eca44ec2dc18727bd04ada80599917cad7a27cf6a765026b2f1d0ce5c4ee",
            "name": "CollectGovernanceFee",
            "nameLocation": "2211:20:21",
            "parameters": {
              "id": 7143,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7138,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "collector",
                  "nameLocation": "2257:9:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7144,
                  "src": "2241:25:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7137,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2241:7:21",
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
                  "id": 7140,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "baseFees",
                  "nameLocation": "2284:8:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7144,
                  "src": "2276:16:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7139,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2276:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7142,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "2310:10:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7144,
                  "src": "2302:18:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7141,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2302:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2231:95:21"
            }
          },
          {
            "id": 7175,
            "nodeType": "StructDefinition",
            "src": "2428:1060:21",
            "nodes": [],
            "canonicalName": "IHyperdrive.MarketState",
            "members": [
              {
                "constant": false,
                "id": 7147,
                "mutability": "mutable",
                "name": "shareReserves",
                "nameLocation": "2509:13:21",
                "nodeType": "VariableDeclaration",
                "scope": 7175,
                "src": "2501:21:21",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint128",
                  "typeString": "uint128"
                },
                "typeName": {
                  "id": 7146,
                  "name": "uint128",
                  "nodeType": "ElementaryTypeName",
                  "src": "2501:7:21",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 7150,
                "mutability": "mutable",
                "name": "bondReserves",
                "nameLocation": "2583:12:21",
                "nodeType": "VariableDeclaration",
                "scope": 7175,
                "src": "2575:20:21",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint128",
                  "typeString": "uint128"
                },
                "typeName": {
                  "id": 7149,
                  "name": "uint128",
                  "nodeType": "ElementaryTypeName",
                  "src": "2575:7:21",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 7153,
                "mutability": "mutable",
                "name": "shareAdjustment",
                "nameLocation": "2749:15:21",
                "nodeType": "VariableDeclaration",
                "scope": 7175,
                "src": "2742:22:21",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_int128",
                  "typeString": "int128"
                },
                "typeName": {
                  "id": 7152,
                  "name": "int128",
                  "nodeType": "ElementaryTypeName",
                  "src": "2742:6:21",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int128",
                    "typeString": "int128"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 7156,
                "mutability": "mutable",
                "name": "longExposure",
                "nameLocation": "2849:12:21",
                "nodeType": "VariableDeclaration",
                "scope": 7175,
                "src": "2841:20:21",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint128",
                  "typeString": "uint128"
                },
                "typeName": {
                  "id": 7155,
                  "name": "uint128",
                  "nodeType": "ElementaryTypeName",
                  "src": "2841:7:21",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 7159,
                "mutability": "mutable",
                "name": "longsOutstanding",
                "nameLocation": "2937:16:21",
                "nodeType": "VariableDeclaration",
                "scope": 7175,
                "src": "2929:24:21",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint128",
                  "typeString": "uint128"
                },
                "typeName": {
                  "id": 7158,
                  "name": "uint128",
                  "nodeType": "ElementaryTypeName",
                  "src": "2929:7:21",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 7162,
                "mutability": "mutable",
                "name": "shortsOutstanding",
                "nameLocation": "3030:17:21",
                "nodeType": "VariableDeclaration",
                "scope": 7175,
                "src": "3022:25:21",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint128",
                  "typeString": "uint128"
                },
                "typeName": {
                  "id": 7161,
                  "name": "uint128",
                  "nodeType": "ElementaryTypeName",
                  "src": "3022:7:21",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 7165,
                "mutability": "mutable",
                "name": "longAverageMaturityTime",
                "nameLocation": "3139:23:21",
                "nodeType": "VariableDeclaration",
                "scope": 7175,
                "src": "3131:31:21",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint128",
                  "typeString": "uint128"
                },
                "typeName": {
                  "id": 7164,
                  "name": "uint128",
                  "nodeType": "ElementaryTypeName",
                  "src": "3131:7:21",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 7168,
                "mutability": "mutable",
                "name": "shortAverageMaturityTime",
                "nameLocation": "3255:24:21",
                "nodeType": "VariableDeclaration",
                "scope": 7175,
                "src": "3247:32:21",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint128",
                  "typeString": "uint128"
                },
                "typeName": {
                  "id": 7167,
                  "name": "uint128",
                  "nodeType": "ElementaryTypeName",
                  "src": "3247:7:21",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 7171,
                "mutability": "mutable",
                "name": "isInitialized",
                "nameLocation": "3375:13:21",
                "nodeType": "VariableDeclaration",
                "scope": 7175,
                "src": "3370:18:21",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 7170,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "3370:4:21",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 7174,
                "mutability": "mutable",
                "name": "isPaused",
                "nameLocation": "3473:8:21",
                "nodeType": "VariableDeclaration",
                "scope": 7175,
                "src": "3468:13:21",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 7173,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "3468:4:21",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "MarketState",
            "nameLocation": "2435:11:21",
            "scope": 7431,
            "visibility": "public"
          },
          {
            "id": 7182,
            "nodeType": "StructDefinition",
            "src": "3494:390:21",
            "nodes": [],
            "canonicalName": "IHyperdrive.Checkpoint",
            "members": [
              {
                "constant": false,
                "id": 7178,
                "mutability": "mutable",
                "name": "sharePrice",
                "nameLocation": "3788:10:21",
                "nodeType": "VariableDeclaration",
                "scope": 7182,
                "src": "3780:18:21",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint128",
                  "typeString": "uint128"
                },
                "typeName": {
                  "id": 7177,
                  "name": "uint128",
                  "nodeType": "ElementaryTypeName",
                  "src": "3780:7:21",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 7181,
                "mutability": "mutable",
                "name": "longExposure",
                "nameLocation": "3865:12:21",
                "nodeType": "VariableDeclaration",
                "scope": 7182,
                "src": "3858:19:21",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_int128",
                  "typeString": "int128"
                },
                "typeName": {
                  "id": 7180,
                  "name": "int128",
                  "nodeType": "ElementaryTypeName",
                  "src": "3858:6:21",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int128",
                    "typeString": "int128"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Checkpoint",
            "nameLocation": "3501:10:21",
            "scope": 7431,
            "visibility": "public"
          },
          {
            "id": 7189,
            "nodeType": "StructDefinition",
            "src": "3890:230:21",
            "nodes": [],
            "canonicalName": "IHyperdrive.WithdrawPool",
            "members": [
              {
                "constant": false,
                "id": 7185,
                "mutability": "mutable",
                "name": "readyToWithdraw",
                "nameLocation": "4008:15:21",
                "nodeType": "VariableDeclaration",
                "scope": 7189,
                "src": "4000:23:21",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint128",
                  "typeString": "uint128"
                },
                "typeName": {
                  "id": 7184,
                  "name": "uint128",
                  "nodeType": "ElementaryTypeName",
                  "src": "4000:7:21",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 7188,
                "mutability": "mutable",
                "name": "proceeds",
                "nameLocation": "4105:8:21",
                "nodeType": "VariableDeclaration",
                "scope": 7189,
                "src": "4097:16:21",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint128",
                  "typeString": "uint128"
                },
                "typeName": {
                  "id": 7187,
                  "name": "uint128",
                  "nodeType": "ElementaryTypeName",
                  "src": "4097:7:21",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "WithdrawPool",
            "nameLocation": "3897:12:21",
            "scope": 7431,
            "visibility": "public"
          },
          {
            "id": 7199,
            "nodeType": "StructDefinition",
            "src": "4126:297:21",
            "nodes": [],
            "canonicalName": "IHyperdrive.Fees",
            "members": [
              {
                "constant": false,
                "id": 7192,
                "mutability": "mutable",
                "name": "curve",
                "nameLocation": "4225:5:21",
                "nodeType": "VariableDeclaration",
                "scope": 7199,
                "src": "4217:13:21",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 7191,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "4217:7:21",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 7195,
                "mutability": "mutable",
                "name": "flat",
                "nameLocation": "4316:4:21",
                "nodeType": "VariableDeclaration",
                "scope": 7199,
                "src": "4308:12:21",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 7194,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "4308:7:21",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 7198,
                "mutability": "mutable",
                "name": "governance",
                "nameLocation": "4406:10:21",
                "nodeType": "VariableDeclaration",
                "scope": 7199,
                "src": "4398:18:21",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 7197,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "4398:7:21",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Fees",
            "nameLocation": "4133:4:21",
            "scope": 7431,
            "visibility": "public"
          },
          {
            "id": 7206,
            "nodeType": "StructDefinition",
            "src": "4429:205:21",
            "nodes": [],
            "canonicalName": "IHyperdrive.OracleState",
            "members": [
              {
                "constant": false,
                "id": 7202,
                "mutability": "mutable",
                "name": "head",
                "nameLocation": "4530:4:21",
                "nodeType": "VariableDeclaration",
                "scope": 7206,
                "src": "4522:12:21",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint128",
                  "typeString": "uint128"
                },
                "typeName": {
                  "id": 7201,
                  "name": "uint128",
                  "nodeType": "ElementaryTypeName",
                  "src": "4522:7:21",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 7205,
                "mutability": "mutable",
                "name": "lastTimestamp",
                "nameLocation": "4614:13:21",
                "nodeType": "VariableDeclaration",
                "scope": 7206,
                "src": "4606:21:21",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint128",
                  "typeString": "uint128"
                },
                "typeName": {
                  "id": 7204,
                  "name": "uint128",
                  "nodeType": "ElementaryTypeName",
                  "src": "4606:7:21",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "OracleState",
            "nameLocation": "4436:11:21",
            "scope": 7431,
            "visibility": "public"
          },
          {
            "id": 7245,
            "nodeType": "StructDefinition",
            "src": "4640:1093:21",
            "nodes": [],
            "canonicalName": "IHyperdrive.PoolConfig",
            "members": [
              {
                "constant": false,
                "id": 7210,
                "mutability": "mutable",
                "name": "baseToken",
                "nameLocation": "4723:9:21",
                "nodeType": "VariableDeclaration",
                "scope": 7245,
                "src": "4716:16:21",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_IERC20_$6731",
                  "typeString": "contract IERC20"
                },
                "typeName": {
                  "id": 7209,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 7208,
                    "name": "IERC20",
                    "nameLocations": [
                      "4716:6:21"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 6731,
                    "src": "4716:6:21"
                  },
                  "referencedDeclaration": 6731,
                  "src": "4716:6:21",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20_$6731",
                    "typeString": "contract IERC20"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 7213,
                "mutability": "mutable",
                "name": "initialSharePrice",
                "nameLocation": "4792:17:21",
                "nodeType": "VariableDeclaration",
                "scope": 7245,
                "src": "4784:25:21",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 7212,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "4784:7:21",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 7216,
                "mutability": "mutable",
                "name": "minimumShareReserves",
                "nameLocation": "4872:20:21",
                "nodeType": "VariableDeclaration",
                "scope": 7245,
                "src": "4864:28:21",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 7215,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "4864:7:21",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 7219,
                "mutability": "mutable",
                "name": "minimumTransactionAmount",
                "nameLocation": "4999:24:21",
                "nodeType": "VariableDeclaration",
                "scope": 7245,
                "src": "4991:32:21",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 7218,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "4991:7:21",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 7222,
                "mutability": "mutable",
                "name": "positionDuration",
                "nameLocation": "5104:16:21",
                "nodeType": "VariableDeclaration",
                "scope": 7245,
                "src": "5096:24:21",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 7221,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "5096:7:21",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 7225,
                "mutability": "mutable",
                "name": "checkpointDuration",
                "nameLocation": "5185:18:21",
                "nodeType": "VariableDeclaration",
                "scope": 7245,
                "src": "5177:26:21",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 7224,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "5177:7:21",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 7228,
                "mutability": "mutable",
                "name": "timeStretch",
                "nameLocation": "5297:11:21",
                "nodeType": "VariableDeclaration",
                "scope": 7245,
                "src": "5289:19:21",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 7227,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "5289:7:21",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 7231,
                "mutability": "mutable",
                "name": "governance",
                "nameLocation": "5383:10:21",
                "nodeType": "VariableDeclaration",
                "scope": 7245,
                "src": "5375:18:21",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 7230,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "5375:7:21",
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
                "id": 7234,
                "mutability": "mutable",
                "name": "feeCollector",
                "nameLocation": "5471:12:21",
                "nodeType": "VariableDeclaration",
                "scope": 7245,
                "src": "5463:20:21",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 7233,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "5463:7:21",
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
                "id": 7238,
                "mutability": "mutable",
                "name": "fees",
                "nameLocation": "5555:4:21",
                "nodeType": "VariableDeclaration",
                "scope": 7245,
                "src": "5538:21:21",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Fees_$7199_storage_ptr",
                  "typeString": "struct IHyperdrive.Fees"
                },
                "typeName": {
                  "id": 7237,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 7236,
                    "name": "IHyperdrive.Fees",
                    "nameLocations": [
                      "5538:11:21",
                      "5550:4:21"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 7199,
                    "src": "5538:16:21"
                  },
                  "referencedDeclaration": 7199,
                  "src": "5538:16:21",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Fees_$7199_storage_ptr",
                    "typeString": "struct IHyperdrive.Fees"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 7241,
                "mutability": "mutable",
                "name": "oracleSize",
                "nameLocation": "5631:10:21",
                "nodeType": "VariableDeclaration",
                "scope": 7245,
                "src": "5623:18:21",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 7240,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "5623:7:21",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 7244,
                "mutability": "mutable",
                "name": "updateGap",
                "nameLocation": "5717:9:21",
                "nodeType": "VariableDeclaration",
                "scope": 7245,
                "src": "5709:17:21",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 7243,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "5709:7:21",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "PoolConfig",
            "nameLocation": "4647:10:21",
            "scope": 7431,
            "visibility": "public"
          },
          {
            "id": 7285,
            "nodeType": "StructDefinition",
            "src": "5739:1529:21",
            "nodes": [],
            "canonicalName": "IHyperdrive.PoolInfo",
            "members": [
              {
                "constant": false,
                "id": 7248,
                "mutability": "mutable",
                "name": "shareReserves",
                "nameLocation": "5831:13:21",
                "nodeType": "VariableDeclaration",
                "scope": 7285,
                "src": "5823:21:21",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 7247,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "5823:7:21",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 7251,
                "mutability": "mutable",
                "name": "shareAdjustment",
                "nameLocation": "6086:15:21",
                "nodeType": "VariableDeclaration",
                "scope": 7285,
                "src": "6079:22:21",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_int256",
                  "typeString": "int256"
                },
                "typeName": {
                  "id": 7250,
                  "name": "int256",
                  "nodeType": "ElementaryTypeName",
                  "src": "6079:6:21",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 7254,
                "mutability": "mutable",
                "name": "bondReserves",
                "nameLocation": "6176:12:21",
                "nodeType": "VariableDeclaration",
                "scope": 7285,
                "src": "6168:20:21",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 7253,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "6168:7:21",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 7257,
                "mutability": "mutable",
                "name": "lpTotalSupply",
                "nameLocation": "6254:13:21",
                "nodeType": "VariableDeclaration",
                "scope": 7285,
                "src": "6246:21:21",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 7256,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "6246:7:21",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 7260,
                "mutability": "mutable",
                "name": "sharePrice",
                "nameLocation": "6327:10:21",
                "nodeType": "VariableDeclaration",
                "scope": 7285,
                "src": "6319:18:21",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 7259,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "6319:7:21",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 7263,
                "mutability": "mutable",
                "name": "longsOutstanding",
                "nameLocation": "6433:16:21",
                "nodeType": "VariableDeclaration",
                "scope": 7285,
                "src": "6425:24:21",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 7262,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "6425:7:21",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 7266,
                "mutability": "mutable",
                "name": "longAverageMaturityTime",
                "nameLocation": "6536:23:21",
                "nodeType": "VariableDeclaration",
                "scope": 7285,
                "src": "6528:31:21",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 7265,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "6528:7:21",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 7269,
                "mutability": "mutable",
                "name": "shortsOutstanding",
                "nameLocation": "6656:17:21",
                "nodeType": "VariableDeclaration",
                "scope": 7285,
                "src": "6648:25:21",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 7268,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "6648:7:21",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 7272,
                "mutability": "mutable",
                "name": "shortAverageMaturityTime",
                "nameLocation": "6761:24:21",
                "nodeType": "VariableDeclaration",
                "scope": 7285,
                "src": "6753:32:21",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 7271,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "6753:7:21",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 7275,
                "mutability": "mutable",
                "name": "withdrawalSharesReadyToWithdraw",
                "nameLocation": "6883:31:21",
                "nodeType": "VariableDeclaration",
                "scope": 7285,
                "src": "6875:39:21",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 7274,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "6875:7:21",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 7278,
                "mutability": "mutable",
                "name": "withdrawalSharesProceeds",
                "nameLocation": "6996:24:21",
                "nodeType": "VariableDeclaration",
                "scope": 7285,
                "src": "6988:32:21",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 7277,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "6988:7:21",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 7281,
                "mutability": "mutable",
                "name": "lpSharePrice",
                "nameLocation": "7148:12:21",
                "nodeType": "VariableDeclaration",
                "scope": 7285,
                "src": "7140:20:21",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 7280,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "7140:7:21",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 7284,
                "mutability": "mutable",
                "name": "longExposure",
                "nameLocation": "7249:12:21",
                "nodeType": "VariableDeclaration",
                "scope": 7285,
                "src": "7241:20:21",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 7283,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "7241:7:21",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "PoolInfo",
            "nameLocation": "5746:8:21",
            "scope": 7431,
            "visibility": "public"
          },
          {
            "id": 7295,
            "nodeType": "StructDefinition",
            "src": "7274:458:21",
            "nodes": [],
            "canonicalName": "IHyperdrive.Options",
            "members": [
              {
                "constant": false,
                "id": 7288,
                "mutability": "mutable",
                "name": "destination",
                "nameLocation": "7388:11:21",
                "nodeType": "VariableDeclaration",
                "scope": 7295,
                "src": "7380:19:21",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 7287,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "7380:7:21",
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
                "id": 7291,
                "mutability": "mutable",
                "name": "asBase",
                "nameLocation": "7572:6:21",
                "nodeType": "VariableDeclaration",
                "scope": 7295,
                "src": "7567:11:21",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 7290,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "7567:4:21",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 7294,
                "mutability": "mutable",
                "name": "extraData",
                "nameLocation": "7716:9:21",
                "nodeType": "VariableDeclaration",
                "scope": 7295,
                "src": "7710:15:21",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes_storage_ptr",
                  "typeString": "bytes"
                },
                "typeName": {
                  "id": 7293,
                  "name": "bytes",
                  "nodeType": "ElementaryTypeName",
                  "src": "7710:5:21",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_storage_ptr",
                    "typeString": "bytes"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Options",
            "nameLocation": "7281:7:21",
            "scope": 7431,
            "visibility": "public"
          },
          {
            "id": 7298,
            "nodeType": "ErrorDefinition",
            "src": "7839:23:21",
            "nodes": [],
            "documentation": {
              "id": 7296,
              "nodeType": "StructuredDocumentation",
              "src": "7758:76:21",
              "text": "##################\n ### Hyperdrive ###\n ##################"
            },
            "errorSelector": "8164f842",
            "name": "ApprovalFailed",
            "nameLocation": "7845:14:21",
            "parameters": {
              "id": 7297,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7859:2:21"
            }
          },
          {
            "id": 7300,
            "nodeType": "ErrorDefinition",
            "src": "7958:39:21",
            "nodes": [],
            "errorSelector": "18846de9",
            "name": "BaseBufferExceedsShareReserves",
            "nameLocation": "7964:30:21",
            "parameters": {
              "id": 7299,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7994:2:21"
            }
          },
          {
            "id": 7302,
            "nodeType": "ErrorDefinition",
            "src": "8002:33:21",
            "nodes": [],
            "errorSelector": "abed41c4",
            "name": "BelowMinimumContribution",
            "nameLocation": "8008:24:21",
            "parameters": {
              "id": 7301,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8032:2:21"
            }
          },
          {
            "id": 7304,
            "nodeType": "ErrorDefinition",
            "src": "8040:34:21",
            "nodes": [],
            "errorSelector": "6101d7a4",
            "name": "BelowMinimumShareReserves",
            "nameLocation": "8046:25:21",
            "parameters": {
              "id": 7303,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8071:2:21"
            }
          },
          {
            "id": 7306,
            "nodeType": "ErrorDefinition",
            "src": "8079:19:21",
            "nodes": [],
            "errorSelector": "76c22a22",
            "name": "InvalidApr",
            "nameLocation": "8085:10:21",
            "parameters": {
              "id": 7305,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8095:2:21"
            }
          },
          {
            "id": 7308,
            "nodeType": "ErrorDefinition",
            "src": "8103:25:21",
            "nodes": [],
            "errorSelector": "0e442a4a",
            "name": "InvalidBaseToken",
            "nameLocation": "8109:16:21",
            "parameters": {
              "id": 7307,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8125:2:21"
            }
          },
          {
            "id": 7310,
            "nodeType": "ErrorDefinition",
            "src": "8133:30:21",
            "nodes": [],
            "errorSelector": "ecd29e81",
            "name": "InvalidCheckpointTime",
            "nameLocation": "8139:21:21",
            "parameters": {
              "id": 7309,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8160:2:21"
            }
          },
          {
            "id": 7312,
            "nodeType": "ErrorDefinition",
            "src": "8168:34:21",
            "nodes": [],
            "errorSelector": "5428734d",
            "name": "InvalidCheckpointDuration",
            "nameLocation": "8174:25:21",
            "parameters": {
              "id": 7311,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8199:2:21"
            }
          },
          {
            "id": 7314,
            "nodeType": "ErrorDefinition",
            "src": "8207:33:21",
            "nodes": [],
            "errorSelector": "55f2a42f",
            "name": "InvalidInitialSharePrice",
            "nameLocation": "8213:24:21",
            "parameters": {
              "id": 7313,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8237:2:21"
            }
          },
          {
            "id": 7316,
            "nodeType": "ErrorDefinition",
            "src": "8245:28:21",
            "nodes": [],
            "errorSelector": "987dadd3",
            "name": "InvalidMaturityTime",
            "nameLocation": "8251:19:21",
            "parameters": {
              "id": 7315,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8270:2:21"
            }
          },
          {
            "id": 7318,
            "nodeType": "ErrorDefinition",
            "src": "8278:36:21",
            "nodes": [],
            "errorSelector": "49db44f5",
            "name": "InvalidMinimumShareReserves",
            "nameLocation": "8284:27:21",
            "parameters": {
              "id": 7317,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8311:2:21"
            }
          },
          {
            "id": 7320,
            "nodeType": "ErrorDefinition",
            "src": "8319:32:21",
            "nodes": [],
            "errorSelector": "4a7fff9e",
            "name": "InvalidPositionDuration",
            "nameLocation": "8325:23:21",
            "parameters": {
              "id": 7319,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8348:2:21"
            }
          },
          {
            "id": 7322,
            "nodeType": "ErrorDefinition",
            "src": "8356:29:21",
            "nodes": [],
            "errorSelector": "b0bfcdbe",
            "name": "InvalidShareReserves",
            "nameLocation": "8362:20:21",
            "parameters": {
              "id": 7321,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8382:2:21"
            }
          },
          {
            "id": 7324,
            "nodeType": "ErrorDefinition",
            "src": "8390:26:21",
            "nodes": [],
            "errorSelector": "45ee5986",
            "name": "InvalidFeeAmounts",
            "nameLocation": "8396:17:21",
            "parameters": {
              "id": 7323,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8413:2:21"
            }
          },
          {
            "id": 7326,
            "nodeType": "ErrorDefinition",
            "src": "8421:30:21",
            "nodes": [],
            "errorSelector": "2b44eccc",
            "name": "InvalidFeeDestination",
            "nameLocation": "8427:21:21",
            "parameters": {
              "id": 7325,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8448:2:21"
            }
          },
          {
            "id": 7328,
            "nodeType": "ErrorDefinition",
            "src": "8456:25:21",
            "nodes": [],
            "errorSelector": "512095c7",
            "name": "NegativeInterest",
            "nameLocation": "8462:16:21",
            "parameters": {
              "id": 7327,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8478:2:21"
            }
          },
          {
            "id": 7330,
            "nodeType": "ErrorDefinition",
            "src": "8486:29:21",
            "nodes": [],
            "errorSelector": "aeeb825d",
            "name": "NegativePresentValue",
            "nameLocation": "8492:20:21",
            "parameters": {
              "id": 7329,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8512:2:21"
            }
          },
          {
            "id": 7332,
            "nodeType": "ErrorDefinition",
            "src": "8520:27:21",
            "nodes": [],
            "errorSelector": "bb464a5e",
            "name": "NoAssetsToWithdraw",
            "nameLocation": "8526:18:21",
            "parameters": {
              "id": 7331,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8544:2:21"
            }
          },
          {
            "id": 7334,
            "nodeType": "ErrorDefinition",
            "src": "8552:19:21",
            "nodes": [],
            "errorSelector": "1574f9f3",
            "name": "NotPayable",
            "nameLocation": "8558:10:21",
            "parameters": {
              "id": 7333,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8568:2:21"
            }
          },
          {
            "id": 7336,
            "nodeType": "ErrorDefinition",
            "src": "8576:20:21",
            "nodes": [],
            "errorSelector": "c9726517",
            "name": "OutputLimit",
            "nameLocation": "8582:11:21",
            "parameters": {
              "id": 7335,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8593:2:21"
            }
          },
          {
            "id": 7338,
            "nodeType": "ErrorDefinition",
            "src": "8601:15:21",
            "nodes": [],
            "errorSelector": "9e87fac8",
            "name": "Paused",
            "nameLocation": "8607:6:21",
            "parameters": {
              "id": 7337,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8613:2:21"
            }
          },
          {
            "id": 7340,
            "nodeType": "ErrorDefinition",
            "src": "8621:31:21",
            "nodes": [],
            "errorSelector": "7983c051",
            "name": "PoolAlreadyInitialized",
            "nameLocation": "8627:22:21",
            "parameters": {
              "id": 7339,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8649:2:21"
            }
          },
          {
            "id": 7342,
            "nodeType": "ErrorDefinition",
            "src": "8657:51:21",
            "nodes": [],
            "errorSelector": "97c01bef",
            "name": "ShareReservesDeltaExceedsBondReservesDelta",
            "nameLocation": "8663:42:21",
            "parameters": {
              "id": 7341,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8705:2:21"
            }
          },
          {
            "id": 7344,
            "nodeType": "ErrorDefinition",
            "src": "8713:23:21",
            "nodes": [],
            "errorSelector": "90b8ec18",
            "name": "TransferFailed",
            "nameLocation": "8719:14:21",
            "parameters": {
              "id": 7343,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8733:2:21"
            }
          },
          {
            "id": 7346,
            "nodeType": "ErrorDefinition",
            "src": "8741:26:21",
            "nodes": [],
            "errorSelector": "e9bf5433",
            "name": "UnexpectedAssetId",
            "nameLocation": "8747:17:21",
            "parameters": {
              "id": 7345,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8764:2:21"
            }
          },
          {
            "id": 7348,
            "nodeType": "ErrorDefinition",
            "src": "8772:25:21",
            "nodes": [],
            "errorSelector": "f2fb3812",
            "name": "UnexpectedSender",
            "nameLocation": "8778:16:21",
            "parameters": {
              "id": 7347,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8794:2:21"
            }
          },
          {
            "id": 7350,
            "nodeType": "ErrorDefinition",
            "src": "8802:25:21",
            "nodes": [],
            "errorSelector": "6a172882",
            "name": "UnsupportedToken",
            "nameLocation": "8808:16:21",
            "parameters": {
              "id": 7349,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8824:2:21"
            }
          },
          {
            "id": 7352,
            "nodeType": "ErrorDefinition",
            "src": "8832:26:21",
            "nodes": [],
            "errorSelector": "42af972b",
            "name": "MinimumSharePrice",
            "nameLocation": "8838:17:21",
            "parameters": {
              "id": 7351,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8855:2:21"
            }
          },
          {
            "id": 7354,
            "nodeType": "ErrorDefinition",
            "src": "8863:33:21",
            "nodes": [],
            "errorSelector": "423bbb46",
            "name": "MinimumTransactionAmount",
            "nameLocation": "8869:24:21",
            "parameters": {
              "id": 7353,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8893:2:21"
            }
          },
          {
            "id": 7356,
            "nodeType": "ErrorDefinition",
            "src": "8901:26:21",
            "nodes": [],
            "errorSelector": "252c3a3e",
            "name": "ZeroLpTotalSupply",
            "nameLocation": "8907:17:21",
            "parameters": {
              "id": 7355,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8924:2:21"
            }
          },
          {
            "id": 7359,
            "nodeType": "ErrorDefinition",
            "src": "8996:24:21",
            "nodes": [],
            "documentation": {
              "id": 7357,
              "nodeType": "StructuredDocumentation",
              "src": "8933:58:21",
              "text": "############\n ### TWAP ###\n ############"
            },
            "errorSelector": "a89817b0",
            "name": "QueryOutOfRange",
            "nameLocation": "9002:15:21",
            "parameters": {
              "id": 7358,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9017:2:21"
            }
          },
          {
            "id": 7364,
            "nodeType": "ErrorDefinition",
            "src": "9113:29:21",
            "nodes": [],
            "documentation": {
              "id": 7360,
              "nodeType": "StructuredDocumentation",
              "src": "9026:82:21",
              "text": "####################\n ### DataProvider ###\n ####################"
            },
            "errorSelector": "dcc81126",
            "name": "ReturnData",
            "nameLocation": "9119:10:21",
            "parameters": {
              "id": 7363,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7362,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "9136:4:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7364,
                  "src": "9130:10:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 7361,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "9130:5:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9129:12:21"
            }
          },
          {
            "id": 7368,
            "nodeType": "ErrorDefinition",
            "src": "9147:41:21",
            "nodes": [],
            "errorSelector": "efa64d4b",
            "name": "CallFailed",
            "nameLocation": "9153:10:21",
            "parameters": {
              "id": 7367,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7366,
                  "mutability": "mutable",
                  "name": "underlyingError",
                  "nameLocation": "9171:15:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 7368,
                  "src": "9164:22:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 7365,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "9164:6:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9163:24:21"
            }
          },
          {
            "id": 7370,
            "nodeType": "ErrorDefinition",
            "src": "9193:26:21",
            "nodes": [],
            "errorSelector": "8bb0a34b",
            "name": "UnexpectedSuccess",
            "nameLocation": "9199:17:21",
            "parameters": {
              "id": 7369,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9216:2:21"
            }
          },
          {
            "id": 7373,
            "nodeType": "ErrorDefinition",
            "src": "9297:21:21",
            "nodes": [],
            "documentation": {
              "id": 7371,
              "nodeType": "StructuredDocumentation",
              "src": "9225:67:21",
              "text": "###############\n ### Factory ###\n ###############"
            },
            "errorSelector": "82b42900",
            "name": "Unauthorized",
            "nameLocation": "9303:12:21",
            "parameters": {
              "id": 7372,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9315:2:21"
            }
          },
          {
            "id": 7375,
            "nodeType": "ErrorDefinition",
            "src": "9323:28:21",
            "nodes": [],
            "errorSelector": "652122d9",
            "name": "InvalidContribution",
            "nameLocation": "9329:19:21",
            "parameters": {
              "id": 7374,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9348:2:21"
            }
          },
          {
            "id": 7377,
            "nodeType": "ErrorDefinition",
            "src": "9356:21:21",
            "nodes": [],
            "errorSelector": "c1ab6dc1",
            "name": "InvalidToken",
            "nameLocation": "9362:12:21",
            "parameters": {
              "id": 7376,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9374:2:21"
            }
          },
          {
            "id": 7379,
            "nodeType": "ErrorDefinition",
            "src": "9382:22:21",
            "nodes": [],
            "errorSelector": "a3932d2d",
            "name": "MaxFeeTooHigh",
            "nameLocation": "9388:13:21",
            "parameters": {
              "id": 7378,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9401:2:21"
            }
          },
          {
            "id": 7381,
            "nodeType": "ErrorDefinition",
            "src": "9409:19:21",
            "nodes": [],
            "errorSelector": "cd4e6167",
            "name": "FeeTooHigh",
            "nameLocation": "9415:10:21",
            "parameters": {
              "id": 7380,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9425:2:21"
            }
          },
          {
            "id": 7383,
            "nodeType": "ErrorDefinition",
            "src": "9433:33:21",
            "nodes": [],
            "errorSelector": "8fbc3bd9",
            "name": "NonPayableInitialization",
            "nameLocation": "9439:24:21",
            "parameters": {
              "id": 7382,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9463:2:21"
            }
          },
          {
            "id": 7386,
            "nodeType": "ErrorDefinition",
            "src": "9565:33:21",
            "nodes": [],
            "documentation": {
              "id": 7384,
              "nodeType": "StructuredDocumentation",
              "src": "9472:88:21",
              "text": "######################\n ### ERC20Forwarder ###\n ######################"
            },
            "errorSelector": "ba430d38",
            "name": "BatchInputLengthMismatch",
            "nameLocation": "9571:24:21",
            "parameters": {
              "id": 7385,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9595:2:21"
            }
          },
          {
            "id": 7388,
            "nodeType": "ErrorDefinition",
            "src": "9603:24:21",
            "nodes": [],
            "errorSelector": "f87d9271",
            "name": "ExpiredDeadline",
            "nameLocation": "9609:15:21",
            "parameters": {
              "id": 7387,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9624:2:21"
            }
          },
          {
            "id": 7390,
            "nodeType": "ErrorDefinition",
            "src": "9632:25:21",
            "nodes": [],
            "errorSelector": "8baa579f",
            "name": "InvalidSignature",
            "nameLocation": "9638:16:21",
            "parameters": {
              "id": 7389,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9654:2:21"
            }
          },
          {
            "id": 7392,
            "nodeType": "ErrorDefinition",
            "src": "9662:27:21",
            "nodes": [],
            "errorSelector": "2aab8bd3",
            "name": "InvalidERC20Bridge",
            "nameLocation": "9668:18:21",
            "parameters": {
              "id": 7391,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9686:2:21"
            }
          },
          {
            "id": 7394,
            "nodeType": "ErrorDefinition",
            "src": "9694:30:21",
            "nodes": [],
            "errorSelector": "f0dd15fd",
            "name": "RestrictedZeroAddress",
            "nameLocation": "9700:21:21",
            "parameters": {
              "id": 7393,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9721:2:21"
            }
          },
          {
            "id": 7397,
            "nodeType": "ErrorDefinition",
            "src": "9844:32:21",
            "nodes": [],
            "documentation": {
              "id": 7395,
              "nodeType": "StructuredDocumentation",
              "src": "9730:109:21",
              "text": "#############################\n ### ERC20ForwarderFactory ###\n #############################"
            },
            "errorSelector": "381dd540",
            "name": "InvalidForwarderAddress",
            "nameLocation": "9850:23:21",
            "parameters": {
              "id": 7396,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9873:2:21"
            }
          },
          {
            "id": 7400,
            "nodeType": "ErrorDefinition",
            "src": "9970:22:21",
            "nodes": [],
            "documentation": {
              "id": 7398,
              "nodeType": "StructuredDocumentation",
              "src": "9882:83:21",
              "text": "#####################\n ### BondWrapper ###\n #####################"
            },
            "errorSelector": "9acb7e52",
            "name": "AlreadyClosed",
            "nameLocation": "9976:13:21",
            "parameters": {
              "id": 7399,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9989:2:21"
            }
          },
          {
            "id": 7402,
            "nodeType": "ErrorDefinition",
            "src": "9997:20:21",
            "nodes": [],
            "errorSelector": "3f8e46bc",
            "name": "BondMatured",
            "nameLocation": "10003:11:21",
            "parameters": {
              "id": 7401,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10014:2:21"
            }
          },
          {
            "id": 7404,
            "nodeType": "ErrorDefinition",
            "src": "10022:23:21",
            "nodes": [],
            "errorSelector": "915eceb1",
            "name": "BondNotMatured",
            "nameLocation": "10028:14:21",
            "parameters": {
              "id": 7403,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10042:2:21"
            }
          },
          {
            "id": 7406,
            "nodeType": "ErrorDefinition",
            "src": "10050:26:21",
            "nodes": [],
            "errorSelector": "d5481703",
            "name": "InsufficientPrice",
            "nameLocation": "10056:17:21",
            "parameters": {
              "id": 7405,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10073:2:21"
            }
          },
          {
            "id": 7408,
            "nodeType": "ErrorDefinition",
            "src": "10081:28:21",
            "nodes": [],
            "errorSelector": "aaad13f7",
            "name": "InputLengthMismatch",
            "nameLocation": "10087:19:21",
            "parameters": {
              "id": 7407,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10106:2:21"
            }
          },
          {
            "id": 7410,
            "nodeType": "ErrorDefinition",
            "src": "10114:27:21",
            "nodes": [],
            "errorSelector": "4a0dabae",
            "name": "MintPercentTooHigh",
            "nameLocation": "10120:18:21",
            "parameters": {
              "id": 7409,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10138:2:21"
            }
          },
          {
            "id": 7413,
            "nodeType": "ErrorDefinition",
            "src": "10219:25:21",
            "nodes": [],
            "documentation": {
              "id": 7411,
              "nodeType": "StructuredDocumentation",
              "src": "10147:67:21",
              "text": "###############\n ### AssetId ###\n ###############"
            },
            "errorSelector": "b7d09497",
            "name": "InvalidTimestamp",
            "nameLocation": "10225:16:21",
            "parameters": {
              "id": 7412,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10241:2:21"
            }
          },
          {
            "id": 7416,
            "nodeType": "ErrorDefinition",
            "src": "10343:39:21",
            "nodes": [],
            "documentation": {
              "id": 7414,
              "nodeType": "StructuredDocumentation",
              "src": "10250:88:21",
              "text": "######################\n ### FixedPointMath ###\n ######################"
            },
            "errorSelector": "df92cc9d",
            "name": "FixedPointMath_InvalidExponent",
            "nameLocation": "10349:30:21",
            "parameters": {
              "id": 7415,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10379:2:21"
            }
          },
          {
            "id": 7418,
            "nodeType": "ErrorDefinition",
            "src": "10387:36:21",
            "nodes": [],
            "errorSelector": "d071fdda",
            "name": "FixedPointMath_InvalidInput",
            "nameLocation": "10393:27:21",
            "parameters": {
              "id": 7417,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10420:2:21"
            }
          },
          {
            "id": 7420,
            "nodeType": "ErrorDefinition",
            "src": "10428:43:21",
            "nodes": [],
            "errorSelector": "ac5f1b8e",
            "name": "FixedPointMath_NegativeOrZeroInput",
            "nameLocation": "10434:34:21",
            "parameters": {
              "id": 7419,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10468:2:21"
            }
          },
          {
            "id": 7422,
            "nodeType": "ErrorDefinition",
            "src": "10476:37:21",
            "nodes": [],
            "errorSelector": "2c7949f5",
            "name": "FixedPointMath_NegativeInput",
            "nameLocation": "10482:28:21",
            "parameters": {
              "id": 7421,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10510:2:21"
            }
          },
          {
            "id": 7425,
            "nodeType": "ErrorDefinition",
            "src": "10612:25:21",
            "nodes": [],
            "documentation": {
              "id": 7423,
              "nodeType": "StructuredDocumentation",
              "src": "10519:88:21",
              "text": "######################\n ### YieldSpaceMath ###\n ######################"
            },
            "errorSelector": "7ac17d25",
            "name": "InvalidTradeSize",
            "nameLocation": "10618:16:21",
            "parameters": {
              "id": 7424,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10634:2:21"
            }
          },
          {
            "id": 7428,
            "nodeType": "ErrorDefinition",
            "src": "10730:28:21",
            "nodes": [],
            "documentation": {
              "id": 7426,
              "nodeType": "StructuredDocumentation",
              "src": "10643:82:21",
              "text": "######################\n ### SafeCast ###\n ######################"
            },
            "errorSelector": "1e15f2a2",
            "name": "UnsafeCastToUint128",
            "nameLocation": "10736:19:21",
            "parameters": {
              "id": 7427,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10755:2:21"
            }
          },
          {
            "id": 7430,
            "nodeType": "ErrorDefinition",
            "src": "10763:27:21",
            "nodes": [],
            "errorSelector": "a5353be5",
            "name": "UnsafeCastToInt128",
            "nameLocation": "10769:18:21",
            "parameters": {
              "id": 7429,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10787:2:21"
            }
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 7012,
              "name": "IDataProvider",
              "nameLocations": [
                "351:13:21"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 6652,
              "src": "351:13:21"
            },
            "id": 7013,
            "nodeType": "InheritanceSpecifier",
            "src": "351:13:21"
          },
          {
            "baseName": {
              "id": 7014,
              "name": "IHyperdriveRead",
              "nameLocations": [
                "370:15:21"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 7515,
              "src": "370:15:21"
            },
            "id": 7015,
            "nodeType": "InheritanceSpecifier",
            "src": "370:15:21"
          },
          {
            "baseName": {
              "id": 7016,
              "name": "IHyperdriveWrite",
              "nameLocations": [
                "391:16:21"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 7668,
              "src": "391:16:21"
            },
            "id": 7017,
            "nodeType": "InheritanceSpecifier",
            "src": "391:16:21"
          },
          {
            "baseName": {
              "id": 7018,
              "name": "IMultiToken",
              "nameLocations": [
                "413:11:21"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 7790,
              "src": "413:11:21"
            },
            "id": 7019,
            "nodeType": "InheritanceSpecifier",
            "src": "413:11:21"
          }
        ],
        "canonicalName": "IHyperdrive",
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          7431,
          7790,
          7798,
          7668,
          7980,
          7515,
          7868,
          6652
        ],
        "name": "IHyperdrive",
        "nameLocation": "332:11:21",
        "scope": 7432,
        "usedErrors": [
          7298,
          7300,
          7302,
          7304,
          7306,
          7308,
          7310,
          7312,
          7314,
          7316,
          7318,
          7320,
          7322,
          7324,
          7326,
          7328,
          7330,
          7332,
          7334,
          7336,
          7338,
          7340,
          7342,
          7344,
          7346,
          7348,
          7350,
          7352,
          7354,
          7356,
          7359,
          7364,
          7368,
          7370,
          7373,
          7375,
          7377,
          7379,
          7381,
          7383,
          7386,
          7388,
          7390,
          7392,
          7394,
          7397,
          7400,
          7402,
          7404,
          7406,
          7408,
          7410,
          7413,
          7416,
          7418,
          7420,
          7422,
          7425,
          7428,
          7430
        ]
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 21
} as const;