React = require "react"
Sidebar = require "./sidebar"

App = React.createClass

  render: ->
    <div>
      <Sidebar />
    </div>

module.exports = App
