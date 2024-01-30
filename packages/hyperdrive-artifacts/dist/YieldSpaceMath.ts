export const YieldSpaceMath = 
{
  "abi": [],
  "bytecode": {
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220bcad0ffb603600a38a7fa36dac349eb986eca55105f9d1a021827c51ee512e8d64736f6c63430008140033",
    "sourceMap": "1466:17287:77:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;1466:17287:77;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220bcad0ffb603600a38a7fa36dac349eb986eca55105f9d1a021827c51ee512e8d64736f6c63430008140033",
    "sourceMap": "1466:17287:77:-:0;;;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"details\":\"It is advised for developers to attain the pre-requisite knowledge      of how this implementation works on the mathematical level. This      excerpt attempts to document this pre-requisite knowledge explaining      the underpinning mathematical concepts in an understandable manner and      relating it directly to the code implementation.      This implementation is based on a paper called \\\"YieldSpace with Yield      Bearing Vaults\\\" or more casually \\\"Modified YieldSpace\\\". It can be      found at the following link.      https://hackmd.io/lRZ4mgdrRgOpxZQXqKYlFw?view      That paper builds on the original YieldSpace paper, \\\"YieldSpace:      An Automated Liquidity Provider for Fixed Yield Tokens\\\". It can be      found at the following link:      https://yieldprotocol.com/YieldSpace.pdf\",\"kind\":\"dev\",\"methods\":{},\"title\":\"YieldSpaceMath\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Math for the YieldSpace pricing model.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/libraries/YieldSpaceMath.sol\":\"YieldSpaceMath\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfd51b9727f00a434ea4ced64044c104ed8361fa2ed22600969d1e4ff257b14f3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8780b588acc11dd906ff0897adc5b7acdab759fec4d14ce0d52bf002cb90c398\",\"dweb:/ipfs/QmTMaRGveFgN5L3k1h5oAbfp5ccmzT9d36JhChVg9PxJkD\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x81c89ca62586555b915a9609d10014ff9d1f0d82111809d566f614bd9ea2fb16\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c4859b122480f504d1f0035ed11983b0d74ea2b16bcf26dfe19365bb4f66240\",\"dweb:/ipfs/QmQEQBxRdsH6zNx2rvzetYZRbB3pMXXWzTuwVPBGVhCHfL\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x93cfce28869c1a082c170092b87b04204a91b7898a1e95c3e4270f06fbc76a97\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b8b24e13ff8994550685fec1405bc5d2a5ed6400db061005e72ecff056be51a1\",\"dweb:/ipfs/QmR4RZzyhjYt8xxRPaJWHKhBZdHZPVBHrtNERAZhCaaTFU\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x5c5d6c812fd2cf996d60632c4c8cca7b3d70f5ae4891a3f99c1e10f967f520dd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://44ef09e50cf76ebab25b90688b19966575cc07fee503ffdb189c3fbbcbfea01f\",\"dweb:/ipfs/QmZEULHXopjaeWbsfXNrEriQomY19s6LXEcae9saeZCpmt\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x516967eaae812ff7fff81797190f48fca40838eccfb8243e3f973f2f85b51597\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://50fa3165b126976c218d27f7f276789f8cc680d3136cd631999164a64f03e477\",\"dweb:/ipfs/QmTSCjqQoys2SJNDZrhTdy2M2at8siSb3ZXHjWUoeihQjr\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xda628a0f7428ad63cb04b6f341c223d7b36803d554e92cd3a793325eae6ad87a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f7dfe92e6fb15eedbba033a96481db1343aeb48039d40d4b5053cc27d3f5e4f3\",\"dweb:/ipfs/QmNeNyjuEd7LkwZMg14fnMsunLXbJRzHYwzC2yEYKi8H3q\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0xb5b2a1f90c4e85e1290144b1e0e393027c90f24d6030ee802d0369342d7bf002\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f7850a790ea32726462f6dd08c87e5250c70155af558b8fdd17dc71d53c5b7f3\",\"dweb:/ipfs/QmWpshz1Ufdqmw8rmZdbdm9ZyEcKHFswLMNaBkBJ3sqNA1\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xa2e1d420bcae975a3d9aa7918319da2dd047cbc50ad41e0a391048e01b980191\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://335611b957d8ca7c0cee11d6f2268372a7c937bc119c030cb8e274679604b6cd\",\"dweb:/ipfs/QmeoxLRyPVgBXrxetVFEyjsvLNfwAahcHsFdAEzy9otxuU\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xf84c46faa4a3323835a80eae3ee969409bf3f5c48ec94a6e486b70cb59a4c868\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b1dcc1796eac62773f298b5b77fda8de424d822a7e74825028a0f83c627a5bfb\",\"dweb:/ipfs/QmRbiswdabx3uMgrgkLKe6K6JAQBLafsWqEyZCg3PQbN5Q\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0xdcf0c77bc29a0b5b2ce06cccfa6f5e936128e5c0f14a5636bfe21faf95c515bf\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://088172c3f97db68914cdef042d942b0d0c585cce77d004625bfa62a72ac1e95d\",\"dweb:/ipfs/Qmewa9GJtYxBw4fAx4HZJaNuUCKEoQT4c5nmhPyXxVEwwq\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0x94662a356f9ab292c0935ff4c29f9b826a17176eb98b472efed7afbfe4d5d744\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://794c5605f8f0716b871a8747fea516d26fd73f0add45a944ac4034de96c60c7a\",\"dweb:/ipfs/QmYSsquDzxupHSwWMsjjooxNxuzQ29ezczFsP2VQ5PYYve\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x390a002b83e7ed8a99d4ca9b3ea514b2080c237911a3a3d0fa2ad4522a09d60b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://51ea972cf6d3c79ea6b93c63c85fbba2bd234e71704715a1d9bd897da9d6fcb1\",\"dweb:/ipfs/QmXEGDrLyeAYMZiDVNynVzRzAYgnspcdLfkMeGr81DmJpL\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x76f69d3104f3f97d67289512325306d7ea2c7b29a787eeef93ffc47e8a80f346\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c8df31a46b4287c23c67e0157e6f6a4877608ed3fb1919a9c07f5bd9b81d7f6\",\"dweb:/ipfs/QmPua6efzJGnC7NarnPojk9yF2geqenUaXUNRmPVHJdXWk\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.20+commit.a1b79de6"
    },
    "language": "Solidity",
    "output": {
      "abi": [],
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
        "contracts/src/libraries/YieldSpaceMath.sol": "YieldSpaceMath"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/interfaces/IERC20.sol": {
        "keccak256": "0xfd51b9727f00a434ea4ced64044c104ed8361fa2ed22600969d1e4ff257b14f3",
        "urls": [
          "bzz-raw://8780b588acc11dd906ff0897adc5b7acdab759fec4d14ce0d52bf002cb90c398",
          "dweb:/ipfs/QmTMaRGveFgN5L3k1h5oAbfp5ccmzT9d36JhChVg9PxJkD"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdrive.sol": {
        "keccak256": "0x81c89ca62586555b915a9609d10014ff9d1f0d82111809d566f614bd9ea2fb16",
        "urls": [
          "bzz-raw://3c4859b122480f504d1f0035ed11983b0d74ea2b16bcf26dfe19365bb4f66240",
          "dweb:/ipfs/QmQEQBxRdsH6zNx2rvzetYZRbB3pMXXWzTuwVPBGVhCHfL"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveCore.sol": {
        "keccak256": "0x93cfce28869c1a082c170092b87b04204a91b7898a1e95c3e4270f06fbc76a97",
        "urls": [
          "bzz-raw://b8b24e13ff8994550685fec1405bc5d2a5ed6400db061005e72ecff056be51a1",
          "dweb:/ipfs/QmR4RZzyhjYt8xxRPaJWHKhBZdHZPVBHrtNERAZhCaaTFU"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveEvents.sol": {
        "keccak256": "0x5c5d6c812fd2cf996d60632c4c8cca7b3d70f5ae4891a3f99c1e10f967f520dd",
        "urls": [
          "bzz-raw://44ef09e50cf76ebab25b90688b19966575cc07fee503ffdb189c3fbbcbfea01f",
          "dweb:/ipfs/QmZEULHXopjaeWbsfXNrEriQomY19s6LXEcae9saeZCpmt"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveRead.sol": {
        "keccak256": "0x516967eaae812ff7fff81797190f48fca40838eccfb8243e3f973f2f85b51597",
        "urls": [
          "bzz-raw://50fa3165b126976c218d27f7f276789f8cc680d3136cd631999164a64f03e477",
          "dweb:/ipfs/QmTSCjqQoys2SJNDZrhTdy2M2at8siSb3ZXHjWUoeihQjr"
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
        "keccak256": "0xda628a0f7428ad63cb04b6f341c223d7b36803d554e92cd3a793325eae6ad87a",
        "urls": [
          "bzz-raw://f7dfe92e6fb15eedbba033a96481db1343aeb48039d40d4b5053cc27d3f5e4f3",
          "dweb:/ipfs/QmNeNyjuEd7LkwZMg14fnMsunLXbJRzHYwzC2yEYKi8H3q"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenEvents.sol": {
        "keccak256": "0xb5b2a1f90c4e85e1290144b1e0e393027c90f24d6030ee802d0369342d7bf002",
        "urls": [
          "bzz-raw://f7850a790ea32726462f6dd08c87e5250c70155af558b8fdd17dc71d53c5b7f3",
          "dweb:/ipfs/QmWpshz1Ufdqmw8rmZdbdm9ZyEcKHFswLMNaBkBJ3sqNA1"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenMetadata.sol": {
        "keccak256": "0xa2e1d420bcae975a3d9aa7918319da2dd047cbc50ad41e0a391048e01b980191",
        "urls": [
          "bzz-raw://335611b957d8ca7c0cee11d6f2268372a7c937bc119c030cb8e274679604b6cd",
          "dweb:/ipfs/QmeoxLRyPVgBXrxetVFEyjsvLNfwAahcHsFdAEzy9otxuU"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenRead.sol": {
        "keccak256": "0xf84c46faa4a3323835a80eae3ee969409bf3f5c48ec94a6e486b70cb59a4c868",
        "urls": [
          "bzz-raw://b1dcc1796eac62773f298b5b77fda8de424d822a7e74825028a0f83c627a5bfb",
          "dweb:/ipfs/QmRbiswdabx3uMgrgkLKe6K6JAQBLafsWqEyZCg3PQbN5Q"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/Errors.sol": {
        "keccak256": "0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0",
        "urls": [
          "bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88",
          "dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/FixedPointMath.sol": {
        "keccak256": "0xdcf0c77bc29a0b5b2ce06cccfa6f5e936128e5c0f14a5636bfe21faf95c515bf",
        "urls": [
          "bzz-raw://088172c3f97db68914cdef042d942b0d0c585cce77d004625bfa62a72ac1e95d",
          "dweb:/ipfs/Qmewa9GJtYxBw4fAx4HZJaNuUCKEoQT4c5nmhPyXxVEwwq"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/HyperdriveMath.sol": {
        "keccak256": "0x94662a356f9ab292c0935ff4c29f9b826a17176eb98b472efed7afbfe4d5d744",
        "urls": [
          "bzz-raw://794c5605f8f0716b871a8747fea516d26fd73f0add45a944ac4034de96c60c7a",
          "dweb:/ipfs/QmYSsquDzxupHSwWMsjjooxNxuzQ29ezczFsP2VQ5PYYve"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/SafeCast.sol": {
        "keccak256": "0x390a002b83e7ed8a99d4ca9b3ea514b2080c237911a3a3d0fa2ad4522a09d60b",
        "urls": [
          "bzz-raw://51ea972cf6d3c79ea6b93c63c85fbba2bd234e71704715a1d9bd897da9d6fcb1",
          "dweb:/ipfs/QmXEGDrLyeAYMZiDVNynVzRzAYgnspcdLfkMeGr81DmJpL"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/YieldSpaceMath.sol": {
        "keccak256": "0x76f69d3104f3f97d67289512325306d7ea2c7b29a787eeef93ffc47e8a80f346",
        "urls": [
          "bzz-raw://6c8df31a46b4287c23c67e0157e6f6a4877608ed3fb1919a9c07f5bd9b81d7f6",
          "dweb:/ipfs/QmPua6efzJGnC7NarnPojk9yF2geqenUaXUNRmPVHJdXWk"
        ],
        "license": "Apache-2.0"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/src/libraries/YieldSpaceMath.sol",
    "id": 18570,
    "exportedSymbols": {
      "Errors": [
        13522
      ],
      "FixedPointMath": [
        14294
      ],
      "HyperdriveMath": [
        15024
      ],
      "IHyperdrive": [
        7411
      ],
      "ONE": [
        13529
      ],
      "YieldSpaceMath": [
        18569
      ]
    },
    "nodeType": "SourceUnit",
    "src": "40:18714:77",
    "nodes": [
      {
        "id": 17710,
        "nodeType": "PragmaDirective",
        "src": "40:23:77",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 17712,
        "nodeType": "ImportDirective",
        "src": "65:60:77",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "../interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 18570,
        "sourceUnit": 7412,
        "symbolAliases": [
          {
            "foreign": {
              "id": 17711,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7411,
              "src": "74:11:77",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 17714,
        "nodeType": "ImportDirective",
        "src": "126:38:77",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/Errors.sol",
        "file": "./Errors.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 18570,
        "sourceUnit": 13523,
        "symbolAliases": [
          {
            "foreign": {
              "id": 17713,
              "name": "Errors",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 13522,
              "src": "135:6:77",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 17717,
        "nodeType": "ImportDirective",
        "src": "165:59:77",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
        "file": "./FixedPointMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 18570,
        "sourceUnit": 14295,
        "symbolAliases": [
          {
            "foreign": {
              "id": 17715,
              "name": "FixedPointMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 14294,
              "src": "174:14:77",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          },
          {
            "foreign": {
              "id": 17716,
              "name": "ONE",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 13529,
              "src": "190:3:77",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 17719,
        "nodeType": "ImportDirective",
        "src": "225:54:77",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/HyperdriveMath.sol",
        "file": "./HyperdriveMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 18570,
        "sourceUnit": 15025,
        "symbolAliases": [
          {
            "foreign": {
              "id": 17718,
              "name": "HyperdriveMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 15024,
              "src": "234:14:77",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 18569,
        "nodeType": "ContractDefinition",
        "src": "1466:17287:77",
        "nodes": [
          {
            "id": 17723,
            "nodeType": "UsingForDirective",
            "src": "1495:33:77",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 17721,
              "name": "FixedPointMath",
              "nameLocations": [
                "1501:14:77"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 14294,
              "src": "1501:14:77"
            },
            "typeName": {
              "id": 17722,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1520:7:77",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 17834,
            "nodeType": "FunctionDefinition",
            "src": "2068:1646:77",
            "nodes": [],
            "body": {
              "id": 17833,
              "nodeType": "Block",
              "src": "2267:1447:77",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    17742
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 17742,
                      "mutability": "mutable",
                      "name": "k",
                      "nameLocation": "2423:1:77",
                      "nodeType": "VariableDeclaration",
                      "scope": 17833,
                      "src": "2415:9:77",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 17741,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2415:7:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 17750,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 17744,
                        "name": "ze",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17726,
                        "src": "2431:2:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 17745,
                        "name": "y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17728,
                        "src": "2435:1:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 17746,
                        "name": "t",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17732,
                        "src": "2438:1:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 17747,
                        "name": "c",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17734,
                        "src": "2441:1:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 17748,
                        "name": "mu",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17736,
                        "src": "2444:2:77",
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
                      "id": 17743,
                      "name": "kUp",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18534,
                      "src": "2427:3:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 17749,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2427:20:77",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2415:32:77"
                },
                {
                  "expression": {
                    "id": 17761,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 17751,
                      "name": "ze",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17726,
                      "src": "2580:2:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 17759,
                          "name": "t",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17732,
                          "src": "2609:1:77",
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
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 17756,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 17754,
                                "name": "ze",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 17726,
                                "src": "2596:2:77",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "+",
                              "rightExpression": {
                                "id": 17755,
                                "name": "dz",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 17730,
                                "src": "2601:2:77",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "2596:7:77",
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
                              "id": 17752,
                              "name": "mu",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 17736,
                              "src": "2585:2:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 17753,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2588:7:77",
                            "memberName": "mulDown",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 13572,
                            "src": "2585:10:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 17757,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2585:19:77",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 17758,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2605:3:77",
                        "memberName": "pow",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 13699,
                        "src": "2585:23:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 17760,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2585:26:77",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2580:31:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 17762,
                  "nodeType": "ExpressionStatement",
                  "src": "2580:31:77"
                },
                {
                  "expression": {
                    "id": 17769,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 17763,
                      "name": "ze",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17726,
                      "src": "2669:2:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 17766,
                          "name": "ze",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17726,
                          "src": "2687:2:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 17767,
                          "name": "mu",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17736,
                          "src": "2691:2:77",
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
                          }
                        ],
                        "expression": {
                          "id": 17764,
                          "name": "c",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17734,
                          "src": "2674:1:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 17765,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2676:10:77",
                        "memberName": "mulDivDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 13554,
                        "src": "2674:12:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 17768,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2674:20:77",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2669:25:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 17770,
                  "nodeType": "ExpressionStatement",
                  "src": "2669:25:77"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 17773,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 17771,
                      "name": "k",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17742,
                      "src": "2764:1:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "id": 17772,
                      "name": "ze",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17726,
                      "src": "2768:2:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2764:6:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 17783,
                  "nodeType": "IfStatement",
                  "src": "2760:166:77",
                  "trueBody": {
                    "id": 17782,
                    "nodeType": "Block",
                    "src": "2772:154:77",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "expression": {
                                "expression": {
                                  "id": 17777,
                                  "name": "IHyperdrive",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 7411,
                                  "src": "2842:11:77",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7411_$",
                                    "typeString": "type(contract IHyperdrive)"
                                  }
                                },
                                "id": 17778,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "2854:27:77",
                                "memberName": "InsufficientLiquidityReason",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 7277,
                                "src": "2842:39:77",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_enum$_InsufficientLiquidityReason_$7277_$",
                                  "typeString": "type(enum IHyperdrive.InsufficientLiquidityReason)"
                                }
                              },
                              "id": 17779,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "2882:19:77",
                              "memberName": "ArithmeticUnderflow",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 7273,
                              "src": "2842:59:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_enum$_InsufficientLiquidityReason_$7277",
                                "typeString": "enum IHyperdrive.InsufficientLiquidityReason"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_enum$_InsufficientLiquidityReason_$7277",
                                "typeString": "enum IHyperdrive.InsufficientLiquidityReason"
                              }
                            ],
                            "expression": {
                              "id": 17774,
                              "name": "Errors",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 13522,
                              "src": "2786:6:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_Errors_$13522_$",
                                "typeString": "type(library Errors)"
                              }
                            },
                            "id": 17776,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2793:31:77",
                            "memberName": "throwInsufficientLiquidityError",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 13521,
                            "src": "2786:38:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_enum$_InsufficientLiquidityReason_$7277_$returns$__$",
                              "typeString": "function (enum IHyperdrive.InsufficientLiquidityReason) pure"
                            }
                          },
                          "id": 17780,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2786:129:77",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 17781,
                        "nodeType": "ExpressionStatement",
                        "src": "2786:129:77"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    17785
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 17785,
                      "mutability": "mutable",
                      "name": "_y",
                      "nameLocation": "3094:2:77",
                      "nodeType": "VariableDeclaration",
                      "scope": 17833,
                      "src": "3086:10:77",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 17784,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3086:7:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 17789,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 17788,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 17786,
                      "name": "k",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17742,
                      "src": "3099:1:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "id": 17787,
                      "name": "ze",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17726,
                      "src": "3103:2:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3099:6:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3086:19:77"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 17792,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 17790,
                      "name": "_y",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17785,
                      "src": "3119:2:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "id": 17791,
                      "name": "ONE",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13529,
                      "src": "3125:3:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3119:9:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 17814,
                    "nodeType": "Block",
                    "src": "3254:122:77",
                    "statements": [
                      {
                        "expression": {
                          "id": 17812,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 17804,
                            "name": "_y",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17785,
                            "src": "3338:2:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "id": 17809,
                                    "name": "t",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 17732,
                                    "src": "3362:1:77",
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
                                    "id": 17807,
                                    "name": "ONE",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13529,
                                    "src": "3350:3:77",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "id": 17808,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "3354:7:77",
                                  "memberName": "divDown",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 13590,
                                  "src": "3350:11:77",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                  }
                                },
                                "id": 17810,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "3350:14:77",
                                "tryCall": false,
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
                                "id": 17805,
                                "name": "_y",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 17785,
                                "src": "3343:2:77",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 17806,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "3346:3:77",
                              "memberName": "pow",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 13699,
                              "src": "3343:6:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 17811,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3343:22:77",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3338:27:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 17813,
                        "nodeType": "ExpressionStatement",
                        "src": "3338:27:77"
                      }
                    ]
                  },
                  "id": 17815,
                  "nodeType": "IfStatement",
                  "src": "3115:261:77",
                  "trueBody": {
                    "id": 17803,
                    "nodeType": "Block",
                    "src": "3130:118:77",
                    "statements": [
                      {
                        "expression": {
                          "id": 17801,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 17793,
                            "name": "_y",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17785,
                            "src": "3212:2:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "id": 17798,
                                    "name": "t",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 17732,
                                    "src": "3234:1:77",
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
                                    "id": 17796,
                                    "name": "ONE",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13529,
                                    "src": "3224:3:77",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "id": 17797,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "3228:5:77",
                                  "memberName": "divUp",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 13640,
                                  "src": "3224:9:77",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                  }
                                },
                                "id": 17799,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "3224:12:77",
                                "tryCall": false,
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
                                "id": 17794,
                                "name": "_y",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 17785,
                                "src": "3217:2:77",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 17795,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "3220:3:77",
                              "memberName": "pow",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 13699,
                              "src": "3217:6:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 17800,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3217:20:77",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3212:25:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 17802,
                        "nodeType": "ExpressionStatement",
                        "src": "3212:25:77"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 17818,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 17816,
                      "name": "y",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17728,
                      "src": "3445:1:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "id": 17817,
                      "name": "_y",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17785,
                      "src": "3449:2:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3445:6:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 17828,
                  "nodeType": "IfStatement",
                  "src": "3441:166:77",
                  "trueBody": {
                    "id": 17827,
                    "nodeType": "Block",
                    "src": "3453:154:77",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "expression": {
                                "expression": {
                                  "id": 17822,
                                  "name": "IHyperdrive",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 7411,
                                  "src": "3523:11:77",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7411_$",
                                    "typeString": "type(contract IHyperdrive)"
                                  }
                                },
                                "id": 17823,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "3535:27:77",
                                "memberName": "InsufficientLiquidityReason",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 7277,
                                "src": "3523:39:77",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_enum$_InsufficientLiquidityReason_$7277_$",
                                  "typeString": "type(enum IHyperdrive.InsufficientLiquidityReason)"
                                }
                              },
                              "id": 17824,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "3563:19:77",
                              "memberName": "ArithmeticUnderflow",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 7273,
                              "src": "3523:59:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_enum$_InsufficientLiquidityReason_$7277",
                                "typeString": "enum IHyperdrive.InsufficientLiquidityReason"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_enum$_InsufficientLiquidityReason_$7277",
                                "typeString": "enum IHyperdrive.InsufficientLiquidityReason"
                              }
                            ],
                            "expression": {
                              "id": 17819,
                              "name": "Errors",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 13522,
                              "src": "3467:6:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_Errors_$13522_$",
                                "typeString": "type(library Errors)"
                              }
                            },
                            "id": 17821,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3474:31:77",
                            "memberName": "throwInsufficientLiquidityError",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 13521,
                            "src": "3467:38:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_enum$_InsufficientLiquidityReason_$7277_$returns$__$",
                              "typeString": "function (enum IHyperdrive.InsufficientLiquidityReason) pure"
                            }
                          },
                          "id": 17825,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3467:129:77",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 17826,
                        "nodeType": "ExpressionStatement",
                        "src": "3467:129:77"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 17831,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 17829,
                      "name": "y",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17728,
                      "src": "3701:1:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "id": 17830,
                      "name": "_y",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17785,
                      "src": "3705:2:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3701:6:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 17740,
                  "id": 17832,
                  "nodeType": "Return",
                  "src": "3694:13:77"
                }
              ]
            },
            "documentation": {
              "id": 17724,
              "nodeType": "StructuredDocumentation",
              "src": "1534:529:77",
              "text": "@dev Calculates the amount of bonds a user will receive from the pool by\n      providing a specified amount of shares. We underestimate the amount\n      of bonds out.\n @param ze The effective share reserves.\n @param y The bond reserves.\n @param dz The amount of shares paid to the pool.\n @param t The time elapsed since the term's start.\n @param c The vault share price.\n @param mu The initial vault share price.\n @return The amount of bonds the trader receives."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateBondsOutGivenSharesInDown",
            "nameLocation": "2077:34:77",
            "parameters": {
              "id": 17737,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17726,
                  "mutability": "mutable",
                  "name": "ze",
                  "nameLocation": "2129:2:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 17834,
                  "src": "2121:10:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17725,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2121:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17728,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "2149:1:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 17834,
                  "src": "2141:9:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17727,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2141:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17730,
                  "mutability": "mutable",
                  "name": "dz",
                  "nameLocation": "2168:2:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 17834,
                  "src": "2160:10:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17729,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2160:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17732,
                  "mutability": "mutable",
                  "name": "t",
                  "nameLocation": "2188:1:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 17834,
                  "src": "2180:9:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17731,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2180:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17734,
                  "mutability": "mutable",
                  "name": "c",
                  "nameLocation": "2207:1:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 17834,
                  "src": "2199:9:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17733,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2199:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17736,
                  "mutability": "mutable",
                  "name": "mu",
                  "nameLocation": "2226:2:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 17834,
                  "src": "2218:10:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17735,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2218:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2111:123:77"
            },
            "returnParameters": {
              "id": 17740,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17739,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 17834,
                  "src": "2258:7:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17738,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2258:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2257:9:77"
            },
            "scope": 18569,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 17960,
            "nodeType": "FunctionDefinition",
            "src": "4244:1797:77",
            "nodes": [],
            "body": {
              "id": 17959,
              "nodeType": "Block",
              "src": "4441:1600:77",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    17853
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 17853,
                      "mutability": "mutable",
                      "name": "k",
                      "nameLocation": "4597:1:77",
                      "nodeType": "VariableDeclaration",
                      "scope": 17959,
                      "src": "4589:9:77",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 17852,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4589:7:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 17861,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 17855,
                        "name": "ze",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17837,
                        "src": "4605:2:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 17856,
                        "name": "y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17839,
                        "src": "4609:1:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 17857,
                        "name": "t",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17843,
                        "src": "4612:1:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 17858,
                        "name": "c",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17845,
                        "src": "4615:1:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 17859,
                        "name": "mu",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17847,
                        "src": "4618:2:77",
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
                      "id": 17854,
                      "name": "kUp",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18534,
                      "src": "4601:3:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 17860,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4601:20:77",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4589:32:77"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 17864,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 17862,
                      "name": "y",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17839,
                      "src": "4691:1:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "id": 17863,
                      "name": "dy",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17841,
                      "src": "4695:2:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4691:6:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 17874,
                  "nodeType": "IfStatement",
                  "src": "4687:166:77",
                  "trueBody": {
                    "id": 17873,
                    "nodeType": "Block",
                    "src": "4699:154:77",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "expression": {
                                "expression": {
                                  "id": 17868,
                                  "name": "IHyperdrive",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 7411,
                                  "src": "4769:11:77",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7411_$",
                                    "typeString": "type(contract IHyperdrive)"
                                  }
                                },
                                "id": 17869,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "4781:27:77",
                                "memberName": "InsufficientLiquidityReason",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 7277,
                                "src": "4769:39:77",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_enum$_InsufficientLiquidityReason_$7277_$",
                                  "typeString": "type(enum IHyperdrive.InsufficientLiquidityReason)"
                                }
                              },
                              "id": 17870,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "4809:19:77",
                              "memberName": "ArithmeticUnderflow",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 7273,
                              "src": "4769:59:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_enum$_InsufficientLiquidityReason_$7277",
                                "typeString": "enum IHyperdrive.InsufficientLiquidityReason"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_enum$_InsufficientLiquidityReason_$7277",
                                "typeString": "enum IHyperdrive.InsufficientLiquidityReason"
                              }
                            ],
                            "expression": {
                              "id": 17865,
                              "name": "Errors",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 13522,
                              "src": "4713:6:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_Errors_$13522_$",
                                "typeString": "type(library Errors)"
                              }
                            },
                            "id": 17867,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "4720:31:77",
                            "memberName": "throwInsufficientLiquidityError",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 13521,
                            "src": "4713:38:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_enum$_InsufficientLiquidityReason_$7277_$returns$__$",
                              "typeString": "function (enum IHyperdrive.InsufficientLiquidityReason) pure"
                            }
                          },
                          "id": 17871,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4713:129:77",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 17872,
                        "nodeType": "ExpressionStatement",
                        "src": "4713:129:77"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 17883,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 17875,
                      "name": "y",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17839,
                      "src": "4891:1:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 17881,
                          "name": "t",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17843,
                          "src": "4908:1:77",
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
                          "components": [
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 17878,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 17876,
                                "name": "y",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 17839,
                                "src": "4896:1:77",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "-",
                              "rightExpression": {
                                "id": 17877,
                                "name": "dy",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 17841,
                                "src": "4900:2:77",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "4896:6:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 17879,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "4895:8:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 17880,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4904:3:77",
                        "memberName": "pow",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 13699,
                        "src": "4895:12:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 17882,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4895:15:77",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4891:19:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 17884,
                  "nodeType": "ExpressionStatement",
                  "src": "4891:19:77"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 17887,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 17885,
                      "name": "k",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17853,
                      "src": "4979:1:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "id": 17886,
                      "name": "y",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17839,
                      "src": "4983:1:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4979:5:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 17897,
                  "nodeType": "IfStatement",
                  "src": "4975:165:77",
                  "trueBody": {
                    "id": 17896,
                    "nodeType": "Block",
                    "src": "4986:154:77",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "expression": {
                                "expression": {
                                  "id": 17891,
                                  "name": "IHyperdrive",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 7411,
                                  "src": "5056:11:77",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7411_$",
                                    "typeString": "type(contract IHyperdrive)"
                                  }
                                },
                                "id": 17892,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "5068:27:77",
                                "memberName": "InsufficientLiquidityReason",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 7277,
                                "src": "5056:39:77",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_enum$_InsufficientLiquidityReason_$7277_$",
                                  "typeString": "type(enum IHyperdrive.InsufficientLiquidityReason)"
                                }
                              },
                              "id": 17893,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "5096:19:77",
                              "memberName": "ArithmeticUnderflow",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 7273,
                              "src": "5056:59:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_enum$_InsufficientLiquidityReason_$7277",
                                "typeString": "enum IHyperdrive.InsufficientLiquidityReason"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_enum$_InsufficientLiquidityReason_$7277",
                                "typeString": "enum IHyperdrive.InsufficientLiquidityReason"
                              }
                            ],
                            "expression": {
                              "id": 17888,
                              "name": "Errors",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 13522,
                              "src": "5000:6:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_Errors_$13522_$",
                                "typeString": "type(library Errors)"
                              }
                            },
                            "id": 17890,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5007:31:77",
                            "memberName": "throwInsufficientLiquidityError",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 13521,
                            "src": "5000:38:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_enum$_InsufficientLiquidityReason_$7277_$returns$__$",
                              "typeString": "function (enum IHyperdrive.InsufficientLiquidityReason) pure"
                            }
                          },
                          "id": 17894,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5000:129:77",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 17895,
                        "nodeType": "ExpressionStatement",
                        "src": "5000:129:77"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    17899
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 17899,
                      "mutability": "mutable",
                      "name": "_z",
                      "nameLocation": "5303:2:77",
                      "nodeType": "VariableDeclaration",
                      "scope": 17959,
                      "src": "5295:10:77",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 17898,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5295:7:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 17908,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 17905,
                        "name": "mu",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17847,
                        "src": "5325:2:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 17906,
                        "name": "c",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17845,
                        "src": "5329:1:77",
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
                        }
                      ],
                      "expression": {
                        "components": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 17902,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 17900,
                              "name": "k",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 17853,
                              "src": "5309:1:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "id": 17901,
                              "name": "y",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 17839,
                              "src": "5313:1:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "5309:5:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 17903,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "5308:7:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 17904,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5316:8:77",
                      "memberName": "mulDivUp",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 13604,
                      "src": "5308:16:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 17907,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5308:23:77",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5295:36:77"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 17911,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 17909,
                      "name": "_z",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17899,
                      "src": "5345:2:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "id": 17910,
                      "name": "ONE",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13529,
                      "src": "5351:3:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5345:9:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 17933,
                    "nodeType": "Block",
                    "src": "5480:122:77",
                    "statements": [
                      {
                        "expression": {
                          "id": 17931,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 17923,
                            "name": "_z",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17899,
                            "src": "5564:2:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "id": 17928,
                                    "name": "t",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 17843,
                                    "src": "5588:1:77",
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
                                    "id": 17926,
                                    "name": "ONE",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13529,
                                    "src": "5576:3:77",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "id": 17927,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "5580:7:77",
                                  "memberName": "divDown",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 13590,
                                  "src": "5576:11:77",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                  }
                                },
                                "id": 17929,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "5576:14:77",
                                "tryCall": false,
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
                                "id": 17924,
                                "name": "_z",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 17899,
                                "src": "5569:2:77",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 17925,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "5572:3:77",
                              "memberName": "pow",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 13699,
                              "src": "5569:6:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 17930,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5569:22:77",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5564:27:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 17932,
                        "nodeType": "ExpressionStatement",
                        "src": "5564:27:77"
                      }
                    ]
                  },
                  "id": 17934,
                  "nodeType": "IfStatement",
                  "src": "5341:261:77",
                  "trueBody": {
                    "id": 17922,
                    "nodeType": "Block",
                    "src": "5356:118:77",
                    "statements": [
                      {
                        "expression": {
                          "id": 17920,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 17912,
                            "name": "_z",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17899,
                            "src": "5438:2:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "id": 17917,
                                    "name": "t",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 17843,
                                    "src": "5460:1:77",
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
                                    "id": 17915,
                                    "name": "ONE",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13529,
                                    "src": "5450:3:77",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "id": 17916,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "5454:5:77",
                                  "memberName": "divUp",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 13640,
                                  "src": "5450:9:77",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                  }
                                },
                                "id": 17918,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "5450:12:77",
                                "tryCall": false,
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
                                "id": 17913,
                                "name": "_z",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 17899,
                                "src": "5443:2:77",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 17914,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "5446:3:77",
                              "memberName": "pow",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 13699,
                              "src": "5443:6:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 17919,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5443:20:77",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5438:25:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 17921,
                        "nodeType": "ExpressionStatement",
                        "src": "5438:25:77"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 17940,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 17935,
                      "name": "_z",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17899,
                      "src": "5679:2:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 17938,
                          "name": "mu",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17847,
                          "src": "5693:2:77",
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
                          "id": 17936,
                          "name": "_z",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17899,
                          "src": "5684:2:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 17937,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5687:5:77",
                        "memberName": "divUp",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 13640,
                        "src": "5684:8:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 17939,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5684:12:77",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5679:17:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 17941,
                  "nodeType": "ExpressionStatement",
                  "src": "5679:17:77"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 17944,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 17942,
                      "name": "_z",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17899,
                      "src": "5767:2:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "id": 17943,
                      "name": "ze",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17837,
                      "src": "5772:2:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5767:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 17954,
                  "nodeType": "IfStatement",
                  "src": "5763:167:77",
                  "trueBody": {
                    "id": 17953,
                    "nodeType": "Block",
                    "src": "5776:154:77",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "expression": {
                                "expression": {
                                  "id": 17948,
                                  "name": "IHyperdrive",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 7411,
                                  "src": "5846:11:77",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7411_$",
                                    "typeString": "type(contract IHyperdrive)"
                                  }
                                },
                                "id": 17949,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "5858:27:77",
                                "memberName": "InsufficientLiquidityReason",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 7277,
                                "src": "5846:39:77",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_enum$_InsufficientLiquidityReason_$7277_$",
                                  "typeString": "type(enum IHyperdrive.InsufficientLiquidityReason)"
                                }
                              },
                              "id": 17950,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "5886:19:77",
                              "memberName": "ArithmeticUnderflow",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 7273,
                              "src": "5846:59:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_enum$_InsufficientLiquidityReason_$7277",
                                "typeString": "enum IHyperdrive.InsufficientLiquidityReason"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_enum$_InsufficientLiquidityReason_$7277",
                                "typeString": "enum IHyperdrive.InsufficientLiquidityReason"
                              }
                            ],
                            "expression": {
                              "id": 17945,
                              "name": "Errors",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 13522,
                              "src": "5790:6:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_Errors_$13522_$",
                                "typeString": "type(library Errors)"
                              }
                            },
                            "id": 17947,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5797:31:77",
                            "memberName": "throwInsufficientLiquidityError",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 13521,
                            "src": "5790:38:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_enum$_InsufficientLiquidityReason_$7277_$returns$__$",
                              "typeString": "function (enum IHyperdrive.InsufficientLiquidityReason) pure"
                            }
                          },
                          "id": 17951,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5790:129:77",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 17952,
                        "nodeType": "ExpressionStatement",
                        "src": "5790:129:77"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 17957,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 17955,
                      "name": "_z",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17899,
                      "src": "6027:2:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "id": 17956,
                      "name": "ze",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17837,
                      "src": "6032:2:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6027:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 17851,
                  "id": 17958,
                  "nodeType": "Return",
                  "src": "6020:14:77"
                }
              ]
            },
            "documentation": {
              "id": 17835,
              "nodeType": "StructuredDocumentation",
              "src": "3720:519:77",
              "text": "@dev Calculates the amount of shares a user must provide the pool to\n      receive a specified amount of bonds. We overestimate the amount of\n      shares in.\n @param ze The effective share reserves.\n @param y The bond reserves.\n @param dy The amount of bonds paid to the trader.\n @param t The time elapsed since the term's start.\n @param c The vault share price.\n @param mu The initial vault share price.\n @return The amount of shares the trader pays."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateSharesInGivenBondsOutUp",
            "nameLocation": "4253:32:77",
            "parameters": {
              "id": 17848,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17837,
                  "mutability": "mutable",
                  "name": "ze",
                  "nameLocation": "4303:2:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 17960,
                  "src": "4295:10:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17836,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4295:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17839,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "4323:1:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 17960,
                  "src": "4315:9:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17838,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4315:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17841,
                  "mutability": "mutable",
                  "name": "dy",
                  "nameLocation": "4342:2:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 17960,
                  "src": "4334:10:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17840,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4334:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17843,
                  "mutability": "mutable",
                  "name": "t",
                  "nameLocation": "4362:1:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 17960,
                  "src": "4354:9:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17842,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4354:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17845,
                  "mutability": "mutable",
                  "name": "c",
                  "nameLocation": "4381:1:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 17960,
                  "src": "4373:9:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17844,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4373:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17847,
                  "mutability": "mutable",
                  "name": "mu",
                  "nameLocation": "4400:2:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 17960,
                  "src": "4392:10:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17846,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4392:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4285:123:77"
            },
            "returnParameters": {
              "id": 17851,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17850,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 17960,
                  "src": "4432:7:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17849,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4432:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4431:9:77"
            },
            "scope": 18569,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 18086,
            "nodeType": "FunctionDefinition",
            "src": "6570:1818:77",
            "nodes": [],
            "body": {
              "id": 18085,
              "nodeType": "Block",
              "src": "6769:1619:77",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    17979
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 17979,
                      "mutability": "mutable",
                      "name": "k",
                      "nameLocation": "6928:1:77",
                      "nodeType": "VariableDeclaration",
                      "scope": 18085,
                      "src": "6920:9:77",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 17978,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6920:7:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 17987,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 17981,
                        "name": "ze",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17963,
                        "src": "6938:2:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 17982,
                        "name": "y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17965,
                        "src": "6942:1:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 17983,
                        "name": "t",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17969,
                        "src": "6945:1:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 17984,
                        "name": "c",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17971,
                        "src": "6948:1:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 17985,
                        "name": "mu",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17973,
                        "src": "6951:2:77",
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
                      "id": 17980,
                      "name": "kDown",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18568,
                      "src": "6932:5:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 17986,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6932:22:77",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6920:34:77"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 17990,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 17988,
                      "name": "y",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17965,
                      "src": "7024:1:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "id": 17989,
                      "name": "dy",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17967,
                      "src": "7028:2:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7024:6:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 18000,
                  "nodeType": "IfStatement",
                  "src": "7020:166:77",
                  "trueBody": {
                    "id": 17999,
                    "nodeType": "Block",
                    "src": "7032:154:77",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "expression": {
                                "expression": {
                                  "id": 17994,
                                  "name": "IHyperdrive",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 7411,
                                  "src": "7102:11:77",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7411_$",
                                    "typeString": "type(contract IHyperdrive)"
                                  }
                                },
                                "id": 17995,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "7114:27:77",
                                "memberName": "InsufficientLiquidityReason",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 7277,
                                "src": "7102:39:77",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_enum$_InsufficientLiquidityReason_$7277_$",
                                  "typeString": "type(enum IHyperdrive.InsufficientLiquidityReason)"
                                }
                              },
                              "id": 17996,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "7142:19:77",
                              "memberName": "ArithmeticUnderflow",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 7273,
                              "src": "7102:59:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_enum$_InsufficientLiquidityReason_$7277",
                                "typeString": "enum IHyperdrive.InsufficientLiquidityReason"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_enum$_InsufficientLiquidityReason_$7277",
                                "typeString": "enum IHyperdrive.InsufficientLiquidityReason"
                              }
                            ],
                            "expression": {
                              "id": 17991,
                              "name": "Errors",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 13522,
                              "src": "7046:6:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_Errors_$13522_$",
                                "typeString": "type(library Errors)"
                              }
                            },
                            "id": 17993,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "7053:31:77",
                            "memberName": "throwInsufficientLiquidityError",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 13521,
                            "src": "7046:38:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_enum$_InsufficientLiquidityReason_$7277_$returns$__$",
                              "typeString": "function (enum IHyperdrive.InsufficientLiquidityReason) pure"
                            }
                          },
                          "id": 17997,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7046:129:77",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 17998,
                        "nodeType": "ExpressionStatement",
                        "src": "7046:129:77"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 18009,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 18001,
                      "name": "y",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17965,
                      "src": "7224:1:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 18007,
                          "name": "t",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17969,
                          "src": "7241:1:77",
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
                          "components": [
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 18004,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 18002,
                                "name": "y",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 17965,
                                "src": "7229:1:77",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "-",
                              "rightExpression": {
                                "id": 18003,
                                "name": "dy",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 17967,
                                "src": "7233:2:77",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "7229:6:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 18005,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "7228:8:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 18006,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "7237:3:77",
                        "memberName": "pow",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 13699,
                        "src": "7228:12:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 18008,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7228:15:77",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7224:19:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 18010,
                  "nodeType": "ExpressionStatement",
                  "src": "7224:19:77"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 18013,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 18011,
                      "name": "k",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17979,
                      "src": "7312:1:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "id": 18012,
                      "name": "y",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17965,
                      "src": "7316:1:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7312:5:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 18023,
                  "nodeType": "IfStatement",
                  "src": "7308:165:77",
                  "trueBody": {
                    "id": 18022,
                    "nodeType": "Block",
                    "src": "7319:154:77",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "expression": {
                                "expression": {
                                  "id": 18017,
                                  "name": "IHyperdrive",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 7411,
                                  "src": "7389:11:77",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7411_$",
                                    "typeString": "type(contract IHyperdrive)"
                                  }
                                },
                                "id": 18018,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "7401:27:77",
                                "memberName": "InsufficientLiquidityReason",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 7277,
                                "src": "7389:39:77",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_enum$_InsufficientLiquidityReason_$7277_$",
                                  "typeString": "type(enum IHyperdrive.InsufficientLiquidityReason)"
                                }
                              },
                              "id": 18019,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "7429:19:77",
                              "memberName": "ArithmeticUnderflow",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 7273,
                              "src": "7389:59:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_enum$_InsufficientLiquidityReason_$7277",
                                "typeString": "enum IHyperdrive.InsufficientLiquidityReason"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_enum$_InsufficientLiquidityReason_$7277",
                                "typeString": "enum IHyperdrive.InsufficientLiquidityReason"
                              }
                            ],
                            "expression": {
                              "id": 18014,
                              "name": "Errors",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 13522,
                              "src": "7333:6:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_Errors_$13522_$",
                                "typeString": "type(library Errors)"
                              }
                            },
                            "id": 18016,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "7340:31:77",
                            "memberName": "throwInsufficientLiquidityError",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 13521,
                            "src": "7333:38:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_enum$_InsufficientLiquidityReason_$7277_$returns$__$",
                              "typeString": "function (enum IHyperdrive.InsufficientLiquidityReason) pure"
                            }
                          },
                          "id": 18020,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7333:129:77",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18021,
                        "nodeType": "ExpressionStatement",
                        "src": "7333:129:77"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    18025
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 18025,
                      "mutability": "mutable",
                      "name": "_z",
                      "nameLocation": "7644:2:77",
                      "nodeType": "VariableDeclaration",
                      "scope": 18085,
                      "src": "7636:10:77",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 18024,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7636:7:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 18034,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 18031,
                        "name": "mu",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17973,
                        "src": "7668:2:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 18032,
                        "name": "c",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17971,
                        "src": "7672:1:77",
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
                        }
                      ],
                      "expression": {
                        "components": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 18028,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 18026,
                              "name": "k",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 17979,
                              "src": "7650:1:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "id": 18027,
                              "name": "y",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 17965,
                              "src": "7654:1:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "7650:5:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 18029,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "7649:7:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 18030,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7657:10:77",
                      "memberName": "mulDivDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 13554,
                      "src": "7649:18:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 18033,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7649:25:77",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7636:38:77"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 18037,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 18035,
                      "name": "_z",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18025,
                      "src": "7688:2:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "id": 18036,
                      "name": "ONE",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13529,
                      "src": "7694:3:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7688:9:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 18059,
                    "nodeType": "Block",
                    "src": "7828:119:77",
                    "statements": [
                      {
                        "expression": {
                          "id": 18057,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 18049,
                            "name": "_z",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18025,
                            "src": "7911:2:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "id": 18054,
                                    "name": "t",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 17969,
                                    "src": "7933:1:77",
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
                                    "id": 18052,
                                    "name": "ONE",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13529,
                                    "src": "7923:3:77",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "id": 18053,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "7927:5:77",
                                  "memberName": "divUp",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 13640,
                                  "src": "7923:9:77",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                  }
                                },
                                "id": 18055,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "7923:12:77",
                                "tryCall": false,
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
                                "id": 18050,
                                "name": "_z",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 18025,
                                "src": "7916:2:77",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 18051,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "7919:3:77",
                              "memberName": "pow",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 13699,
                              "src": "7916:6:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 18056,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "7916:20:77",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "7911:25:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 18058,
                        "nodeType": "ExpressionStatement",
                        "src": "7911:25:77"
                      }
                    ]
                  },
                  "id": 18060,
                  "nodeType": "IfStatement",
                  "src": "7684:263:77",
                  "trueBody": {
                    "id": 18048,
                    "nodeType": "Block",
                    "src": "7699:123:77",
                    "statements": [
                      {
                        "expression": {
                          "id": 18046,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 18038,
                            "name": "_z",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18025,
                            "src": "7784:2:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "id": 18043,
                                    "name": "t",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 17969,
                                    "src": "7808:1:77",
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
                                    "id": 18041,
                                    "name": "ONE",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13529,
                                    "src": "7796:3:77",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "id": 18042,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "7800:7:77",
                                  "memberName": "divDown",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 13590,
                                  "src": "7796:11:77",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                  }
                                },
                                "id": 18044,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "7796:14:77",
                                "tryCall": false,
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
                                "id": 18039,
                                "name": "_z",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 18025,
                                "src": "7789:2:77",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 18040,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "7792:3:77",
                              "memberName": "pow",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 13699,
                              "src": "7789:6:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 18045,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "7789:22:77",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "7784:27:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 18047,
                        "nodeType": "ExpressionStatement",
                        "src": "7784:27:77"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 18066,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 18061,
                      "name": "_z",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18025,
                      "src": "8024:2:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 18064,
                          "name": "mu",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17973,
                          "src": "8040:2:77",
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
                          "id": 18062,
                          "name": "_z",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18025,
                          "src": "8029:2:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 18063,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "8032:7:77",
                        "memberName": "divDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 13590,
                        "src": "8029:10:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 18065,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8029:14:77",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "8024:19:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 18067,
                  "nodeType": "ExpressionStatement",
                  "src": "8024:19:77"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 18070,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 18068,
                      "name": "_z",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18025,
                      "src": "8114:2:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "id": 18069,
                      "name": "ze",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17963,
                      "src": "8119:2:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "8114:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 18080,
                  "nodeType": "IfStatement",
                  "src": "8110:167:77",
                  "trueBody": {
                    "id": 18079,
                    "nodeType": "Block",
                    "src": "8123:154:77",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "expression": {
                                "expression": {
                                  "id": 18074,
                                  "name": "IHyperdrive",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 7411,
                                  "src": "8193:11:77",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7411_$",
                                    "typeString": "type(contract IHyperdrive)"
                                  }
                                },
                                "id": 18075,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "8205:27:77",
                                "memberName": "InsufficientLiquidityReason",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 7277,
                                "src": "8193:39:77",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_enum$_InsufficientLiquidityReason_$7277_$",
                                  "typeString": "type(enum IHyperdrive.InsufficientLiquidityReason)"
                                }
                              },
                              "id": 18076,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "8233:19:77",
                              "memberName": "ArithmeticUnderflow",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 7273,
                              "src": "8193:59:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_enum$_InsufficientLiquidityReason_$7277",
                                "typeString": "enum IHyperdrive.InsufficientLiquidityReason"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_enum$_InsufficientLiquidityReason_$7277",
                                "typeString": "enum IHyperdrive.InsufficientLiquidityReason"
                              }
                            ],
                            "expression": {
                              "id": 18071,
                              "name": "Errors",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 13522,
                              "src": "8137:6:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_Errors_$13522_$",
                                "typeString": "type(library Errors)"
                              }
                            },
                            "id": 18073,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "8144:31:77",
                            "memberName": "throwInsufficientLiquidityError",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 13521,
                            "src": "8137:38:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_enum$_InsufficientLiquidityReason_$7277_$returns$__$",
                              "typeString": "function (enum IHyperdrive.InsufficientLiquidityReason) pure"
                            }
                          },
                          "id": 18077,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8137:129:77",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18078,
                        "nodeType": "ExpressionStatement",
                        "src": "8137:129:77"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 18083,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 18081,
                      "name": "_z",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18025,
                      "src": "8374:2:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "id": 18082,
                      "name": "ze",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17963,
                      "src": "8379:2:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "8374:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 17977,
                  "id": 18084,
                  "nodeType": "Return",
                  "src": "8367:14:77"
                }
              ]
            },
            "documentation": {
              "id": 17961,
              "nodeType": "StructuredDocumentation",
              "src": "6047:518:77",
              "text": "@dev Calculates the amount of shares a user must provide the pool to\n      receive a specified amount of bonds. We underestimate the amount of\n      shares in.\n @param ze The effective share reserves.\n @param y The bond reserves.\n @param dy The amount of bonds paid to the trader.\n @param t The time elapsed since the term's start.\n @param c The vault share price.\n @param mu The initial vault share price.\n @return The amount of shares the user pays."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateSharesInGivenBondsOutDown",
            "nameLocation": "6579:34:77",
            "parameters": {
              "id": 17974,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17963,
                  "mutability": "mutable",
                  "name": "ze",
                  "nameLocation": "6631:2:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 18086,
                  "src": "6623:10:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17962,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6623:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17965,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "6651:1:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 18086,
                  "src": "6643:9:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17964,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6643:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17967,
                  "mutability": "mutable",
                  "name": "dy",
                  "nameLocation": "6670:2:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 18086,
                  "src": "6662:10:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17966,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6662:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17969,
                  "mutability": "mutable",
                  "name": "t",
                  "nameLocation": "6690:1:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 18086,
                  "src": "6682:9:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17968,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6682:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17971,
                  "mutability": "mutable",
                  "name": "c",
                  "nameLocation": "6709:1:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 18086,
                  "src": "6701:9:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17970,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6701:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17973,
                  "mutability": "mutable",
                  "name": "mu",
                  "nameLocation": "6728:2:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 18086,
                  "src": "6720:10:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17972,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6720:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6613:123:77"
            },
            "returnParameters": {
              "id": 17977,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17976,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 18086,
                  "src": "6760:7:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17975,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6760:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6759:9:77"
            },
            "scope": 18569,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 18133,
            "nodeType": "FunctionDefinition",
            "src": "9013:583:77",
            "nodes": [],
            "body": {
              "id": 18132,
              "nodeType": "Block",
              "src": "9219:377:77",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    18105
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 18105,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "9234:7:77",
                      "nodeType": "VariableDeclaration",
                      "scope": 18132,
                      "src": "9229:12:77",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 18104,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "9229:4:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 18106,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9229:12:77"
                },
                {
                  "expression": {
                    "id": 18118,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "components": [
                        {
                          "id": 18107,
                          "name": "result",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18102,
                          "src": "9252:6:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 18108,
                          "name": "success",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18105,
                          "src": "9260:7:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "id": 18109,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "9251:17:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_bool_$",
                        "typeString": "tuple(uint256,bool)"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 18111,
                          "name": "ze",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18089,
                          "src": "9323:2:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 18112,
                          "name": "y",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18091,
                          "src": "9339:1:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 18113,
                          "name": "dy",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18093,
                          "src": "9354:2:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 18114,
                          "name": "t",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18095,
                          "src": "9370:1:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 18115,
                          "name": "c",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18097,
                          "src": "9385:1:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 18116,
                          "name": "mu",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18099,
                          "src": "9400:2:77",
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
                          }
                        ],
                        "id": 18110,
                        "name": "calculateSharesOutGivenBondsInDownSafe",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18242,
                        "src": "9271:38:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_bool_$",
                          "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256,bool)"
                        }
                      },
                      "id": 18117,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9271:141:77",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_bool_$",
                        "typeString": "tuple(uint256,bool)"
                      }
                    },
                    "src": "9251:161:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 18119,
                  "nodeType": "ExpressionStatement",
                  "src": "9251:161:77"
                },
                {
                  "condition": {
                    "id": 18121,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "9426:8:77",
                    "subExpression": {
                      "id": 18120,
                      "name": "success",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18105,
                      "src": "9427:7:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 18131,
                  "nodeType": "IfStatement",
                  "src": "9422:168:77",
                  "trueBody": {
                    "id": 18130,
                    "nodeType": "Block",
                    "src": "9436:154:77",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "expression": {
                                "expression": {
                                  "id": 18125,
                                  "name": "IHyperdrive",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 7411,
                                  "src": "9506:11:77",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7411_$",
                                    "typeString": "type(contract IHyperdrive)"
                                  }
                                },
                                "id": 18126,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "9518:27:77",
                                "memberName": "InsufficientLiquidityReason",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 7277,
                                "src": "9506:39:77",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_enum$_InsufficientLiquidityReason_$7277_$",
                                  "typeString": "type(enum IHyperdrive.InsufficientLiquidityReason)"
                                }
                              },
                              "id": 18127,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "9546:19:77",
                              "memberName": "ArithmeticUnderflow",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 7273,
                              "src": "9506:59:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_enum$_InsufficientLiquidityReason_$7277",
                                "typeString": "enum IHyperdrive.InsufficientLiquidityReason"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_enum$_InsufficientLiquidityReason_$7277",
                                "typeString": "enum IHyperdrive.InsufficientLiquidityReason"
                              }
                            ],
                            "expression": {
                              "id": 18122,
                              "name": "Errors",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 13522,
                              "src": "9450:6:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_Errors_$13522_$",
                                "typeString": "type(library Errors)"
                              }
                            },
                            "id": 18124,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "9457:31:77",
                            "memberName": "throwInsufficientLiquidityError",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 13521,
                            "src": "9450:38:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_enum$_InsufficientLiquidityReason_$7277_$returns$__$",
                              "typeString": "function (enum IHyperdrive.InsufficientLiquidityReason) pure"
                            }
                          },
                          "id": 18128,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9450:129:77",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18129,
                        "nodeType": "ExpressionStatement",
                        "src": "9450:129:77"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 18087,
              "nodeType": "StructuredDocumentation",
              "src": "8394:614:77",
              "text": "@dev Calculates the amount of shares a user will receive from the pool\n      by providing a specified amount of bonds. This function reverts if\n      an integer overflow or underflow occurs. We underestimate the\n      amount of shares out.\n @param ze The effective share reserves.\n @param y The bond reserves.\n @param dy The amount of bonds paid to the pool.\n @param t The time elapsed since the term's start.\n @param c The vault share price.\n @param mu The initial vault share price.\n @return result The amount of shares the user receives."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateSharesOutGivenBondsInDown",
            "nameLocation": "9022:34:77",
            "parameters": {
              "id": 18100,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18089,
                  "mutability": "mutable",
                  "name": "ze",
                  "nameLocation": "9074:2:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 18133,
                  "src": "9066:10:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18088,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9066:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18091,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "9094:1:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 18133,
                  "src": "9086:9:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18090,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9086:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18093,
                  "mutability": "mutable",
                  "name": "dy",
                  "nameLocation": "9113:2:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 18133,
                  "src": "9105:10:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18092,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9105:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18095,
                  "mutability": "mutable",
                  "name": "t",
                  "nameLocation": "9133:1:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 18133,
                  "src": "9125:9:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18094,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9125:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18097,
                  "mutability": "mutable",
                  "name": "c",
                  "nameLocation": "9152:1:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 18133,
                  "src": "9144:9:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18096,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9144:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18099,
                  "mutability": "mutable",
                  "name": "mu",
                  "nameLocation": "9171:2:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 18133,
                  "src": "9163:10:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18098,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9163:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9056:123:77"
            },
            "returnParameters": {
              "id": 18103,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18102,
                  "mutability": "mutable",
                  "name": "result",
                  "nameLocation": "9211:6:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 18133,
                  "src": "9203:14:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18101,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9203:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9202:16:77"
            },
            "scope": 18569,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 18242,
            "nodeType": "FunctionDefinition",
            "src": "10285:1320:77",
            "nodes": [],
            "body": {
              "id": 18241,
              "nodeType": "Block",
              "src": "10509:1096:77",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    18154
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 18154,
                      "mutability": "mutable",
                      "name": "k",
                      "nameLocation": "10665:1:77",
                      "nodeType": "VariableDeclaration",
                      "scope": 18241,
                      "src": "10657:9:77",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 18153,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "10657:7:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 18162,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 18156,
                        "name": "ze",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18136,
                        "src": "10673:2:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 18157,
                        "name": "y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18138,
                        "src": "10677:1:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 18158,
                        "name": "t",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18142,
                        "src": "10680:1:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 18159,
                        "name": "c",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18144,
                        "src": "10683:1:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 18160,
                        "name": "mu",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18146,
                        "src": "10686:2:77",
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
                      "id": 18155,
                      "name": "kUp",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18534,
                      "src": "10669:3:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 18161,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10669:20:77",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10657:32:77"
                },
                {
                  "expression": {
                    "id": 18171,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 18163,
                      "name": "y",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18138,
                      "src": "10728:1:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 18169,
                          "name": "t",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18142,
                          "src": "10745:1:77",
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
                          "components": [
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 18166,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 18164,
                                "name": "y",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 18138,
                                "src": "10733:1:77",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "+",
                              "rightExpression": {
                                "id": 18165,
                                "name": "dy",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 18140,
                                "src": "10737:2:77",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "10733:6:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 18167,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "10732:8:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 18168,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "10741:3:77",
                        "memberName": "pow",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 13699,
                        "src": "10732:12:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 18170,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10732:15:77",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "10728:19:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 18172,
                  "nodeType": "ExpressionStatement",
                  "src": "10728:19:77"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 18175,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 18173,
                      "name": "k",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18154,
                      "src": "10825:1:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "id": 18174,
                      "name": "y",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18138,
                      "src": "10829:1:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "10825:5:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 18181,
                  "nodeType": "IfStatement",
                  "src": "10821:53:77",
                  "trueBody": {
                    "id": 18180,
                    "nodeType": "Block",
                    "src": "10832:42:77",
                    "statements": [
                      {
                        "expression": {
                          "components": [
                            {
                              "hexValue": "30",
                              "id": 18176,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "10854:1:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            },
                            {
                              "hexValue": "66616c7365",
                              "id": 18177,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "bool",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "10857:5:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "value": "false"
                            }
                          ],
                          "id": 18178,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "10853:10:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_rational_0_by_1_$_t_bool_$",
                            "typeString": "tuple(int_const 0,bool)"
                          }
                        },
                        "functionReturnParameters": 18152,
                        "id": 18179,
                        "nodeType": "Return",
                        "src": "10846:17:77"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    18183
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 18183,
                      "mutability": "mutable",
                      "name": "_z",
                      "nameLocation": "11037:2:77",
                      "nodeType": "VariableDeclaration",
                      "scope": 18241,
                      "src": "11029:10:77",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 18182,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "11029:7:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 18192,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 18189,
                        "name": "mu",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18146,
                        "src": "11059:2:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 18190,
                        "name": "c",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18144,
                        "src": "11063:1:77",
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
                        }
                      ],
                      "expression": {
                        "components": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 18186,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 18184,
                              "name": "k",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18154,
                              "src": "11043:1:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "id": 18185,
                              "name": "y",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18138,
                              "src": "11047:1:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "11043:5:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 18187,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "11042:7:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 18188,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "11050:8:77",
                      "memberName": "mulDivUp",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 13604,
                      "src": "11042:16:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 18191,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11042:23:77",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11029:36:77"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 18195,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 18193,
                      "name": "_z",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18183,
                      "src": "11079:2:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "id": 18194,
                      "name": "ONE",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13529,
                      "src": "11085:3:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "11079:9:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 18217,
                    "nodeType": "Block",
                    "src": "11215:123:77",
                    "statements": [
                      {
                        "expression": {
                          "id": 18215,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 18207,
                            "name": "_z",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18183,
                            "src": "11300:2:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "id": 18212,
                                    "name": "t",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 18142,
                                    "src": "11324:1:77",
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
                                    "id": 18210,
                                    "name": "ONE",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13529,
                                    "src": "11312:3:77",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "id": 18211,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "11316:7:77",
                                  "memberName": "divDown",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 13590,
                                  "src": "11312:11:77",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                  }
                                },
                                "id": 18213,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "11312:14:77",
                                "tryCall": false,
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
                                "id": 18208,
                                "name": "_z",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 18183,
                                "src": "11305:2:77",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 18209,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "11308:3:77",
                              "memberName": "pow",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 13699,
                              "src": "11305:6:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 18214,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "11305:22:77",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "11300:27:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 18216,
                        "nodeType": "ExpressionStatement",
                        "src": "11300:27:77"
                      }
                    ]
                  },
                  "id": 18218,
                  "nodeType": "IfStatement",
                  "src": "11075:263:77",
                  "trueBody": {
                    "id": 18206,
                    "nodeType": "Block",
                    "src": "11090:119:77",
                    "statements": [
                      {
                        "expression": {
                          "id": 18204,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 18196,
                            "name": "_z",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18183,
                            "src": "11173:2:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "id": 18201,
                                    "name": "t",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 18142,
                                    "src": "11195:1:77",
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
                                    "id": 18199,
                                    "name": "ONE",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13529,
                                    "src": "11185:3:77",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "id": 18200,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "11189:5:77",
                                  "memberName": "divUp",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 13640,
                                  "src": "11185:9:77",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                  }
                                },
                                "id": 18202,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "11185:12:77",
                                "tryCall": false,
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
                                "id": 18197,
                                "name": "_z",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 18183,
                                "src": "11178:2:77",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 18198,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "11181:3:77",
                              "memberName": "pow",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 13699,
                              "src": "11178:6:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 18203,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "11178:20:77",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "11173:25:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 18205,
                        "nodeType": "ExpressionStatement",
                        "src": "11173:25:77"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 18224,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 18219,
                      "name": "_z",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18183,
                      "src": "11415:2:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 18222,
                          "name": "mu",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18146,
                          "src": "11429:2:77",
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
                          "id": 18220,
                          "name": "_z",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18183,
                          "src": "11420:2:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 18221,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "11423:5:77",
                        "memberName": "divUp",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 13640,
                        "src": "11420:8:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 18223,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "11420:12:77",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "11415:17:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 18225,
                  "nodeType": "ExpressionStatement",
                  "src": "11415:17:77"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 18228,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 18226,
                      "name": "ze",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18136,
                      "src": "11525:2:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 18227,
                      "name": "_z",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18183,
                      "src": "11530:2:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "11525:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 18236,
                  "nodeType": "IfStatement",
                  "src": "11521:54:77",
                  "trueBody": {
                    "id": 18235,
                    "nodeType": "Block",
                    "src": "11534:41:77",
                    "statements": [
                      {
                        "expression": {
                          "id": 18233,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 18229,
                            "name": "result",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18149,
                            "src": "11548:6:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 18232,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 18230,
                              "name": "ze",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18136,
                              "src": "11557:2:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "id": 18231,
                              "name": "_z",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18183,
                              "src": "11562:2:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "11557:7:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "11548:16:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 18234,
                        "nodeType": "ExpressionStatement",
                        "src": "11548:16:77"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 18239,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 18237,
                      "name": "success",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18151,
                      "src": "11584:7:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "74727565",
                      "id": 18238,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "11594:4:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "11584:14:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 18240,
                  "nodeType": "ExpressionStatement",
                  "src": "11584:14:77"
                }
              ]
            },
            "documentation": {
              "id": 18134,
              "nodeType": "StructuredDocumentation",
              "src": "9602:678:77",
              "text": "@dev Calculates the amount of shares a user will receive from the pool\n      by providing a specified amount of bonds. This function returns a\n      success flag instead of reverting. We underestimate the amount of\n      shares out.\n @param ze The effective share reserves.\n @param y The bond reserves.\n @param dy The amount of bonds paid to the pool.\n @param t The time elapsed since the term's start.\n @param c The vault share price.\n @param mu The initial vault share price.\n @return result The amount of shares the user receives\n @return success A flag indicating if the calculation succeeded."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateSharesOutGivenBondsInDownSafe",
            "nameLocation": "10294:38:77",
            "parameters": {
              "id": 18147,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18136,
                  "mutability": "mutable",
                  "name": "ze",
                  "nameLocation": "10350:2:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 18242,
                  "src": "10342:10:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18135,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10342:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18138,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "10370:1:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 18242,
                  "src": "10362:9:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18137,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10362:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18140,
                  "mutability": "mutable",
                  "name": "dy",
                  "nameLocation": "10389:2:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 18242,
                  "src": "10381:10:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18139,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10381:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18142,
                  "mutability": "mutable",
                  "name": "t",
                  "nameLocation": "10409:1:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 18242,
                  "src": "10401:9:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18141,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10401:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18144,
                  "mutability": "mutable",
                  "name": "c",
                  "nameLocation": "10428:1:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 18242,
                  "src": "10420:9:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18143,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10420:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18146,
                  "mutability": "mutable",
                  "name": "mu",
                  "nameLocation": "10447:2:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 18242,
                  "src": "10439:10:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18145,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10439:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10332:123:77"
            },
            "returnParameters": {
              "id": 18152,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18149,
                  "mutability": "mutable",
                  "name": "result",
                  "nameLocation": "10487:6:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 18242,
                  "src": "10479:14:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18148,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10479:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18151,
                  "mutability": "mutable",
                  "name": "success",
                  "nameLocation": "10500:7:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 18242,
                  "src": "10495:12:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 18150,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "10495:4:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10478:30:77"
            },
            "scope": 18569,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 18318,
            "nodeType": "FunctionDefinition",
            "src": "12036:1218:77",
            "nodes": [],
            "body": {
              "id": 18317,
              "nodeType": "Block",
              "src": "12204:1050:77",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    18259
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 18259,
                      "mutability": "mutable",
                      "name": "k",
                      "nameLocation": "12718:1:77",
                      "nodeType": "VariableDeclaration",
                      "scope": 18317,
                      "src": "12710:9:77",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 18258,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "12710:7:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 18267,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 18261,
                        "name": "ze",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18245,
                        "src": "12728:2:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 18262,
                        "name": "y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18247,
                        "src": "12732:1:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 18263,
                        "name": "t",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18249,
                        "src": "12735:1:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 18264,
                        "name": "c",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18251,
                        "src": "12738:1:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 18265,
                        "name": "mu",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18253,
                        "src": "12741:2:77",
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
                      "id": 18260,
                      "name": "kDown",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18568,
                      "src": "12722:5:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 18266,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12722:22:77",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "12710:34:77"
                },
                {
                  "assignments": [
                    18269
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 18269,
                      "mutability": "mutable",
                      "name": "optimalZe",
                      "nameLocation": "12762:9:77",
                      "nodeType": "VariableDeclaration",
                      "scope": 18317,
                      "src": "12754:17:77",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 18268,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "12754:7:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 18279,
                  "initialValue": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 18277,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "arguments": [
                            {
                              "id": 18274,
                              "name": "mu",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18253,
                              "src": "12792:2:77",
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
                              "id": 18272,
                              "name": "c",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18251,
                              "src": "12784:1:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 18273,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "12786:5:77",
                            "memberName": "divUp",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 13640,
                            "src": "12784:7:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 18275,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "12784:11:77",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "id": 18276,
                          "name": "ONE",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13529,
                          "src": "12798:3:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "12784:17:77",
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
                        "id": 18270,
                        "name": "k",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18259,
                        "src": "12774:1:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 18271,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "12776:7:77",
                      "memberName": "divDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 13590,
                      "src": "12774:9:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 18278,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12774:28:77",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "12754:48:77"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 18282,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 18280,
                      "name": "optimalZe",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18269,
                      "src": "12816:9:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "id": 18281,
                      "name": "ONE",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13529,
                      "src": "12829:3:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "12816:16:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 18304,
                    "nodeType": "Block",
                    "src": "12978:134:77",
                    "statements": [
                      {
                        "expression": {
                          "id": 18302,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 18294,
                            "name": "optimalZe",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18269,
                            "src": "13062:9:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "id": 18299,
                                    "name": "t",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 18249,
                                    "src": "13098:1:77",
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
                                    "id": 18297,
                                    "name": "ONE",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13529,
                                    "src": "13088:3:77",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "id": 18298,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "13092:5:77",
                                  "memberName": "divUp",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 13640,
                                  "src": "13088:9:77",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                  }
                                },
                                "id": 18300,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "13088:12:77",
                                "tryCall": false,
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
                                "id": 18295,
                                "name": "optimalZe",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 18269,
                                "src": "13074:9:77",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 18296,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "13084:3:77",
                              "memberName": "pow",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 13699,
                              "src": "13074:13:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 18301,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "13074:27:77",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "13062:39:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 18303,
                        "nodeType": "ExpressionStatement",
                        "src": "13062:39:77"
                      }
                    ]
                  },
                  "id": 18305,
                  "nodeType": "IfStatement",
                  "src": "12812:300:77",
                  "trueBody": {
                    "id": 18293,
                    "nodeType": "Block",
                    "src": "12834:138:77",
                    "statements": [
                      {
                        "expression": {
                          "id": 18291,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 18283,
                            "name": "optimalZe",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18269,
                            "src": "12920:9:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "id": 18288,
                                    "name": "t",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 18249,
                                    "src": "12958:1:77",
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
                                    "id": 18286,
                                    "name": "ONE",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13529,
                                    "src": "12946:3:77",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "id": 18287,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "12950:7:77",
                                  "memberName": "divDown",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 13590,
                                  "src": "12946:11:77",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                  }
                                },
                                "id": 18289,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "12946:14:77",
                                "tryCall": false,
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
                                "id": 18284,
                                "name": "optimalZe",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 18269,
                                "src": "12932:9:77",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 18285,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "12942:3:77",
                              "memberName": "pow",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 13699,
                              "src": "12932:13:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 18290,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "12932:29:77",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "12920:41:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 18292,
                        "nodeType": "ExpressionStatement",
                        "src": "12920:41:77"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 18311,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 18306,
                      "name": "optimalZe",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18269,
                      "src": "13121:9:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 18309,
                          "name": "mu",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18253,
                          "src": "13151:2:77",
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
                          "id": 18307,
                          "name": "optimalZe",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18269,
                          "src": "13133:9:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 18308,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "13143:7:77",
                        "memberName": "divDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 13590,
                        "src": "13133:17:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 18310,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "13133:21:77",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "13121:33:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 18312,
                  "nodeType": "ExpressionStatement",
                  "src": "13121:33:77"
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 18315,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 18313,
                      "name": "optimalZe",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18269,
                      "src": "13233:9:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "id": 18314,
                      "name": "ze",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18245,
                      "src": "13245:2:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "13233:14:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 18257,
                  "id": 18316,
                  "nodeType": "Return",
                  "src": "13226:21:77"
                }
              ]
            },
            "documentation": {
              "id": 18243,
              "nodeType": "StructuredDocumentation",
              "src": "11611:420:77",
              "text": "@dev Calculates the share payment required to purchase the maximum\n      amount of bonds from the pool.\n @param ze The effective share reserves.\n @param y The bond reserves.\n @param t The time elapsed since the term's start.\n @param c The vault share price.\n @param mu The initial vault share price.\n @return The share payment to purchase the maximum amount of bonds."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateMaxBuySharesIn",
            "nameLocation": "12045:23:77",
            "parameters": {
              "id": 18254,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18245,
                  "mutability": "mutable",
                  "name": "ze",
                  "nameLocation": "12086:2:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 18318,
                  "src": "12078:10:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18244,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12078:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18247,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "12106:1:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 18318,
                  "src": "12098:9:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18246,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12098:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18249,
                  "mutability": "mutable",
                  "name": "t",
                  "nameLocation": "12125:1:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 18318,
                  "src": "12117:9:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18248,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12117:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18251,
                  "mutability": "mutable",
                  "name": "c",
                  "nameLocation": "12144:1:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 18318,
                  "src": "12136:9:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18250,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12136:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18253,
                  "mutability": "mutable",
                  "name": "mu",
                  "nameLocation": "12163:2:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 18318,
                  "src": "12155:10:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18252,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12155:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12068:103:77"
            },
            "returnParameters": {
              "id": 18257,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18256,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 18318,
                  "src": "12195:7:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18255,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12195:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12194:9:77"
            },
            "scope": 18569,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 18387,
            "nodeType": "FunctionDefinition",
            "src": "13742:861:77",
            "nodes": [],
            "body": {
              "id": 18386,
              "nodeType": "Block",
              "src": "13910:693:77",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    18335
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 18335,
                      "mutability": "mutable",
                      "name": "k",
                      "nameLocation": "14124:1:77",
                      "nodeType": "VariableDeclaration",
                      "scope": 18386,
                      "src": "14116:9:77",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 18334,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "14116:7:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 18343,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 18337,
                        "name": "ze",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18321,
                        "src": "14132:2:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 18338,
                        "name": "y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18323,
                        "src": "14136:1:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 18339,
                        "name": "t",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18325,
                        "src": "14139:1:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 18340,
                        "name": "c",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18327,
                        "src": "14142:1:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 18341,
                        "name": "mu",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18329,
                        "src": "14145:2:77",
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
                      "id": 18336,
                      "name": "kUp",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18534,
                      "src": "14128:3:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 18342,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "14128:20:77",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "14116:32:77"
                },
                {
                  "assignments": [
                    18345
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 18345,
                      "mutability": "mutable",
                      "name": "optimalY",
                      "nameLocation": "14166:8:77",
                      "nodeType": "VariableDeclaration",
                      "scope": 18386,
                      "src": "14158:16:77",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 18344,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "14158:7:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 18355,
                  "initialValue": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 18353,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "arguments": [
                            {
                              "id": 18350,
                              "name": "mu",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18329,
                              "src": "14195:2:77",
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
                              "id": 18348,
                              "name": "c",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18327,
                              "src": "14185:1:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 18349,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "14187:7:77",
                            "memberName": "divDown",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 13590,
                            "src": "14185:9:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 18351,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "14185:13:77",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "id": 18352,
                          "name": "ONE",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13529,
                          "src": "14201:3:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "14185:19:77",
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
                        "id": 18346,
                        "name": "k",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18335,
                        "src": "14177:1:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 18347,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "14179:5:77",
                      "memberName": "divUp",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 13640,
                      "src": "14177:7:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 18354,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "14177:28:77",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "14158:47:77"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 18358,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 18356,
                      "name": "optimalY",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18345,
                      "src": "14219:8:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "id": 18357,
                      "name": "ONE",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13529,
                      "src": "14231:3:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "14219:15:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 18380,
                    "nodeType": "Block",
                    "src": "14373:135:77",
                    "statements": [
                      {
                        "expression": {
                          "id": 18378,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 18370,
                            "name": "optimalY",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18345,
                            "src": "14458:8:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "id": 18375,
                                    "name": "t",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 18325,
                                    "src": "14494:1:77",
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
                                    "id": 18373,
                                    "name": "ONE",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13529,
                                    "src": "14482:3:77",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "id": 18374,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "14486:7:77",
                                  "memberName": "divDown",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 13590,
                                  "src": "14482:11:77",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                  }
                                },
                                "id": 18376,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "14482:14:77",
                                "tryCall": false,
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
                                "id": 18371,
                                "name": "optimalY",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 18345,
                                "src": "14469:8:77",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 18372,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "14478:3:77",
                              "memberName": "pow",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 13699,
                              "src": "14469:12:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 18377,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "14469:28:77",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "14458:39:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 18379,
                        "nodeType": "ExpressionStatement",
                        "src": "14458:39:77"
                      }
                    ]
                  },
                  "id": 18381,
                  "nodeType": "IfStatement",
                  "src": "14215:293:77",
                  "trueBody": {
                    "id": 18369,
                    "nodeType": "Block",
                    "src": "14236:131:77",
                    "statements": [
                      {
                        "expression": {
                          "id": 18367,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 18359,
                            "name": "optimalY",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18345,
                            "src": "14319:8:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "id": 18364,
                                    "name": "t",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 18325,
                                    "src": "14353:1:77",
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
                                    "id": 18362,
                                    "name": "ONE",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13529,
                                    "src": "14343:3:77",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "id": 18363,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "14347:5:77",
                                  "memberName": "divUp",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 13640,
                                  "src": "14343:9:77",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                  }
                                },
                                "id": 18365,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "14343:12:77",
                                "tryCall": false,
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
                                "id": 18360,
                                "name": "optimalY",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 18345,
                                "src": "14330:8:77",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 18361,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "14339:3:77",
                              "memberName": "pow",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 13699,
                              "src": "14330:12:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 18366,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "14330:26:77",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "14319:37:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 18368,
                        "nodeType": "ExpressionStatement",
                        "src": "14319:37:77"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 18384,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 18382,
                      "name": "y",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18323,
                      "src": "14584:1:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "id": 18383,
                      "name": "optimalY",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18345,
                      "src": "14588:8:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "14584:12:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 18333,
                  "id": 18385,
                  "nodeType": "Return",
                  "src": "14577:19:77"
                }
              ]
            },
            "documentation": {
              "id": 18319,
              "nodeType": "StructuredDocumentation",
              "src": "13260:477:77",
              "text": "@dev Calculates the maximum amount of bonds that can be purchased with\n      the specified reserves. We round so that the max buy amount is\n      underestimated.\n @param ze The effective share reserves.\n @param y The bond reserves.\n @param t The time elapsed since the term's start.\n @param c The vault share price.\n @param mu The initial vault share price.\n @return The maximum amount of bonds that can be purchased."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateMaxBuyBondsOut",
            "nameLocation": "13751:23:77",
            "parameters": {
              "id": 18330,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18321,
                  "mutability": "mutable",
                  "name": "ze",
                  "nameLocation": "13792:2:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 18387,
                  "src": "13784:10:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18320,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13784:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18323,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "13812:1:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 18387,
                  "src": "13804:9:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18322,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13804:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18325,
                  "mutability": "mutable",
                  "name": "t",
                  "nameLocation": "13831:1:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 18387,
                  "src": "13823:9:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18324,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13823:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18327,
                  "mutability": "mutable",
                  "name": "c",
                  "nameLocation": "13850:1:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 18387,
                  "src": "13842:9:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18326,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13842:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18329,
                  "mutability": "mutable",
                  "name": "mu",
                  "nameLocation": "13869:2:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 18387,
                  "src": "13861:10:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18328,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13861:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13774:103:77"
            },
            "returnParameters": {
              "id": 18333,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18332,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 18387,
                  "src": "13901:7:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18331,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13901:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13900:9:77"
            },
            "scope": 18569,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 18500,
            "nodeType": "FunctionDefinition",
            "src": "15242:1794:77",
            "nodes": [],
            "body": {
              "id": 18499,
              "nodeType": "Block",
              "src": "15462:1574:77",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 18411,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 18409,
                      "name": "zeta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18392,
                      "src": "15746:4:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 18410,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "15753:1:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "15746:8:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 18423,
                  "nodeType": "IfStatement",
                  "src": "15742:67:77",
                  "trueBody": {
                    "id": 18422,
                    "nodeType": "Block",
                    "src": "15756:53:77",
                    "statements": [
                      {
                        "expression": {
                          "id": 18420,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 18412,
                            "name": "zMin",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18396,
                            "src": "15770:4:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 18419,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 18413,
                              "name": "zMin",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18396,
                              "src": "15777:4:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "+",
                            "rightExpression": {
                              "arguments": [
                                {
                                  "id": 18417,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "UnaryOperation",
                                  "operator": "-",
                                  "prefix": true,
                                  "src": "15792:5:77",
                                  "subExpression": {
                                    "id": 18416,
                                    "name": "zeta",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 18392,
                                    "src": "15793:4:77",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                ],
                                "id": 18415,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "15784:7:77",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_uint256_$",
                                  "typeString": "type(uint256)"
                                },
                                "typeName": {
                                  "id": 18414,
                                  "name": "uint256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "15784:7:77",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 18418,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "15784:14:77",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "15777:21:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "15770:28:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 18421,
                        "nodeType": "ExpressionStatement",
                        "src": "15770:28:77"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    18425
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 18425,
                      "mutability": "mutable",
                      "name": "ze",
                      "nameLocation": "16312:2:77",
                      "nodeType": "VariableDeclaration",
                      "scope": 18499,
                      "src": "16304:10:77",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 18424,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "16304:7:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 18431,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 18428,
                        "name": "z",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18390,
                        "src": "16364:1:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 18429,
                        "name": "zeta",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18392,
                        "src": "16367:4:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
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
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "expression": {
                        "id": 18426,
                        "name": "HyperdriveMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15024,
                        "src": "16317:14:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$15024_$",
                          "typeString": "type(library HyperdriveMath)"
                        }
                      },
                      "id": 18427,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "16332:31:77",
                      "memberName": "calculateEffectiveShareReserves",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 14502,
                      "src": "16317:46:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_int256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,int256) pure returns (uint256)"
                      }
                    },
                    "id": 18430,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "16317:55:77",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "16304:68:77"
                },
                {
                  "assignments": [
                    18433
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 18433,
                      "mutability": "mutable",
                      "name": "k",
                      "nameLocation": "16390:1:77",
                      "nodeType": "VariableDeclaration",
                      "scope": 18499,
                      "src": "16382:9:77",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 18432,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "16382:7:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 18441,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 18435,
                        "name": "ze",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18425,
                        "src": "16400:2:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 18436,
                        "name": "y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18394,
                        "src": "16404:1:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 18437,
                        "name": "t",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18398,
                        "src": "16407:1:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 18438,
                        "name": "c",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18400,
                        "src": "16410:1:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 18439,
                        "name": "mu",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18402,
                        "src": "16413:2:77",
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
                      "id": 18434,
                      "name": "kDown",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18568,
                      "src": "16394:5:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 18440,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "16394:22:77",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "16382:34:77"
                },
                {
                  "assignments": [
                    18443
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 18443,
                      "mutability": "mutable",
                      "name": "optimalY",
                      "nameLocation": "16434:8:77",
                      "nodeType": "VariableDeclaration",
                      "scope": 18499,
                      "src": "16426:16:77",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 18442,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "16426:7:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 18457,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 18456,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 18444,
                      "name": "k",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18433,
                      "src": "16445:1:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 18452,
                              "name": "t",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18398,
                              "src": "16479:1:77",
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
                                  "id": 18449,
                                  "name": "zMin",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 18396,
                                  "src": "16469:4:77",
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
                                  "id": 18447,
                                  "name": "mu",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 18402,
                                  "src": "16460:2:77",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 18448,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "16463:5:77",
                                "memberName": "mulUp",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 13622,
                                "src": "16460:8:77",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                  "typeString": "function (uint256,uint256) pure returns (uint256)"
                                }
                              },
                              "id": 18450,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "16460:14:77",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 18451,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "16475:3:77",
                            "memberName": "pow",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 13699,
                            "src": "16460:18:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 18453,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "16460:21:77",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 18454,
                          "name": "mu",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18402,
                          "src": "16483:2:77",
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
                          }
                        ],
                        "expression": {
                          "id": 18445,
                          "name": "c",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18400,
                          "src": "16449:1:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 18446,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "16451:8:77",
                        "memberName": "mulDivUp",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 13604,
                        "src": "16449:10:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 18455,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "16449:37:77",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "16445:41:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "16426:60:77"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 18460,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 18458,
                      "name": "optimalY",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18443,
                      "src": "16500:8:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "id": 18459,
                      "name": "ONE",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13529,
                      "src": "16512:3:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "16500:15:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 18482,
                    "nodeType": "Block",
                    "src": "16659:132:77",
                    "statements": [
                      {
                        "expression": {
                          "id": 18480,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 18472,
                            "name": "optimalY",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18443,
                            "src": "16743:8:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "id": 18477,
                                    "name": "t",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 18398,
                                    "src": "16777:1:77",
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
                                    "id": 18475,
                                    "name": "ONE",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13529,
                                    "src": "16767:3:77",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "id": 18476,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "16771:5:77",
                                  "memberName": "divUp",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 13640,
                                  "src": "16767:9:77",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                  }
                                },
                                "id": 18478,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "16767:12:77",
                                "tryCall": false,
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
                                "id": 18473,
                                "name": "optimalY",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 18443,
                                "src": "16754:8:77",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 18474,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "16763:3:77",
                              "memberName": "pow",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 13699,
                              "src": "16754:12:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 18479,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "16754:26:77",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "16743:37:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 18481,
                        "nodeType": "ExpressionStatement",
                        "src": "16743:37:77"
                      }
                    ]
                  },
                  "id": 18483,
                  "nodeType": "IfStatement",
                  "src": "16496:295:77",
                  "trueBody": {
                    "id": 18471,
                    "nodeType": "Block",
                    "src": "16517:136:77",
                    "statements": [
                      {
                        "expression": {
                          "id": 18469,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 18461,
                            "name": "optimalY",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18443,
                            "src": "16603:8:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "id": 18466,
                                    "name": "t",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 18398,
                                    "src": "16639:1:77",
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
                                    "id": 18464,
                                    "name": "ONE",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13529,
                                    "src": "16627:3:77",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "id": 18465,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "16631:7:77",
                                  "memberName": "divDown",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 13590,
                                  "src": "16627:11:77",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                  }
                                },
                                "id": 18467,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "16627:14:77",
                                "tryCall": false,
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
                                "id": 18462,
                                "name": "optimalY",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 18443,
                                "src": "16614:8:77",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 18463,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "16623:3:77",
                              "memberName": "pow",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 13699,
                              "src": "16614:12:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 18468,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "16614:28:77",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "16603:39:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 18470,
                        "nodeType": "ExpressionStatement",
                        "src": "16603:39:77"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 18486,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 18484,
                      "name": "optimalY",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18443,
                      "src": "16937:8:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "id": 18485,
                      "name": "y",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18394,
                      "src": "16948:1:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "16937:12:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 18492,
                  "nodeType": "IfStatement",
                  "src": "16933:60:77",
                  "trueBody": {
                    "id": 18491,
                    "nodeType": "Block",
                    "src": "16951:42:77",
                    "statements": [
                      {
                        "expression": {
                          "components": [
                            {
                              "hexValue": "30",
                              "id": 18487,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "16973:1:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            },
                            {
                              "hexValue": "66616c7365",
                              "id": 18488,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "bool",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "16976:5:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "value": "false"
                            }
                          ],
                          "id": 18489,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "16972:10:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_rational_0_by_1_$_t_bool_$",
                            "typeString": "tuple(int_const 0,bool)"
                          }
                        },
                        "functionReturnParameters": 18408,
                        "id": 18490,
                        "nodeType": "Return",
                        "src": "16965:17:77"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "components": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 18495,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 18493,
                          "name": "optimalY",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18443,
                          "src": "17010:8:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "id": 18494,
                          "name": "y",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18394,
                          "src": "17021:1:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "17010:12:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "74727565",
                        "id": 18496,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "17024:4:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      }
                    ],
                    "id": 18497,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "17009:20:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_bool_$",
                      "typeString": "tuple(uint256,bool)"
                    }
                  },
                  "functionReturnParameters": 18408,
                  "id": 18498,
                  "nodeType": "Return",
                  "src": "17002:27:77"
                }
              ]
            },
            "documentation": {
              "id": 18388,
              "nodeType": "StructuredDocumentation",
              "src": "14609:628:77",
              "text": "@dev Calculates the maximum amount of bonds that can be sold with the\n      specified reserves. We round so that the max sell amount is\n      underestimated.\n @param z The share reserves.\n @param zeta The share adjustment.\n @param y The bond reserves.\n @param zMin The minimum share reserves.\n @param t The time elapsed since the term's start.\n @param c The vault share price.\n @param mu The initial vault share price.\n @return The maximum amount of bonds that can be sold.\n @return A flag indicating whether or not the calculation was successful."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateMaxSellBondsInSafe",
            "nameLocation": "15251:27:77",
            "parameters": {
              "id": 18403,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18390,
                  "mutability": "mutable",
                  "name": "z",
                  "nameLocation": "15296:1:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 18500,
                  "src": "15288:9:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18389,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15288:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18392,
                  "mutability": "mutable",
                  "name": "zeta",
                  "nameLocation": "15314:4:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 18500,
                  "src": "15307:11:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 18391,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15307:6:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18394,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "15336:1:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 18500,
                  "src": "15328:9:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18393,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15328:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18396,
                  "mutability": "mutable",
                  "name": "zMin",
                  "nameLocation": "15355:4:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 18500,
                  "src": "15347:12:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18395,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15347:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18398,
                  "mutability": "mutable",
                  "name": "t",
                  "nameLocation": "15377:1:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 18500,
                  "src": "15369:9:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18397,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15369:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18400,
                  "mutability": "mutable",
                  "name": "c",
                  "nameLocation": "15396:1:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 18500,
                  "src": "15388:9:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18399,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15388:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18402,
                  "mutability": "mutable",
                  "name": "mu",
                  "nameLocation": "15415:2:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 18500,
                  "src": "15407:10:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18401,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15407:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15278:145:77"
            },
            "returnParameters": {
              "id": 18408,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18405,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 18500,
                  "src": "15447:7:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18404,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15447:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18407,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 18500,
                  "src": "15456:4:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 18406,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "15456:4:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15446:15:77"
            },
            "scope": 18569,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 18534,
            "nodeType": "FunctionDefinition",
            "src": "17543:343:77",
            "nodes": [],
            "body": {
              "id": 18533,
              "nodeType": "Block",
              "src": "17691:195:77",
              "nodes": [],
              "statements": [
                {
                  "documentation": "k = (c / µ) * (µ * ze)^(1 - t) + y^(1 - t)",
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 18531,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 18523,
                              "name": "t",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18507,
                              "src": "17861:1:77",
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
                                  "id": 18520,
                                  "name": "ze",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 18503,
                                  "src": "17853:2:77",
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
                                  "id": 18518,
                                  "name": "mu",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 18511,
                                  "src": "17844:2:77",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 18519,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "17847:5:77",
                                "memberName": "mulUp",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 13622,
                                "src": "17844:8:77",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                  "typeString": "function (uint256,uint256) pure returns (uint256)"
                                }
                              },
                              "id": 18521,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "17844:12:77",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 18522,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "17857:3:77",
                            "memberName": "pow",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 13699,
                            "src": "17844:16:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 18524,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "17844:19:77",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 18525,
                          "name": "mu",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18511,
                          "src": "17865:2:77",
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
                          }
                        ],
                        "expression": {
                          "id": 18516,
                          "name": "c",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18509,
                          "src": "17833:1:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 18517,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "17835:8:77",
                        "memberName": "mulDivUp",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 13604,
                        "src": "17833:10:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 18526,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "17833:35:77",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "arguments": [
                        {
                          "id": 18529,
                          "name": "t",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18507,
                          "src": "17877:1:77",
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
                          "id": 18527,
                          "name": "y",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18505,
                          "src": "17871:1:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 18528,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "17873:3:77",
                        "memberName": "pow",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 13699,
                        "src": "17871:5:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 18530,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "17871:8:77",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "17833:46:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 18515,
                  "id": 18532,
                  "nodeType": "Return",
                  "src": "17826:53:77"
                }
              ]
            },
            "documentation": {
              "id": 18501,
              "nodeType": "StructuredDocumentation",
              "src": "17042:496:77",
              "text": "@dev Calculates the YieldSpace invariant k. This invariant is given by:\n      k = (c / µ) * (µ * ze)^(1 - t) + y^(1 - t)\n      This variant of the calculation overestimates the result.\n @param ze The effective share reserves.\n @param y The bond reserves.\n @param t The time elapsed since the term's start.\n @param c The vault share price.\n @param mu The initial vault share price.\n @return The YieldSpace invariant, k."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "kUp",
            "nameLocation": "17552:3:77",
            "parameters": {
              "id": 18512,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18503,
                  "mutability": "mutable",
                  "name": "ze",
                  "nameLocation": "17573:2:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 18534,
                  "src": "17565:10:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18502,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17565:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18505,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "17593:1:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 18534,
                  "src": "17585:9:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18504,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17585:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18507,
                  "mutability": "mutable",
                  "name": "t",
                  "nameLocation": "17612:1:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 18534,
                  "src": "17604:9:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18506,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17604:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18509,
                  "mutability": "mutable",
                  "name": "c",
                  "nameLocation": "17631:1:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 18534,
                  "src": "17623:9:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18508,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17623:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18511,
                  "mutability": "mutable",
                  "name": "mu",
                  "nameLocation": "17650:2:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 18534,
                  "src": "17642:10:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18510,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17642:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17555:103:77"
            },
            "returnParameters": {
              "id": 18515,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18514,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 18534,
                  "src": "17682:7:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18513,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17682:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17681:9:77"
            },
            "scope": 18569,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 18568,
            "nodeType": "FunctionDefinition",
            "src": "18399:352:77",
            "nodes": [],
            "body": {
              "id": 18567,
              "nodeType": "Block",
              "src": "18549:202:77",
              "nodes": [],
              "statements": [
                {
                  "documentation": "k = (c / µ) * (µ * ze)^(1 - t) + y^(1 - t)",
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 18565,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 18557,
                              "name": "t",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18541,
                              "src": "18726:1:77",
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
                                  "id": 18554,
                                  "name": "ze",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 18537,
                                  "src": "18718:2:77",
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
                                  "id": 18552,
                                  "name": "mu",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 18545,
                                  "src": "18707:2:77",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 18553,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "18710:7:77",
                                "memberName": "mulDown",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 13572,
                                "src": "18707:10:77",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                  "typeString": "function (uint256,uint256) pure returns (uint256)"
                                }
                              },
                              "id": 18555,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "18707:14:77",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 18556,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "18722:3:77",
                            "memberName": "pow",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 13699,
                            "src": "18707:18:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 18558,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "18707:21:77",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 18559,
                          "name": "mu",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18545,
                          "src": "18730:2:77",
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
                          }
                        ],
                        "expression": {
                          "id": 18550,
                          "name": "c",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18543,
                          "src": "18694:1:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 18551,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "18696:10:77",
                        "memberName": "mulDivDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 13554,
                        "src": "18694:12:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 18560,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "18694:39:77",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "arguments": [
                        {
                          "id": 18563,
                          "name": "t",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18541,
                          "src": "18742:1:77",
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
                          "id": 18561,
                          "name": "y",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18539,
                          "src": "18736:1:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 18562,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "18738:3:77",
                        "memberName": "pow",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 13699,
                        "src": "18736:5:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 18564,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "18736:8:77",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "18694:50:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 18549,
                  "id": 18566,
                  "nodeType": "Return",
                  "src": "18687:57:77"
                }
              ]
            },
            "documentation": {
              "id": 18535,
              "nodeType": "StructuredDocumentation",
              "src": "17892:502:77",
              "text": "@dev Calculates the YieldSpace invariant k. This invariant is given by:\n      k = (c / µ) * (µ * ze)^(1 - t) + y^(1 - t)\n      This variant of the calculation underestimates the result.\n @param ze The effective share reserves.\n @param y The bond reserves.\n @param t The time elapsed since the term's start.\n @param c The vault share price.\n @param mu The initial vault share price.\n @return The modified YieldSpace Constant."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "kDown",
            "nameLocation": "18408:5:77",
            "parameters": {
              "id": 18546,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18537,
                  "mutability": "mutable",
                  "name": "ze",
                  "nameLocation": "18431:2:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 18568,
                  "src": "18423:10:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18536,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "18423:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18539,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "18451:1:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 18568,
                  "src": "18443:9:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18538,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "18443:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18541,
                  "mutability": "mutable",
                  "name": "t",
                  "nameLocation": "18470:1:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 18568,
                  "src": "18462:9:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18540,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "18462:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18543,
                  "mutability": "mutable",
                  "name": "c",
                  "nameLocation": "18489:1:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 18568,
                  "src": "18481:9:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18542,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "18481:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18545,
                  "mutability": "mutable",
                  "name": "mu",
                  "nameLocation": "18508:2:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 18568,
                  "src": "18500:10:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18544,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "18500:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18413:103:77"
            },
            "returnParameters": {
              "id": 18549,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18548,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 18568,
                  "src": "18540:7:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18547,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "18540:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18539:9:77"
            },
            "scope": 18569,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "YieldSpaceMath",
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": {
          "id": 17720,
          "nodeType": "StructuredDocumentation",
          "src": "281:1185:77",
          "text": "@author DELV\n @title YieldSpaceMath\n @notice Math for the YieldSpace pricing model.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance.\n @dev It is advised for developers to attain the pre-requisite knowledge\n      of how this implementation works on the mathematical level. This\n      excerpt attempts to document this pre-requisite knowledge explaining\n      the underpinning mathematical concepts in an understandable manner and\n      relating it directly to the code implementation.\n      This implementation is based on a paper called \"YieldSpace with Yield\n      Bearing Vaults\" or more casually \"Modified YieldSpace\". It can be\n      found at the following link.\n      https://hackmd.io/lRZ4mgdrRgOpxZQXqKYlFw?view\n      That paper builds on the original YieldSpace paper, \"YieldSpace:\n      An Automated Liquidity Provider for Fixed Yield Tokens\". It can be\n      found at the following link:\n      https://yieldprotocol.com/YieldSpace.pdf"
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          18569
        ],
        "name": "YieldSpaceMath",
        "nameLocation": "1474:14:77",
        "scope": 18570,
        "usedErrors": [],
        "usedEvents": []
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 77
} as const;
