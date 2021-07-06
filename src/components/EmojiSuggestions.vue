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
		:class="{ 'is-active': showSuggestions }"
		:style="position">
		<template v-if="hasResults">
			<div v-for="(emojiObject, index) in filteredEmojis"
				:key="emojiObject.id"
				class="emoji-suggestion-list__item"
				:class="{ 'is-selected': navigatedEmojiIndex === index }"
				@click="selectEmoji(emojiObject)">
				{{ emojiObject.value }} {{ emojiObject.short_name }}
			</div>
		</template>
		<div v-else
			class="emoji-suggestion-list__item is-empty">
			{{ t('text', 'No emojis found') }}
		</div>
	</div>
</template>

<script>

export default {
	name: 'EmojiSuggestions',
	props: {
		emojiQuery: {
			type: String,
			required: true,
		},
		emojiRange: {
			type: Object,
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
		insertEmoji: {
			type: Function,
			required: true,
		},
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

		position() {
			const position = {
				left: '0px',
			}
			if (this.emojiRect) {
				position.left = `${this.emojiRect.x}px`
				// Put emoji suggestions below cursor if there's enough space
				if (window.innerHeight - this.emojiRect.y > 200) {
					position.top = `${this.emojiRect.y}px`
				} else {
					// TODO: Fix y value for positioning on top
					position.bottom = `${this.emojiRect.y}px`
				}
			} else {
				position.top = '0px'
			}
			// TODO: Remove debugging statement
			console.debug('x, y', this.emojiRect.x, this.emojiRect.y)
			return position
		},
	},
	methods: {
		// We have to replace our suggestion text with an emoji, so it's
		// important to pass also the position of the suggestion text.
		selectEmoji(emojiObject) {
			this.insertEmoji({
				range: this.emojiRange,
				attrs: {
					id: emojiObject.short_name,
					native: emojiObject.value,
				},
			})
			this.$emit('focus')
		},
	},
}
</script>

<style scoped lang="scss">
	.emoji-suggestion-list {
		// position: absolute;
		position: fixed;
		display: block !important;
		z-index: 10020;
		background: var(--color-main-background-translucent);
		box-shadow: 0 1px 5px var(--color-box-shadow);
		border-radius: var(--border-radius-large);
		overflow: hidden;

		min-width: 180px;
		padding: 0.2rem;
		margin-top: 24px;
		margin-left: 10px;
		visibility: hidden;
		opacity: 0;
		transform: translateX(-50%);
		transition: opacity 0.2s, visibility 0.2s;

		font-size: 0.8rem;
		font-weight: bold;

		// filter: drop-shadow(0 1px 10px var(--color-box-shadow));

		&.is-active {
			opacity: 1;
			visibility: visible;
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
