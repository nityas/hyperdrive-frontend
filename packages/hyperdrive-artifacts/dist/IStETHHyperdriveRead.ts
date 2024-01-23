export const IStETHHyperdriveRead = 
{"abi":[{"type":"function","name":"balanceOf","inputs":[{"name":"tokenId","type":"uint256","internalType":"uint256"},{"name":"owner","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"baseToken","inputs":[],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"getCheckpoint","inputs":[{"name":"_checkpointTime","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"tuple","internalType":"struct IHyperdrive.Checkpoint","components":[{"name":"sharePrice","type":"uint128","internalType":"uint128"}]}],"stateMutability":"view"},{"type":"function","name":"getCheckpointExposure","inputs":[{"name":"_checkpointTime","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"int256","internalType":"int256"}],"stateMutability":"view"},{"type":"function","name":"getMarketState","inputs":[],"outputs":[{"name":"","type":"tuple","internalType":"struct IHyperdrive.MarketState","components":[{"name":"shareReserves","type":"uint128","internalType":"uint128"},{"name":"bondReserves","type":"uint128","internalType":"uint128"},{"name":"longExposure","type":"uint128","internalType":"uint128"},{"name":"longsOutstanding","type":"uint128","internalType":"uint128"},{"name":"shareAdjustment","type":"int128","internalType":"int128"},{"name":"shortsOutstanding","type":"uint128","internalType":"uint128"},{"name":"longAverageMaturityTime","type":"uint128","internalType":"uint128"},{"name":"shortAverageMaturityTime","type":"uint128","internalType":"uint128"},{"name":"isInitialized","type":"bool","internalType":"bool"},{"name":"isPaused","type":"bool","internalType":"bool"},{"name":"zombieBaseProceeds","type":"uint112","internalType":"uint112"},{"name":"zombieShareReserves","type":"uint128","internalType":"uint128"}]}],"stateMutability":"view"},{"type":"function","name":"getPoolConfig","inputs":[],"outputs":[{"name":"","type":"tuple","internalType":"struct IHyperdrive.PoolConfig","components":[{"name":"baseToken","type":"address","internalType":"contract IERC20"},{"name":"linkerFactory","type":"address","internalType":"address"},{"name":"linkerCodeHash","type":"bytes32","internalType":"bytes32"},{"name":"initialSharePrice","type":"uint256","internalType":"uint256"},{"name":"minimumShareReserves","type":"uint256","internalType":"uint256"},{"name":"minimumTransactionAmount","type":"uint256","internalType":"uint256"},{"name":"positionDuration","type":"uint256","internalType":"uint256"},{"name":"checkpointDuration","type":"uint256","internalType":"uint256"},{"name":"timeStretch","type":"uint256","internalType":"uint256"},{"name":"governance","type":"address","internalType":"address"},{"name":"feeCollector","type":"address","internalType":"address"},{"name":"fees","type":"tuple","internalType":"struct IHyperdrive.Fees","components":[{"name":"curve","type":"uint256","internalType":"uint256"},{"name":"flat","type":"uint256","internalType":"uint256"},{"name":"governanceLP","type":"uint256","internalType":"uint256"},{"name":"governanceZombie","type":"uint256","internalType":"uint256"}]}]}],"stateMutability":"view"},{"type":"function","name":"getPoolInfo","inputs":[],"outputs":[{"name":"","type":"tuple","internalType":"struct IHyperdrive.PoolInfo","components":[{"name":"shareReserves","type":"uint256","internalType":"uint256"},{"name":"shareAdjustment","type":"int256","internalType":"int256"},{"name":"zombieBaseProceeds","type":"uint256","internalType":"uint256"},{"name":"zombieShareReserves","type":"uint256","internalType":"uint256"},{"name":"bondReserves","type":"uint256","internalType":"uint256"},{"name":"lpTotalSupply","type":"uint256","internalType":"uint256"},{"name":"sharePrice","type":"uint256","internalType":"uint256"},{"name":"longsOutstanding","type":"uint256","internalType":"uint256"},{"name":"longAverageMaturityTime","type":"uint256","internalType":"uint256"},{"name":"shortsOutstanding","type":"uint256","internalType":"uint256"},{"name":"shortAverageMaturityTime","type":"uint256","internalType":"uint256"},{"name":"withdrawalSharesReadyToWithdraw","type":"uint256","internalType":"uint256"},{"name":"withdrawalSharesProceeds","type":"uint256","internalType":"uint256"},{"name":"lpSharePrice","type":"uint256","internalType":"uint256"},{"name":"longExposure","type":"uint256","internalType":"uint256"}]}],"stateMutability":"view"},{"type":"function","name":"getUncollectedGovernanceFees","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"getWithdrawPool","inputs":[],"outputs":[{"name":"","type":"tuple","internalType":"struct IHyperdrive.WithdrawPool","components":[{"name":"readyToWithdraw","type":"uint128","internalType":"uint128"},{"name":"proceeds","type":"uint128","internalType":"uint128"}]}],"stateMutability":"view"},{"type":"function","name":"isApprovedForAll","inputs":[{"name":"owner","type":"address","internalType":"address"},{"name":"spender","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"view"},{"type":"function","name":"lido","inputs":[],"outputs":[{"name":"","type":"address","internalType":"contract ILido"}],"stateMutability":"view"},{"type":"function","name":"load","inputs":[{"name":"_slots","type":"uint256[]","internalType":"uint256[]"}],"outputs":[{"name":"","type":"bytes32[]","internalType":"bytes32[]"}],"stateMutability":"view"},{"type":"function","name":"name","inputs":[{"name":"id","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"nonces","inputs":[{"name":"owner","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"perTokenApprovals","inputs":[{"name":"tokenId","type":"uint256","internalType":"uint256"},{"name":"owner","type":"address","internalType":"address"},{"name":"spender","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"symbol","inputs":[{"name":"id","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"totalSupply","inputs":[{"name":"id","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"}],"bytecode":{"object":"0x","sourceMap":"","linkReferences":{}},"deployedBytecode":{"object":"0x","sourceMap":"","linkReferences":{}},"methodIdentifiers":{"balanceOf(uint256,address)":"3656eec2","baseToken()":"c55dae63","getCheckpoint(uint256)":"20fc4881","getCheckpointExposure(uint256)":"cf210e65","getMarketState()":"d8165743","getPoolConfig()":"b0d96580","getPoolInfo()":"60246c88","getUncollectedGovernanceFees()":"c69e16ad","getWithdrawPool()":"fba56008","isApprovedForAll(address,address)":"e985e9c5","lido()":"23509a2d","load(uint256[])":"becee9c3","name(uint256)":"00ad800c","nonces(address)":"7ecebe00","perTokenApprovals(uint256,address,address)":"21ff32a9","symbol(uint256)":"4e41a1fb","totalSupply(uint256)":"bd85b039"},"rawMetadata":"{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"baseToken\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"getCheckpoint\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"sharePrice\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.Checkpoint\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"getCheckpointExposure\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getMarketState\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"shareReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"bondReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longExposure\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"int128\",\"name\":\"shareAdjustment\",\"type\":\"int128\"},{\"internalType\":\"uint128\",\"name\":\"shortsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"bool\",\"name\":\"isInitialized\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"},{\"internalType\":\"uint112\",\"name\":\"zombieBaseProceeds\",\"type\":\"uint112\"},{\"internalType\":\"uint128\",\"name\":\"zombieShareReserves\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.MarketState\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPoolConfig\",\"outputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPoolInfo\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"zombieBaseProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"zombieShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesReadyToWithdraw\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longExposure\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.PoolInfo\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getUncollectedGovernanceFees\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getWithdrawPool\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"readyToWithdraw\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"proceeds\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.WithdrawPool\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"lido\",\"outputs\":[{\"internalType\":\"contract ILido\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256[]\",\"name\":\"_slots\",\"type\":\"uint256[]\"}],\"name\":\"load\",\"outputs\":[{\"internalType\":\"bytes32[]\",\"name\":\"\",\"type\":\"bytes32[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"perTokenApprovals\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IStETHHyperdriveRead.sol\":\"IStETHHyperdriveRead\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfb57fe2ee4d8d1c6a8e2aa3b007da6f0e53d65388245b0b7d876234077ee95b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e4303c41b9752b51c6eaa9b16aa11e5bffb34fc80c5c8761302539cd5922ae36\",\"dweb:/ipfs/QmZjVYBikfgPDX47hmbGJpG6kvm3Gyt6nKkFbZH6r8U4cL\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x3b4f94e5480e7074e05b0d338d583569aef147f45365eb57daeb99f19fe817c3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2cc18b204ec94f80cd6b4876ea3c39dfb143fc4feff52e2a8d00ea72e6811644\",\"dweb:/ipfs/QmZHmZRvmJr8FxExBzKHSHYNZqcEgcgDcs4Z6gF1wPvBvj\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x84c73d8c4b67da41635f57fce2f30b8f04fc826ff6fb54c605de23d376f3403d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e6d636dff5c24916ae35a76695d741de2f14ee46876ea67c5393618bb7f9cf85\",\"dweb:/ipfs/QmUwxh8JeAqSFA8Z2qabVx3YWRSz7PJ9V2TQgnfctAgqPF\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x1c61ba57b783bfa408a4e208e80c1c117850d4d6c9f0e280263d3fcf57a8b2fd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5b920d5f0f37014035b6cbba16d898e52654122a0c004a3f75050af93b799496\",\"dweb:/ipfs/QmaneaTDVXbw5HfevR2vFwXWw95EKWcBq8yMgMyWJPHKVW\"]},\"contracts/src/interfaces/ILido.sol\":{\"keccak256\":\"0xfa52f448e1fd79b0e4651e2363b17ce2348f4e71162876a3110156c62515ba01\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e65eb5a672668796695e007b911b47225950741232ddffc0e48dd20049103bb9\",\"dweb:/ipfs/QmcvkSciHeXMfxEq1YirKksKxvHbLRsLdCv3tZUycPpoKr\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xcf3a4002275ea64e381f0a4aded3683e12960396ef79ba9dd153e2d1e395baad\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c9990491f7a5151fd696a45e6e5b0282a1dedf58521861dfb8c64db8cb60f5b6\",\"dweb:/ipfs/QmaywmqqQhz7DeYqZdoeykagr5h4ZhQRv6GasHqvdWqzSy\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xdb7f24663cff7307a468ef5e4c6f3e4d01ec0475157b3bbb3405890c3e9ab87d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7f631a9a395fba5b07c3d9308fccac18d5aa59d890efe23442ed2a4da9871ae8\",\"dweb:/ipfs/QmV2a4wiAPfWzSST3faYt58i2tqEyoqCLAJV8aNCdJyxVE\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0x476240ea4328bae9ab820b6f0f40afb11c74ee52d26bdbef69e4ece28dc10bdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://843f73cb21eaec4e26952fd6cbde5e6815e3a28c438df9e026e249200d25076f\",\"dweb:/ipfs/QmXzE7gsRKMaRGQfTDodA1RXxNxUuBj8RT7grTYjZUdbe6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x9b92d81f2f038fcd4bb5d069ab2b754efc153234c451d4ee4caa6d74aaca16b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8686fddc99564c6b6524ea68a6b7ff081a9988fc795fc13197bb59ddaa2041c6\",\"dweb:/ipfs/QmarJYJAgoH6Z4H1BmdPoRgqLubRu5S6NDXBNV2fDApPuW\"]},\"contracts/src/interfaces/IStETHHyperdriveRead.sol\":{\"keccak256\":\"0x459ec049f422b42b038a2b2e53e54a4b63b46c05f2873e801a6b37e350209fe1\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5ad059516850211b18bfe7e1ccf8fb8d8fd2f713a68de12c881ed07576b2117e\",\"dweb:/ipfs/Qma7feSKPKfeK4PsD95bf6eJNbwqerL7XAXP78tHaDQtUo\"]}},\"version\":1}","metadata":{"compiler":{"version":"0.8.19+commit.7dd6d404"},"language":"Solidity","output":{"abi":[{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address","name":"owner","type":"address"}],"stateMutability":"view","type":"function","name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}]},{"inputs":[],"stateMutability":"view","type":"function","name":"baseToken","outputs":[{"internalType":"address","name":"","type":"address"}]},{"inputs":[{"internalType":"uint256","name":"_checkpointTime","type":"uint256"}],"stateMutability":"view","type":"function","name":"getCheckpoint","outputs":[{"internalType":"struct IHyperdrive.Checkpoint","name":"","type":"tuple","components":[{"internalType":"uint128","name":"sharePrice","type":"uint128"}]}]},{"inputs":[{"internalType":"uint256","name":"_checkpointTime","type":"uint256"}],"stateMutability":"view","type":"function","name":"getCheckpointExposure","outputs":[{"internalType":"int256","name":"","type":"int256"}]},{"inputs":[],"stateMutability":"view","type":"function","name":"getMarketState","outputs":[{"internalType":"struct IHyperdrive.MarketState","name":"","type":"tuple","components":[{"internalType":"uint128","name":"shareReserves","type":"uint128"},{"internalType":"uint128","name":"bondReserves","type":"uint128"},{"internalType":"uint128","name":"longExposure","type":"uint128"},{"internalType":"uint128","name":"longsOutstanding","type":"uint128"},{"internalType":"int128","name":"shareAdjustment","type":"int128"},{"internalType":"uint128","name":"shortsOutstanding","type":"uint128"},{"internalType":"uint128","name":"longAverageMaturityTime","type":"uint128"},{"internalType":"uint128","name":"shortAverageMaturityTime","type":"uint128"},{"internalType":"bool","name":"isInitialized","type":"bool"},{"internalType":"bool","name":"isPaused","type":"bool"},{"internalType":"uint112","name":"zombieBaseProceeds","type":"uint112"},{"internalType":"uint128","name":"zombieShareReserves","type":"uint128"}]}]},{"inputs":[],"stateMutability":"view","type":"function","name":"getPoolConfig","outputs":[{"internalType":"struct IHyperdrive.PoolConfig","name":"","type":"tuple","components":[{"internalType":"contract IERC20","name":"baseToken","type":"address"},{"internalType":"address","name":"linkerFactory","type":"address"},{"internalType":"bytes32","name":"linkerCodeHash","type":"bytes32"},{"internalType":"uint256","name":"initialSharePrice","type":"uint256"},{"internalType":"uint256","name":"minimumShareReserves","type":"uint256"},{"internalType":"uint256","name":"minimumTransactionAmount","type":"uint256"},{"internalType":"uint256","name":"positionDuration","type":"uint256"},{"internalType":"uint256","name":"checkpointDuration","type":"uint256"},{"internalType":"uint256","name":"timeStretch","type":"uint256"},{"internalType":"address","name":"governance","type":"address"},{"internalType":"address","name":"feeCollector","type":"address"},{"internalType":"struct IHyperdrive.Fees","name":"fees","type":"tuple","components":[{"internalType":"uint256","name":"curve","type":"uint256"},{"internalType":"uint256","name":"flat","type":"uint256"},{"internalType":"uint256","name":"governanceLP","type":"uint256"},{"internalType":"uint256","name":"governanceZombie","type":"uint256"}]}]}]},{"inputs":[],"stateMutability":"view","type":"function","name":"getPoolInfo","outputs":[{"internalType":"struct IHyperdrive.PoolInfo","name":"","type":"tuple","components":[{"internalType":"uint256","name":"shareReserves","type":"uint256"},{"internalType":"int256","name":"shareAdjustment","type":"int256"},{"internalType":"uint256","name":"zombieBaseProceeds","type":"uint256"},{"internalType":"uint256","name":"zombieShareReserves","type":"uint256"},{"internalType":"uint256","name":"bondReserves","type":"uint256"},{"internalType":"uint256","name":"lpTotalSupply","type":"uint256"},{"internalType":"uint256","name":"sharePrice","type":"uint256"},{"internalType":"uint256","name":"longsOutstanding","type":"uint256"},{"internalType":"uint256","name":"longAverageMaturityTime","type":"uint256"},{"internalType":"uint256","name":"shortsOutstanding","type":"uint256"},{"internalType":"uint256","name":"shortAverageMaturityTime","type":"uint256"},{"internalType":"uint256","name":"withdrawalSharesReadyToWithdraw","type":"uint256"},{"internalType":"uint256","name":"withdrawalSharesProceeds","type":"uint256"},{"internalType":"uint256","name":"lpSharePrice","type":"uint256"},{"internalType":"uint256","name":"longExposure","type":"uint256"}]}]},{"inputs":[],"stateMutability":"view","type":"function","name":"getUncollectedGovernanceFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}]},{"inputs":[],"stateMutability":"view","type":"function","name":"getWithdrawPool","outputs":[{"internalType":"struct IHyperdrive.WithdrawPool","name":"","type":"tuple","components":[{"internalType":"uint128","name":"readyToWithdraw","type":"uint128"},{"internalType":"uint128","name":"proceeds","type":"uint128"}]}]},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"stateMutability":"view","type":"function","name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}]},{"inputs":[],"stateMutability":"view","type":"function","name":"lido","outputs":[{"internalType":"contract ILido","name":"","type":"address"}]},{"inputs":[{"internalType":"uint256[]","name":"_slots","type":"uint256[]"}],"stateMutability":"view","type":"function","name":"load","outputs":[{"internalType":"bytes32[]","name":"","type":"bytes32[]"}]},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"stateMutability":"view","type":"function","name":"name","outputs":[{"internalType":"string","name":"","type":"string"}]},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"stateMutability":"view","type":"function","name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}]},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"stateMutability":"view","type":"function","name":"perTokenApprovals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}]},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"stateMutability":"view","type":"function","name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}]},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"stateMutability":"view","type":"function","name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}]}],"devdoc":{"kind":"dev","methods":{},"version":1},"userdoc":{"kind":"user","methods":{},"version":1}},"settings":{"remappings":["aave-v3-core/=lib/aave-v3-core/","create3-factory/=lib/yield-daddy/lib/create3-factory/","ds-test/=lib/forge-std/lib/ds-test/src/","forge-std/=lib/forge-std/src/","solmate/=lib/solmate/src/","yield-daddy/=lib/yield-daddy/"],"optimizer":{"enabled":true,"runs":200},"metadata":{"bytecodeHash":"ipfs"},"compilationTarget":{"contracts/src/interfaces/IStETHHyperdriveRead.sol":"IStETHHyperdriveRead"},"libraries":{}},"sources":{"contracts/src/interfaces/IERC20.sol":{"keccak256":"0xfb57fe2ee4d8d1c6a8e2aa3b007da6f0e53d65388245b0b7d876234077ee95b4","urls":["bzz-raw://e4303c41b9752b51c6eaa9b16aa11e5bffb34fc80c5c8761302539cd5922ae36","dweb:/ipfs/QmZjVYBikfgPDX47hmbGJpG6kvm3Gyt6nKkFbZH6r8U4cL"],"license":"Apache-2.0"},"contracts/src/interfaces/IHyperdrive.sol":{"keccak256":"0x3b4f94e5480e7074e05b0d338d583569aef147f45365eb57daeb99f19fe817c3","urls":["bzz-raw://2cc18b204ec94f80cd6b4876ea3c39dfb143fc4feff52e2a8d00ea72e6811644","dweb:/ipfs/QmZHmZRvmJr8FxExBzKHSHYNZqcEgcgDcs4Z6gF1wPvBvj"],"license":"Apache-2.0"},"contracts/src/interfaces/IHyperdriveCore.sol":{"keccak256":"0x84c73d8c4b67da41635f57fce2f30b8f04fc826ff6fb54c605de23d376f3403d","urls":["bzz-raw://e6d636dff5c24916ae35a76695d741de2f14ee46876ea67c5393618bb7f9cf85","dweb:/ipfs/QmUwxh8JeAqSFA8Z2qabVx3YWRSz7PJ9V2TQgnfctAgqPF"],"license":"Apache-2.0"},"contracts/src/interfaces/IHyperdriveRead.sol":{"keccak256":"0x1c61ba57b783bfa408a4e208e80c1c117850d4d6c9f0e280263d3fcf57a8b2fd","urls":["bzz-raw://5b920d5f0f37014035b6cbba16d898e52654122a0c004a3f75050af93b799496","dweb:/ipfs/QmaneaTDVXbw5HfevR2vFwXWw95EKWcBq8yMgMyWJPHKVW"],"license":"Apache-2.0"},"contracts/src/interfaces/ILido.sol":{"keccak256":"0xfa52f448e1fd79b0e4651e2363b17ce2348f4e71162876a3110156c62515ba01","urls":["bzz-raw://e65eb5a672668796695e007b911b47225950741232ddffc0e48dd20049103bb9","dweb:/ipfs/QmcvkSciHeXMfxEq1YirKksKxvHbLRsLdCv3tZUycPpoKr"],"license":"Apache-2.0"},"contracts/src/interfaces/IMultiToken.sol":{"keccak256":"0xcf3a4002275ea64e381f0a4aded3683e12960396ef79ba9dd153e2d1e395baad","urls":["bzz-raw://c9990491f7a5151fd696a45e6e5b0282a1dedf58521861dfb8c64db8cb60f5b6","dweb:/ipfs/QmaywmqqQhz7DeYqZdoeykagr5h4ZhQRv6GasHqvdWqzSy"],"license":"Apache-2.0"},"contracts/src/interfaces/IMultiTokenCore.sol":{"keccak256":"0xdb7f24663cff7307a468ef5e4c6f3e4d01ec0475157b3bbb3405890c3e9ab87d","urls":["bzz-raw://7f631a9a395fba5b07c3d9308fccac18d5aa59d890efe23442ed2a4da9871ae8","dweb:/ipfs/QmV2a4wiAPfWzSST3faYt58i2tqEyoqCLAJV8aNCdJyxVE"],"license":"Apache-2.0"},"contracts/src/interfaces/IMultiTokenMetadata.sol":{"keccak256":"0x476240ea4328bae9ab820b6f0f40afb11c74ee52d26bdbef69e4ece28dc10bdb","urls":["bzz-raw://843f73cb21eaec4e26952fd6cbde5e6815e3a28c438df9e026e249200d25076f","dweb:/ipfs/QmXzE7gsRKMaRGQfTDodA1RXxNxUuBj8RT7grTYjZUdbe6"],"license":"Apache-2.0"},"contracts/src/interfaces/IMultiTokenRead.sol":{"keccak256":"0x9b92d81f2f038fcd4bb5d069ab2b754efc153234c451d4ee4caa6d74aaca16b4","urls":["bzz-raw://8686fddc99564c6b6524ea68a6b7ff081a9988fc795fc13197bb59ddaa2041c6","dweb:/ipfs/QmarJYJAgoH6Z4H1BmdPoRgqLubRu5S6NDXBNV2fDApPuW"],"license":"Apache-2.0"},"contracts/src/interfaces/IStETHHyperdriveRead.sol":{"keccak256":"0x459ec049f422b42b038a2b2e53e54a4b63b46c05f2873e801a6b37e350209fe1","urls":["bzz-raw://5ad059516850211b18bfe7e1ccf8fb8d8fd2f713a68de12c881ed07576b2117e","dweb:/ipfs/Qma7feSKPKfeK4PsD95bf6eJNbwqerL7XAXP78tHaDQtUo"],"license":"Apache-2.0"}},"version":1},"ast":{"absolutePath":"contracts/src/interfaces/IStETHHyperdriveRead.sol","id":6355,"exportedSymbols":{"IHyperdriveRead":[5950],"ILido":[6046],"IStETHHyperdriveRead":[6354]},"nodeType":"SourceUnit","src":"39:225:56","nodes":[{"id":6341,"nodeType":"PragmaDirective","src":"39:23:56","nodes":[],"literals":["solidity","0.8",".19"]},{"id":6343,"nodeType":"ImportDirective","src":"64:56:56","nodes":[],"absolutePath":"contracts/src/interfaces/IHyperdriveRead.sol","file":"./IHyperdriveRead.sol","nameLocation":"-1:-1:-1","scope":6355,"sourceUnit":5951,"symbolAliases":[{"foreign":{"id":6342,"name":"IHyperdriveRead","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":5950,"src":"73:15:56","typeDescriptions":{}},"nameLocation":"-1:-1:-1"}],"unitAlias":""},{"id":6345,"nodeType":"ImportDirective","src":"121:36:56","nodes":[],"absolutePath":"contracts/src/interfaces/ILido.sol","file":"./ILido.sol","nameLocation":"-1:-1:-1","scope":6355,"sourceUnit":6047,"symbolAliases":[{"foreign":{"id":6344,"name":"ILido","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6046,"src":"130:5:56","typeDescriptions":{}},"nameLocation":"-1:-1:-1"}],"unitAlias":""},{"id":6354,"nodeType":"ContractDefinition","src":"159:104:56","nodes":[{"id":6353,"nodeType":"FunctionDefinition","src":"215:46:56","nodes":[],"functionSelector":"23509a2d","implemented":false,"kind":"function","modifiers":[],"name":"lido","nameLocation":"224:4:56","parameters":{"id":6348,"nodeType":"ParameterList","parameters":[],"src":"228:2:56"},"returnParameters":{"id":6352,"nodeType":"ParameterList","parameters":[{"constant":false,"id":6351,"mutability":"mutable","name":"","nameLocation":"-1:-1:-1","nodeType":"VariableDeclaration","scope":6353,"src":"254:5:56","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_contract$_ILido_$6046","typeString":"contract ILido"},"typeName":{"id":6350,"nodeType":"UserDefinedTypeName","pathNode":{"id":6349,"name":"ILido","nameLocations":["254:5:56"],"nodeType":"IdentifierPath","referencedDeclaration":6046,"src":"254:5:56"},"referencedDeclaration":6046,"src":"254:5:56","typeDescriptions":{"typeIdentifier":"t_contract$_ILido_$6046","typeString":"contract ILido"}},"visibility":"internal"}],"src":"253:7:56"},"scope":6354,"stateMutability":"view","virtual":false,"visibility":"external"}],"abstract":false,"baseContracts":[{"baseName":{"id":6346,"name":"IHyperdriveRead","nameLocations":["193:15:56"],"nodeType":"IdentifierPath","referencedDeclaration":5950,"src":"193:15:56"},"id":6347,"nodeType":"InheritanceSpecifier","src":"193:15:56"}],"canonicalName":"IStETHHyperdriveRead","contractDependencies":[],"contractKind":"interface","fullyImplemented":false,"linearizedBaseContracts":[6354,5950,6309],"name":"IStETHHyperdriveRead","nameLocation":"169:20:56","scope":6355,"usedErrors":[]}],"license":"Apache-2.0"},"id":56} as const;