const a0_0x3a4bc8=a0_0x5af6;(function(_0x3a4505,_0x4c39b0){const _0x429e8c=a0_0x5af6,_0x10a4a2=_0x3a4505();while(!![]){try{const _0x449d14=parseInt(_0x429e8c(0xe1))/0x1+-parseInt(_0x429e8c(0x13d))/0x2*(-parseInt(_0x429e8c(0xc0))/0x3)+-parseInt(_0x429e8c(0xfb))/0x4*(parseInt(_0x429e8c(0x13f))/0x5)+-parseInt(_0x429e8c(0x12a))/0x6+-parseInt(_0x429e8c(0xba))/0x7+parseInt(_0x429e8c(0xda))/0x8*(-parseInt(_0x429e8c(0xf9))/0x9)+-parseInt(_0x429e8c(0x10c))/0xa*(-parseInt(_0x429e8c(0x102))/0xb);if(_0x449d14===_0x4c39b0)break;else _0x10a4a2['push'](_0x10a4a2['shift']());}catch(_0x358584){_0x10a4a2['push'](_0x10a4a2['shift']());}}}(a0_0x2af7,0x6c02c));const axios=require(a0_0x3a4bc8(0x118)),chalk=require(a0_0x3a4bc8(0xcb)),cfonts=require(a0_0x3a4bc8(0x138)),{HttpsProxyAgent}=require(a0_0x3a4bc8(0xd2)),{SocksProxyAgent}=require(a0_0x3a4bc8(0xe3)),readline=require(a0_0x3a4bc8(0xe6)),ethers=require(a0_0x3a4bc8(0x126)),fs=require('fs'),path=require(a0_0x3a4bc8(0x10f)),https=require('https'),CONTRACT_ADDRESS=a0_0x3a4bc8(0x104),RPC_URL=a0_0x3a4bc8(0x108),CHECK_INTERVAL=0x1388,RELOG_INTERVAL=0xf*0x3c*0x3e8,LOG_FILE=path[a0_0x3a4bc8(0x110)](__dirname,'claim-log.txt'),TOKENS_FILE=path[a0_0x3a4bc8(0x110)](__dirname,'tokens.txt'),PROXY_FILE=path[a0_0x3a4bc8(0x110)](__dirname,a0_0x3a4bc8(0x100)),WALLETS_FILE=path[a0_0x3a4bc8(0x110)](__dirname,a0_0x3a4bc8(0x122)),ABI=[{'inputs':[{'internalType':a0_0x3a4bc8(0x12f),'name':a0_0x3a4bc8(0xcd),'type':a0_0x3a4bc8(0x12f)},{'internalType':'uint256','name':a0_0x3a4bc8(0x11c),'type':'uint256'},{'internalType':a0_0x3a4bc8(0x12b),'name':'signature','type':'bytes'}],'name':a0_0x3a4bc8(0x13a),'outputs':[],'stateMutability':a0_0x3a4bc8(0xcf),'type':a0_0x3a4bc8(0x130)}];let isClaimInProgress=![],currentProxy=null,authToken='',userNickname='',userLevel=0x0,userExperience=0x0,userIsBanned=![],currentPointsBalance=0x0,proxies=[],proxyIndex=0x0;const provider=new ethers[(a0_0x3a4bc8(0xe0))][(a0_0x3a4bc8(0xf5))](RPC_URL),rl=readline[a0_0x3a4bc8(0xc9)]({'input':process[a0_0x3a4bc8(0xc3)],'output':process[a0_0x3a4bc8(0xf2)]});function a0_0x5af6(_0x30349b,_0x564b4c){const _0x2af768=a0_0x2af7();return a0_0x5af6=function(_0x5af674,_0x31f2c8){_0x5af674=_0x5af674-0xb9;let _0x54715a=_0x2af768[_0x5af674];return _0x54715a;},a0_0x5af6(_0x30349b,_0x564b4c);}function logMessage(_0x2117fb,_0x24ae61=!![]){const _0xa0080e=a0_0x3a4bc8,_0x3c57d3=new Date()[_0xa0080e(0x11b)](),_0x5dc9f9='['+_0x3c57d3+']\x20'+_0x2117fb+'\x0a';if(_0x24ae61)console[_0xa0080e(0xf8)](chalk[_0xa0080e(0xcc)](_0xa0080e(0xde)+_0x3c57d3+']\x20'+_0x2117fb));fs[_0xa0080e(0x120)](LOG_FILE,_0x5dc9f9);}function clearConsole(){const _0x153ea1=a0_0x3a4bc8;process['stdout'][_0x153ea1(0x13b)]('\x1bc');}function displayBanner(){const _0x9a3b9e=a0_0x3a4bc8;clearConsole(),cfonts[_0x9a3b9e(0xf6)](_0x9a3b9e(0xd6),{'font':_0x9a3b9e(0xe2),'align':'center','colors':[_0x9a3b9e(0xcc),_0x9a3b9e(0x12c)],'background':_0x9a3b9e(0xd8),'letterSpacing':0x1,'lineHeight':0x1,'space':!![]}),console['log'](chalk['cyan']('✨\x20Script\x20coded\x20by\x20-\x20@balveerxyz\x20|\x20Channel\x20Tele:\x20t.me/airdroplocked\x20|\x20Auto\x20Relog\x20Clash\x20of\x20Coins\x20✨\x0a'));}function loadProxies(){const _0x362bc9=a0_0x3a4bc8;if(!fs[_0x362bc9(0x127)](PROXY_FILE))return[];return fs[_0x362bc9(0x12e)](PROXY_FILE,'utf8')[_0x362bc9(0xdc)]('\x0a')[_0x362bc9(0x13c)](_0x5d654e=>_0x5d654e[_0x362bc9(0x125)]());}function getNextProxy(){const _0x4cecdc=a0_0x3a4bc8;if(proxyIndex>=proxies[_0x4cecdc(0xe8)])return logMessage(_0x4cecdc(0xd5)),null;return currentProxy=proxies[proxyIndex],proxyIndex++,logMessage(_0x4cecdc(0x132)+currentProxy),currentProxy;}function setupProxy(_0x205374){const _0x18df4b=a0_0x3a4bc8;if(!_0x205374)return null;const _0x41f280={'rejectUnauthorized':![]};if(_0x205374[_0x18df4b(0xd4)](_0x18df4b(0x116)))return new HttpsProxyAgent(_0x205374,_0x41f280);if(_0x205374[_0x18df4b(0xd4)](_0x18df4b(0x105)))return new SocksProxyAgent(_0x205374,_0x41f280);return null;}async function loadWallets(){const _0x3337a4=a0_0x3a4bc8;if(!fs[_0x3337a4(0x127)](WALLETS_FILE))throw new Error('wallets.json\x20not\x20found!');const _0x741204=JSON[_0x3337a4(0xfa)](fs['readFileSync'](WALLETS_FILE,_0x3337a4(0xfd)));return _0x741204[0x0];}async function getSIWENonce(_0x27a452){const _0x2eb666=a0_0x3a4bc8;try{const _0x45d175=await loadWallets(),_0x22e954=await axios[_0x2eb666(0x114)](_0x2eb666(0x128),{'address':_0x45d175[_0x2eb666(0xdf)]},{'headers':{'content-type':_0x2eb666(0xf0),'privy-app-id':_0x2eb666(0x11e),'privy-client':'react-auth:2.6.2','origin':'https://clashofcoins.com','referer':_0x2eb666(0xe9)},'httpsAgent':_0x27a452||new https[(_0x2eb666(0xc2))]({'rejectUnauthorized':![]})});if(!_0x22e954[_0x2eb666(0x121)]['nonce'])throw new Error(_0x2eb666(0xd3));return _0x22e954['data']['nonce'];}catch(_0x105a0a){logMessage(_0x2eb666(0x10d)+_0x105a0a[_0x2eb666(0x137)]);if(_0x105a0a[_0x2eb666(0xed)])logMessage(_0x2eb666(0x103)+JSON[_0x2eb666(0xce)](_0x105a0a[_0x2eb666(0xed)][_0x2eb666(0x121)]),![]);throw _0x105a0a;}}async function relogin(_0x3e9bbd){const _0x1a98e1=a0_0x3a4bc8;let _0x433262=currentProxy?setupProxy(currentProxy):null;while(!![]){try{const _0x3fb716=await getSIWENonce(_0x433262),_0xdf5dc1=_0x1a98e1(0xd9)+_0x3e9bbd[_0x1a98e1(0xdf)]+'\x0a\x0aBy\x20signing,\x20you\x20are\x20proving\x20you\x20own\x20this\x20wallet\x20and\x20logging\x20in.\x20This\x20does\x20not\x20initiate\x20a\x20transaction\x20or\x20cost\x20any\x20fees.\x0a\x0aURI:\x20https://clashofcoins.com\x0aVersion:\x201\x0aChain\x20ID:\x201\x0aNonce:\x20'+_0x3fb716+'\x0aIssued\x20At:\x20'+new Date()[_0x1a98e1(0x11b)]()+_0x1a98e1(0xea),_0x2b18d9=new ethers[(_0x1a98e1(0x136))](_0x3e9bbd['privateKey']),_0x37fbf6=await _0x2b18d9[_0x1a98e1(0xbe)](_0xdf5dc1),_0x1c8394={'chainId':'eip155:1','connectorType':'injected','message':_0xdf5dc1,'mode':_0x1a98e1(0x109),'signature':_0x37fbf6,'walletClientType':'metamask'},_0xb9b40d=await axios[_0x1a98e1(0x114)]('https://auth.privy.io/api/v1/siwe/authenticate',_0x1c8394,{'headers':{'content-type':_0x1a98e1(0xf0),'privy-app-id':_0x1a98e1(0x11e),'privy-client':'react-auth:2.6.2','origin':_0x1a98e1(0xf1),'referer':'https://clashofcoins.com/'},'httpsAgent':_0x433262||new https['Agent']({'rejectUnauthorized':![]})});authToken=_0xb9b40d[_0x1a98e1(0x121)][_0x1a98e1(0xc1)],fs[_0x1a98e1(0xbb)](TOKENS_FILE,authToken),logMessage('🎉\x20Successfully\x20relogged\x20and\x20got\x20fresh\x20token!'),console[_0x1a98e1(0xf8)](chalk[_0x1a98e1(0x10e)]('✅\x20Fresh\x20Token\x20Saved:\x20'+authToken[_0x1a98e1(0xff)](0x0,0x14)+_0x1a98e1(0x106)));break;}catch(_0x3dde6e){logMessage(_0x1a98e1(0x12d)+_0x3dde6e[_0x1a98e1(0x137)]);if(_0x3dde6e[_0x1a98e1(0xed)])logMessage('Server\x20response:\x20'+JSON[_0x1a98e1(0xce)](_0x3dde6e[_0x1a98e1(0xed)][_0x1a98e1(0x121)]),![]);if(currentProxy&&proxyIndex<proxies[_0x1a98e1(0xe8)])_0x433262=setupProxy(getNextProxy());else throw _0x3dde6e;}}}async function getUserProfile(){const _0xc9cf9e=a0_0x3a4bc8;try{const _0xef5cf9=currentProxy?setupProxy(currentProxy):null,_0x1e0438=await axios[_0xc9cf9e(0x134)](_0xc9cf9e(0x119),{},{'headers':{'authorization':authToken,'content-type':'application/json'},'httpsAgent':_0xef5cf9||new https[(_0xc9cf9e(0xc2))]({'rejectUnauthorized':![]})}),_0xeb28c0=await axios[_0xc9cf9e(0x13e)]('https://api.clashofcoins.co/api/user/points',{'headers':{'authorization':authToken,'content-type':_0xc9cf9e(0xf0)},'httpsAgent':_0xef5cf9||new https[(_0xc9cf9e(0xc2))]({'rejectUnauthorized':![]})});userNickname=_0x1e0438[_0xc9cf9e(0x121)][_0xc9cf9e(0x113)]||_0xc9cf9e(0xc4),userLevel=_0x1e0438[_0xc9cf9e(0x121)][_0xc9cf9e(0xec)]||0x0,userExperience=_0x1e0438[_0xc9cf9e(0x121)][_0xc9cf9e(0x117)]||0x0,userIsBanned=_0x1e0438[_0xc9cf9e(0x121)][_0xc9cf9e(0xfe)]||![],currentPointsBalance=_0xeb28c0[_0xc9cf9e(0x121)]||0x0,logMessage(_0xc9cf9e(0x124)+userNickname+_0xc9cf9e(0x131)+userLevel+_0xc9cf9e(0x139)+userExperience+',\x20Points:\x20'+currentPointsBalance);}catch(_0x5a5148){logMessage(_0xc9cf9e(0xf4)+_0x5a5148[_0xc9cf9e(0x137)]);}}async function checkForRewards(){const _0x3680eb=a0_0x3a4bc8;try{await getUserProfile();if(isClaimInProgress)return displayCountdown(_0x3680eb(0xe4));const _0x21ca22=currentProxy?setupProxy(currentProxy):null,_0x3d668f=await axios[_0x3680eb(0x13e)]('https://api.clashofcoins.co/api/game-server/gamedrop',{'headers':{'authorization':authToken,'content-type':_0x3680eb(0xf0)},'httpsAgent':_0x21ca22||new https[(_0x3680eb(0xc2))]({'rejectUnauthorized':![]})}),_0x433fcd=_0x3d668f[_0x3680eb(0x121)];_0x433fcd[_0x3680eb(0x10a)]&&!isClaimInProgress?(displayReadyToClaim(),await claimRewards()):displayCountdown(_0x433fcd['formattedTimeUntilNextClaim']||_0x3680eb(0xd7));}catch(_0x53bd07){logMessage(_0x3680eb(0x129)+_0x53bd07[_0x3680eb(0x137)]);}}async function claimRewards(){const _0x542c71=a0_0x3a4bc8;if(isClaimInProgress)return;isClaimInProgress=!![];try{const _0x6e0285=await loadWallets(),_0x184407=new ethers['Wallet'](_0x6e0285[_0x542c71(0xb9)],provider),_0x3c22eb=new ethers[(_0x542c71(0x115))](CONTRACT_ADDRESS,ABI,_0x184407),_0x2bd826=currentProxy?setupProxy(currentProxy):null,_0x2c3abe=await axios['put'](_0x542c71(0xfc),{},{'headers':{'authorization':authToken,'content-type':_0x542c71(0xf0)},'httpsAgent':_0x2bd826||new https[(_0x542c71(0xc2))]({'rejectUnauthorized':![]})}),{points:_0x2d3203,coins:_0x15fe2c,signature:_0x489107}=_0x2c3abe[_0x542c71(0x121)];if(!_0x2d3203||!_0x15fe2c||!_0x489107)throw new Error(_0x542c71(0x101));const _0x13b8f2=await provider[_0x542c71(0x107)](),_0x682429=await _0x3c22eb[_0x542c71(0x13a)](_0x2d3203,_0x15fe2c,_0x489107,{'gasLimit':0x249f0,'gasPrice':_0x13b8f2[_0x542c71(0xee)](0x78)[_0x542c71(0xc7)](0x64)});logMessage('🚀\x20Transaction\x20sent!\x20Hash:\x20'+_0x682429[_0x542c71(0x11f)]);const _0x41ecd0=await _0x682429[_0x542c71(0xc5)](0x1);logMessage(_0x542c71(0xe5)+_0x41ecd0['gasUsed'][_0x542c71(0x10b)]()),console[_0x542c71(0xf8)](chalk[_0x542c71(0x10e)]('🎉\x20Claim\x20successful!\x20Points:\x20'+_0x2d3203+_0x542c71(0x11a)+_0x15fe2c)),await getUserProfile();}catch(_0x519df0){logMessage(_0x542c71(0xf3)+_0x519df0[_0x542c71(0x137)]);}finally{isClaimInProgress=![];}}function a0_0x2af7(){const _0x1a7858=['write','filter','629794lvBDaB','get','5Axogkb','privateKey','20608MwPVcw','writeFileSync','exit','red','signMessage','👤\x20Nickname:\x20','3JFFGkn','token','Agent','stdin','Unknown','wait','YES','div','✅\x20Using\x20proxy:\x20','createInterface','🚫\x20Banned:\x20','chalk','yellow','points','stringify','nonpayable','💰\x20Points:\x20','\x20(XP:\x20','http-proxy-agent','No\x20nonce\x20received','startsWith','❌\x20No\x20more\x20proxies\x20available!','Airdrop\x20888','Checking...','transparent','clashofcoins.com\x20wants\x20you\x20to\x20sign\x20in\x20with\x20your\x20Ethereum\x20account:\x0a','80EJRmVR','📈\x20Level:\x20','split','🎁\x20Rewards\x20Available!\x20Claiming\x20now...','📝\x20[','address','providers','490385HMAcyH','block','socks-proxy-agent','⏳\x20Waiting\x20for\x20transaction...','✅\x20Claim\x20confirmed!\x20Gas\x20used:\x20','readline','🔄\x20Auto\x20relogging\x20for\x20fresh\x20token...','length','https://clashofcoins.com/','\x0aResources:\x0a-\x20https://privy.io','toLowerCase','level','response','mul','🌐\x20Mau\x20menggunakan\x20proxy?\x20(y/n):\x20','application/json','https://clashofcoins.com','stdout','❌\x20Claim\x20failed:\x20','❌\x20Error\x20fetching\x20profile:\x20','JsonRpcProvider','say','🌐\x20Proxy:\x20','log','201843bAeFMW','parse','1036636aqTsJu','https://api.clashofcoins.co/api/gamedrops/claim','utf8','isBanned','slice','proxy.txt','Missing\x20claim\x20data','174977UUnJcx','Server\x20response:\x20','0x0fbBBd928EA4eDDd2EAfF51D4D412a3b65452F40','socks5://','...','getGasPrice','https://mainnet.base.org/','login-or-sign-up','canClaim','toString','110jVzJfw','❌\x20Failed\x20to\x20get\x20SIWE\x20nonce:\x20','green','path','join','magenta','🕒\x20Next\x20claim:\x20','nickname','post','Contract','http://','experience','axios','https://api.clashofcoins.co/api/user',',\x20Coins:\x20','toISOString','coins','catch','cm2tj674t004hp714qtb6f0zr','hash','appendFileSync','data','wallets.json','⚠️\x20Running\x20without\x20proxy','👤\x20Profile\x20updated\x20-\x20','trim','ethers','existsSync','https://auth.privy.io/api/v1/siwe/init','❌\x20Error\x20checking\x20rewards:\x20','308844HoDIPM','bytes','cyan','❌\x20Relogin\x20failed:\x20','readFileSync','uint256','function',',\x20Level:\x20','🔄\x20Switching\x20to\x20proxy:\x20','⏳\x20Bot\x20is\x20running...\x20Press\x20Ctrl+C\x20to\x20stop','put','blue','Wallet','message','cfonts',',\x20XP:\x20','claimRewards'];a0_0x2af7=function(){return _0x1a7858;};return a0_0x2af7();}function displayCountdown(_0x1c9a67){const _0x3c70ce=a0_0x3a4bc8;displayBanner(),console[_0x3c70ce(0xf8)](chalk[_0x3c70ce(0x12c)](_0x3c70ce(0x112)+_0x1c9a67)),console[_0x3c70ce(0xf8)](chalk[_0x3c70ce(0xcc)](_0x3c70ce(0xbf)+userNickname)),console[_0x3c70ce(0xf8)](chalk[_0x3c70ce(0x10e)](_0x3c70ce(0xdb)+userLevel+_0x3c70ce(0xd1)+userExperience+')')),console['log'](chalk[_0x3c70ce(0x111)]('💰\x20Points:\x20'+currentPointsBalance)),console['log'](chalk['red'](_0x3c70ce(0xca)+(userIsBanned?_0x3c70ce(0xc6):'NO')));if(currentProxy)console['log'](chalk[_0x3c70ce(0x135)]('🌐\x20Proxy:\x20'+currentProxy));console[_0x3c70ce(0xf8)](chalk[_0x3c70ce(0x12c)](_0x3c70ce(0x133)));}function displayReadyToClaim(){const _0x671a01=a0_0x3a4bc8;displayBanner(),console['log'](chalk[_0x671a01(0x10e)](_0x671a01(0xdd))),console[_0x671a01(0xf8)](chalk[_0x671a01(0xcc)](_0x671a01(0xbf)+userNickname)),console[_0x671a01(0xf8)](chalk['green'](_0x671a01(0xdb)+userLevel+'\x20(XP:\x20'+userExperience+')')),console['log'](chalk[_0x671a01(0x111)](_0x671a01(0xd0)+currentPointsBalance)),console['log'](chalk[_0x671a01(0xbd)](_0x671a01(0xca)+(userIsBanned?_0x671a01(0xc6):'NO')));if(currentProxy)console[_0x671a01(0xf8)](chalk[_0x671a01(0x135)](_0x671a01(0xf7)+currentProxy));}async function main(){const _0x59bf29=a0_0x3a4bc8;displayBanner(),rl['question'](chalk[_0x59bf29(0x12c)](_0x59bf29(0xef)),async _0x53c245=>{const _0x36470f=_0x59bf29;proxies=loadProxies();_0x53c245[_0x36470f(0xeb)]()==='y'&&proxies[_0x36470f(0xe8)]?(currentProxy=getNextProxy(),console['log'](chalk[_0x36470f(0x135)](_0x36470f(0xc8)+currentProxy))):console[_0x36470f(0xf8)](chalk[_0x36470f(0xcc)](_0x36470f(0x123)));try{const _0x216d5f=await loadWallets();await relogin(_0x216d5f),await checkForRewards(),setInterval(async()=>{const _0x32c176=_0x36470f;logMessage(_0x32c176(0xe7)),proxyIndex=0x0;if(proxies[_0x32c176(0xe8)])currentProxy=getNextProxy();await relogin(_0x216d5f);},RELOG_INTERVAL),setInterval(checkForRewards,CHECK_INTERVAL);}catch(_0x485b2d){logMessage('❌\x20Initialization\x20error:\x20'+_0x485b2d[_0x36470f(0x137)]),process['exit'](0x1);}});}main()[a0_0x3a4bc8(0x11d)](_0x2586ee=>{const _0x3d438d=a0_0x3a4bc8;logMessage('❌\x20Critical\x20error:\x20'+_0x2586ee[_0x3d438d(0x137)]),process[_0x3d438d(0xbc)](0x1);});