
// 部署完成后在网址后面加上这个，获取自建节点和机场聚合节点，/?token=auto或/auto或

let mytoken = 'auto'; //可以随便取，或者uuid生成，https://1024tools.com/uuid
let BotToken =''; //可以为空，或者@BotFather中输入/start，/newbot，并关注机器人
let ChatID =''; //可以为空，或者@userinfobot中获取，/start
let TG = 0; //小白勿动， 开发者专用，1 为推送所有的访问信息，0 为不推送订阅转换后端的访问信息与异常访问
let FileName = 'CF-Workers-SUB';
let SUBUpdateTime = 6; //自定义订阅更新时间，单位小时
let total = 99;//TB
let timestamp = 4102329600000;//2099-12-31

let cacheTTL = 24 ;//小时，缓存时长

//节点链接 + 订阅链接
let MainData = `
vless://2b152099-977d-4b23-9e00-a7f9108c65ea@www.zbb07.us.kg:2053?encryption=none&security=tls&sni=BP.zcR07.FINDHERE.Org&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=bp.zCR07.finDHeRe.oRG&path=%2Fi8PcVNuzXhd1sENh%2FdHMuaHBjLnR3%3Fed%3D2560#d01
vless://2b152099-977d-4b23-9e00-a7f9108c65ea@cf.w07.us.kg:2053?encryption=none&security=tls&sni=BP.zcR07.FINDHERE.Org&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=bp.zCR07.finDHeRe.oRG&path=%2Fi8PcVNuzXhd1sENh%2FdHMuaHBjLnR3%3Fed%3D2560#d02
vless://2b152099-977d-4b23-9e00-a7f9108c65ea@edg.w07.us.kg:2053?encryption=none&security=tls&sni=BP.zcR07.FINDHERE.Org&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=bp.zCR07.finDHeRe.oRG&path=%2Fi8PcVNuzXhd1sENh%2FdHMuaHBjLnR3%3Fed%3D2560#d03
vless://2b152099-977d-4b23-9e00-a7f9108c65ea@cf.zb9.us.kg:2053?encryption=none&security=tls&sni=BP.zcR07.FINDHERE.Org&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=bp.zCR07.finDHeRe.oRG&path=%2Fi8PcVNuzXhd1sENh%2FdHMuaHBjLnR3%3Fed%3D2560#d04
vless://2b152099-977d-4b23-9e00-a7f9108c65ea@afei.zb9.us.kg:2053?encryption=none&security=tls&sni=BP.zcR07.FINDHERE.Org&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=bp.zCR07.finDHeRe.oRG&path=%2Fi8PcVNuzXhd1sENh%2FdHMuaHBjLnR3%3Fed%3D2560#d05
vless://2b152099-977d-4b23-9e00-a7f9108c65ea@epe.zb9.us.kg:2053?encryption=none&security=tls&sni=BP.zcR07.FINDHERE.Org&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=bp.zCR07.finDHeRe.oRG&path=%2Fi8PcVNuzXhd1sENh%2FdHMuaHBjLnR3%3Fed%3D2560#d06
vless://2b152099-977d-4b23-9e00-a7f9108c65ea@cf.v07.us.kg:2053?encryption=none&security=tls&sni=BP.zcR07.FINDHERE.Org&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=bp.zCR07.finDHeRe.oRG&path=%2Fi8PcVNuzXhd1sENh%2FdHMuaHBjLnR3%3Fed%3D2560#d07
vless://2b152099-977d-4b23-9e00-a7f9108c65ea@1.zcr07.us.kg:2053?encryption=none&security=tls&sni=BP.zcR07.FINDHERE.Org&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=bp.zCR07.finDHeRe.oRG&path=%2Fi8PcVNuzXhd1sENh%2FdHMuaHBjLnR3%3Fed%3D2560#d08
vless://2b152099-977d-4b23-9e00-a7f9108c65ea@317ip.zcr07.us.kg:2053?encryption=none&security=tls&sni=BP.zcR07.FINDHERE.Org&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=bp.zCR07.finDHeRe.oRG&path=%2Fi8PcVNuzXhd1sENh%2FdHMuaHBjLnR3%3Fed%3D2560#d09
vless://2b152099-977d-4b23-9e00-a7f9108c65ea@zbpb.r08.us.kg:2053?encryption=none&security=tls&sni=BP.zcR07.FINDHERE.Org&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=bp.zCR07.finDHeRe.oRG&path=%2Fi8PcVNuzXhd1sENh%2FdHMuaHBjLnR3%3Fed%3D2560#dd01
vless://2b152099-977d-4b23-9e00-a7f9108c65ea@gj0.v07.us.kg:2053?encryption=none&security=tls&sni=BP.zcR07.FINDHERE.Org&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=bp.zCR07.finDHeRe.oRG&path=%2Fi8PcVNuzXhd1sENh%2FdHMuaHBjLnR3%3Fed%3D2560#dd02
vless://2b152099-977d-4b23-9e00-a7f9108c65ea@cf.n06.us.kg:2053?encryption=none&security=tls&sni=BP.zcR07.FINDHERE.Org&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=bp.zCR07.finDHeRe.oRG&path=%2Fi8PcVNuzXhd1sENh%2FdHMuaHBjLnR3%3Fed%3D2560#dd03
vless://2b152099-977d-4b23-9e00-a7f9108c65ea@3.zcr07.us.kg:2053?encryption=none&security=tls&sni=BP.zcR07.FINDHERE.Org&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=bp.zCR07.finDHeRe.oRG&path=%2Fi8PcVNuzXhd1sENh%2FdHMuaHBjLnR3%3Fed%3D2560#dd04
vless://2b152099-977d-4b23-9e00-a7f9108c65ea@bk.zcr07.us.kg:2053?encryption=none&security=tls&sni=BP.zcR07.FINDHERE.Org&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=bp.zCR07.finDHeRe.oRG&path=%2Fi8PcVNuzXhd1sENh%2FdHMuaHBjLnR3%3Fed%3D2560#dd05
vless://2b152099-977d-4b23-9e00-a7f9108c65ea@bo.zcr07.us.kg:2053?encryption=none&security=tls&sni=BP.zcR07.FINDHERE.Org&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=bp.zCR07.finDHeRe.oRG&path=%2Fi8PcVNuzXhd1sENh%2FdHMuaHBjLnR3%3Fed%3D2560#dd06
vless://2b152099-977d-4b23-9e00-a7f9108c65ea@bpb.zcr07.us.kg:2053?encryption=none&security=tls&sni=BP.zcR07.FINDHERE.Org&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=bp.zCR07.finDHeRe.oRG&path=%2Fi8PcVNuzXhd1sENh%2FdHMuaHBjLnR3%3Fed%3D2560#dd07
vless://2b152099-977d-4b23-9e00-a7f9108c65ea@b.zcr07.us.kg:2053?encryption=none&security=tls&sni=BP.zcR07.FINDHERE.Org&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=bp.zCR07.finDHeRe.oRG&path=%2Fi8PcVNuzXhd1sENh%2FdHMuaHBjLnR3%3Fed%3D2560#dd08
vless://2b152099-977d-4b23-9e00-a7f9108c65ea@CCSS.zcr07.us.kg:2053?encryption=none&security=tls&sni=BP.zcR07.FINDHERE.Org&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=bp.zCR07.finDHeRe.oRG&path=%2Fi8PcVNuzXhd1sENh%2FdHMuaHBjLnR3%3Fed%3D2560#dd09
trojan://trojan@[2a06:98c1:3102::437e:7c9]:443?security=tls&sni=ygt.n06.us.kg&fp=randomized&type=ws&host=ygt.n06.us.kg&path=%2Fpyip%3Dts.hpc.tw#na01
trojan://trojan@[2606:4700:311c::277c:f16]:443?security=tls&sni=ygt.n06.us.kg&fp=randomized&type=ws&host=ygt.n06.us.kg&path=%2Fpyip%3Dts.hpc.tw#na02
trojan://trojan@[2606:4700:e7:a2:7523:aabf:62bb:4d63]:443?security=tls&sni=ygt.n06.us.kg&fp=randomized&type=ws&host=ygt.n06.us.kg&path=%2Fpyip%3Dts.hpc.tw#na03
trojan://trojan@[2606:4700:e7:6588:8cc:8b70:dafa:4bec]:443?security=tls&sni=ygt.n06.us.kg&fp=randomized&type=ws&host=ygt.n06.us.kg&path=%2Fpyip%3Dts.hpc.tw#na04
trojan://trojan@[2606:4700:f4::62a7:4286]:443?security=tls&sni=ygt.n06.us.kg&fp=randomized&type=ws&host=ygt.n06.us.kg&path=%2Fpyip%3Dts.hpc.tw#na05
trojan://trojan@[2606:4700:53::977:4199]:443?security=tls&sni=ygt.n06.us.kg&fp=randomized&type=ws&host=ygt.n06.us.kg&path=%2Fpyip%3Dts.hpc.tw#na06
trojan://trojan@[2606:4700:106::4151:4efd]:443?security=tls&sni=ygt.n06.us.kg&fp=randomized&type=ws&host=ygt.n06.us.kg&path=%2Fpyip%3Dts.hpc.tw#na07
trojan://trojan@[2606:4700:e7:6588:804:5f8b:ec8f:a5b9]:443?security=tls&sni=ygt.n06.us.kg&fp=randomized&type=ws&host=ygt.n06.us.kg&path=%2Fpyip%3Dts.hpc.tw#na08
trojan://trojan@[2606:4700:e7:0:f943:44e3:8af8:f528]:443?security=tls&sni=ygt.n06.us.kg&fp=randomized&type=ws&host=ygt.n06.us.kg&path=%2Fpyip%3Dts.hpc.tw#na09
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@198.62.62.205:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#nb01
vless://b4c6b261-922d-4732-b634-1cfdba80ec50@198.62.62.217:443?encryption=none&security=tls&sni=edg.w07.us.kg&alpn=h3&fp=random&type=ws&host=edg.w07.us.kg&path=%2F%3Fproxyip%3Dproxyip.us.fxxk.dedyn.io#nb02
trojan://trojan@198.62.62.205:443?security=tls&sni=ygt.n06.us.kg&fp=randomized&type=ws&host=ygt.n06.us.kg&path=%2Fpyip%3Dts.hpc.tw#nb03
trojan://trojan@198.62.62.21:443?security=tls&sni=ygt.n06.us.kg&fp=randomized&type=ws&host=ygt.n06.us.kg&path=%2Fpyip%3Dts.hpc.tw#nb04
trojan://trojan@198.62.62.233:443?security=tls&sni=ygt.n06.us.kg&fp=randomized&type=ws&host=ygt.n06.us.kg&path=%2Fpyip%3Dts.hpc.tw#nb05
vless://b4c6b261-922d-4732-b634-1cfdba80ec50@198.62.62.198:443?encryption=none&security=tls&sni=edg.w07.us.kg&alpn=h3&fp=random&type=ws&host=edg.w07.us.kg&path=%2F%3Fproxyip%3Dproxyip.us.fxxk.dedyn.io#nb06
trojan://trojan@198.62.62.215:443?security=tls&sni=ygt.n06.us.kg&fp=randomized&type=ws&host=ygt.n06.us.kg&path=%2Fpyip%3Dts.hpc.tw#nb07
vless://b4c6b261-922d-4732-b634-1cfdba80ec50@198.62.62.235:443?encryption=none&security=tls&sni=edg.w07.us.kg&alpn=h3&fp=random&type=ws&host=edg.w07.us.kg&path=%2F%3Fproxyip%3Dproxyip.us.fxxk.dedyn.io#nb08
trojan://trojan@104.17.241.239:443?security=tls&sni=ygt.n06.us.kg&fp=randomized&type=ws&host=ygt.n06.us.kg&path=%2Fpyip%3Dts.hpc.tw#nb09
vless://2b152099-977d-4b23-9e00-a7f9108c65ea@www.sgp3.app:2053?encryption=none&security=tls&sni=bP.ZCr07.FINdHERe.org&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=BP.zcr07.FInDHEre.OrG&path=%2FxmJoDfLd2Mu7CC59%2FdHMuaHBjLnR3%3Fed%3D2560#w01
vless://37691131-db68-49bc-b1bb-840277c54390@www.t66k.com:2087?encryption=none&security=tls&sni=xb.zcR07.rr.NU&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=Xb.zCR07.Rr.nU&path=%2FkTqJyIvVGNbqLjBi%2FdHMuaHBjLnR3%3Fed%3D2560#w02
vless://b2ca329a-f595-4b17-92ec-c59604e64f9c@www.6642888.com:2053?encryption=none&security=tls&sni=zyh.z07.us.kg&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=zyh.z07.us.kg&path=%2Fi8PcVNuzXhd1sENh%2FdHMuaHBjLnR3%3Fed%3D2560#w03
vless://2b152099-977d-4b23-9e00-a7f9108c65ea@yy99xx.com:443?encryption=none&security=tls&sni=BP.ZCr07.FINdheRE.orG&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=Bp.zCr07.findhEre.org&path=%2FK8yGi6Dhx0huqLkM%2FdHMuaHBjLnR3%3Fed%3D2560#w04
vless://2b152099-977d-4b23-9e00-a7f9108c65ea@www.55xxhh.com:443?encryption=none&security=tls&sni=BP.zcr07.FINDHeRe.oRG&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=bp.ZCr07.FInDHERE.ORG&path=%2Fwvrp2ry4dIqogmU2%2FdHMuaHBjLnR3%3Fed%3D2560#w05
vless://2b152099-977d-4b23-9e00-a7f9108c65ea@www.t66k.com:2096?encryption=none&security=tls&sni=bp.ZCr07.FiNDhErE.ORg&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=bp.zcR07.fINdHeRe.oRG&path=%2FSqFgDhLBHckUW9I1%2FdHMuaHBjLnR3%3Fed%3D2560#w06
vless://034b0d4e-8903-497c-87e1-d4c5b924994b@123rbrb.com:8443?encryption=none&security=tls&sni=KJ8.Zbb07.US.kg&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=kJ8.zBB07.us.kG&path=%2FqqEbJHADhgVMVVVj%2FdHMuaHBjLnR3%3Fed%3D2560#w07
vless://b2ca329a-f595-4b17-92ec-c59604e64f9c@www.123rbrb.com:443?encryption=none&security=tls&sni=ZyH.Z07.Us.Kg&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=zYh.z07.uS.kg&path=%2FwXzEwTHQf29TzsAi%2FdHMuaHBjLnR3%3Fed%3D2560#w08
vless://14e3a0f4-96f0-49b8-b4ea-7c26ef211156@dlpsgame.com:2083?encryption=none&security=tls&sni=bpb.zCR07.cOm.mP&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=Bpb.zCr07.COm.MP&path=%2F9mwESnRKxm3iN8bt%2FdHMuaHBjLnR3%3Fed%3D2560#w09



`

let urls = [];
let subconverter = "SUBAPI.fxxk.dedyn.io"; //在线订阅转换后端，目前使用CM的订阅转换功能。支持自建psub 可自行搭建https://github.com/bulianglin/psub
let subconfig = "https://raw.githubusercontent.com/cmliu/ACL4SSR/main/Clash/config/ACL4SSR_Online_MultiCountry.ini"; //订阅配置文件
let subProtocol = 'https';

export default {
	async fetch (request,env) {
		const userAgentHeader = request.headers.get('User-Agent');
		const userAgent = userAgentHeader ? userAgentHeader.toLowerCase() : "null";
		const url = new URL(request.url);
		const token = url.searchParams.get('token');
		mytoken = env.TOKEN || mytoken;
		BotToken = env.TGTOKEN || BotToken;
		ChatID = env.TGID || ChatID; 
		TG =  env.TG || TG; 
		subconverter = env.SUBAPI || subconverter;
		if( subconverter.includes("http://") ){
			subconverter = subconverter.split("//")[1];
			subProtocol = 'http';
		} else {
			subconverter = subconverter.split("//")[1] || subconverter;
		}
		subconfig = env.SUBCONFIG || subconfig;
		FileName = env.SUBNAME || FileName;
		MainData = env.LINK || MainData;
		if(env.LINKSUB) urls = await ADD(env.LINKSUB);

		const currentDate = new Date();
		currentDate.setHours(0, 0, 0, 0); 
		const timeTemp = Math.ceil(currentDate.getTime() / 1000);
		const fakeToken = await MD5MD5(`${mytoken}${timeTemp}`);
		//console.log(`${fakeUserID}\n${fakeHostName}`); // 打印fakeID

		let UD = Math.floor(((timestamp - Date.now())/timestamp * total * 1099511627776 )/2);
		total = total * 1099511627776 ;
		let expire= Math.floor(timestamp / 1000) ;
		SUBUpdateTime = env.SUBUPTIME || SUBUpdateTime;

		let 重新汇总所有链接 = await ADD(MainData + '\n' + urls.join('\n'));
		let 自建节点 ="";
		let 订阅链接 ="";
		for (let x of 重新汇总所有链接) {
			if (x.toLowerCase().startsWith('http')) {
				订阅链接 += x + '\n';
			} else {
				自建节点 += x + '\n';
			}
		}
		MainData = 自建节点;
		urls = await ADD(订阅链接);

		if ( !(token == mytoken || token == fakeToken || url.pathname == ("/"+ mytoken) || url.pathname.includes("/"+ mytoken + "?")) ) {
			if ( TG == 1 && url.pathname !== "/" && url.pathname !== "/favicon.ico" ) await sendMessage(`#异常访问 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgent}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			const envKey = env.URL302 ? 'URL302' : (env.URL ? 'URL' : null);
			if (envKey) {
				const URLs = await ADD(env[envKey]);
				const URL = URLs[Math.floor(Math.random() * URLs.length)];
				return envKey === 'URL302' ? Response.redirect(URL, 302) : fetch(new Request(URL, request));
			}
			return new Response(await nginx(), { 
				status: 200 ,
				headers: {
					'Content-Type': 'text/html; charset=UTF-8',
				},
			});
		} else {
			await sendMessage(`#获取订阅 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			let 订阅格式 = 'base64';
			if (userAgent.includes('null') || userAgent.includes('subconverter') || userAgent.includes('nekobox') || userAgent.includes(('CF-Workers-SUB').toLowerCase())){
				订阅格式 = 'base64';
			} else if (userAgent.includes('clash') || ( url.searchParams.has('clash') && !userAgent.includes('subconverter'))){
				订阅格式 = 'clash';
			} else if (userAgent.includes('sing-box') || userAgent.includes('singbox') || ( (url.searchParams.has('sb') || url.searchParams.has('singbox')) && !userAgent.includes('subconverter'))){
				订阅格式 = 'singbox';
			} else if (userAgent.includes('surge') || ( url.searchParams.has('surge') && !userAgent.includes('subconverter'))){
				订阅格式 = 'surge';
			}

			let subconverterUrl ;
			let 订阅转换URL = `${url.origin}/${await MD5MD5(fakeToken)}?token=${fakeToken}`;
			//console.log(订阅转换URL);
			let req_data = MainData;

			// 初始化缓存
			const cache = caches.default;

			let 追加UA = 'v2rayn';
			if (url.searchParams.has('clash')){
				追加UA = 'clash';
			} else if(url.searchParams.has('singbox')){
				追加UA = 'singbox';
			} else if(url.searchParams.has('surge')){
				追加UA = 'surge';
			}
			
			try {
				const responses = await Promise.all(urls.map(async url => {
					const cacheKey = new Request(url);
					
					try {
						// 设置2秒超时
						const controller = new AbortController();
						const timeoutId = setTimeout(() => controller.abort(), 2000);
	
						const response = await fetch(url, {
							method: 'get',
							headers: {
								'Accept': 'text/html,application/xhtml+xml,application/xml;',
								'User-Agent': `${追加UA} cmliu/CF-Workers-SUB ${userAgentHeader}`
							},
							signal: controller.signal
						});
	
						clearTimeout(timeoutId);
	
						if (response.ok) {
							const content = await response.text();
							
							// 请求成功，写入缓存，设置24小时的缓存时间
							const cacheResponse = new Response(content, {
								headers: {
									...response.headers,
									'Cache-Control': `public, max-age=${cacheTTL * 60 * 60}`
								}
							});
							await cache.put(cacheKey, cacheResponse);
							console.log(`更新缓存 ${url}:\n${content.slice(0, 10)}...`);
							if (content.includes('dns') && content.includes('proxies') && content.includes('proxy-groups')) {
								// Clash 配置
								订阅转换URL += "|" + url;
								return ""; // 返回空字符串，因为这种情况下我们不需要内容
							} else if (content.includes('dns') && content.includes('outbounds') && content.includes('inbounds')){
								// Singbox 配置
								订阅转换URL += "|" + url;
								return ""; // 返回空字符串，因为这种情况下我们不需要内容
							} else {
								return content;
							}
						} else {
							throw new Error('请求失败');
						}
					} catch (error) {
						// 请求失败或超时，尝试从缓存读取
						const cachedResponse = await cache.match(cacheKey);
						if (cachedResponse) {
							const cachedContent = await cachedResponse.text();
							console.log(`使用缓存内容 ${url}:\n${cachedContent.slice(0, 10)}...`);
							return cachedResponse.text();
						} else {
							console.log(`无缓存可用 ${url}`);
							return ""; // 缓存中也没有，返回空字符串
						}
					}
				}));	
			
				for (const response of responses) {
					if (response) {
						req_data += base64Decode(response) + '\n';
					}
				}
			
			} catch (error) {
				console.error('处理 URL 时发生错误：', error);
			}
			if(env.WARP) 订阅转换URL += "|" + (await ADD(env.WARP)).join("|");
			//修复中文错误
			const utf8Encoder = new TextEncoder();
			const encodedData = utf8Encoder.encode(req_data);
			const text = String.fromCharCode.apply(null, encodedData);
			
			//去重
			const uniqueLines = new Set(text.split('\n'));
			const result = [...uniqueLines].join('\n');
			//console.log(result);
			
			const base64Data = btoa(result);

			if (订阅格式 == 'base64' || token == fakeToken){
				return new Response(base64Data ,{
					headers: { 
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
					}
				});
			} else if (订阅格式 == 'clash'){
				subconverterUrl = `${subProtocol}://${subconverter}/sub?target=clash&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'singbox'){
				subconverterUrl = `${subProtocol}://${subconverter}/sub?target=singbox&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'surge'){
				subconverterUrl = `${subProtocol}://${subconverter}/sub?target=surge&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			}
			//console.log(订阅转换URL);
			try {
				const subconverterResponse = await fetch(subconverterUrl);
				
				if (!subconverterResponse.ok) {
					return new Response(base64Data ,{
						headers: { 
							"content-type": "text/plain; charset=utf-8",
							"Profile-Update-Interval": `${SUBUpdateTime}`,
							"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
						}
					});
					//throw new Error(`Error fetching subconverterUrl: ${subconverterResponse.status} ${subconverterResponse.statusText}`);
				}
				let subconverterContent = await subconverterResponse.text();
				if (订阅格式 == 'clash') subconverterContent =await clashFix(subconverterContent);
				return new Response(subconverterContent, {
					headers: { 
						"Content-Disposition": `attachment; filename*=utf-8''${encodeURIComponent(FileName)}; filename=${FileName}`,
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,

					},
				});
			} catch (error) {
				return new Response(base64Data ,{
					headers: { 
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
					}
				});
			}
		}
	}
};

async function ADD(envadd) {
	var addtext = envadd.replace(/[	"'|\r\n]+/g, ',').replace(/,+/g, ',');  // 将空格、双引号、单引号和换行符替换为逗号
	//console.log(addtext);
	if (addtext.charAt(0) == ',') addtext = addtext.slice(1);
	if (addtext.charAt(addtext.length -1) == ',') addtext = addtext.slice(0, addtext.length - 1);
	const add = addtext.split(',');
	//console.log(add);
	return add ;
}

async function nginx() {
	const text = `
	<!DOCTYPE html>
	<html>
	<head>
	<title>Welcome to nginx!</title>
	<style>
		body {
			width: 35em;
			margin: 0 auto;
			font-family: Tahoma, Verdana, Arial, sans-serif;
		}
	</style>
	</head>
	<body>
	<h1>Welcome to nginx!</h1>
	<p>If you see this page, the nginx web server is successfully installed and
	working. Further configuration is required.</p>
	
	<p>For online documentation and support please refer to
	<a href="http://nginx.org/">nginx.org</a>.<br/>
	Commercial support is available at
	<a href="http://nginx.com/">nginx.com</a>.</p>
	
	<p><em>Thank you for using nginx.</em></p>
	</body>
	</html>
	`
	return text ;
}

async function sendMessage(type, ip, add_data = "") {
	if ( BotToken !== '' && ChatID !== ''){
		let msg = "";
		const response = await fetch(`http://ip-api.com/json/${ip}?lang=zh-CN`);
		if (response.status == 200) {
			const ipInfo = await response.json();
			msg = `${type}\nIP: ${ip}\n国家: ${ipInfo.country}\n<tg-spoiler>城市: ${ipInfo.city}\n组织: ${ipInfo.org}\nASN: ${ipInfo.as}\n${add_data}`;
		} else {
			msg = `${type}\nIP: ${ip}\n<tg-spoiler>${add_data}`;
		}
	
		let url = "https://api.telegram.org/bot"+ BotToken +"/sendMessage?chat_id=" + ChatID + "&parse_mode=HTML&text=" + encodeURIComponent(msg);
		return fetch(url, {
			method: 'get',
			headers: {
				'Accept': 'text/html,application/xhtml+xml,application/xml;',
				'Accept-Encoding': 'gzip, deflate, br',
				'User-Agent': 'Mozilla/5.0 Chrome/90.0.4430.72'
			}
		});
	}
}

function base64Decode(str) {
	const bytes = new Uint8Array(atob(str).split('').map(c => c.charCodeAt(0)));
	const decoder = new TextDecoder('utf-8');
	return decoder.decode(bytes);
}

async function MD5MD5(text) {
	const encoder = new TextEncoder();
  
	const firstPass = await crypto.subtle.digest('MD5', encoder.encode(text));
	const firstPassArray = Array.from(new Uint8Array(firstPass));
	const firstHex = firstPassArray.map(b => b.toString(16).padStart(2, '0')).join('');

	const secondPass = await crypto.subtle.digest('MD5', encoder.encode(firstHex.slice(7, 27)));
	const secondPassArray = Array.from(new Uint8Array(secondPass));
	const secondHex = secondPassArray.map(b => b.toString(16).padStart(2, '0')).join('');
  
	return secondHex.toLowerCase();
}

function clashFix(content) {
	if(content.includes('wireguard') && !content.includes('remote-dns-resolve')){
		let lines;
		if (content.includes('\r\n')){
			lines = content.split('\r\n');
		} else {
			lines = content.split('\n');
		}
	
		let result = "";
		for (let line of lines) {
			if (line.includes('type: wireguard')) {
				const 备改内容 = `, mtu: 1280, udp: true`;
				const 正确内容 = `, mtu: 1280, remote-dns-resolve: true, udp: true`;
				result += line.replace(new RegExp(备改内容, 'g'), 正确内容) + '\n';
			} else {
				result += line + '\n';
			}
		}

		content = result;
	}
	return content;
}
