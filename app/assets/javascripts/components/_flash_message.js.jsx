var FlashMessage= React.createClass({
  render() {
    if (this.props.message) {
      return (
          <div className='alert alert-danger'>
            {this.props.message}
          </div>
      )
    }
    else {
      return (
        <span></span>
      )
    }
  }
});
