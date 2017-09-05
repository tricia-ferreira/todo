var TyreButtons = React.createClass({
  handleDealerTyreCollection() {
    this.props.handleSetType('Dealer tyre collection')
  },

  handleDepotTyreCollection() {
    this.props.handleSetType('Depot tyre collection')
  },

  render() {
    return (
      <div className='actions'>
        <button onClick={this.handleDealerTyreCollection}>Dealer tyre collection</button>
        <button onClick={this.handleDepotTyreCollection}>Depot tyre collection</button>
      </div>
    )
  }
});
