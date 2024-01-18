export const ILido = 
{"abi":[{"type":"function","name":"allowance","inputs":[{"name":"owner","type":"address","internalType":"address"},{"name":"spender","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"approve","inputs":[{"name":"spender","type":"address","internalType":"address"},{"name":"amount","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"nonpayable"},{"type":"function","name":"balanceOf","inputs":[{"name":"account","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"decimals","inputs":[],"outputs":[{"name":"","type":"uint8","internalType":"uint8"}],"stateMutability":"view"},{"type":"function","name":"getBufferedEther","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"getPooledEthByShares","inputs":[{"name":"_sharesAmount","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"getSharesByPooledEth","inputs":[{"name":"_ethAmount","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"getTotalPooledEther","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"getTotalShares","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"name","inputs":[],"outputs":[{"name":"","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"sharesOf","inputs":[{"name":"_account","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"submit","inputs":[{"name":"_referral","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"payable"},{"type":"function","name":"symbol","inputs":[],"outputs":[{"name":"","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"totalSupply","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"transfer","inputs":[{"name":"to","type":"address","internalType":"address"},{"name":"amount","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"nonpayable"},{"type":"function","name":"transferFrom","inputs":[{"name":"from","type":"address","internalType":"address"},{"name":"to","type":"address","internalType":"address"},{"name":"amount","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"nonpayable"},{"type":"function","name":"transferShares","inputs":[{"name":"_recipient","type":"address","internalType":"address"},{"name":"_sharesAmount","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable"},{"type":"function","name":"transferSharesFrom","inputs":[{"name":"_sender","type":"address","internalType":"address"},{"name":"_recipient","type":"address","internalType":"address"},{"name":"_sharesAmount","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable"},{"type":"event","name":"Approval","inputs":[{"name":"owner","type":"address","indexed":true,"internalType":"address"},{"name":"spender","type":"address","indexed":true,"internalType":"address"},{"name":"value","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"Transfer","inputs":[{"name":"from","type":"address","indexed":true,"internalType":"address"},{"name":"to","type":"address","indexed":true,"internalType":"address"},{"name":"value","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false}],"bytecode":{"object":"0x","sourceMap":"","linkReferences":{}},"deployedBytecode":{"object":"0x","sourceMap":"","linkReferences":{}},"methodIdentifiers":{"allowance(address,address)":"dd62ed3e","approve(address,uint256)":"095ea7b3","balanceOf(address)":"70a08231","decimals()":"313ce567","getBufferedEther()":"47b714e0","getPooledEthByShares(uint256)":"7a28fb88","getSharesByPooledEth(uint256)":"19208451","getTotalPooledEther()":"37cfdaca","getTotalShares()":"d5002f2e","name()":"06fdde03","sharesOf(address)":"f5eb42dc","submit(address)":"a1903eab","symbol()":"95d89b41","totalSupply()":"18160ddd","transfer(address,uint256)":"a9059cbb","transferFrom(address,address,uint256)":"23b872dd","transferShares(address,uint256)":"8fcb4e5b","transferSharesFrom(address,address,uint256)":"6d780459"},"rawMetadata":"{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getBufferedEther\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_sharesAmount\",\"type\":\"uint256\"}],\"name\":\"getPooledEthByShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_ethAmount\",\"type\":\"uint256\"}],\"name\":\"getSharesByPooledEth\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getTotalPooledEther\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getTotalShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"}],\"name\":\"sharesOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_referral\",\"type\":\"address\"}],\"name\":\"submit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_sharesAmount\",\"type\":\"uint256\"}],\"name\":\"transferShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_sharesAmount\",\"type\":\"uint256\"}],\"name\":\"transferSharesFrom\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/ILido.sol\":\"ILido\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfb57fe2ee4d8d1c6a8e2aa3b007da6f0e53d65388245b0b7d876234077ee95b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e4303c41b9752b51c6eaa9b16aa11e5bffb34fc80c5c8761302539cd5922ae36\",\"dweb:/ipfs/QmZjVYBikfgPDX47hmbGJpG6kvm3Gyt6nKkFbZH6r8U4cL\"]},\"contracts/src/interfaces/ILido.sol\":{\"keccak256\":\"0xfa52f448e1fd79b0e4651e2363b17ce2348f4e71162876a3110156c62515ba01\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e65eb5a672668796695e007b911b47225950741232ddffc0e48dd20049103bb9\",\"dweb:/ipfs/QmcvkSciHeXMfxEq1YirKksKxvHbLRsLdCv3tZUycPpoKr\"]}},\"version\":1}","metadata":{"compiler":{"version":"0.8.19+commit.7dd6d404"},"language":"Solidity","output":{"abi":[{"inputs":[{"internalType":"address","name":"owner","type":"address","indexed":true},{"internalType":"address","name":"spender","type":"address","indexed":true},{"internalType":"uint256","name":"value","type":"uint256","indexed":false}],"type":"event","name":"Approval","anonymous":false},{"inputs":[{"internalType":"address","name":"from","type":"address","indexed":true},{"internalType":"address","name":"to","type":"address","indexed":true},{"internalType":"uint256","name":"value","type":"uint256","indexed":false}],"type":"event","name":"Transfer","anonymous":false},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"stateMutability":"view","type":"function","name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}]},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"nonpayable","type":"function","name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}]},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"stateMutability":"view","type":"function","name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}]},{"inputs":[],"stateMutability":"view","type":"function","name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}]},{"inputs":[],"stateMutability":"view","type":"function","name":"getBufferedEther","outputs":[{"internalType":"uint256","name":"","type":"uint256"}]},{"inputs":[{"internalType":"uint256","name":"_sharesAmount","type":"uint256"}],"stateMutability":"view","type":"function","name":"getPooledEthByShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}]},{"inputs":[{"internalType":"uint256","name":"_ethAmount","type":"uint256"}],"stateMutability":"view","type":"function","name":"getSharesByPooledEth","outputs":[{"internalType":"uint256","name":"","type":"uint256"}]},{"inputs":[],"stateMutability":"view","type":"function","name":"getTotalPooledEther","outputs":[{"internalType":"uint256","name":"","type":"uint256"}]},{"inputs":[],"stateMutability":"view","type":"function","name":"getTotalShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}]},{"inputs":[],"stateMutability":"view","type":"function","name":"name","outputs":[{"internalType":"string","name":"","type":"string"}]},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"stateMutability":"view","type":"function","name":"sharesOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}]},{"inputs":[{"internalType":"address","name":"_referral","type":"address"}],"stateMutability":"payable","type":"function","name":"submit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}]},{"inputs":[],"stateMutability":"view","type":"function","name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}]},{"inputs":[],"stateMutability":"view","type":"function","name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}]},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"nonpayable","type":"function","name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}]},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"nonpayable","type":"function","name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}]},{"inputs":[{"internalType":"address","name":"_recipient","type":"address"},{"internalType":"uint256","name":"_sharesAmount","type":"uint256"}],"stateMutability":"nonpayable","type":"function","name":"transferShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}]},{"inputs":[{"internalType":"address","name":"_sender","type":"address"},{"internalType":"address","name":"_recipient","type":"address"},{"internalType":"uint256","name":"_sharesAmount","type":"uint256"}],"stateMutability":"nonpayable","type":"function","name":"transferSharesFrom","outputs":[{"internalType":"uint256","name":"","type":"uint256"}]}],"devdoc":{"kind":"dev","methods":{},"version":1},"userdoc":{"kind":"user","methods":{},"version":1}},"settings":{"remappings":["aave-v3-core/=lib/aave-v3-core/","create3-factory/=lib/yield-daddy/lib/create3-factory/","ds-test/=lib/forge-std/lib/ds-test/src/","forge-std/=lib/forge-std/src/","solmate/=lib/solmate/src/","yield-daddy/=lib/yield-daddy/"],"optimizer":{"enabled":true,"runs":200},"metadata":{"bytecodeHash":"ipfs"},"compilationTarget":{"contracts/src/interfaces/ILido.sol":"ILido"},"libraries":{}},"sources":{"contracts/src/interfaces/IERC20.sol":{"keccak256":"0xfb57fe2ee4d8d1c6a8e2aa3b007da6f0e53d65388245b0b7d876234077ee95b4","urls":["bzz-raw://e4303c41b9752b51c6eaa9b16aa11e5bffb34fc80c5c8761302539cd5922ae36","dweb:/ipfs/QmZjVYBikfgPDX47hmbGJpG6kvm3Gyt6nKkFbZH6r8U4cL"],"license":"Apache-2.0"},"contracts/src/interfaces/ILido.sol":{"keccak256":"0xfa52f448e1fd79b0e4651e2363b17ce2348f4e71162876a3110156c62515ba01","urls":["bzz-raw://e65eb5a672668796695e007b911b47225950741232ddffc0e48dd20049103bb9","dweb:/ipfs/QmcvkSciHeXMfxEq1YirKksKxvHbLRsLdCv3tZUycPpoKr"],"license":"Apache-2.0"}},"version":1},"ast":{"absolutePath":"contracts/src/interfaces/ILido.sol","id":6047,"exportedSymbols":{"IERC20":[4867],"ILido":[6046]},"nodeType":"SourceUnit","src":"39:923:48","nodes":[{"id":5978,"nodeType":"PragmaDirective","src":"39:23:48","nodes":[],"literals":["solidity","0.8",".19"]},{"id":5980,"nodeType":"ImportDirective","src":"64:38:48","nodes":[],"absolutePath":"contracts/src/interfaces/IERC20.sol","file":"./IERC20.sol","nameLocation":"-1:-1:-1","scope":6047,"sourceUnit":4868,"symbolAliases":[{"foreign":{"id":5979,"name":"IERC20","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":4867,"src":"73:6:48","typeDescriptions":{}},"nameLocation":"-1:-1:-1"}],"unitAlias":""},{"id":6046,"nodeType":"ContractDefinition","src":"104:857:48","nodes":[{"id":5989,"nodeType":"FunctionDefinition","src":"136:70:48","nodes":[],"functionSelector":"a1903eab","implemented":false,"kind":"function","modifiers":[],"name":"submit","nameLocation":"145:6:48","parameters":{"id":5985,"nodeType":"ParameterList","parameters":[{"constant":false,"id":5984,"mutability":"mutable","name":"_referral","nameLocation":"160:9:48","nodeType":"VariableDeclaration","scope":5989,"src":"152:17:48","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":5983,"name":"address","nodeType":"ElementaryTypeName","src":"152:7:48","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"visibility":"internal"}],"src":"151:19:48"},"returnParameters":{"id":5988,"nodeType":"ParameterList","parameters":[{"constant":false,"id":5987,"mutability":"mutable","name":"","nameLocation":"-1:-1:-1","nodeType":"VariableDeclaration","scope":5989,"src":"197:7:48","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":5986,"name":"uint256","nodeType":"ElementaryTypeName","src":"197:7:48","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"visibility":"internal"}],"src":"196:9:48"},"scope":6046,"stateMutability":"payable","virtual":false,"visibility":"external"},{"id":5998,"nodeType":"FunctionDefinition","src":"212:116:48","nodes":[],"functionSelector":"8fcb4e5b","implemented":false,"kind":"function","modifiers":[],"name":"transferShares","nameLocation":"221:14:48","parameters":{"id":5994,"nodeType":"ParameterList","parameters":[{"constant":false,"id":5991,"mutability":"mutable","name":"_recipient","nameLocation":"253:10:48","nodeType":"VariableDeclaration","scope":5998,"src":"245:18:48","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":5990,"name":"address","nodeType":"ElementaryTypeName","src":"245:7:48","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"visibility":"internal"},{"constant":false,"id":5993,"mutability":"mutable","name":"_sharesAmount","nameLocation":"281:13:48","nodeType":"VariableDeclaration","scope":5998,"src":"273:21:48","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":5992,"name":"uint256","nodeType":"ElementaryTypeName","src":"273:7:48","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"visibility":"internal"}],"src":"235:65:48"},"returnParameters":{"id":5997,"nodeType":"ParameterList","parameters":[{"constant":false,"id":5996,"mutability":"mutable","name":"","nameLocation":"-1:-1:-1","nodeType":"VariableDeclaration","scope":5998,"src":"319:7:48","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":5995,"name":"uint256","nodeType":"ElementaryTypeName","src":"319:7:48","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"visibility":"internal"}],"src":"318:9:48"},"scope":6046,"stateMutability":"nonpayable","virtual":false,"visibility":"external"},{"id":6009,"nodeType":"FunctionDefinition","src":"334:145:48","nodes":[],"functionSelector":"6d780459","implemented":false,"kind":"function","modifiers":[],"name":"transferSharesFrom","nameLocation":"343:18:48","parameters":{"id":6005,"nodeType":"ParameterList","parameters":[{"constant":false,"id":6000,"mutability":"mutable","name":"_sender","nameLocation":"379:7:48","nodeType":"VariableDeclaration","scope":6009,"src":"371:15:48","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":5999,"name":"address","nodeType":"ElementaryTypeName","src":"371:7:48","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"visibility":"internal"},{"constant":false,"id":6002,"mutability":"mutable","name":"_recipient","nameLocation":"404:10:48","nodeType":"VariableDeclaration","scope":6009,"src":"396:18:48","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":6001,"name":"address","nodeType":"ElementaryTypeName","src":"396:7:48","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"visibility":"internal"},{"constant":false,"id":6004,"mutability":"mutable","name":"_sharesAmount","nameLocation":"432:13:48","nodeType":"VariableDeclaration","scope":6009,"src":"424:21:48","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":6003,"name":"uint256","nodeType":"ElementaryTypeName","src":"424:7:48","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"visibility":"internal"}],"src":"361:90:48"},"returnParameters":{"id":6008,"nodeType":"ParameterList","parameters":[{"constant":false,"id":6007,"mutability":"mutable","name":"","nameLocation":"-1:-1:-1","nodeType":"VariableDeclaration","scope":6009,"src":"470:7:48","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":6006,"name":"uint256","nodeType":"ElementaryTypeName","src":"470:7:48","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"visibility":"internal"}],"src":"469:9:48"},"scope":6046,"stateMutability":"nonpayable","virtual":false,"visibility":"external"},{"id":6016,"nodeType":"FunctionDefinition","src":"485:96:48","nodes":[],"functionSelector":"19208451","implemented":false,"kind":"function","modifiers":[],"name":"getSharesByPooledEth","nameLocation":"494:20:48","parameters":{"id":6012,"nodeType":"ParameterList","parameters":[{"constant":false,"id":6011,"mutability":"mutable","name":"_ethAmount","nameLocation":"532:10:48","nodeType":"VariableDeclaration","scope":6016,"src":"524:18:48","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":6010,"name":"uint256","nodeType":"ElementaryTypeName","src":"524:7:48","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"visibility":"internal"}],"src":"514:34:48"},"returnParameters":{"id":6015,"nodeType":"ParameterList","parameters":[{"constant":false,"id":6014,"mutability":"mutable","name":"","nameLocation":"-1:-1:-1","nodeType":"VariableDeclaration","scope":6016,"src":"572:7:48","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":6013,"name":"uint256","nodeType":"ElementaryTypeName","src":"572:7:48","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"visibility":"internal"}],"src":"571:9:48"},"scope":6046,"stateMutability":"view","virtual":false,"visibility":"external"},{"id":6023,"nodeType":"FunctionDefinition","src":"587:99:48","nodes":[],"functionSelector":"7a28fb88","implemented":false,"kind":"function","modifiers":[],"name":"getPooledEthByShares","nameLocation":"596:20:48","parameters":{"id":6019,"nodeType":"ParameterList","parameters":[{"constant":false,"id":6018,"mutability":"mutable","name":"_sharesAmount","nameLocation":"634:13:48","nodeType":"VariableDeclaration","scope":6023,"src":"626:21:48","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":6017,"name":"uint256","nodeType":"ElementaryTypeName","src":"626:7:48","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"visibility":"internal"}],"src":"616:37:48"},"returnParameters":{"id":6022,"nodeType":"ParameterList","parameters":[{"constant":false,"id":6021,"mutability":"mutable","name":"","nameLocation":"-1:-1:-1","nodeType":"VariableDeclaration","scope":6023,"src":"677:7:48","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":6020,"name":"uint256","nodeType":"ElementaryTypeName","src":"677:7:48","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"visibility":"internal"}],"src":"676:9:48"},"scope":6046,"stateMutability":"view","virtual":false,"visibility":"external"},{"id":6028,"nodeType":"FunctionDefinition","src":"692:60:48","nodes":[],"functionSelector":"47b714e0","implemented":false,"kind":"function","modifiers":[],"name":"getBufferedEther","nameLocation":"701:16:48","parameters":{"id":6024,"nodeType":"ParameterList","parameters":[],"src":"717:2:48"},"returnParameters":{"id":6027,"nodeType":"ParameterList","parameters":[{"constant":false,"id":6026,"mutability":"mutable","name":"","nameLocation":"-1:-1:-1","nodeType":"VariableDeclaration","scope":6028,"src":"743:7:48","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":6025,"name":"uint256","nodeType":"ElementaryTypeName","src":"743:7:48","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"visibility":"internal"}],"src":"742:9:48"},"scope":6046,"stateMutability":"view","virtual":false,"visibility":"external"},{"id":6033,"nodeType":"FunctionDefinition","src":"758:63:48","nodes":[],"functionSelector":"37cfdaca","implemented":false,"kind":"function","modifiers":[],"name":"getTotalPooledEther","nameLocation":"767:19:48","parameters":{"id":6029,"nodeType":"ParameterList","parameters":[],"src":"786:2:48"},"returnParameters":{"id":6032,"nodeType":"ParameterList","parameters":[{"constant":false,"id":6031,"mutability":"mutable","name":"","nameLocation":"-1:-1:-1","nodeType":"VariableDeclaration","scope":6033,"src":"812:7:48","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":6030,"name":"uint256","nodeType":"ElementaryTypeName","src":"812:7:48","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"visibility":"internal"}],"src":"811:9:48"},"scope":6046,"stateMutability":"view","virtual":false,"visibility":"external"},{"id":6038,"nodeType":"FunctionDefinition","src":"827:58:48","nodes":[],"functionSelector":"d5002f2e","implemented":false,"kind":"function","modifiers":[],"name":"getTotalShares","nameLocation":"836:14:48","parameters":{"id":6034,"nodeType":"ParameterList","parameters":[],"src":"850:2:48"},"returnParameters":{"id":6037,"nodeType":"ParameterList","parameters":[{"constant":false,"id":6036,"mutability":"mutable","name":"","nameLocation":"-1:-1:-1","nodeType":"VariableDeclaration","scope":6038,"src":"876:7:48","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":6035,"name":"uint256","nodeType":"ElementaryTypeName","src":"876:7:48","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"visibility":"internal"}],"src":"875:9:48"},"scope":6046,"stateMutability":"view","virtual":false,"visibility":"external"},{"id":6045,"nodeType":"FunctionDefinition","src":"891:68:48","nodes":[],"functionSelector":"f5eb42dc","implemented":false,"kind":"function","modifiers":[],"name":"sharesOf","nameLocation":"900:8:48","parameters":{"id":6041,"nodeType":"ParameterList","parameters":[{"constant":false,"id":6040,"mutability":"mutable","name":"_account","nameLocation":"917:8:48","nodeType":"VariableDeclaration","scope":6045,"src":"909:16:48","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":6039,"name":"address","nodeType":"ElementaryTypeName","src":"909:7:48","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"visibility":"internal"}],"src":"908:18:48"},"returnParameters":{"id":6044,"nodeType":"ParameterList","parameters":[{"constant":false,"id":6043,"mutability":"mutable","name":"","nameLocation":"-1:-1:-1","nodeType":"VariableDeclaration","scope":6045,"src":"950:7:48","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":6042,"name":"uint256","nodeType":"ElementaryTypeName","src":"950:7:48","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"visibility":"internal"}],"src":"949:9:48"},"scope":6046,"stateMutability":"view","virtual":false,"visibility":"external"}],"abstract":false,"baseContracts":[{"baseName":{"id":5981,"name":"IERC20","nameLocations":["123:6:48"],"nodeType":"IdentifierPath","referencedDeclaration":4867,"src":"123:6:48"},"id":5982,"nodeType":"InheritanceSpecifier","src":"123:6:48"}],"canonicalName":"ILido","contractDependencies":[],"contractKind":"interface","fullyImplemented":false,"linearizedBaseContracts":[6046,4867],"name":"ILido","nameLocation":"114:5:48","scope":6047,"usedErrors":[]}],"license":"Apache-2.0"},"id":48} as const;
