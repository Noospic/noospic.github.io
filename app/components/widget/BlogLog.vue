<script setup lang="ts">
const { timeEstablished } = useAppConfig()

const blogLog = [
	{
		label: '2026-08-31',
		value: 'feat: 聚合 Bangumi 番剧/影视/游戏收藏页，借鉴自@blog.shinya.click',
		tip: `借鉴自 https://blog.shinya.click/media`,
	},
	{
		label: '2026-08-30',
		value: 'feat: 友链页增加友链rss动态抓取展示',
		tip: `友链界面增加朋友动态`,
	},
	{
		label: '2026-04-06',
		value: 'astro-paper/cactus -> Nuxt-Clarity',
		tip: `博客再再再更换主题，基于 Nuxt 3 和 Vite 构建，使用 TypeScript 开发，性能和体验大幅提升。`,
	},
]
</script>

<template>
<BlogWidget card title="更新日志">
	<ZDlGroup size="large" :items="blogLog" />
</BlogWidget>
</template>
