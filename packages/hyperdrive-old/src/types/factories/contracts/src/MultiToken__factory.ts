/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  MultiToken,
  MultiTokenInterface,
} from "../../../contracts/src/MultiToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_linkerCodeHash",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "BatchInputLengthMismatch",
    type: "error",
  },
  {
    inputs: [],
    name: "ExpiredDeadline",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidERC20Bridge",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidSignature",
    type: "error",
  },
  {
    inputs: [],
    name: "RestrictedZeroAddress",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "batchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "linkerCodeHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "perTokenApprovals",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_approved",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permitForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenID",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "setApproval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenID",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "setApprovalBridge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenID",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenID",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "transferFromBridge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60e060405234801561001057600080fd5b5060405161156138038061156183398101604081905261002f916100cd565b6001600160a01b0316608090815260a091825260408051808201825260018152603160f81b60209182015281517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6818401524660608201523081850152825180820390940184529093019052805191012060c05261010a565b600080604083850312156100e057600080fd5b825160208401519092506001600160a01b03811681146100ff57600080fd5b809150509250929050565b60805160a05160c05161140561015c600039600081816101f601526108240152600081816103300152818161062a0152610b740152600081816102e4015281816105da0152610b2401526114056000f3fe608060405234801561001057600080fd5b50600436106101355760003560e01c80637ecebe00116100b2578063bd85b03911610081578063c905a4b511610066578063c905a4b51461032b578063e44808bc14610352578063e985e9c51461036557600080fd5b8063bd85b039146102bf578063c45a0155146102df57600080fd5b80637ecebe00146102665780639032c726146102865780639cd241af14610299578063a22cb465146102ac57600080fd5b806330adf81f116101095780633656eec2116100ee5780633656eec2146102185780634e41a1fb146102405780634ed2d6ac1461025357600080fd5b806330adf81f146101ca5780633644e515146101f157600080fd5b8062ad800c1461013a57806317fad7fc146101635780631c0f12b61461017857806321ff32a91461018b575b600080fd5b61014d610148366004610eb1565b6103a3565b60405161015a9190610eca565b60405180910390f35b610176610171366004610fab565b610445565b005b61017661018636600461103c565b61054f565b6101bc610199366004611080565b600360209081526000938452604080852082529284528284209052825290205481565b60405190815260200161015a565b6101bc7f9319a49e677b4f5aede521541bd9c2c7d0f3529998213c5c9b41a6bf27579feb81565b6101bc7f000000000000000000000000000000000000000000000000000000000000000081565b6101bc6102263660046110bc565b600060208181529281526040808220909352908152205481565b61014d61024e366004610eb1565b610562565b6101766102613660046110e8565b61057f565b6101bc61027436600461112e565b60066020526000908152604090205481565b610176610294366004611160565b6106e3565b6101766102a73660046111da565b610a21565b6101766102ba36600461120f565b610a32565b6101bc6102cd366004610eb1565b60016020526000908152604090205481565b6103067f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161015a565b6101bc7f000000000000000000000000000000000000000000000000000000000000000081565b610176610360366004611239565b610ac9565b610393610373366004611290565b600260209081526000928352604080842090915290825290205460ff1681565b604051901515815260200161015a565b60008181526004602052604090208054606091906103c0906112ba565b80601f01602080910402602001604051908101604052809291908181526020018280546103ec906112ba565b80156104395780601f1061040e57610100808354040283529160200191610439565b820191906000526020600020905b81548152906001019060200180831161041c57829003601f168201915b50505050509050919050565b73ffffffffffffffffffffffffffffffffffffffff8616158061047c575073ffffffffffffffffffffffffffffffffffffffff8516155b156104b3576040517ff0dd15fd00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8281146104ec576040517fba430d3800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b838110156105465761053485858381811061050c5761050c61130d565b9050602002013588888686868181106105275761052761130d565b9050602002013533610c2f565b8061053e8161136b565b9150506104ef565b50505050505050565b61055c8484848433610c2f565b50505050565b60008181526005602052604090208054606091906103c0906112ba565b8361066c81604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091207fff0000000000000000000000000000000000000000000000000000000000000060808401527f000000000000000000000000000000000000000000000000000000000000000090911b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146106d0576040517f2aab8bd300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106dc85858585610e37565b5050505050565b8342111561071d576040517ff87d927100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff871661076a576040517ff0dd15fd00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff87811660008181526006602090815260408083205481517f9319a49e677b4f5aede521541bd9c2c7d0f3529998213c5c9b41a6bf27579feb8185015280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e0840190945283519301929092207f19010000000000000000000000000000000000000000000000000000000000006101008301527f000000000000000000000000000000000000000000000000000000000000000061010283015261012282015261014201604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa1580156108dc573d6000803e3d6000fd5b5050506020604051035190508873ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461094d576040517f8baa579f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8916600090815260066020526040812080549161097e8361136b565b909155505073ffffffffffffffffffffffffffffffffffffffff8981166000818152600260209081526040808320948d168084529482529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050505050505050565b610a2d83838333610e37565b505050565b33600081815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168085529083529281902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b84610bb681604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091207fff0000000000000000000000000000000000000000000000000000000000000060808401527f000000000000000000000000000000000000000000000000000000000000000090911b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610c1a576040517f2aab8bd300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610c278686868686610c2f565b505050505050565b8373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610d525773ffffffffffffffffffffffffffffffffffffffff80851660009081526002602090815260408083209385168352929052205460ff16610d5257600085815260036020908152604080832073ffffffffffffffffffffffffffffffffffffffff808916855290835281842090851684529091529020547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610d5057600086815260036020908152604080832073ffffffffffffffffffffffffffffffffffffffff808a168552908352818420908616845290915281208054859290610d4a9084906113a3565b90915550505b505b60008581526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8816845290915281208054849290610d8f9084906113a3565b909155505060008581526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281208054849290610dd19084906113bc565b9091555050604080518681526020810184905273ffffffffffffffffffffffffffffffffffffffff8086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b600084815260036020908152604080832073ffffffffffffffffffffffffffffffffffffffff85811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b600060208284031215610ec357600080fd5b5035919050565b600060208083528351808285015260005b81811015610ef757858101830151858201604001528201610edb565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610f5a57600080fd5b919050565b60008083601f840112610f7157600080fd5b50813567ffffffffffffffff811115610f8957600080fd5b6020830191508360208260051b8501011115610fa457600080fd5b9250929050565b60008060008060008060808789031215610fc457600080fd5b610fcd87610f36565b9550610fdb60208801610f36565b9450604087013567ffffffffffffffff80821115610ff857600080fd5b6110048a838b01610f5f565b9096509450606089013591508082111561101d57600080fd5b5061102a89828a01610f5f565b979a9699509497509295939492505050565b6000806000806080858703121561105257600080fd5b8435935061106260208601610f36565b925061107060408601610f36565b9396929550929360600135925050565b60008060006060848603121561109557600080fd5b833592506110a560208501610f36565b91506110b360408501610f36565b90509250925092565b600080604083850312156110cf57600080fd5b823591506110df60208401610f36565b90509250929050565b600080600080608085870312156110fe57600080fd5b8435935061110e60208601610f36565b92506040850135915061112360608601610f36565b905092959194509250565b60006020828403121561114057600080fd5b61114982610f36565b9392505050565b80358015158114610f5a57600080fd5b600080600080600080600060e0888a03121561117b57600080fd5b61118488610f36565b965061119260208901610f36565b95506111a060408901611150565b945060608801359350608088013560ff811681146111bd57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806000606084860312156111ef57600080fd5b833592506111ff60208501610f36565b9150604084013590509250925092565b6000806040838503121561122257600080fd5b61122b83610f36565b91506110df60208401611150565b600080600080600060a0868803121561125157600080fd5b8535945061126160208701610f36565b935061126f60408701610f36565b92506060860135915061128460808701610f36565b90509295509295909350565b600080604083850312156112a357600080fd5b6112ac83610f36565b91506110df60208401610f36565b600181811c908216806112ce57607f821691505b602082108103611307577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361139c5761139c61133c565b5060010190565b818103818111156113b6576113b661133c565b92915050565b808201808211156113b6576113b661133c56fea2646970667358221220ad0811b37b1bf701d69f614e9e571ddaaf34c5689c1278fd4ad62c6ec0fd58a064736f6c63430008120033";

type MultiTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MultiTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MultiToken__factory extends ContractFactory {
  constructor(...args: MultiTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _linkerCodeHash: PromiseOrValue<BytesLike>,
    _factory: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MultiToken> {
    return super.deploy(
      _linkerCodeHash,
      _factory,
      overrides || {}
    ) as Promise<MultiToken>;
  }
  override getDeployTransaction(
    _linkerCodeHash: PromiseOrValue<BytesLike>,
    _factory: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _linkerCodeHash,
      _factory,
      overrides || {}
    );
  }
  override attach(address: string): MultiToken {
    return super.attach(address) as MultiToken;
  }
  override connect(signer: Signer): MultiToken__factory {
    return super.connect(signer) as MultiToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MultiTokenInterface {
    return new utils.Interface(_abi) as MultiTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MultiToken {
    return new Contract(address, _abi, signerOrProvider) as MultiToken;
  }
}