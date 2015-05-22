React = require "react/addons"
Sidebar = require "../../src/js/components/sidebar.coffee"
TestUtils = React.addons.TestUtils

describe "Sidebar", ->

  it "render", ->
    el = TestUtils.renderIntoDocument <Sidebar />
    spans = TestUtils.scryRenderedDOMComponentsWithTag el, "span"
    span = spans[0]
    TestUtils.Simulate.click span
