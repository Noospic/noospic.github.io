<script setup lang="ts">
import type { FriendUpdate } from '~/types/feed'
import { toZdtLocaleString } from '~~/shared/utils/time'

const props = defineProps<FriendUpdate>()
</script>

<template>
<UtilLink
	class="update-card gradient-card"
	:to="link"
	rel="noopener"
	target="_blank"
>
	<NuxtImg
		class="avatar round-cobblestone"
		:src="avatar"
		:alt="author"
		loading="lazy"
	/>
	<div class="info">
	
		<span class="content">
			<span class="title"> {{ props.title }}</span>
			<span v-if="props.summary" class="summary">{{ props.summary }}</span>
		</span>
	</div>
	<time class="date" :datetime="props.publishedAt">
		{{ toZdtLocaleString(props.publishedAt, 'date') }}
	</time>
</UtilLink>
</template>

<style scoped lang="scss">
.update-card {
	display: flex;
	align-items: center;
	gap: 0.6em;
	overflow: hidden;
	min-width: 0;
	max-width: 100%;
	margin: 0;
	padding: 0.4em 0.75em;
	border: 1px solid var(--c-border);
	border-radius: 0.5em;
	line-height: 1.6;
	transition: transform 0.2s;
	animation: float-in 0.2s var(--delay) backwards;

	&:hover {
		transform: translateY(-2px);
	}

	.avatar {
		flex-shrink: 0;
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		box-shadow: var(--box-shadow-2);
		background-color: var(--ld-bg-card);
		object-fit: cover;
	}

	.info {
		display: flex;
		flex: 1;
		align-items: center;
		gap: 0.5em;
		min-width: 0;
	}

	.author {
		flex-shrink: 0;
		font-size: 0.85em;
		color: var(--c-text-2);
	}

	.content {
		display: flex;
		flex: 1;
		flex-direction: column;
		overflow: hidden;
		min-width: 0;
		font-size: 0.85em;
		line-height: 1.3;
		gap: 0.45em;
	}

	.title,
	.summary {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.title {
		font-weight: 500;
		color: var(--c-text);
	}

	.summary {
		color: var(--c-text-2);
	}

	.date {
		flex-shrink: 0;
		margin-inline-start: auto;
		font-size: 0.8em;
		text-align: end;
		color: var(--c-text-3);
	}
}
</style>
