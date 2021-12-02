/*
 * @copyright Copyright (c) 2021 Jonas Meurer <jonas@freesources.org>
 *
 * @author Jonas Meurer <jonas@freesources.org>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

import { Extension } from 'tiptap'
import SuggestionsPlugin from 'tiptap-extensions/src/plugins/Suggestions'

export default class Emoji extends Extension {

	get name() {
		return 'emoji'
	}

	get defaultOptions() {
		return {
			attrs: {
				id: {},
				native: {},
			},
			matcher: {
				char: ':',
				allowSpaces: false,
				startOfLine: false,
			},
			suggestionClass: 'emoji-suggestion',
		}
	}

	insertEmoji(range, attrs, schema) {
		return (state, dispatch) => {
			const { $from, $to } = state.selection
			const from = range ? range.from : $from.pos
			const to = range ? range.to : $to.pos

			if (dispatch) {
				dispatch(state.tr.replaceWith(from, to, schema.text(attrs.native)))
			}

			return true
		}
	}

	get schema() {
		return {
			inline: true,
			group: 'inline',
			content: 'text*',
		}
	}

	commands({ schema }) {
		return {
			addEmoji: (attrs) => {
				return (state, dispatch) => {
					return this.insertEmoji(null, attrs, schema)(state, dispatch)
				}
			},
		}
	}

	get plugins() {
		return [
			SuggestionsPlugin({
				command: ({ range, attrs, schema }) => {
					return (state, dispatch) => {
						return this.insertEmoji(range, attrs, schema)(state, dispatch)
					}
				},
				matcher: this.options.matcher,
				items: this.options.items,
				onEnter: this.options.onEnter,
				onChange: this.options.onChange,
				onExit: this.options.onExit,
				onKeyDown: this.options.onKeyDown,
				onFilter: this.options.onFilter,
				suggestionClass: this.options.suggestionClass,
			}),
		]
	}

}
