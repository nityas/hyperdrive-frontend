export const MockAssetId = {
    "abi": [
        {
            "inputs": [],
            "name": "InvalidTimestamp",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_id",
                    "type": "uint256"
                }
            ],
            "name": "assetIdToName",
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
                    "name": "_id",
                    "type": "uint256"
                }
            ],
            "name": "assetIdToSymbol",
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
                    "name": "_id",
                    "type": "uint256"
                }
            ],
            "name": "decodeAssetId",
            "outputs": [
                {
                    "internalType": "enum AssetId.AssetIdPrefix",
                    "name": "",
                    "type": "uint8"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "enum AssetId.AssetIdPrefix",
                    "name": "_prefix",
                    "type": "uint8"
                },
                {
                    "internalType": "uint256",
                    "name": "_timestamp",
                    "type": "uint256"
                }
            ],
            "name": "encodeAssetId",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        }
    ],
    "bytecode": {
        "object": "0x608060405234801561001057600080fd5b506106be806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80633c8c28ad146100515780636322c7511461007a5780638a227c39146100aa578063957462ac146100cb575b600080fd5b61006461005f366004610426565b6100de565b6040516100719190610463565b60405180910390f35b61009c610088366004610426565b60f881901c916001600160f81b0390911690565b6040516100719291906104ac565b6100bd6100b83660046104d8565b6100f2565b604051908152602001610071565b6100646100d9366004610426565b610109565b606060006100eb83610116565b9392505050565b6000806100ff848461023e565b9150505b92915050565b606060006100eb83610273565b606060f882901c6001600160f81b038316600061013282610371565b9050600083600381111561014857610148610496565b0361017a576040518060400160405280600d81526020016c048797065726472697665204c5609c1b8152509350610236565b600183600381111561018e5761018e610496565b036101ba57806040516020016101a49190610508565b6040516020818303038152906040529350610236565b60028360038111156101ce576101ce610496565b036101e457806040516020016101a49190610541565b60038360038111156101f8576101f8610496565b03610236576040518060400160405280601b81526020017f48797065726472697665205769746864726177616c205368617265000000000081525093505b505050919050565b60006001600160f81b038211156102685760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b606060f882901c6001600160f81b038316600061028f82610371565b905060008360038111156102a5576102a5610496565b036102d7576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b8152509350610236565b60018360038111156102eb576102eb610496565b0361030157806040516020016101a4919061057b565b600283600381111561031557610315610496565b0361032b57806040516020016101a491906105b3565b600383600381111561033f5761033f610496565b0361023657505060408051808201909152600d81526c485950455244524956452d575360981b60208201529392505050565b60408051604e80825260808201909252606091906000908260208201818036833701905050905060005b8415610418576103ac600a866105f5565b6103b790603061061f565b60f81b8260016103c78487610632565b6103d19190610632565b815181106103e1576103e1610645565b60200101906001600160f81b031916908160001a905350806104028161065b565b91506104119050600a86610674565b945061039b565b918290030190815292915050565b60006020828403121561043857600080fd5b5035919050565b60005b8381101561045a578181015183820152602001610442565b50506000910152565b602081526000825180602084015261048281604085016020870161043f565b601f01601f19169190910160400192915050565b634e487b7160e01b600052602160045260246000fd5b60408101600484106104ce57634e487b7160e01b600052602160045260246000fd5b9281526020015290565b600080604083850312156104eb57600080fd5b8235600481106104fa57600080fd5b946020939093013593505050565b700243cb832b9323934bb32902637b7339d1607d1b81526000825161053481601185016020870161043f565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b81526000825161056e81601285016020870161043f565b9190910160120192915050565b6f242ca822a9222924ab2296a627a7239d60811b8152600082516105a681601085016020870161043f565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b81526000825161053481601185016020870161043f565b634e487b7160e01b600052601260045260246000fd5b600082610604576106046105df565b500690565b634e487b7160e01b600052601160045260246000fd5b8082018082111561010357610103610609565b8181038181111561010357610103610609565b634e487b7160e01b600052603260045260246000fd5b60006001820161066d5761066d610609565b5060010190565b600082610683576106836105df565b50049056fea264697066735822122075474ca19e10f40730ebaeebbd707e30f1caee6acfb770eebe6523ef733a4f3364736f6c63430008140033",
        "sourceMap": "128:859:131:-:0;;;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x608060405234801561001057600080fd5b506004361061004c5760003560e01c80633c8c28ad146100515780636322c7511461007a5780638a227c39146100aa578063957462ac146100cb575b600080fd5b61006461005f366004610426565b6100de565b6040516100719190610463565b60405180910390f35b61009c610088366004610426565b60f881901c916001600160f81b0390911690565b6040516100719291906104ac565b6100bd6100b83660046104d8565b6100f2565b604051908152602001610071565b6100646100d9366004610426565b610109565b606060006100eb83610116565b9392505050565b6000806100ff848461023e565b9150505b92915050565b606060006100eb83610273565b606060f882901c6001600160f81b038316600061013282610371565b9050600083600381111561014857610148610496565b0361017a576040518060400160405280600d81526020016c048797065726472697665204c5609c1b8152509350610236565b600183600381111561018e5761018e610496565b036101ba57806040516020016101a49190610508565b6040516020818303038152906040529350610236565b60028360038111156101ce576101ce610496565b036101e457806040516020016101a49190610541565b60038360038111156101f8576101f8610496565b03610236576040518060400160405280601b81526020017f48797065726472697665205769746864726177616c205368617265000000000081525093505b505050919050565b60006001600160f81b038211156102685760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b606060f882901c6001600160f81b038316600061028f82610371565b905060008360038111156102a5576102a5610496565b036102d7576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b8152509350610236565b60018360038111156102eb576102eb610496565b0361030157806040516020016101a4919061057b565b600283600381111561031557610315610496565b0361032b57806040516020016101a491906105b3565b600383600381111561033f5761033f610496565b0361023657505060408051808201909152600d81526c485950455244524956452d575360981b60208201529392505050565b60408051604e80825260808201909252606091906000908260208201818036833701905050905060005b8415610418576103ac600a866105f5565b6103b790603061061f565b60f81b8260016103c78487610632565b6103d19190610632565b815181106103e1576103e1610645565b60200101906001600160f81b031916908160001a905350806104028161065b565b91506104119050600a86610674565b945061039b565b918290030190815292915050565b60006020828403121561043857600080fd5b5035919050565b60005b8381101561045a578181015183820152602001610442565b50506000910152565b602081526000825180602084015261048281604085016020870161043f565b601f01601f19169190910160400192915050565b634e487b7160e01b600052602160045260246000fd5b60408101600484106104ce57634e487b7160e01b600052602160045260246000fd5b9281526020015290565b600080604083850312156104eb57600080fd5b8235600481106104fa57600080fd5b946020939093013593505050565b700243cb832b9323934bb32902637b7339d1607d1b81526000825161053481601185016020870161043f565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b81526000825161056e81601285016020870161043f565b9190910160120192915050565b6f242ca822a9222924ab2296a627a7239d60811b8152600082516105a681601085016020870161043f565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b81526000825161053481601185016020870161043f565b634e487b7160e01b600052601260045260246000fd5b600082610604576106046105df565b500690565b634e487b7160e01b600052601160045260246000fd5b8082018082111561010357610103610609565b8181038181111561010357610103610609565b634e487b7160e01b600052603260045260246000fd5b60006001820161066d5761066d610609565b5060010190565b600082610683576106836105df565b50049056fea264697066735822122075474ca19e10f40730ebaeebbd707e30f1caee6acfb770eebe6523ef733a4f3364736f6c63430008140033",
        "sourceMap": "128:859:131:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;635:161;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;380:249;;;;;;:::i;:::-;2200:4:119;2196:14;;;;-1:-1:-1;;;;;2253:120:119;;;;380:249:131;;;;;;;;;:::i;155:219::-;;;;;;:::i;:::-;;:::i;:::-;;;1904:25:234;;;1892:2;1877:18;155:219:131;1758:177:234;802:183:131;;;;;;:::i;:::-;;:::i;635:161::-;694:13;719:19;741:26;763:3;741:21;:26::i;:::-;719:48;635:161;-1:-1:-1;;;635:161:131:o;155:219::-;274:7;293:10;306:42;328:7;337:10;306:21;:42::i;:::-;293:55;-1:-1:-1;;155:219:131;;;;;:::o;802:183::-;877:13;902:21;926:28;950:3;926:23;:28::i;2533:693:119:-;2606:19;2200:4;2196:14;;;-1:-1:-1;;;;;2253:120:119;;2638:20;2736:19;2253:120;2736:8;:19::i;:::-;2709:46;-1:-1:-1;2779:16:119;2769:6;:26;;;;;;;;:::i;:::-;;2765:455;;2811:23;;;;;;;;;;;;;-1:-1:-1;;;2811:23:119;;;;;2765:455;;;2865:18;2855:6;:28;;;;;;;;:::i;:::-;;2851:369;;2952:10;2914:49;;;;;;;;:::i;:::-;;;;;;;;;;;;;2899:65;;2851:369;;;2995:19;2985:6;:29;;;;;;;;:::i;:::-;;2981:239;;3084:10;3045:50;;;;;;;;:::i;2981:239::-;3127:29;3117:6;:39;;;;;;;;:::i;:::-;;3113:107;;3172:37;;;;;;;;;;;;;;;;;;;3113:107;2627:599;;;2533:693;;;:::o;1198:469::-;1309:10;-1:-1:-1;;;;;1401:10:119;:89;1384:179;;;1522:30;;-1:-1:-1;;;1522:30:119;;;;;;;;;;;1384:179;-1:-1:-1;1624:4:119;1620:18;;;;1617:34;;1198:469::o;3360:689::-;3435:21;2200:4;2196:14;;;-1:-1:-1;;;;;2253:120:119;;3469:20;3567:19;2253:120;3567:8;:19::i;:::-;3540:46;-1:-1:-1;3610:16:119;3600:6;:26;;;;;;;;:::i;:::-;;3596:447;;3642:25;;;;;;;;;;;;;-1:-1:-1;;;3642:25:119;;;;;3596:447;;;3698:18;3688:6;:28;;;;;;;;:::i;:::-;;3684:359;;3786:10;3749:48;;;;;;;;:::i;3684:359::-;3829:19;3819:6;:29;;;;;;;;:::i;:::-;;3815:228;;3919:10;3881:49;;;;;;;;:::i;3815:228::-;3962:29;3952:6;:39;;;;;;;;:::i;:::-;;3948:95;;-1:-1:-1;;4007:25:119;;;;;;;;;;;;-1:-1:-1;;;4007:25:119;;;;;3360:689;-1:-1:-1;;;3360:689:119:o;4207:1065::-;4599:26;;;4562:2;4599:26;;;;;;;;;4276:20;;4562:2;4536:23;;4562:2;4599:26;;;;;;;;;;-1:-1:-1;4599:26:119;4574:51;;4790:14;4818:180;4825:9;;4818:180;;4935:9;4942:2;4935:4;:9;:::i;:::-;4934:16;;4948:2;4934:16;:::i;:::-;4904:61;;4862:9;4899:1;4872:24;4890:6;4872:15;:24;:::i;:::-;:28;;;;:::i;:::-;4862:39;;;;;;;;:::i;:::-;;;;:103;-1:-1:-1;;;;;4862:103:119;;;;;;;;-1:-1:-1;4979:8:119;;;;:::i;:::-;;-1:-1:-1;4836:10:119;;-1:-1:-1;4844:2:119;4836:10;;:::i;:::-;;;4818:180;;;5169:28;;;;5154:44;5211:22;;;5154:44;4207:1065;-1:-1:-1;;4207:1065:119:o;14:180:234:-;73:6;126:2;114:9;105:7;101:23;97:32;94:52;;;142:1;139;132:12;94:52;-1:-1:-1;165:23:234;;14:180;-1:-1:-1;14:180:234:o;199:250::-;284:1;294:113;308:6;305:1;302:13;294:113;;;384:11;;;378:18;365:11;;;358:39;330:2;323:10;294:113;;;-1:-1:-1;;441:1:234;423:16;;416:27;199:250::o;454:396::-;603:2;592:9;585:21;566:4;635:6;629:13;678:6;673:2;662:9;658:18;651:34;694:79;766:6;761:2;750:9;746:18;741:2;733:6;729:15;694:79;:::i;:::-;834:2;813:15;-1:-1:-1;;809:29:234;794:45;;;;841:2;790:54;;454:396;-1:-1:-1;;454:396:234:o;855:127::-;916:10;911:3;907:20;904:1;897:31;947:4;944:1;937:15;971:4;968:1;961:15;987:418;1166:2;1151:18;;1199:1;1188:13;;1178:144;;1244:10;1239:3;1235:20;1232:1;1225:31;1279:4;1276:1;1269:15;1307:4;1304:1;1297:15;1178:144;1331:25;;;1387:2;1372:18;1365:34;987:418;:::o;1410:343::-;1497:6;1505;1558:2;1546:9;1537:7;1533:23;1529:32;1526:52;;;1574:1;1571;1564:12;1526:52;1613:9;1600:23;1652:1;1645:5;1642:12;1632:40;;1668:1;1665;1658:12;1632:40;1691:5;1743:2;1728:18;;;;1715:32;;-1:-1:-1;;;1410:343:234:o;1940:449::-;-1:-1:-1;;;2197:3:234;2190:32;2172:3;2251:6;2245:13;2267:75;2335:6;2330:2;2325:3;2321:12;2314:4;2306:6;2302:17;2267:75;:::i;:::-;2362:16;;;;2380:2;2358:25;;1940:449;-1:-1:-1;;1940:449:234:o;2394:450::-;-1:-1:-1;;;2651:3:234;2644:33;2626:3;2706:6;2700:13;2722:75;2790:6;2785:2;2780:3;2776:12;2769:4;2761:6;2757:17;2722:75;:::i;:::-;2817:16;;;;2835:2;2813:25;;2394:450;-1:-1:-1;;2394:450:234:o;2849:448::-;-1:-1:-1;;;3106:3:234;3099:31;3081:3;3159:6;3153:13;3175:75;3243:6;3238:2;3233:3;3229:12;3222:4;3214:6;3210:17;3175:75;:::i;:::-;3270:16;;;;3288:2;3266:25;;2849:448;-1:-1:-1;;2849:448:234:o;3302:449::-;-1:-1:-1;;;3559:3:234;3552:32;3534:3;3613:6;3607:13;3629:75;3697:6;3692:2;3687:3;3683:12;3676:4;3668:6;3664:17;3629:75;:::i;3888:127::-;3949:10;3944:3;3940:20;3937:1;3930:31;3980:4;3977:1;3970:15;4004:4;4001:1;3994:15;4020:112;4052:1;4078;4068:35;;4083:18;;:::i;:::-;-1:-1:-1;4117:9:234;;4020:112::o;4137:127::-;4198:10;4193:3;4189:20;4186:1;4179:31;4229:4;4226:1;4219:15;4253:4;4250:1;4243:15;4269:125;4334:9;;;4355:10;;;4352:36;;;4368:18;;:::i;4399:128::-;4466:9;;;4487:11;;;4484:37;;;4501:18;;:::i;4532:127::-;4593:10;4588:3;4584:20;4581:1;4574:31;4624:4;4621:1;4614:15;4648:4;4645:1;4638:15;4664:135;4703:3;4724:17;;;4721:43;;4744:18;;:::i;:::-;-1:-1:-1;4791:1:234;4780:13;;4664:135::o;4804:120::-;4844:1;4870;4860:35;;4875:18;;:::i;:::-;-1:-1:-1;4909:9:234;;4804:120::o",
        "linkReferences": {}
    },
    "methodIdentifiers": {
        "assetIdToName(uint256)": "3c8c28ad",
        "assetIdToSymbol(uint256)": "957462ac",
        "decodeAssetId(uint256)": "6322c751",
        "encodeAssetId(uint8,uint256)": "8a227c39"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"InvalidTimestamp\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"assetIdToName\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"assetIdToSymbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"decodeAssetId\",\"outputs\":[{\"internalType\":\"enum AssetId.AssetIdPrefix\",\"name\":\"\",\"type\":\"uint8\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"enum AssetId.AssetIdPrefix\",\"name\":\"_prefix\",\"type\":\"uint8\"},{\"internalType\":\"uint256\",\"name\":\"_timestamp\",\"type\":\"uint256\"}],\"name\":\"encodeAssetId\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"errors\":{\"InvalidTimestamp()\":[{\"notice\":\"Thrown when the timestamp used to construct an asset ID exceeds         the uint248 scale.\"}]},\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockAssetId.sol\":\"MockAssetId\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x8b726cbf87e5dbec80207d47b64bb20e35a9fb42667b9d1612a87ad8b2d361b5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b2015112addc7b4ba33c0626a14c963294164906afce52296f3dc209737a7339\",\"dweb:/ipfs/QmZYR6qwGspufCtiofdvYbaHhxSrguNnP52rd3y3zXWiDz\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0xa48349cf2fcd27ce3aafcffeba25647d289e17653dc1a4e643c3de0b47e5c75f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4dee6d2061cc68e3bc52acfa0d35c973785e49170f49d2e09efd50ead85e2a19\",\"dweb:/ipfs/QmX6tpGgXTnVGt1CdD796N5kn8YrZWFX1FcRLqtBBhB5qk\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa\",\"dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131\",\"dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc\"]},\"contracts/test/MockAssetId.sol\":{\"keccak256\":\"0x19bd2a30ab244563ce6cc5257888cad4c4e68a6f3efa47bc96729511782a8ea3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://512943e6850cc632926d507a65697c8b3222ef63343166a8b490ee826325305b\",\"dweb:/ipfs/QmWs4xELKzUTNbtm1diZsUwmJQoJDSBZrsdsckyLJhTu8Q\"]}},\"version\":1}",
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
                    "name": "InvalidTimestamp"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_id",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "pure",
                    "type": "function",
                    "name": "assetIdToName",
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
                            "name": "_id",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "pure",
                    "type": "function",
                    "name": "assetIdToSymbol",
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
                            "name": "_id",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "pure",
                    "type": "function",
                    "name": "decodeAssetId",
                    "outputs": [
                        {
                            "internalType": "enum AssetId.AssetIdPrefix",
                            "name": "",
                            "type": "uint8"
                        },
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
                            "internalType": "enum AssetId.AssetIdPrefix",
                            "name": "_prefix",
                            "type": "uint8"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_timestamp",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "pure",
                    "type": "function",
                    "name": "encodeAssetId",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
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
                "contracts/test/MockAssetId.sol": "MockAssetId"
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
            "contracts/src/interfaces/IHyperdrive.sol": {
                "keccak256": "0x8b726cbf87e5dbec80207d47b64bb20e35a9fb42667b9d1612a87ad8b2d361b5",
                "urls": [
                    "bzz-raw://b2015112addc7b4ba33c0626a14c963294164906afce52296f3dc209737a7339",
                    "dweb:/ipfs/QmZYR6qwGspufCtiofdvYbaHhxSrguNnP52rd3y3zXWiDz"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveCore.sol": {
                "keccak256": "0xa48349cf2fcd27ce3aafcffeba25647d289e17653dc1a4e643c3de0b47e5c75f",
                "urls": [
                    "bzz-raw://4dee6d2061cc68e3bc52acfa0d35c973785e49170f49d2e09efd50ead85e2a19",
                    "dweb:/ipfs/QmX6tpGgXTnVGt1CdD796N5kn8YrZWFX1FcRLqtBBhB5qk"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveEvents.sol": {
                "keccak256": "0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784",
                "urls": [
                    "bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa",
                    "dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveRead.sol": {
                "keccak256": "0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045",
                "urls": [
                    "bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86",
                    "dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j"
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
            },
            "contracts/src/libraries/AssetId.sol": {
                "keccak256": "0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b",
                "urls": [
                    "bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131",
                    "dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc"
                ],
                "license": "Apache-2.0"
            },
            "contracts/test/MockAssetId.sol": {
                "keccak256": "0x19bd2a30ab244563ce6cc5257888cad4c4e68a6f3efa47bc96729511782a8ea3",
                "urls": [
                    "bzz-raw://512943e6850cc632926d507a65697c8b3222ef63343166a8b490ee826325305b",
                    "dweb:/ipfs/QmWs4xELKzUTNbtm1diZsUwmJQoJDSBZrsdsckyLJhTu8Q"
                ],
                "license": "Apache-2.0"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "contracts/test/MockAssetId.sol",
        "id": 23598,
        "exportedSymbols": {
            "AssetId": [
                18009
            ],
            "MockAssetId": [
                23597
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:949:131",
        "nodes": [
            {
                "id": 23512,
                "nodeType": "PragmaDirective",
                "src": "39:23:131",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 23514,
                "nodeType": "ImportDirective",
                "src": "64:62:131",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/AssetId.sol",
                "file": "contracts/src/libraries/AssetId.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 23598,
                "sourceUnit": 18010,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 23513,
                            "name": "AssetId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18009,
                            "src": "73:7:131",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 23597,
                "nodeType": "ContractDefinition",
                "src": "128:859:131",
                "nodes": [
                    {
                        "id": 23535,
                        "nodeType": "FunctionDefinition",
                        "src": "155:219:131",
                        "nodes": [],
                        "body": {
                            "id": 23534,
                            "nodeType": "Block",
                            "src": "283:91:131",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        23525
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 23525,
                                            "mutability": "mutable",
                                            "name": "id",
                                            "nameLocation": "301:2:131",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 23534,
                                            "src": "293:10:131",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 23524,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "293:7:131",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 23531,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 23528,
                                                "name": "_prefix",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 23517,
                                                "src": "328:7:131",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_enum$_AssetIdPrefix_$17756",
                                                    "typeString": "enum AssetId.AssetIdPrefix"
                                                }
                                            },
                                            {
                                                "id": 23529,
                                                "name": "_timestamp",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 23519,
                                                "src": "337:10:131",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_enum$_AssetIdPrefix_$17756",
                                                    "typeString": "enum AssetId.AssetIdPrefix"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "id": 23526,
                                                "name": "AssetId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18009,
                                                "src": "306:7:131",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_AssetId_$18009_$",
                                                    "typeString": "type(library AssetId)"
                                                }
                                            },
                                            "id": 23527,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "314:13:131",
                                            "memberName": "encodeAssetId",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 17779,
                                            "src": "306:21:131",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_enum$_AssetIdPrefix_$17756_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (enum AssetId.AssetIdPrefix,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 23530,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "306:42:131",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "293:55:131"
                                },
                                {
                                    "expression": {
                                        "id": 23532,
                                        "name": "id",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 23525,
                                        "src": "365:2:131",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 23523,
                                    "id": 23533,
                                    "nodeType": "Return",
                                    "src": "358:9:131"
                                }
                            ]
                        },
                        "functionSelector": "8a227c39",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "encodeAssetId",
                        "nameLocation": "164:13:131",
                        "parameters": {
                            "id": 23520,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 23517,
                                    "mutability": "mutable",
                                    "name": "_prefix",
                                    "nameLocation": "209:7:131",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23535,
                                    "src": "187:29:131",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_enum$_AssetIdPrefix_$17756",
                                        "typeString": "enum AssetId.AssetIdPrefix"
                                    },
                                    "typeName": {
                                        "id": 23516,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 23515,
                                            "name": "AssetId.AssetIdPrefix",
                                            "nameLocations": [
                                                "187:7:131",
                                                "195:13:131"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 17756,
                                            "src": "187:21:131"
                                        },
                                        "referencedDeclaration": 17756,
                                        "src": "187:21:131",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_enum$_AssetIdPrefix_$17756",
                                            "typeString": "enum AssetId.AssetIdPrefix"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 23519,
                                    "mutability": "mutable",
                                    "name": "_timestamp",
                                    "nameLocation": "234:10:131",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23535,
                                    "src": "226:18:131",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23518,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "226:7:131",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "177:73:131"
                        },
                        "returnParameters": {
                            "id": 23523,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 23522,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23535,
                                    "src": "274:7:131",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23521,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "274:7:131",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "273:9:131"
                        },
                        "scope": 23597,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 23562,
                        "nodeType": "FunctionDefinition",
                        "src": "380:249:131",
                        "nodes": [],
                        "body": {
                            "id": 23561,
                            "nodeType": "Block",
                            "src": "485:144:131",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        23549,
                                        23551
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 23549,
                                            "mutability": "mutable",
                                            "name": "prefix",
                                            "nameLocation": "518:6:131",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 23561,
                                            "src": "496:28:131",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_enum$_AssetIdPrefix_$17756",
                                                "typeString": "enum AssetId.AssetIdPrefix"
                                            },
                                            "typeName": {
                                                "id": 23548,
                                                "nodeType": "UserDefinedTypeName",
                                                "pathNode": {
                                                    "id": 23547,
                                                    "name": "AssetId.AssetIdPrefix",
                                                    "nameLocations": [
                                                        "496:7:131",
                                                        "504:13:131"
                                                    ],
                                                    "nodeType": "IdentifierPath",
                                                    "referencedDeclaration": 17756,
                                                    "src": "496:21:131"
                                                },
                                                "referencedDeclaration": 17756,
                                                "src": "496:21:131",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_enum$_AssetIdPrefix_$17756",
                                                    "typeString": "enum AssetId.AssetIdPrefix"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 23551,
                                            "mutability": "mutable",
                                            "name": "timestamp",
                                            "nameLocation": "534:9:131",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 23561,
                                            "src": "526:17:131",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 23550,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "526:7:131",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 23556,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 23554,
                                                "name": "_id",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 23537,
                                                "src": "582:3:131",
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
                                                "id": 23552,
                                                "name": "AssetId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18009,
                                                "src": "547:7:131",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_AssetId_$18009_$",
                                                    "typeString": "type(library AssetId)"
                                                }
                                            },
                                            "id": 23553,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "568:13:131",
                                            "memberName": "decodeAssetId",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 17792,
                                            "src": "547:34:131",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_enum$_AssetIdPrefix_$17756_$_t_uint256_$",
                                                "typeString": "function (uint256) pure returns (enum AssetId.AssetIdPrefix,uint256)"
                                            }
                                        },
                                        "id": 23555,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "547:39:131",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_enum$_AssetIdPrefix_$17756_$_t_uint256_$",
                                            "typeString": "tuple(enum AssetId.AssetIdPrefix,uint256)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "495:91:131"
                                },
                                {
                                    "expression": {
                                        "components": [
                                            {
                                                "id": 23557,
                                                "name": "prefix",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 23549,
                                                "src": "604:6:131",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_enum$_AssetIdPrefix_$17756",
                                                    "typeString": "enum AssetId.AssetIdPrefix"
                                                }
                                            },
                                            {
                                                "id": 23558,
                                                "name": "timestamp",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 23551,
                                                "src": "612:9:131",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "id": 23559,
                                        "isConstant": false,
                                        "isInlineArray": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "TupleExpression",
                                        "src": "603:19:131",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_enum$_AssetIdPrefix_$17756_$_t_uint256_$",
                                            "typeString": "tuple(enum AssetId.AssetIdPrefix,uint256)"
                                        }
                                    },
                                    "functionReturnParameters": 23544,
                                    "id": 23560,
                                    "nodeType": "Return",
                                    "src": "596:26:131"
                                }
                            ]
                        },
                        "functionSelector": "6322c751",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "decodeAssetId",
                        "nameLocation": "389:13:131",
                        "parameters": {
                            "id": 23538,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 23537,
                                    "mutability": "mutable",
                                    "name": "_id",
                                    "nameLocation": "420:3:131",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23562,
                                    "src": "412:11:131",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23536,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "412:7:131",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "402:27:131"
                        },
                        "returnParameters": {
                            "id": 23544,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 23541,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23562,
                                    "src": "453:21:131",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_enum$_AssetIdPrefix_$17756",
                                        "typeString": "enum AssetId.AssetIdPrefix"
                                    },
                                    "typeName": {
                                        "id": 23540,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 23539,
                                            "name": "AssetId.AssetIdPrefix",
                                            "nameLocations": [
                                                "453:7:131",
                                                "461:13:131"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 17756,
                                            "src": "453:21:131"
                                        },
                                        "referencedDeclaration": 17756,
                                        "src": "453:21:131",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_enum$_AssetIdPrefix_$17756",
                                            "typeString": "enum AssetId.AssetIdPrefix"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 23543,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23562,
                                    "src": "476:7:131",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23542,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "476:7:131",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "452:32:131"
                        },
                        "scope": 23597,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 23579,
                        "nodeType": "FunctionDefinition",
                        "src": "635:161:131",
                        "nodes": [],
                        "body": {
                            "id": 23578,
                            "nodeType": "Block",
                            "src": "709:87:131",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        23570
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 23570,
                                            "mutability": "mutable",
                                            "name": "_name",
                                            "nameLocation": "733:5:131",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 23578,
                                            "src": "719:19:131",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string"
                                            },
                                            "typeName": {
                                                "id": 23569,
                                                "name": "string",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "719:6:131",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_storage_ptr",
                                                    "typeString": "string"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 23575,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 23573,
                                                "name": "_id",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 23564,
                                                "src": "763:3:131",
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
                                                "id": 23571,
                                                "name": "AssetId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18009,
                                                "src": "741:7:131",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_AssetId_$18009_$",
                                                    "typeString": "type(library AssetId)"
                                                }
                                            },
                                            "id": 23572,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "749:13:131",
                                            "memberName": "assetIdToName",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 17870,
                                            "src": "741:21:131",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (uint256) pure returns (string memory)"
                                            }
                                        },
                                        "id": 23574,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "741:26:131",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "719:48:131"
                                },
                                {
                                    "expression": {
                                        "id": 23576,
                                        "name": "_name",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 23570,
                                        "src": "784:5:131",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 23568,
                                    "id": 23577,
                                    "nodeType": "Return",
                                    "src": "777:12:131"
                                }
                            ]
                        },
                        "functionSelector": "3c8c28ad",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "assetIdToName",
                        "nameLocation": "644:13:131",
                        "parameters": {
                            "id": 23565,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 23564,
                                    "mutability": "mutable",
                                    "name": "_id",
                                    "nameLocation": "666:3:131",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23579,
                                    "src": "658:11:131",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23563,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "658:7:131",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "657:13:131"
                        },
                        "returnParameters": {
                            "id": 23568,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 23567,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23579,
                                    "src": "694:13:131",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 23566,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "694:6:131",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "693:15:131"
                        },
                        "scope": 23597,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 23596,
                        "nodeType": "FunctionDefinition",
                        "src": "802:183:131",
                        "nodes": [],
                        "body": {
                            "id": 23595,
                            "nodeType": "Block",
                            "src": "892:93:131",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        23587
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 23587,
                                            "mutability": "mutable",
                                            "name": "_symbol",
                                            "nameLocation": "916:7:131",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 23595,
                                            "src": "902:21:131",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string"
                                            },
                                            "typeName": {
                                                "id": 23586,
                                                "name": "string",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "902:6:131",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_storage_ptr",
                                                    "typeString": "string"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 23592,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 23590,
                                                "name": "_id",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 23581,
                                                "src": "950:3:131",
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
                                                "id": 23588,
                                                "name": "AssetId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18009,
                                                "src": "926:7:131",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_AssetId_$18009_$",
                                                    "typeString": "type(library AssetId)"
                                                }
                                            },
                                            "id": 23589,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "934:15:131",
                                            "memberName": "assetIdToSymbol",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 17948,
                                            "src": "926:23:131",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (uint256) pure returns (string memory)"
                                            }
                                        },
                                        "id": 23591,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "926:28:131",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "902:52:131"
                                },
                                {
                                    "expression": {
                                        "id": 23593,
                                        "name": "_symbol",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 23587,
                                        "src": "971:7:131",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 23585,
                                    "id": 23594,
                                    "nodeType": "Return",
                                    "src": "964:14:131"
                                }
                            ]
                        },
                        "functionSelector": "957462ac",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "assetIdToSymbol",
                        "nameLocation": "811:15:131",
                        "parameters": {
                            "id": 23582,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 23581,
                                    "mutability": "mutable",
                                    "name": "_id",
                                    "nameLocation": "844:3:131",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23596,
                                    "src": "836:11:131",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23580,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "836:7:131",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "826:27:131"
                        },
                        "returnParameters": {
                            "id": 23585,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 23584,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23596,
                                    "src": "877:13:131",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 23583,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "877:6:131",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "876:15:131"
                        },
                        "scope": 23597,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "abstract": false,
                "baseContracts": [],
                "canonicalName": "MockAssetId",
                "contractDependencies": [],
                "contractKind": "contract",
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    23597
                ],
                "name": "MockAssetId",
                "nameLocation": "137:11:131",
                "scope": 23598,
                "usedErrors": [
                    10255
                ],
                "usedEvents": []
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 131
};
