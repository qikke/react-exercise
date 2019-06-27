import React, { Component, Fragment } from 'react'

export default class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'value'
    }
  }
  render () {
    return (
      <Fragment>
        <div>list:</div>
        <div>{this.state.value}</div>
      </Fragment>
    )
  }
}
