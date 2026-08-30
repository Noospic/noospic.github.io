import type { FeedGroup } from '../app/types/feed'
// 友链检测 CLI 需要使用显式导入和相对路径
import { myFeed } from '../blog.config'
// eslint-disable-next-line unused-imports/no-unused-imports
import { getFavicon, getGithubAvatar, getGithubIcon, getOciqGroupAvatar, getOicqAvatar, OicqAvatarSize } from './utils/img'

export default [
	// #region 网上邻居
	{
		name: 'Friends',
		desc: '哔——啵——电波通讯中，欢迎常来串门。',
		// @keep-sorted { "keys": ["date"] }
		entries: [
			{
				author: 'Faust',
				//sitenick: 'Faust',
				title: 'Faust',
				link: 'https://fft.im/',
				feed: 'https://fft.im/rss.xml',
				icon: 'https://fft.im/arch.jpg',
				avatar: 'https://fft.im/_astro/logo.BS0qX_Ty_1A3M9v.webp',
				archs: ['Astro', 'Vercel'],
				date: '2024-02-01',
				comment: 'get the chicken!',
			},
			{
				author: '焕昭君',
				title: '焕昭君',
				link: 'https://blog.huan666.de/',
				feed: 'https://blog.huan666.de/index.xml',
				icon: 'https://blog.huan666.de/img/author.webp',
				avatar: 'https://blog.huan666.de/img/author.webp',
				archs: ['Hugo', 'Vercel'],
				date: '2024-02-01',
				comment: '知行合一，日拱一卒',
			},
			{
				author: 'XnneHang',
				title: 'XnneHang',
				link: 'https://xnnehang.top/',
				feed: 'https://xnnehang.top/rss.xml',
				icon: "https://xnnehang.top/avatar.jpg",
				avatar: "https://xnnehang.top/avatar.jpg",
				archs: ['Astro'],
				date: '2024-02-01',
				comment: '写代码是因为爱。',
			},
			{
				author: '口袋分享记',
				title: '口袋分享记',
				link: 'https://111620.xyz/',
				// feed: 'https://111620.xyz/rss.xml',
				icon: "https://img.111620.xyz/2025/07/29/6887b5efbf768.png",
				avatar: "https://img.111620.xyz/2025/07/29/6887b5efbf768.png",
				archs: ['WordPress'],
				date: '2024-02-01',
				comment: '所谓过往，皆为序章。虚室生白️',
			},
		],
	},
	// #region 漫游
	{
		name: '漫游',
		desc: '网上冲浪时发现的精彩内容与常读订阅，与君共享。',
		// @keep-sorted { "keys": ["date"] }
		entries: [
			{
				author: '於清樂',
				desc: 'this cute world',
				feed: 'https://www.thyuu.com/feedhttps://thiscute.world/index.xml',
				link: 'https://thiscute.world/',
				icon: 'https://thiscute.world/favicon-16x16.png',
				avatar: 'https://thiscute.world/favicon-16x16.png',
				date: '2024-02-01',
			},
			{
				author: '宝玉',
				feed: 'https://s.baoyu.io/feed.xml',
				link: 'https://baoyu.io/',
				icon: 'https://baoyu.io/favicon.ico',
				avatar: 'https://baoyu.io/favicon.ico',
				date: '2024-02-01',
			},
		],
	},
] satisfies FeedGroup[]
