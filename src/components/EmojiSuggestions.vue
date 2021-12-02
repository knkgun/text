<!--
  - @copyright Copyright (c) 2021 Jonas Meurer <jonas@freesources.org>
  -
  - @author Jonas Meurer <jonas@freesources.org>
  -
  - @license GNU AGPL version 3 or any later version
  -
  - This program is free software: you can redistribute it and/or modify
  - it under the terms of the GNU Affero General Public License as
  - published by the Free Software Foundation, either version 3 of the
  - License, or (at your option) any later version.
  -
  - This program is distributed in the hope that it will be useful,
  - but WITHOUT ANY WARRANTY; without even the implied warranty of
  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
  - GNU Affero General Public License for more details.
  -
  - You should have received a copy of the GNU Affero General Public License
  - along with this program. If not, see <http://www.gnu.org/licenses/>.
  -
  -->

<template>
	<div class="emoji-suggestion-list"
		:class="{ 'is-active': showSuggestions, 'mobile': isMobile }"
		:style="getPosition()">
		<template v-if="hasResults">
			<div v-for="(emojiObject, index) in filteredEmojis"
				:key="emojiObject.id"
				class="emoji-suggestion-list__item"
				:class="{ 'is-selected': navigatedEmojiIndex === index }"
				@click="$emit('select-emoji', emojiObject)">
				{{ emojiObject.native }} {{ emojiObject.short_name }}
			</div>
		</template>
		<div v-else
			class="emoji-suggestion-list__item is-empty">
			{{ t('text', 'No emojis found') }}
		</div>
	</div>
</template>

<script>

import isMobile from '../mixins/isMobile'

export default {
	name: 'EmojiSuggestions',
	mixins: [
		isMobile,
	],
	props: {
		emojiQuery: {
			type: String,
			required: true,
		},
		filteredEmojis: {
			type: Array,
			required: true,
		},
		navigatedEmojiIndex: {
			type: Number,
			required: true,
		},
		emojiRect: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			position: {
				left: '0px',
				top: '0px',
			},
		}
	},
	computed: {
		hasResults() {
			return this.filteredEmojis.length > 0
		},

		hasEmojiQuery() {
			return this.emojiQuery !== null
		},

		showSuggestions() {
			return this.hasEmojiQuery || this.hasResults
		},
	},
	methods: {
		getPosition() {
			const boxHeight = 200 // Estimated height of suggestion box
			if (this.emojiRect && (this.emojiRect.x !== 0 || this.emojiRect.y !== 0)) {
				this.position.left = `${this.emojiRect.x}px`
				if (window.innerHeight < boxHeight) {
					// TODO: find a good way to display suggestion box. For now, put it below cursor.
					this.position.top = `${this.emojiRect.y}px`
					delete this.position.bottom
				} else if (window.innerHeight - this.emojiRect.y < boxHeight) {
					// Put emoji suggestions above cursor if there's not enough space at bottom.
					// Add 6px for some space between text and suggestion box.
					this.position.bottom = `${window.innerHeight - this.emojiRect.y + 6}px`
					delete this.position.top
				} else {
					this.position.top = `${this.emojiRect.y}px`
					delete this.position.bottom
				}
			}
			return this.position
		},
	},
}
</script>

<style scoped lang="scss">
	.emoji-suggestion-list {
		position: fixed;
		display: block !important;
		z-index: 10022;
		background: var(--color-main-background-translucent);
		box-shadow: 0 1px 5px var(--color-box-shadow);
		border-radius: var(--border-radius-large);
		overflow: hidden;

		min-width: 180px;
		padding: 0.2rem;
		margin-top: 24px;
		visibility: hidden;
		opacity: 0;
		transition: opacity 0.2s, visibility 0.2s;

		font-size: 0.8rem;
		font-weight: bold;

		&.is-active {
			opacity: 1;
			visibility: visible;
		}

		&.mobile {
			max-width: 90vw;
		}

		&__no-results {
			padding: 0.2rem 0.5rem;
		}

		&__item {
			border-radius: 5px;
			padding: 0.2rem 0.5rem;
			margin-bottom: 0.2rem;
			opacity: 0.8;
			cursor: pointer;

			// Take care of long names
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;

			&:last-child {
				margin-bottom: 0;
			}

			&.is-selected,
			&:focus,
			&:hover {
				opacity: 1;
				background-color: var(--color-background-hover);
			}

			&.is-empty {
				opacity: 0.5;
			}
		}
	}
</style>
