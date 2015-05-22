React = require "react"
EmojiLibrary = require "../services/emojiLibrary"

Sidebar = React.createClass

  getDefaultProps: ->
    emojis: EmojiLibrary
    selected: EmojiLibrary[0]

  renderItem: (item) ->
    <span onClick={@handleClick}>{item}</span>

  render: ->
    console.log @props.selected
    emojis = @props.emojis.map(@renderItem)
    <section className="sidebar">
      <h1>Selected: {@props.selected}</h1>
      {emojis}
    </section>

  handleClick: ->
    console.log "clikced!"

module.exports = Sidebar
