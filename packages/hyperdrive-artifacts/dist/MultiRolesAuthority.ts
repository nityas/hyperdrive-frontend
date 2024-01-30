export const MultiRolesAuthority = 
{
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        },
        {
          "internalType": "contract Authority",
          "name": "_authority",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "contract Authority",
          "name": "newAuthority",
          "type": "address"
        }
      ],
      "name": "AuthorityUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes4",
          "name": "functionSig",
          "type": "bytes4"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "enabled",
          "type": "bool"
        }
      ],
      "name": "PublicCapabilityUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint8",
          "name": "role",
          "type": "uint8"
        },
        {
          "indexed": true,
          "internalType": "bytes4",
          "name": "functionSig",
          "type": "bytes4"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "enabled",
          "type": "bool"
        }
      ],
      "name": "RoleCapabilityUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "target",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "contract Authority",
          "name": "authority",
          "type": "address"
        }
      ],
      "name": "TargetCustomAuthorityUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint8",
          "name": "role",
          "type": "uint8"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "enabled",
          "type": "bool"
        }
      ],
      "name": "UserRoleUpdated",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "authority",
      "outputs": [
        {
          "internalType": "contract Authority",
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
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "target",
          "type": "address"
        },
        {
          "internalType": "bytes4",
          "name": "functionSig",
          "type": "bytes4"
        }
      ],
      "name": "canCall",
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
          "internalType": "uint8",
          "name": "role",
          "type": "uint8"
        },
        {
          "internalType": "bytes4",
          "name": "functionSig",
          "type": "bytes4"
        }
      ],
      "name": "doesRoleHaveCapability",
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
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "uint8",
          "name": "role",
          "type": "uint8"
        }
      ],
      "name": "doesUserHaveRole",
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
          "internalType": "bytes4",
          "name": "",
          "type": "bytes4"
        }
      ],
      "name": "getRolesWithCapability",
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
          "name": "",
          "type": "address"
        }
      ],
      "name": "getTargetCustomAuthority",
      "outputs": [
        {
          "internalType": "contract Authority",
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
          "name": "",
          "type": "address"
        }
      ],
      "name": "getUserRoles",
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
          "internalType": "bytes4",
          "name": "",
          "type": "bytes4"
        }
      ],
      "name": "isCapabilityPublic",
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
      "name": "owner",
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
          "internalType": "contract Authority",
          "name": "newAuthority",
          "type": "address"
        }
      ],
      "name": "setAuthority",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "functionSig",
          "type": "bytes4"
        },
        {
          "internalType": "bool",
          "name": "enabled",
          "type": "bool"
        }
      ],
      "name": "setPublicCapability",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint8",
          "name": "role",
          "type": "uint8"
        },
        {
          "internalType": "bytes4",
          "name": "functionSig",
          "type": "bytes4"
        },
        {
          "internalType": "bool",
          "name": "enabled",
          "type": "bool"
        }
      ],
      "name": "setRoleCapability",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "target",
          "type": "address"
        },
        {
          "internalType": "contract Authority",
          "name": "customAuthority",
          "type": "address"
        }
      ],
      "name": "setTargetCustomAuthority",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "uint8",
          "name": "role",
          "type": "uint8"
        },
        {
          "internalType": "bool",
          "name": "enabled",
          "type": "bool"
        }
      ],
      "name": "setUserRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": {
    "object": "0x608060405234801561001057600080fd5b50604051610c8c380380610c8c83398101604081905261002f916100e1565b600080546001600160a01b03199081166001600160a01b0385811691821784556001805490931690851617909155604051849284929133917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36040516001600160a01b0382169033907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a35050505061011b565b6001600160a01b03811681146100de57600080fd5b50565b600080604083850312156100f457600080fd5b82516100ff816100c9565b6020840151909250610110816100c9565b809150509250929050565b610b628061012a6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80638da5cb5b11610097578063e688747b11610066578063e688747b1461023b578063ea7ca27614610271578063ed0d0efb146102a8578063f2fde38b146102c857600080fd5b80638da5cb5b146101c1578063b7009613146101ec578063bf7e214f146101ff578063c53a39851461021257600080fd5b80634b5159da116100d35780634b5159da1461017557806367aff48414610188578063728b952b1461019b5780637a9e5e4b146101ae57600080fd5b806306a36aee146100fa5780630bade8a41461012d5780630ea9b75b14610160575b600080fd5b61011a6101083660046108c8565b60036020526000908152604090205481565b6040519081526020015b60405180910390f35b61015061013b366004610902565b60046020526000908152604090205460ff1681565b6040519015158152602001610124565b61017361016e36600461093c565b6102db565b005b610173610183366004610983565b6103bc565b6101736101963660046109ba565b61044e565b6101736101a93660046109e8565b610516565b6101736101bc3660046108c8565b61059f565b6000546101d4906001600160a01b031681565b6040516001600160a01b039091168152602001610124565b6101506101fa366004610a16565b610689565b6001546101d4906001600160a01b031681565b6101d46102203660046108c8565b6002602052600090815260409020546001600160a01b031681565b610150610249366004610a5d565b6001600160e01b03191660009081526005602052604090205460ff919091161c600116151590565b61015061027f366004610a90565b6001600160a01b0391909116600090815260036020526040902054600160ff9092161c16151590565b61011a6102b6366004610902565b60056020526000908152604090205481565b6101736102d63660046108c8565b610789565b6102f1336000356001600160e01b031916610806565b6103165760405162461bcd60e51b815260040161030d90610abc565b60405180910390fd5b8015610346576001600160e01b0319821660009081526005602052604090208054600160ff86161b17905561036d565b6001600160e01b0319821660009081526005602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b151836040516103af911515815260200190565b60405180910390a3505050565b6103d2336000356001600160e01b031916610806565b6103ee5760405162461bcd60e51b815260040161030d90610abc565b6001600160e01b03198216600081815260046020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b610464336000356001600160e01b031916610806565b6104805760405162461bcd60e51b815260040161030d90610abc565b80156104af576001600160a01b03831660009081526003602052604090208054600160ff85161b1790556104d5565b6001600160a01b03831660009081526003602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf2836040516103af911515815260200190565b61052c336000356001600160e01b031916610806565b6105485760405162461bcd60e51b815260040161030d90610abc565b6001600160a01b0382811660008181526002602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b6000546001600160a01b0316331480610634575060015460405163b700961360e01b81526001600160a01b039091169063b7009613906105f390339030906001600160e01b03196000351690600401610ae2565b602060405180830381865afa158015610610573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106349190610b0f565b61063d57600080fd5b600180546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b6001600160a01b0380831660009081526002602052604081205490911680156107255760405163b700961360e01b81526001600160a01b0382169063b7009613906106dc90889088908890600401610ae2565b602060405180830381865afa1580156106f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061071d9190610b0f565b915050610782565b6001600160e01b0319831660009081526004602052604090205460ff168061077e57506001600160e01b031983166000908152600560209081526040808320546001600160a01b03891684526003909252909120541615155b9150505b9392505050565b61079f336000356001600160e01b031916610806565b6107bb5760405162461bcd60e51b815260040161030d90610abc565b600080546001600160a01b0319166001600160a01b0383169081178255604051909133917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a350565b6001546000906001600160a01b03168015801590610890575060405163b700961360e01b81526001600160a01b0382169063b70096139061084f90879030908890600401610ae2565b602060405180830381865afa15801561086c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108909190610b0f565b806108a857506000546001600160a01b038581169116145b949350505050565b6001600160a01b03811681146108c557600080fd5b50565b6000602082840312156108da57600080fd5b8135610782816108b0565b80356001600160e01b0319811681146108fd57600080fd5b919050565b60006020828403121561091457600080fd5b610782826108e5565b803560ff811681146108fd57600080fd5b80151581146108c557600080fd5b60008060006060848603121561095157600080fd5b61095a8461091d565b9250610968602085016108e5565b915060408401356109788161092e565b809150509250925092565b6000806040838503121561099657600080fd5b61099f836108e5565b915060208301356109af8161092e565b809150509250929050565b6000806000606084860312156109cf57600080fd5b83356109da816108b0565b92506109686020850161091d565b600080604083850312156109fb57600080fd5b8235610a06816108b0565b915060208301356109af816108b0565b600080600060608486031215610a2b57600080fd5b8335610a36816108b0565b92506020840135610a46816108b0565b9150610a54604085016108e5565b90509250925092565b60008060408385031215610a7057600080fd5b610a798361091d565b9150610a87602084016108e5565b90509250929050565b60008060408385031215610aa357600080fd5b8235610aae816108b0565b9150610a876020840161091d565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b600060208284031215610b2157600080fd5b81516107828161092e56fea2646970667358221220954953fe2bd851fc2326caca9528d023b1200629cc0872f35f12fafd78c198cd64736f6c63430008140033",
    "sourceMap": "327:4461:123:-:0;;;1094:77;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;682:5:122;:14;;-1:-1:-1;;;;;;682:14:122;;;-1:-1:-1;;;;;682:14:122;;;;;;;;-1:-1:-1;706:22:122;;;;;;;;;;;;744:40;;682:14;;706:22;;682:14;765:10;;744:40;;;799;;-1:-1:-1;;;;;799:40:122;;;816:10;;799:40;;;;;622:224;;1094:77:123;;327:4461;;14:131:184;-1:-1:-1;;;;;89:31:184;;79:42;;69:70;;135:1;132;125:12;69:70;14:131;:::o;150:404::-;248:6;256;309:2;297:9;288:7;284:23;280:32;277:52;;;325:1;322;315:12;277:52;357:9;351:16;376:31;401:5;376:31;:::i;:::-;476:2;461:18;;455:25;426:5;;-1:-1:-1;489:33:184;455:25;489:33;:::i;:::-;541:7;531:17;;;150:404;;;;;:::o;:::-;327:4461:123;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405234801561001057600080fd5b50600436106100f55760003560e01c80638da5cb5b11610097578063e688747b11610066578063e688747b1461023b578063ea7ca27614610271578063ed0d0efb146102a8578063f2fde38b146102c857600080fd5b80638da5cb5b146101c1578063b7009613146101ec578063bf7e214f146101ff578063c53a39851461021257600080fd5b80634b5159da116100d35780634b5159da1461017557806367aff48414610188578063728b952b1461019b5780637a9e5e4b146101ae57600080fd5b806306a36aee146100fa5780630bade8a41461012d5780630ea9b75b14610160575b600080fd5b61011a6101083660046108c8565b60036020526000908152604090205481565b6040519081526020015b60405180910390f35b61015061013b366004610902565b60046020526000908152604090205460ff1681565b6040519015158152602001610124565b61017361016e36600461093c565b6102db565b005b610173610183366004610983565b6103bc565b6101736101963660046109ba565b61044e565b6101736101a93660046109e8565b610516565b6101736101bc3660046108c8565b61059f565b6000546101d4906001600160a01b031681565b6040516001600160a01b039091168152602001610124565b6101506101fa366004610a16565b610689565b6001546101d4906001600160a01b031681565b6101d46102203660046108c8565b6002602052600090815260409020546001600160a01b031681565b610150610249366004610a5d565b6001600160e01b03191660009081526005602052604090205460ff919091161c600116151590565b61015061027f366004610a90565b6001600160a01b0391909116600090815260036020526040902054600160ff9092161c16151590565b61011a6102b6366004610902565b60056020526000908152604090205481565b6101736102d63660046108c8565b610789565b6102f1336000356001600160e01b031916610806565b6103165760405162461bcd60e51b815260040161030d90610abc565b60405180910390fd5b8015610346576001600160e01b0319821660009081526005602052604090208054600160ff86161b17905561036d565b6001600160e01b0319821660009081526005602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b151836040516103af911515815260200190565b60405180910390a3505050565b6103d2336000356001600160e01b031916610806565b6103ee5760405162461bcd60e51b815260040161030d90610abc565b6001600160e01b03198216600081815260046020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b610464336000356001600160e01b031916610806565b6104805760405162461bcd60e51b815260040161030d90610abc565b80156104af576001600160a01b03831660009081526003602052604090208054600160ff85161b1790556104d5565b6001600160a01b03831660009081526003602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf2836040516103af911515815260200190565b61052c336000356001600160e01b031916610806565b6105485760405162461bcd60e51b815260040161030d90610abc565b6001600160a01b0382811660008181526002602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b6000546001600160a01b0316331480610634575060015460405163b700961360e01b81526001600160a01b039091169063b7009613906105f390339030906001600160e01b03196000351690600401610ae2565b602060405180830381865afa158015610610573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106349190610b0f565b61063d57600080fd5b600180546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b6001600160a01b0380831660009081526002602052604081205490911680156107255760405163b700961360e01b81526001600160a01b0382169063b7009613906106dc90889088908890600401610ae2565b602060405180830381865afa1580156106f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061071d9190610b0f565b915050610782565b6001600160e01b0319831660009081526004602052604090205460ff168061077e57506001600160e01b031983166000908152600560209081526040808320546001600160a01b03891684526003909252909120541615155b9150505b9392505050565b61079f336000356001600160e01b031916610806565b6107bb5760405162461bcd60e51b815260040161030d90610abc565b600080546001600160a01b0319166001600160a01b0383169081178255604051909133917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a350565b6001546000906001600160a01b03168015801590610890575060405163b700961360e01b81526001600160a01b0382169063b70096139061084f90879030908890600401610ae2565b602060405180830381865afa15801561086c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108909190610b0f565b806108a857506000546001600160a01b038581169116145b949350505050565b6001600160a01b03811681146108c557600080fd5b50565b6000602082840312156108da57600080fd5b8135610782816108b0565b80356001600160e01b0319811681146108fd57600080fd5b919050565b60006020828403121561091457600080fd5b610782826108e5565b803560ff811681146108fd57600080fd5b80151581146108c557600080fd5b60008060006060848603121561095157600080fd5b61095a8461091d565b9250610968602085016108e5565b915060408401356109788161092e565b809150509250925092565b6000806040838503121561099657600080fd5b61099f836108e5565b915060208301356109af8161092e565b809150509250929050565b6000806000606084860312156109cf57600080fd5b83356109da816108b0565b92506109686020850161091d565b600080604083850312156109fb57600080fd5b8235610a06816108b0565b915060208301356109af816108b0565b600080600060608486031215610a2b57600080fd5b8335610a36816108b0565b92506020840135610a46816108b0565b9150610a54604085016108e5565b90509250925092565b60008060408385031215610a7057600080fd5b610a798361091d565b9150610a87602084016108e5565b90509250929050565b60008060408385031215610aa357600080fd5b8235610aae816108b0565b9150610a876020840161091d565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b600060208284031215610b2157600080fd5b81516107828161092e56fea2646970667358221220954953fe2bd851fc2326caca9528d023b1200629cc0872f35f12fafd78c198cd64736f6c63430008140033",
    "sourceMap": "327:4461:123:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1622:47;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;548:25:184;;;536:2;521:18;1622:47:123;;;;;;;;1676:49;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1116:14:184;;1109:22;1091:41;;1079:2;1064:18;1676:49:123;951:187:184;4390:396:123;;;;;;:::i;:::-;;:::i;:::-;;3448:210;;;;;;:::i;:::-;;:::i;3853:337::-;;;;;;:::i;:::-;;:::i;3006:241::-;;;;;;:::i;:::-;;:::i;1523:434:122:-;;;;;;:::i;:::-;;:::i;562:20::-;;;;;-1:-1:-1;;;;;562:20:122;;;;;;-1:-1:-1;;;;;3437:32:184;;;3419:51;;3407:2;3392:18;562:20:122;3273:203:184;2336:465:123;;;;;;:::i;:::-;;:::i;589:26:122:-;;;;;-1:-1:-1;;;;;589:26:122;;;1369:61:123;;;;;;:::i;:::-;;;;;;;;;;;;-1:-1:-1;;;;;1369:61:123;;;1958:186;;;;;;:::i;:::-;-1:-1:-1;;;;;;2083:35:123;2051:4;2083:35;;;:22;:35;;;;;;2075:52;;;;;;2131:1;2074:58;:63;;;1958:186;1795:157;;;;;;:::i;:::-;-1:-1:-1;;;;;1908:18:123;;;;1876:4;1908:18;;;:12;:18;;;;;;1939:1;1900:35;;;;;1899:41;:46;;;1795:157;1732:56;;;;;;:::i;:::-;;;;;;;;;;;;;;1963:164:122;;;;;;:::i;:::-;;:::i;4390:396:123:-;902:33:122;915:10;927:7;;-1:-1:-1;;;;;;927:7:122;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:122;;;;;;;:::i;:::-;;;;;;;;;4535:7:123::1;4531:184;;;-1:-1:-1::0;;;;;;4558:35:123;::::1;4597:18;4558:35:::0;;;:22:::1;:35;::::0;;;;:57;;4605:1:::1;:9;::::0;::::1;;4558:57;::::0;;4531:184:::1;;;-1:-1:-1::0;;;;;;4646:35:123;::::1;4686:18;4646:35:::0;;;:22:::1;:35;::::0;;;;:58;;4694:1:::1;:9;::::0;::::1;;4685:19;4646:58;::::0;;4531:184:::1;4758:11;-1:-1:-1::0;;;;;4730:49:123::1;;4752:4;4730:49;;;4771:7;4730:49;;;;1116:14:184::0;1109:22;1091:41;;1079:2;1064:18;;951:187;4730:49:123::1;;;;;;;;4390:396:::0;;;:::o;3448:210::-;902:33:122;915:10;927:7;;-1:-1:-1;;;;;;927:7:122;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:122;;;;;;;:::i;:::-;-1:-1:-1;;;;;;3549:31:123;::::1;;::::0;;;:18:::1;:31;::::0;;;;;;;;:41;;-1:-1:-1;;3549:41:123::1;::::0;::::1;;::::0;;::::1;::::0;;;3606:45;;1091:41:184;;;3606:45:123::1;::::0;1064:18:184;3606:45:123::1;;;;;;;3448:210:::0;;:::o;3853:337::-;902:33:122;915:10;927:7;;-1:-1:-1;;;;;;927:7:122;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:122;;;;;;;:::i;:::-;3986:7:123::1;3982:150;;;-1:-1:-1::0;;;;;4009:18:123;::::1;4031;4009::::0;;;:12:::1;:18;::::0;;;;:40;;4039:1:::1;:9;::::0;::::1;;4009:40;::::0;;3982:150:::1;;;-1:-1:-1::0;;;;;4080:18:123;::::1;4103;4080::::0;;;:12:::1;:18;::::0;;;;:41;;4111:1:::1;:9;::::0;::::1;;4102:19;4080:41;::::0;;3982:150:::1;4169:4;4147:36;;4163:4;-1:-1:-1::0;;;;;4147:36:123::1;;4175:7;4147:36;;;;1116:14:184::0;1109:22;1091:41;;1079:2;1064:18;;951:187;3006:241:123;902:33:122;915:10;927:7;;-1:-1:-1;;;;;;927:7:122;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:122;;;;;;;:::i;:::-;-1:-1:-1;;;;;3121:32:123;;::::1;;::::0;;;:24:::1;:32;::::0;;;;;:50;;-1:-1:-1;;;;;;3121:50:123::1;::::0;;::::1;::::0;;::::1;::::0;;3187:53;::::1;::::0;3121:32;3187:53:::1;3006:241:::0;;:::o;1523:434:122:-;1794:5;;-1:-1:-1;;;;;1794:5:122;1780:10;:19;;:76;;-1:-1:-1;1803:9:122;;:53;;-1:-1:-1;;;1803:53:122;;-1:-1:-1;;;;;1803:9:122;;;;:17;;:53;;1821:10;;1841:4;;-1:-1:-1;;;;;;1803:9:122;1848:7;;;1803:53;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1772:85;;;;;;1868:9;:24;;-1:-1:-1;;;;;;1868:24:122;-1:-1:-1;;;;;1868:24:122;;;;;;;;1908:42;;1925:10;;1908:42;;-1:-1:-1;;1908:42:122;1523:434;:::o;2336:465:123:-;-1:-1:-1;;;;;2515:32:123;;;2471:4;2515:32;;;:24;:32;;;;;;2471:4;;2515:32;2562:38;;2558:101;;2609:50;;-1:-1:-1;;;2609:50:123;;-1:-1:-1;;;;;2609:23:123;;;;;:50;;2633:4;;2639:6;;2647:11;;2609:50;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2602:57;;;;;2558:101;-1:-1:-1;;;;;;2689:31:123;;;;;;:18;:31;;;;;;;;;:105;;-1:-1:-1;;;;;;;2759:35:123;;;;;;:22;:35;;;;;;;;;-1:-1:-1;;;;;2738:18:123;;;;:12;:18;;;;;;;:56;2724:70;;2689:105;2670:124;;;2336:465;;;;;;:::o;1963:164:122:-;902:33;915:10;927:7;;-1:-1:-1;;;;;;927:7:122;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:122;;;;;;;:::i;:::-;2046:5:::1;:16:::0;;-1:-1:-1;;;;;;2046:16:122::1;-1:-1:-1::0;;;;;2046:16:122;::::1;::::0;;::::1;::::0;;2078:42:::1;::::0;2046:16;;2099:10:::1;::::0;2078:42:::1;::::0;2046:5;2078:42:::1;1963:164:::0;:::o;977:540::-;1097:9;;1064:4;;-1:-1:-1;;;;;1097:9:122;1415:27;;;;;:77;;-1:-1:-1;1446:46:122;;-1:-1:-1;;;1446:46:122;;-1:-1:-1;;;;;1446:12:122;;;;;:46;;1459:4;;1473;;1480:11;;1446:46;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1414:96;;;-1:-1:-1;1505:5:122;;-1:-1:-1;;;;;1497:13:122;;;1505:5;;1497:13;1414:96;1407:103;977:540;-1:-1:-1;;;;977:540:122:o;14:131:184:-;-1:-1:-1;;;;;89:31:184;;79:42;;69:70;;135:1;132;125:12;69:70;14:131;:::o;150:247::-;209:6;262:2;250:9;241:7;237:23;233:32;230:52;;;278:1;275;268:12;230:52;317:9;304:23;336:31;361:5;336:31;:::i;584:173::-;651:20;;-1:-1:-1;;;;;;700:32:184;;690:43;;680:71;;747:1;744;737:12;680:71;584:173;;;:::o;762:184::-;820:6;873:2;861:9;852:7;848:23;844:32;841:52;;;889:1;886;879:12;841:52;912:28;930:9;912:28;:::i;1143:156::-;1209:20;;1269:4;1258:16;;1248:27;;1238:55;;1289:1;1286;1279:12;1304:118;1390:5;1383:13;1376:21;1369:5;1366:32;1356:60;;1412:1;1409;1402:12;1427:383;1498:6;1506;1514;1567:2;1555:9;1546:7;1542:23;1538:32;1535:52;;;1583:1;1580;1573:12;1535:52;1606:27;1623:9;1606:27;:::i;:::-;1596:37;;1652;1685:2;1674:9;1670:18;1652:37;:::i;:::-;1642:47;;1739:2;1728:9;1724:18;1711:32;1752:28;1774:5;1752:28;:::i;:::-;1799:5;1789:15;;;1427:383;;;;;:::o;1815:313::-;1879:6;1887;1940:2;1928:9;1919:7;1915:23;1911:32;1908:52;;;1956:1;1953;1946:12;1908:52;1979:28;1997:9;1979:28;:::i;:::-;1969:38;;2057:2;2046:9;2042:18;2029:32;2070:28;2092:5;2070:28;:::i;:::-;2117:5;2107:15;;;1815:313;;;;;:::o;2133:452::-;2205:6;2213;2221;2274:2;2262:9;2253:7;2249:23;2245:32;2242:52;;;2290:1;2287;2280:12;2242:52;2329:9;2316:23;2348:31;2373:5;2348:31;:::i;:::-;2398:5;-1:-1:-1;2422:36:184;2454:2;2439:18;;2422:36;:::i;2590:407::-;2677:6;2685;2738:2;2726:9;2717:7;2713:23;2709:32;2706:52;;;2754:1;2751;2744:12;2706:52;2793:9;2780:23;2812:31;2837:5;2812:31;:::i;:::-;2862:5;-1:-1:-1;2919:2:184;2904:18;;2891:32;2932:33;2891:32;2932:33;:::i;3481:460::-;3557:6;3565;3573;3626:2;3614:9;3605:7;3601:23;3597:32;3594:52;;;3642:1;3639;3632:12;3594:52;3681:9;3668:23;3700:31;3725:5;3700:31;:::i;:::-;3750:5;-1:-1:-1;3807:2:184;3792:18;;3779:32;3820:33;3779:32;3820:33;:::i;:::-;3872:7;-1:-1:-1;3898:37:184;3931:2;3916:18;;3898:37;:::i;:::-;3888:47;;3481:460;;;;;:::o;4173:254::-;4238:6;4246;4299:2;4287:9;4278:7;4274:23;4270:32;4267:52;;;4315:1;4312;4305:12;4267:52;4338:27;4355:9;4338:27;:::i;:::-;4328:37;;4384;4417:2;4406:9;4402:18;4384:37;:::i;:::-;4374:47;;4173:254;;;;;:::o;4432:317::-;4498:6;4506;4559:2;4547:9;4538:7;4534:23;4530:32;4527:52;;;4575:1;4572;4565:12;4527:52;4614:9;4601:23;4633:31;4658:5;4633:31;:::i;:::-;4683:5;-1:-1:-1;4707:36:184;4739:2;4724:18;;4707:36;:::i;4754:336::-;4956:2;4938:21;;;4995:2;4975:18;;;4968:30;-1:-1:-1;;;5029:2:184;5014:18;;5007:42;5081:2;5066:18;;4754:336::o;5095:400::-;-1:-1:-1;;;;;5351:15:184;;;5333:34;;5403:15;;;;5398:2;5383:18;;5376:43;-1:-1:-1;;;;;;5455:33:184;;;5450:2;5435:18;;5428:61;5283:2;5268:18;;5095:400::o;5500:245::-;5567:6;5620:2;5608:9;5599:7;5595:23;5591:32;5588:52;;;5636:1;5633;5626:12;5588:52;5668:9;5662:16;5687:28;5709:5;5687:28;:::i",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "authority()": "bf7e214f",
    "canCall(address,address,bytes4)": "b7009613",
    "doesRoleHaveCapability(uint8,bytes4)": "e688747b",
    "doesUserHaveRole(address,uint8)": "ea7ca276",
    "getRolesWithCapability(bytes4)": "ed0d0efb",
    "getTargetCustomAuthority(address)": "c53a3985",
    "getUserRoles(address)": "06a36aee",
    "isCapabilityPublic(bytes4)": "0bade8a4",
    "owner()": "8da5cb5b",
    "setAuthority(address)": "7a9e5e4b",
    "setPublicCapability(bytes4,bool)": "4b5159da",
    "setRoleCapability(uint8,bytes4,bool)": "0ea9b75b",
    "setTargetCustomAuthority(address,address)": "728b952b",
    "setUserRole(address,uint8,bool)": "67aff484",
    "transferOwnership(address)": "f2fde38b"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"},{\"internalType\":\"contract Authority\",\"name\":\"_authority\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"contract Authority\",\"name\":\"newAuthority\",\"type\":\"address\"}],\"name\":\"AuthorityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"PublicCapabilityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"indexed\":true,\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"RoleCapabilityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"contract Authority\",\"name\":\"authority\",\"type\":\"address\"}],\"name\":\"TargetCustomAuthorityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"UserRoleUpdated\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"authority\",\"outputs\":[{\"internalType\":\"contract Authority\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"}],\"name\":\"canCall\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"}],\"name\":\"doesRoleHaveCapability\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"}],\"name\":\"doesUserHaveRole\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"name\":\"getRolesWithCapability\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"getTargetCustomAuthority\",\"outputs\":[{\"internalType\":\"contract Authority\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"getUserRoles\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"name\":\"isCapabilityPublic\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract Authority\",\"name\":\"newAuthority\",\"type\":\"address\"}],\"name\":\"setAuthority\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"setPublicCapability\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"setRoleCapability\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"contract Authority\",\"name\":\"customAuthority\",\"type\":\"address\"}],\"name\":\"setTargetCustomAuthority\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"setUserRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Solmate (https://github.com/transmissions11/solmate/blob/main/src/auth/authorities/MultiRolesAuthority.sol)\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Flexible and target agnostic role based Authority that supports up to 256 roles.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/solmate/src/auth/authorities/MultiRolesAuthority.sol\":\"MultiRolesAuthority\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/solmate/src/auth/Auth.sol\":{\"keccak256\":\"0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac\",\"dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W\"]},\"lib/solmate/src/auth/authorities/MultiRolesAuthority.sol\":{\"keccak256\":\"0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef\",\"dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.20+commit.a1b79de6"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_owner",
              "type": "address"
            },
            {
              "internalType": "contract Authority",
              "name": "_authority",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "user",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "contract Authority",
              "name": "newAuthority",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "AuthorityUpdated",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "user",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "OwnershipTransferred",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "functionSig",
              "type": "bytes4",
              "indexed": true
            },
            {
              "internalType": "bool",
              "name": "enabled",
              "type": "bool",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "PublicCapabilityUpdated",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "uint8",
              "name": "role",
              "type": "uint8",
              "indexed": true
            },
            {
              "internalType": "bytes4",
              "name": "functionSig",
              "type": "bytes4",
              "indexed": true
            },
            {
              "internalType": "bool",
              "name": "enabled",
              "type": "bool",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "RoleCapabilityUpdated",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "target",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "contract Authority",
              "name": "authority",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "TargetCustomAuthorityUpdated",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "user",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint8",
              "name": "role",
              "type": "uint8",
              "indexed": true
            },
            {
              "internalType": "bool",
              "name": "enabled",
              "type": "bool",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "UserRoleUpdated",
          "anonymous": false
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "authority",
          "outputs": [
            {
              "internalType": "contract Authority",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "target",
              "type": "address"
            },
            {
              "internalType": "bytes4",
              "name": "functionSig",
              "type": "bytes4"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "canCall",
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
              "internalType": "uint8",
              "name": "role",
              "type": "uint8"
            },
            {
              "internalType": "bytes4",
              "name": "functionSig",
              "type": "bytes4"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "doesRoleHaveCapability",
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
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "uint8",
              "name": "role",
              "type": "uint8"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "doesUserHaveRole",
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
              "internalType": "bytes4",
              "name": "",
              "type": "bytes4"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getRolesWithCapability",
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
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getTargetCustomAuthority",
          "outputs": [
            {
              "internalType": "contract Authority",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getUserRoles",
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
              "internalType": "bytes4",
              "name": "",
              "type": "bytes4"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "isCapabilityPublic",
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
          "name": "owner",
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
              "internalType": "contract Authority",
              "name": "newAuthority",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setAuthority"
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "functionSig",
              "type": "bytes4"
            },
            {
              "internalType": "bool",
              "name": "enabled",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setPublicCapability"
        },
        {
          "inputs": [
            {
              "internalType": "uint8",
              "name": "role",
              "type": "uint8"
            },
            {
              "internalType": "bytes4",
              "name": "functionSig",
              "type": "bytes4"
            },
            {
              "internalType": "bool",
              "name": "enabled",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setRoleCapability"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "target",
              "type": "address"
            },
            {
              "internalType": "contract Authority",
              "name": "customAuthority",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setTargetCustomAuthority"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "uint8",
              "name": "role",
              "type": "uint8"
            },
            {
              "internalType": "bool",
              "name": "enabled",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setUserRole"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transferOwnership"
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
        "@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",
        "aave-v3-core/=lib/aave-v3-core/",
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
        "lib/solmate/src/auth/authorities/MultiRolesAuthority.sol": "MultiRolesAuthority"
      },
      "libraries": {}
    },
    "sources": {
      "lib/solmate/src/auth/Auth.sol": {
        "keccak256": "0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c",
        "urls": [
          "bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac",
          "dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W"
        ],
        "license": "AGPL-3.0-only"
      },
      "lib/solmate/src/auth/authorities/MultiRolesAuthority.sol": {
        "keccak256": "0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3",
        "urls": [
          "bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef",
          "dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B"
        ],
        "license": "AGPL-3.0-only"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "lib/solmate/src/auth/authorities/MultiRolesAuthority.sol",
    "id": 67584,
    "exportedSymbols": {
      "Auth": [
        67265
      ],
      "Authority": [
        67278
      ],
      "MultiRolesAuthority": [
        67583
      ]
    },
    "nodeType": "SourceUnit",
    "src": "42:4747:123",
    "nodes": [
      {
        "id": 67280,
        "nodeType": "PragmaDirective",
        "src": "42:24:123",
        "nodes": [],
        "literals": [
          "solidity",
          ">=",
          "0.8",
          ".0"
        ]
      },
      {
        "id": 67283,
        "nodeType": "ImportDirective",
        "src": "68:44:123",
        "nodes": [],
        "absolutePath": "lib/solmate/src/auth/Auth.sol",
        "file": "../Auth.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 67584,
        "sourceUnit": 67279,
        "symbolAliases": [
          {
            "foreign": {
              "id": 67281,
              "name": "Auth",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 67265,
              "src": "76:4:123",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          },
          {
            "foreign": {
              "id": 67282,
              "name": "Authority",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 67278,
              "src": "82:9:123",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 67583,
        "nodeType": "ContractDefinition",
        "src": "327:4461:123",
        "nodes": [
          {
            "id": 67296,
            "nodeType": "EventDefinition",
            "src": "560:78:123",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf2",
            "name": "UserRoleUpdated",
            "nameLocation": "566:15:123",
            "parameters": {
              "id": 67295,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 67290,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "598:4:123",
                  "nodeType": "VariableDeclaration",
                  "scope": 67296,
                  "src": "582:20:123",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 67289,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "582:7:123",
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
                  "id": 67292,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "618:4:123",
                  "nodeType": "VariableDeclaration",
                  "scope": 67296,
                  "src": "604:18:123",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 67291,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "604:5:123",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 67294,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "enabled",
                  "nameLocation": "629:7:123",
                  "nodeType": "VariableDeclaration",
                  "scope": 67296,
                  "src": "624:12:123",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 67293,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "624:4:123",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "581:56:123"
            }
          },
          {
            "id": 67302,
            "nodeType": "EventDefinition",
            "src": "644:72:123",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103",
            "name": "PublicCapabilityUpdated",
            "nameLocation": "650:23:123",
            "parameters": {
              "id": 67301,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 67298,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "functionSig",
                  "nameLocation": "689:11:123",
                  "nodeType": "VariableDeclaration",
                  "scope": 67302,
                  "src": "674:26:123",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 67297,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "674:6:123",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 67300,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "enabled",
                  "nameLocation": "707:7:123",
                  "nodeType": "VariableDeclaration",
                  "scope": 67302,
                  "src": "702:12:123",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 67299,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "702:4:123",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "673:42:123"
            }
          },
          {
            "id": 67310,
            "nodeType": "EventDefinition",
            "src": "722:90:123",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "bfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b151",
            "name": "RoleCapabilityUpdated",
            "nameLocation": "728:21:123",
            "parameters": {
              "id": 67309,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 67304,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "764:4:123",
                  "nodeType": "VariableDeclaration",
                  "scope": 67310,
                  "src": "750:18:123",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 67303,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "750:5:123",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 67306,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "functionSig",
                  "nameLocation": "785:11:123",
                  "nodeType": "VariableDeclaration",
                  "scope": 67310,
                  "src": "770:26:123",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 67305,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "770:6:123",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 67308,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "enabled",
                  "nameLocation": "803:7:123",
                  "nodeType": "VariableDeclaration",
                  "scope": 67310,
                  "src": "798:12:123",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 67307,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "798:4:123",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "749:62:123"
            }
          },
          {
            "id": 67317,
            "nodeType": "EventDefinition",
            "src": "818:88:123",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "a4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff2065",
            "name": "TargetCustomAuthorityUpdated",
            "nameLocation": "824:28:123",
            "parameters": {
              "id": 67316,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 67312,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "869:6:123",
                  "nodeType": "VariableDeclaration",
                  "scope": 67317,
                  "src": "853:22:123",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 67311,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "853:7:123",
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
                  "id": 67315,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "authority",
                  "nameLocation": "895:9:123",
                  "nodeType": "VariableDeclaration",
                  "scope": 67317,
                  "src": "877:27:123",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Authority_$67278",
                    "typeString": "contract Authority"
                  },
                  "typeName": {
                    "id": 67314,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 67313,
                      "name": "Authority",
                      "nameLocations": [
                        "877:9:123"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 67278,
                      "src": "877:9:123"
                    },
                    "referencedDeclaration": 67278,
                    "src": "877:9:123",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Authority_$67278",
                      "typeString": "contract Authority"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "852:53:123"
            }
          },
          {
            "id": 67330,
            "nodeType": "FunctionDefinition",
            "src": "1094:77:123",
            "nodes": [],
            "body": {
              "id": 67329,
              "nodeType": "Block",
              "src": "1169:2:123",
              "nodes": [],
              "statements": []
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 67325,
                    "name": "_owner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 67319,
                    "src": "1149:6:123",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  {
                    "id": 67326,
                    "name": "_authority",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 67322,
                    "src": "1157:10:123",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Authority_$67278",
                      "typeString": "contract Authority"
                    }
                  }
                ],
                "id": 67327,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 67324,
                  "name": "Auth",
                  "nameLocations": [
                    "1144:4:123"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 67265,
                  "src": "1144:4:123"
                },
                "nodeType": "ModifierInvocation",
                "src": "1144:24:123"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 67323,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 67319,
                  "mutability": "mutable",
                  "name": "_owner",
                  "nameLocation": "1114:6:123",
                  "nodeType": "VariableDeclaration",
                  "scope": 67330,
                  "src": "1106:14:123",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 67318,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1106:7:123",
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
                  "id": 67322,
                  "mutability": "mutable",
                  "name": "_authority",
                  "nameLocation": "1132:10:123",
                  "nodeType": "VariableDeclaration",
                  "scope": 67330,
                  "src": "1122:20:123",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Authority_$67278",
                    "typeString": "contract Authority"
                  },
                  "typeName": {
                    "id": 67321,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 67320,
                      "name": "Authority",
                      "nameLocations": [
                        "1122:9:123"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 67278,
                      "src": "1122:9:123"
                    },
                    "referencedDeclaration": 67278,
                    "src": "1122:9:123",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Authority_$67278",
                      "typeString": "contract Authority"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1105:38:123"
            },
            "returnParameters": {
              "id": 67328,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1169:0:123"
            },
            "scope": 67583,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 67335,
            "nodeType": "VariableDeclaration",
            "src": "1369:61:123",
            "nodes": [],
            "constant": false,
            "functionSelector": "c53a3985",
            "mutability": "mutable",
            "name": "getTargetCustomAuthority",
            "nameLocation": "1406:24:123",
            "scope": 67583,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_contract$_Authority_$67278_$",
              "typeString": "mapping(address => contract Authority)"
            },
            "typeName": {
              "id": 67334,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 67331,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1377:7:123",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1369:29:123",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_contract$_Authority_$67278_$",
                "typeString": "mapping(address => contract Authority)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 67333,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 67332,
                  "name": "Authority",
                  "nameLocations": [
                    "1388:9:123"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 67278,
                  "src": "1388:9:123"
                },
                "referencedDeclaration": 67278,
                "src": "1388:9:123",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_Authority_$67278",
                  "typeString": "contract Authority"
                }
              }
            },
            "visibility": "public"
          },
          {
            "id": 67339,
            "nodeType": "VariableDeclaration",
            "src": "1622:47:123",
            "nodes": [],
            "constant": false,
            "functionSelector": "06a36aee",
            "mutability": "mutable",
            "name": "getUserRoles",
            "nameLocation": "1657:12:123",
            "scope": 67583,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
              "typeString": "mapping(address => bytes32)"
            },
            "typeName": {
              "id": 67338,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 67336,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1630:7:123",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1622:27:123",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
                "typeString": "mapping(address => bytes32)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 67337,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "1641:7:123",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              }
            },
            "visibility": "public"
          },
          {
            "id": 67343,
            "nodeType": "VariableDeclaration",
            "src": "1676:49:123",
            "nodes": [],
            "constant": false,
            "functionSelector": "0bade8a4",
            "mutability": "mutable",
            "name": "isCapabilityPublic",
            "nameLocation": "1707:18:123",
            "scope": 67583,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes4_$_t_bool_$",
              "typeString": "mapping(bytes4 => bool)"
            },
            "typeName": {
              "id": 67342,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 67340,
                "name": "bytes4",
                "nodeType": "ElementaryTypeName",
                "src": "1684:6:123",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes4",
                  "typeString": "bytes4"
                }
              },
              "nodeType": "Mapping",
              "src": "1676:23:123",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes4_$_t_bool_$",
                "typeString": "mapping(bytes4 => bool)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 67341,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "1694:4:123",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              }
            },
            "visibility": "public"
          },
          {
            "id": 67347,
            "nodeType": "VariableDeclaration",
            "src": "1732:56:123",
            "nodes": [],
            "constant": false,
            "functionSelector": "ed0d0efb",
            "mutability": "mutable",
            "name": "getRolesWithCapability",
            "nameLocation": "1766:22:123",
            "scope": 67583,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes4_$_t_bytes32_$",
              "typeString": "mapping(bytes4 => bytes32)"
            },
            "typeName": {
              "id": 67346,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 67344,
                "name": "bytes4",
                "nodeType": "ElementaryTypeName",
                "src": "1740:6:123",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes4",
                  "typeString": "bytes4"
                }
              },
              "nodeType": "Mapping",
              "src": "1732:26:123",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes4_$_t_bytes32_$",
                "typeString": "mapping(bytes4 => bytes32)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 67345,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "1750:7:123",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              }
            },
            "visibility": "public"
          },
          {
            "id": 67371,
            "nodeType": "FunctionDefinition",
            "src": "1795:157:123",
            "nodes": [],
            "body": {
              "id": 67370,
              "nodeType": "Block",
              "src": "1882:70:123",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 67368,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 67366,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "components": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 67363,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "arguments": [
                                {
                                  "baseExpression": {
                                    "id": 67358,
                                    "name": "getUserRoles",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67339,
                                    "src": "1908:12:123",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
                                      "typeString": "mapping(address => bytes32)"
                                    }
                                  },
                                  "id": 67360,
                                  "indexExpression": {
                                    "id": 67359,
                                    "name": "user",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67349,
                                    "src": "1921:4:123",
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
                                  "src": "1908:18:123",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                ],
                                "id": 67357,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "1900:7:123",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_uint256_$",
                                  "typeString": "type(uint256)"
                                },
                                "typeName": {
                                  "id": 67356,
                                  "name": "uint256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "1900:7:123",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 67361,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1900:27:123",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">>",
                            "rightExpression": {
                              "id": 67362,
                              "name": "role",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67351,
                              "src": "1931:4:123",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              }
                            },
                            "src": "1900:35:123",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 67364,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "1899:37:123",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "&",
                      "rightExpression": {
                        "hexValue": "31",
                        "id": 67365,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1939:1:123",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "1899:41:123",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 67367,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1944:1:123",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1899:46:123",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 67355,
                  "id": 67369,
                  "nodeType": "Return",
                  "src": "1892:53:123"
                }
              ]
            },
            "functionSelector": "ea7ca276",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "doesUserHaveRole",
            "nameLocation": "1804:16:123",
            "parameters": {
              "id": 67352,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 67349,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "1829:4:123",
                  "nodeType": "VariableDeclaration",
                  "scope": 67371,
                  "src": "1821:12:123",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 67348,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1821:7:123",
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
                  "id": 67351,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "1841:4:123",
                  "nodeType": "VariableDeclaration",
                  "scope": 67371,
                  "src": "1835:10:123",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 67350,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "1835:5:123",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1820:26:123"
            },
            "returnParameters": {
              "id": 67355,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 67354,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 67371,
                  "src": "1876:4:123",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 67353,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1876:4:123",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1875:6:123"
            },
            "scope": 67583,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 67395,
            "nodeType": "FunctionDefinition",
            "src": "1958:186:123",
            "nodes": [],
            "body": {
              "id": 67394,
              "nodeType": "Block",
              "src": "2057:87:123",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 67392,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 67390,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "components": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 67387,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "arguments": [
                                {
                                  "baseExpression": {
                                    "id": 67382,
                                    "name": "getRolesWithCapability",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67347,
                                    "src": "2083:22:123",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_bytes4_$_t_bytes32_$",
                                      "typeString": "mapping(bytes4 => bytes32)"
                                    }
                                  },
                                  "id": 67384,
                                  "indexExpression": {
                                    "id": 67383,
                                    "name": "functionSig",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67375,
                                    "src": "2106:11:123",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes4",
                                      "typeString": "bytes4"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "2083:35:123",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                ],
                                "id": 67381,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "2075:7:123",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_uint256_$",
                                  "typeString": "type(uint256)"
                                },
                                "typeName": {
                                  "id": 67380,
                                  "name": "uint256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "2075:7:123",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 67385,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2075:44:123",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">>",
                            "rightExpression": {
                              "id": 67386,
                              "name": "role",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67373,
                              "src": "2123:4:123",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              }
                            },
                            "src": "2075:52:123",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 67388,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "2074:54:123",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "&",
                      "rightExpression": {
                        "hexValue": "31",
                        "id": 67389,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2131:1:123",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "2074:58:123",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 67391,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2136:1:123",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "2074:63:123",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 67379,
                  "id": 67393,
                  "nodeType": "Return",
                  "src": "2067:70:123"
                }
              ]
            },
            "functionSelector": "e688747b",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "doesRoleHaveCapability",
            "nameLocation": "1967:22:123",
            "parameters": {
              "id": 67376,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 67373,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "1996:4:123",
                  "nodeType": "VariableDeclaration",
                  "scope": 67395,
                  "src": "1990:10:123",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 67372,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "1990:5:123",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 67375,
                  "mutability": "mutable",
                  "name": "functionSig",
                  "nameLocation": "2009:11:123",
                  "nodeType": "VariableDeclaration",
                  "scope": 67395,
                  "src": "2002:18:123",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 67374,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "2002:6:123",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1989:32:123"
            },
            "returnParameters": {
              "id": 67379,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 67378,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 67395,
                  "src": "2051:4:123",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 67377,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2051:4:123",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2050:6:123"
            },
            "scope": 67583,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 67449,
            "nodeType": "FunctionDefinition",
            "src": "2336:465:123",
            "nodes": [],
            "body": {
              "id": 67448,
              "nodeType": "Block",
              "src": "2477:324:123",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    67409
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 67409,
                      "mutability": "mutable",
                      "name": "customAuthority",
                      "nameLocation": "2497:15:123",
                      "nodeType": "VariableDeclaration",
                      "scope": 67448,
                      "src": "2487:25:123",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Authority_$67278",
                        "typeString": "contract Authority"
                      },
                      "typeName": {
                        "id": 67408,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 67407,
                          "name": "Authority",
                          "nameLocations": [
                            "2487:9:123"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 67278,
                          "src": "2487:9:123"
                        },
                        "referencedDeclaration": 67278,
                        "src": "2487:9:123",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Authority_$67278",
                          "typeString": "contract Authority"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 67413,
                  "initialValue": {
                    "baseExpression": {
                      "id": 67410,
                      "name": "getTargetCustomAuthority",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67335,
                      "src": "2515:24:123",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_contract$_Authority_$67278_$",
                        "typeString": "mapping(address => contract Authority)"
                      }
                    },
                    "id": 67412,
                    "indexExpression": {
                      "id": 67411,
                      "name": "target",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67399,
                      "src": "2540:6:123",
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
                    "src": "2515:32:123",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Authority_$67278",
                      "typeString": "contract Authority"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2487:60:123"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 67422,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "id": 67416,
                          "name": "customAuthority",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 67409,
                          "src": "2570:15:123",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_Authority_$67278",
                            "typeString": "contract Authority"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_contract$_Authority_$67278",
                            "typeString": "contract Authority"
                          }
                        ],
                        "id": 67415,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "2562:7:123",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 67414,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "2562:7:123",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 67417,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2562:24:123",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 67420,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2598:1:123",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 67419,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "2590:7:123",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 67418,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "2590:7:123",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 67421,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2590:10:123",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2562:38:123",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 67430,
                  "nodeType": "IfStatement",
                  "src": "2558:101:123",
                  "trueBody": {
                    "expression": {
                      "arguments": [
                        {
                          "id": 67425,
                          "name": "user",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 67397,
                          "src": "2633:4:123",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 67426,
                          "name": "target",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 67399,
                          "src": "2639:6:123",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 67427,
                          "name": "functionSig",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 67401,
                          "src": "2647:11:123",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
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
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        ],
                        "expression": {
                          "id": 67423,
                          "name": "customAuthority",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 67409,
                          "src": "2609:15:123",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_Authority_$67278",
                            "typeString": "contract Authority"
                          }
                        },
                        "id": 67424,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2625:7:123",
                        "memberName": "canCall",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 67277,
                        "src": "2609:23:123",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$_t_address_$_t_address_$_t_bytes4_$returns$_t_bool_$",
                          "typeString": "function (address,address,bytes4) view external returns (bool)"
                        }
                      },
                      "id": 67428,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2609:50:123",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "functionReturnParameters": 67406,
                    "id": 67429,
                    "nodeType": "Return",
                    "src": "2602:57:123"
                  }
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 67446,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "baseExpression": {
                        "id": 67431,
                        "name": "isCapabilityPublic",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67343,
                        "src": "2689:18:123",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes4_$_t_bool_$",
                          "typeString": "mapping(bytes4 => bool)"
                        }
                      },
                      "id": 67433,
                      "indexExpression": {
                        "id": 67432,
                        "name": "functionSig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67401,
                        "src": "2708:11:123",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "2689:31:123",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "||",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "id": 67445,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 67436,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2732:1:123",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            }
                          ],
                          "id": 67435,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2724:7:123",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 67434,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "2724:7:123",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 67437,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2724:10:123",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "commonType": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        "id": 67444,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "baseExpression": {
                            "id": 67438,
                            "name": "getUserRoles",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67339,
                            "src": "2738:12:123",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
                              "typeString": "mapping(address => bytes32)"
                            }
                          },
                          "id": 67440,
                          "indexExpression": {
                            "id": 67439,
                            "name": "user",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67397,
                            "src": "2751:4:123",
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
                          "src": "2738:18:123",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&",
                        "rightExpression": {
                          "baseExpression": {
                            "id": 67441,
                            "name": "getRolesWithCapability",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67347,
                            "src": "2759:22:123",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes4_$_t_bytes32_$",
                              "typeString": "mapping(bytes4 => bytes32)"
                            }
                          },
                          "id": 67443,
                          "indexExpression": {
                            "id": 67442,
                            "name": "functionSig",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67401,
                            "src": "2782:11:123",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2759:35:123",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "src": "2738:56:123",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "src": "2724:70:123",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "2689:105:123",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 67406,
                  "id": 67447,
                  "nodeType": "Return",
                  "src": "2670:124:123"
                }
              ]
            },
            "baseFunctions": [
              67277
            ],
            "functionSelector": "b7009613",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "canCall",
            "nameLocation": "2345:7:123",
            "overrides": {
              "id": 67403,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "2453:8:123"
            },
            "parameters": {
              "id": 67402,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 67397,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "2370:4:123",
                  "nodeType": "VariableDeclaration",
                  "scope": 67449,
                  "src": "2362:12:123",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 67396,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2362:7:123",
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
                  "id": 67399,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "2392:6:123",
                  "nodeType": "VariableDeclaration",
                  "scope": 67449,
                  "src": "2384:14:123",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 67398,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2384:7:123",
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
                  "id": 67401,
                  "mutability": "mutable",
                  "name": "functionSig",
                  "nameLocation": "2415:11:123",
                  "nodeType": "VariableDeclaration",
                  "scope": 67449,
                  "src": "2408:18:123",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 67400,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "2408:6:123",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2352:80:123"
            },
            "returnParameters": {
              "id": 67406,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 67405,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 67449,
                  "src": "2471:4:123",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 67404,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2471:4:123",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2470:6:123"
            },
            "scope": 67583,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 67471,
            "nodeType": "FunctionDefinition",
            "src": "3006:241:123",
            "nodes": [],
            "body": {
              "id": 67470,
              "nodeType": "Block",
              "src": "3111:136:123",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 67463,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 67459,
                        "name": "getTargetCustomAuthority",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67335,
                        "src": "3121:24:123",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_contract$_Authority_$67278_$",
                          "typeString": "mapping(address => contract Authority)"
                        }
                      },
                      "id": 67461,
                      "indexExpression": {
                        "id": 67460,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67451,
                        "src": "3146:6:123",
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
                      "src": "3121:32:123",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Authority_$67278",
                        "typeString": "contract Authority"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 67462,
                      "name": "customAuthority",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67454,
                      "src": "3156:15:123",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Authority_$67278",
                        "typeString": "contract Authority"
                      }
                    },
                    "src": "3121:50:123",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Authority_$67278",
                      "typeString": "contract Authority"
                    }
                  },
                  "id": 67464,
                  "nodeType": "ExpressionStatement",
                  "src": "3121:50:123"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 67466,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67451,
                        "src": "3216:6:123",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 67467,
                        "name": "customAuthority",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67454,
                        "src": "3224:15:123",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Authority_$67278",
                          "typeString": "contract Authority"
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
                          "typeIdentifier": "t_contract$_Authority_$67278",
                          "typeString": "contract Authority"
                        }
                      ],
                      "id": 67465,
                      "name": "TargetCustomAuthorityUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67317,
                      "src": "3187:28:123",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_contract$_Authority_$67278_$returns$__$",
                        "typeString": "function (address,contract Authority)"
                      }
                    },
                    "id": 67468,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3187:53:123",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 67469,
                  "nodeType": "EmitStatement",
                  "src": "3182:58:123"
                }
              ]
            },
            "functionSelector": "728b952b",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 67457,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 67456,
                  "name": "requiresAuth",
                  "nameLocations": [
                    "3098:12:123"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 67170,
                  "src": "3098:12:123"
                },
                "nodeType": "ModifierInvocation",
                "src": "3098:12:123"
              }
            ],
            "name": "setTargetCustomAuthority",
            "nameLocation": "3015:24:123",
            "parameters": {
              "id": 67455,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 67451,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "3048:6:123",
                  "nodeType": "VariableDeclaration",
                  "scope": 67471,
                  "src": "3040:14:123",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 67450,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3040:7:123",
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
                  "id": 67454,
                  "mutability": "mutable",
                  "name": "customAuthority",
                  "nameLocation": "3066:15:123",
                  "nodeType": "VariableDeclaration",
                  "scope": 67471,
                  "src": "3056:25:123",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Authority_$67278",
                    "typeString": "contract Authority"
                  },
                  "typeName": {
                    "id": 67453,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 67452,
                      "name": "Authority",
                      "nameLocations": [
                        "3056:9:123"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 67278,
                      "src": "3056:9:123"
                    },
                    "referencedDeclaration": 67278,
                    "src": "3056:9:123",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Authority_$67278",
                      "typeString": "contract Authority"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3039:43:123"
            },
            "returnParameters": {
              "id": 67458,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3111:0:123"
            },
            "scope": 67583,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 67492,
            "nodeType": "FunctionDefinition",
            "src": "3448:210:123",
            "nodes": [],
            "body": {
              "id": 67491,
              "nodeType": "Block",
              "src": "3539:119:123",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 67484,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 67480,
                        "name": "isCapabilityPublic",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67343,
                        "src": "3549:18:123",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes4_$_t_bool_$",
                          "typeString": "mapping(bytes4 => bool)"
                        }
                      },
                      "id": 67482,
                      "indexExpression": {
                        "id": 67481,
                        "name": "functionSig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67473,
                        "src": "3568:11:123",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3549:31:123",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 67483,
                      "name": "enabled",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67475,
                      "src": "3583:7:123",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "3549:41:123",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 67485,
                  "nodeType": "ExpressionStatement",
                  "src": "3549:41:123"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 67487,
                        "name": "functionSig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67473,
                        "src": "3630:11:123",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      {
                        "id": 67488,
                        "name": "enabled",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67475,
                        "src": "3643:7:123",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 67486,
                      "name": "PublicCapabilityUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67302,
                      "src": "3606:23:123",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes4_$_t_bool_$returns$__$",
                        "typeString": "function (bytes4,bool)"
                      }
                    },
                    "id": 67489,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3606:45:123",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 67490,
                  "nodeType": "EmitStatement",
                  "src": "3601:50:123"
                }
              ]
            },
            "functionSelector": "4b5159da",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 67478,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 67477,
                  "name": "requiresAuth",
                  "nameLocations": [
                    "3526:12:123"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 67170,
                  "src": "3526:12:123"
                },
                "nodeType": "ModifierInvocation",
                "src": "3526:12:123"
              }
            ],
            "name": "setPublicCapability",
            "nameLocation": "3457:19:123",
            "parameters": {
              "id": 67476,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 67473,
                  "mutability": "mutable",
                  "name": "functionSig",
                  "nameLocation": "3484:11:123",
                  "nodeType": "VariableDeclaration",
                  "scope": 67492,
                  "src": "3477:18:123",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 67472,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "3477:6:123",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 67475,
                  "mutability": "mutable",
                  "name": "enabled",
                  "nameLocation": "3502:7:123",
                  "nodeType": "VariableDeclaration",
                  "scope": 67492,
                  "src": "3497:12:123",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 67474,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3497:4:123",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3476:34:123"
            },
            "returnParameters": {
              "id": 67479,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3539:0:123"
            },
            "scope": 67583,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 67537,
            "nodeType": "FunctionDefinition",
            "src": "3853:337:123",
            "nodes": [],
            "body": {
              "id": 67536,
              "nodeType": "Block",
              "src": "3972:218:123",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 67503,
                    "name": "enabled",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 67498,
                    "src": "3986:7:123",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 67528,
                    "nodeType": "Block",
                    "src": "4066:66:123",
                    "statements": [
                      {
                        "expression": {
                          "id": 67526,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 67516,
                              "name": "getUserRoles",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67339,
                              "src": "4080:12:123",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
                                "typeString": "mapping(address => bytes32)"
                              }
                            },
                            "id": 67518,
                            "indexExpression": {
                              "id": 67517,
                              "name": "user",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67494,
                              "src": "4093:4:123",
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
                            "src": "4080:18:123",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "&=",
                          "rightHandSide": {
                            "id": 67525,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "UnaryOperation",
                            "operator": "~",
                            "prefix": true,
                            "src": "4102:19:123",
                            "subExpression": {
                              "arguments": [
                                {
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 67523,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "hexValue": "31",
                                    "id": 67521,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "4111:1:123",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_1_by_1",
                                      "typeString": "int_const 1"
                                    },
                                    "value": "1"
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "<<",
                                  "rightExpression": {
                                    "id": 67522,
                                    "name": "role",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67496,
                                    "src": "4116:4:123",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint8",
                                      "typeString": "uint8"
                                    }
                                  },
                                  "src": "4111:9:123",
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
                                "id": 67520,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "4103:7:123",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_bytes32_$",
                                  "typeString": "type(bytes32)"
                                },
                                "typeName": {
                                  "id": 67519,
                                  "name": "bytes32",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "4103:7:123",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 67524,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4103:18:123",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "src": "4080:41:123",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 67527,
                        "nodeType": "ExpressionStatement",
                        "src": "4080:41:123"
                      }
                    ]
                  },
                  "id": 67529,
                  "nodeType": "IfStatement",
                  "src": "3982:150:123",
                  "trueBody": {
                    "id": 67515,
                    "nodeType": "Block",
                    "src": "3995:65:123",
                    "statements": [
                      {
                        "expression": {
                          "id": 67513,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 67504,
                              "name": "getUserRoles",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67339,
                              "src": "4009:12:123",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
                                "typeString": "mapping(address => bytes32)"
                              }
                            },
                            "id": 67506,
                            "indexExpression": {
                              "id": 67505,
                              "name": "user",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67494,
                              "src": "4022:4:123",
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
                            "src": "4009:18:123",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "|=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 67511,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "hexValue": "31",
                                  "id": 67509,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "4039:1:123",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_1_by_1",
                                    "typeString": "int_const 1"
                                  },
                                  "value": "1"
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "<<",
                                "rightExpression": {
                                  "id": 67510,
                                  "name": "role",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 67496,
                                  "src": "4044:4:123",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint8",
                                    "typeString": "uint8"
                                  }
                                },
                                "src": "4039:9:123",
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
                              "id": 67508,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "4031:7:123",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_bytes32_$",
                                "typeString": "type(bytes32)"
                              },
                              "typeName": {
                                "id": 67507,
                                "name": "bytes32",
                                "nodeType": "ElementaryTypeName",
                                "src": "4031:7:123",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 67512,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4031:18:123",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "src": "4009:40:123",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 67514,
                        "nodeType": "ExpressionStatement",
                        "src": "4009:40:123"
                      }
                    ]
                  }
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 67531,
                        "name": "user",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67494,
                        "src": "4163:4:123",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 67532,
                        "name": "role",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67496,
                        "src": "4169:4:123",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      {
                        "id": 67533,
                        "name": "enabled",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67498,
                        "src": "4175:7:123",
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
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 67530,
                      "name": "UserRoleUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67296,
                      "src": "4147:15:123",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint8_$_t_bool_$returns$__$",
                        "typeString": "function (address,uint8,bool)"
                      }
                    },
                    "id": 67534,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4147:36:123",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 67535,
                  "nodeType": "EmitStatement",
                  "src": "4142:41:123"
                }
              ]
            },
            "functionSelector": "67aff484",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 67501,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 67500,
                  "name": "requiresAuth",
                  "nameLocations": [
                    "3959:12:123"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 67170,
                  "src": "3959:12:123"
                },
                "nodeType": "ModifierInvocation",
                "src": "3959:12:123"
              }
            ],
            "name": "setUserRole",
            "nameLocation": "3862:11:123",
            "parameters": {
              "id": 67499,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 67494,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "3891:4:123",
                  "nodeType": "VariableDeclaration",
                  "scope": 67537,
                  "src": "3883:12:123",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 67493,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3883:7:123",
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
                  "id": 67496,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "3911:4:123",
                  "nodeType": "VariableDeclaration",
                  "scope": 67537,
                  "src": "3905:10:123",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 67495,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "3905:5:123",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 67498,
                  "mutability": "mutable",
                  "name": "enabled",
                  "nameLocation": "3930:7:123",
                  "nodeType": "VariableDeclaration",
                  "scope": 67537,
                  "src": "3925:12:123",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 67497,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3925:4:123",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3873:70:123"
            },
            "returnParameters": {
              "id": 67502,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3972:0:123"
            },
            "scope": 67583,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 67582,
            "nodeType": "FunctionDefinition",
            "src": "4390:396:123",
            "nodes": [],
            "body": {
              "id": 67581,
              "nodeType": "Block",
              "src": "4521:265:123",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 67548,
                    "name": "enabled",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 67543,
                    "src": "4535:7:123",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 67573,
                    "nodeType": "Block",
                    "src": "4632:83:123",
                    "statements": [
                      {
                        "expression": {
                          "id": 67571,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 67561,
                              "name": "getRolesWithCapability",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67347,
                              "src": "4646:22:123",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes4_$_t_bytes32_$",
                                "typeString": "mapping(bytes4 => bytes32)"
                              }
                            },
                            "id": 67563,
                            "indexExpression": {
                              "id": 67562,
                              "name": "functionSig",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67541,
                              "src": "4669:11:123",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes4",
                                "typeString": "bytes4"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "4646:35:123",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "&=",
                          "rightHandSide": {
                            "id": 67570,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "UnaryOperation",
                            "operator": "~",
                            "prefix": true,
                            "src": "4685:19:123",
                            "subExpression": {
                              "arguments": [
                                {
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 67568,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "hexValue": "31",
                                    "id": 67566,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "4694:1:123",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_1_by_1",
                                      "typeString": "int_const 1"
                                    },
                                    "value": "1"
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "<<",
                                  "rightExpression": {
                                    "id": 67567,
                                    "name": "role",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67539,
                                    "src": "4699:4:123",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint8",
                                      "typeString": "uint8"
                                    }
                                  },
                                  "src": "4694:9:123",
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
                                "id": 67565,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "4686:7:123",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_bytes32_$",
                                  "typeString": "type(bytes32)"
                                },
                                "typeName": {
                                  "id": 67564,
                                  "name": "bytes32",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "4686:7:123",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 67569,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4686:18:123",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "src": "4646:58:123",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 67572,
                        "nodeType": "ExpressionStatement",
                        "src": "4646:58:123"
                      }
                    ]
                  },
                  "id": 67574,
                  "nodeType": "IfStatement",
                  "src": "4531:184:123",
                  "trueBody": {
                    "id": 67560,
                    "nodeType": "Block",
                    "src": "4544:82:123",
                    "statements": [
                      {
                        "expression": {
                          "id": 67558,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 67549,
                              "name": "getRolesWithCapability",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67347,
                              "src": "4558:22:123",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes4_$_t_bytes32_$",
                                "typeString": "mapping(bytes4 => bytes32)"
                              }
                            },
                            "id": 67551,
                            "indexExpression": {
                              "id": 67550,
                              "name": "functionSig",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67541,
                              "src": "4581:11:123",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes4",
                                "typeString": "bytes4"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "4558:35:123",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "|=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 67556,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "hexValue": "31",
                                  "id": 67554,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "4605:1:123",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_1_by_1",
                                    "typeString": "int_const 1"
                                  },
                                  "value": "1"
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "<<",
                                "rightExpression": {
                                  "id": 67555,
                                  "name": "role",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 67539,
                                  "src": "4610:4:123",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint8",
                                    "typeString": "uint8"
                                  }
                                },
                                "src": "4605:9:123",
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
                              "id": 67553,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "4597:7:123",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_bytes32_$",
                                "typeString": "type(bytes32)"
                              },
                              "typeName": {
                                "id": 67552,
                                "name": "bytes32",
                                "nodeType": "ElementaryTypeName",
                                "src": "4597:7:123",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 67557,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4597:18:123",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "src": "4558:57:123",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 67559,
                        "nodeType": "ExpressionStatement",
                        "src": "4558:57:123"
                      }
                    ]
                  }
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 67576,
                        "name": "role",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67539,
                        "src": "4752:4:123",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      {
                        "id": 67577,
                        "name": "functionSig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67541,
                        "src": "4758:11:123",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      {
                        "id": 67578,
                        "name": "enabled",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67543,
                        "src": "4771:7:123",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        },
                        {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 67575,
                      "name": "RoleCapabilityUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67310,
                      "src": "4730:21:123",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint8_$_t_bytes4_$_t_bool_$returns$__$",
                        "typeString": "function (uint8,bytes4,bool)"
                      }
                    },
                    "id": 67579,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4730:49:123",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 67580,
                  "nodeType": "EmitStatement",
                  "src": "4725:54:123"
                }
              ]
            },
            "functionSelector": "0ea9b75b",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 67546,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 67545,
                  "name": "requiresAuth",
                  "nameLocations": [
                    "4508:12:123"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 67170,
                  "src": "4508:12:123"
                },
                "nodeType": "ModifierInvocation",
                "src": "4508:12:123"
              }
            ],
            "name": "setRoleCapability",
            "nameLocation": "4399:17:123",
            "parameters": {
              "id": 67544,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 67539,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "4432:4:123",
                  "nodeType": "VariableDeclaration",
                  "scope": 67582,
                  "src": "4426:10:123",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 67538,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "4426:5:123",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 67541,
                  "mutability": "mutable",
                  "name": "functionSig",
                  "nameLocation": "4453:11:123",
                  "nodeType": "VariableDeclaration",
                  "scope": 67582,
                  "src": "4446:18:123",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 67540,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "4446:6:123",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 67543,
                  "mutability": "mutable",
                  "name": "enabled",
                  "nameLocation": "4479:7:123",
                  "nodeType": "VariableDeclaration",
                  "scope": 67582,
                  "src": "4474:12:123",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 67542,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "4474:4:123",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4416:76:123"
            },
            "returnParameters": {
              "id": 67547,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4521:0:123"
            },
            "scope": 67583,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 67285,
              "name": "Auth",
              "nameLocations": [
                "359:4:123"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 67265,
              "src": "359:4:123"
            },
            "id": 67286,
            "nodeType": "InheritanceSpecifier",
            "src": "359:4:123"
          },
          {
            "baseName": {
              "id": 67287,
              "name": "Authority",
              "nameLocations": [
                "365:9:123"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 67278,
              "src": "365:9:123"
            },
            "id": 67288,
            "nodeType": "InheritanceSpecifier",
            "src": "365:9:123"
          }
        ],
        "canonicalName": "MultiRolesAuthority",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 67284,
          "nodeType": "StructuredDocumentation",
          "src": "114:213:123",
          "text": "@notice Flexible and target agnostic role based Authority that supports up to 256 roles.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/auth/authorities/MultiRolesAuthority.sol)"
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          67583,
          67278,
          67265
        ],
        "name": "MultiRolesAuthority",
        "nameLocation": "336:19:123",
        "scope": 67584,
        "usedErrors": [],
        "usedEvents": [
          67115,
          67122,
          67296,
          67302,
          67310,
          67317
        ]
      }
    ],
    "license": "AGPL-3.0-only"
  },
  "id": 123
} as const;
