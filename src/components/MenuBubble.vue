<!--
  - @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
  -
  - @author Julius Härtl <jus@bitgrid.net>
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
	<EditorMenuBubble v-slot="{ commands, isActive, getMarkAttrs, menu }"
		class="menububble"
		:editor="editor"
		@hide="hideLinkMenu">
		<div class="menububble"
			:class="{ 'is-active': menu.isActive }"
			:style="bubblePosition(menu)">
			<form v-if="linkMenuIsActive" class="menububble__form" @submit.prevent="setLinkUrl(commands.link, linkUrl)">
				<input ref="linkInput"
					v-model="linkUrl"
					class="menububble__input"
					type="text"
					placeholder="https://"
					@keydown.esc="hideLinkMenu">
				<button class="menububble__button icon-confirm"
					type="button"
					tabindex="0"
					@click="setLinkUrl(commands.link, linkUrl)" />
			</form>

			<template v-else>
				<button
					class="menububble__button"
					:class="{ 'is-active': isActive.link() }"
					@click="showLinkMenu(getMarkAttrs('link'))">
					<span class="icon-link" />
					<span class="menububble__buttontext">
						{{ isActive.link() ? t('text', 'Update Link') : t('text', 'Add Link') }}
					</span>
				</button>
				<button v-if="!isUsingDirectEditing"
					class="menububble__button"
					:class="{ 'is-active': isActive.link() }"
					@click="selectFile(commands.link)">
					<span class="icon-file" />
					<span class="menububble__buttontext">{{ t('text', 'Link file') }}</span>
				</button>
				<button
					v-if="isActive.link()"
					class="menububble__button"
					:class="{ 'is-active': isActive.link() }"
					@click="removeLinkUrl(commands.link, linkUrl)">
					<span class="icon-delete" />
					<span class="menububble__buttontext">
						{{ t('text', 'Remove Link') }}
					</span>
				</button>
			</template>
		</div>
	</EditorMenuBubble>
</template>

<script>
import { EditorMenuBubble } from 'tiptap'
import Tooltip from '@nextcloud/vue/dist/Directives/Tooltip'
import { getCurrentUser } from '@nextcloud/auth'
import { optimalPath } from './../helpers/files'
import { loadState } from '@nextcloud/initial-state'

export default {
	name: 'MenuBubble',
	components: {
		EditorMenuBubble,
	},
	directives: {
		tooltip: Tooltip,
	},
	props: {
		editor: {
			type: Object,
			required: false,
			default: null,
		},
		filePath: {
			type: String,
			required: false,
			default: '',
		},
	},
	data: () => {
		return {
			linkUrl: null,
			linkMenuIsActive: false,
			isUsingDirectEditing: loadState('text', 'directEditingToken', null) !== null,
		}
	},
	methods: {
		showLinkMenu(attrs) {
			this.linkUrl = attrs.href
			this.linkMenuIsActive = true
			this.$nextTick(() => {
				this.$refs.linkInput.focus()
			})
		},
		hideLinkMenu() {
			this.linkUrl = null
			this.linkMenuIsActive = false
		},
		selectFile(command) {
			const currentUser = getCurrentUser()
			if (!currentUser) {
				return
			}
			const startPath = this.filePath.split('/').slice(0, -1).join('/')
			OC.dialogs.filepicker(t('text', 'Select file to link to'), (file) => {
				const client = OC.Files.getClient()
				client.getFileInfo(file).then((_status, fileInfo) => {
					const path = optimalPath(this.filePath, `${fileInfo.path}/${fileInfo.name}`)
					const encodedPath = path.split('/').map(encodeURIComponent).join('/')
					command({ href: `${encodedPath}?fileId=${fileInfo.id}` })
					this.hideLinkMenu()
				})
			}, false, [], true, undefined, startPath)
		},
		setLinkUrl(command, url) {
			// Heuristics for determining if we need a https:// prefix.
			const noPrefixes = [
				/^[a-zA-Z]+:/, // url with protocol ("mailTo:email@domain.tld")
				/^\//, // absolute path
				/\?fileId=/, // relative link with fileId
				/^\.\.?\//, // relative link starting with ./ or ../
				/^[^.]*[/$]/, // no dots before first '/' - not a domain name
				/^#/, // url fragment
			]
			if (url && !noPrefixes.find(regex => url.match(regex))) {
				url = 'https://' + url
			}

			// Avoid issues when parsing urls later on in markdown that might be entered in an invalid format (e.g. "mailto: example@example.com")
			url.replaceAll(' ', '%20')

			command({ href: url })
			this.hideLinkMenu()
		},
		removeLinkUrl(command, url) {
			command({ href: null })
		},
		bubblePosition(menu) {
			// below the first line, above all others
			const vertical = menu.top < 45
				? { top: `${menu.top}px` }
				: { bottom: `${menu.bottom}px` }
			return {
				...vertical,
				left: `${menu.left}px`,
			}
		},
	},
}
</script>

<style scoped lang="scss">
	.menububble {
		position: absolute;
		display: flex;
		z-index: 10020;
		background: var(--color-main-background-translucent);
		box-shadow: 0 1px 5px var(--color-box-shadow);
		border-radius: var(--border-radius-large);
		overflow: hidden;
		padding: 0;
		margin-left: 10px;
		visibility: hidden;
		opacity: 0;
		transform: translateX(-50%);
		transition: opacity 0.2s, visibility 0.2s;
		height: 44px;

		&.is-active {
			opacity: 1;
			visibility: visible;
		}

		&__button {
			display: block;
			flex-grow: 1;
			border: 0;
			padding: 0.9rem 0.7rem;
			margin: 0;
			border-radius: 0;
			cursor: pointer;
			background-color: var(--color-main-background);
			border-right: 1px solid var(--color-border);

			&:focus,
			&:hover {
				background-color: var(--color-background-hover);
				border: 0;
				border-right: 1px solid var(--color-border) !important;
			}

			&:last-child {
				border: 0 !important;
			}
		}

		&__buttontext {
			padding: 0.4rem;
			padding-right: 0;
		}

		&__form {
			display: flex;
			align-items: center;
		}

		&__input {
			font: inherit;
			border: none;
			background: transparent;
			min-width: 150px;
		}
	}
</style>
