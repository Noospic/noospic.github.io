<script setup lang="ts">
import type { FriendUpdate } from '~/types/feed'
import { toZdtLocaleString } from '~~/shared/utils/time'

const props = defineProps<FriendUpdate>()
</script>

<template>
<UtilLink
	class="update-card card upraise"
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
	<div class="meta">
		<div class="title line-clamp-2">
			{{ props.title }}
		</div>
		<div class="sub">
			<span>{{ props.author }}</span>
			<span class="dot">·</span>
			<time :datetime="props.publishedAt">{{ toZdtLocaleString(props.publishedAt, 'date') }}</time>
		</div>
		<p v-if="props.summary" class="summary line-clamp-1">
			{{ props.summary }}
		</p>
	</div>
	<Icon class="arrow" name="ph:arrow-square-out-bold" />
</UtilLink>
</template>

<style scoped lang="scss">
.update-card {
	display: flex;
	align-items: center;
	gap: 0.75em;
	padding: 0.75em 1em;
	animation: float-in 0.2s var(--delay) backwards;

	.avatar {
		flex-shrink: 0;
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 50%;
		box-shadow: var(--box-shadow-2);
		background-color: var(--ld-bg-card);
		object-fit: cover;
	}

	.meta {
		flex: 1;
		min-width: 0;
		line-height: 1.4;
	}

	.title {
		font-weight: 500;
	}

	.sub {
		margin-top: 0.2em;
		font-size: 0.85em;
		color: var(--c-text-2);

		.dot {
			margin-inline: 0.4em;
		}
	}

	.summary {
		opacity: 0.8;
		margin-top: 0.2em;
		font-size: 0.85em;
		color: var(--c-text-2);
	}

	.arrow {
		flex-shrink: 0;
		color: var(--c-text-3);
	}
}

.line-clamp-1 {
	display: -webkit-box;
	overflow: hidden;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
}

.line-clamp-2 {
	display: -webkit-box;
	overflow: hidden;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}
</style>
