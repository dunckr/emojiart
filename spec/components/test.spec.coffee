React = require "react/addons"
Test = require "../../src/js/components/test.coffee"
TestUtils = React.addons.TestUtils

describe "test here", ->

  it "should do something", ->
    expect(1).toEqual 1

  it "should do another thing", ->
    expect(1).toEqual 1
    label = TestUtils.renderIntoDocument <Test />
    h1 = TestUtils.findRenderedDOMComponentWithTag label, "h1"
