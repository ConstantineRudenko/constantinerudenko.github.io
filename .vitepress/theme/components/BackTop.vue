<script setup lang="ts">
import { anchorIds } from './composables/anchorIds';
import arrowCircled from './assets/icons/ui/arrowCircled/icon.svg';
</script>

<template>
	<a
		:class="$style.BackToTop"
		:href="`#${anchorIds.page.root}`"
		><img
			alt="upward arrow"
			:class="$style.Arrow"
			:src="arrowCircled"
		/>Back to top</a
	>
</template>

<style module lang="less">
@import '@theme/style/variables.less';

.BackToTop {
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 0rem;

	display: block;
	width: min(@gap*32, 100%);

	text-align: center;

	outline: @border-width-s solid @color-border;
	border-radius: @gap @gap 0rem 0rem;

	padding: @gap;

	font-size: @size-l;
	font-weight: bold;
	font-family: @font-techy;
	text-decoration: none;

	background-color: @color-background;
	box-shadow: @shadow-s;

	&:link,
	&:visited {
		color: @color-text-faded-1;
	}

	&:focus-visible {
		outline: revert;
	}
}

.Arrow {
	width: 2em;
	vertical-align: middle;
	margin-right: @gap*0.5;
	margin-left: @gap*0.5;
}

//----------------------------------
//	Transitions
//----------------------------------

.BackToTop {
	transition: outline-color @duration;
}

.BackToTop:hover {
	outline-width: @border-width;
	outline-color: @color-primary;

	.Arrow {
		transform: scale(1.15);
		transition: transform @duration-s ease-out;
	}
}

.BackToTop:active .Arrow,
.Arrow {
	transform: scale(1);
	transition: transform @duration-s ease-out;
}
</style>
