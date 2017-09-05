var TyreBody = React.createClass({
  getInitialState() {
    return { type: 'Choose type:' }
  },

  handleSetType(type) {
    this.setState({ type: type })
  },

  render() {
    return (
      <div>
        <h1>{this.state.type}</h1>
        <TyreButtons handleSetType={this.handleSetType} />
      </div>
    )
  }
});
