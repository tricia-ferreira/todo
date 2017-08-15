var Body = React.createClass({
  getInitialState() {
    return { items: [], message: null }
  },

  componentDidMount() {
    $.getJSON('/api/items.json', (response) => {
      this.setState({ items: response })
    });
  },

  handleSubmit(item) {
    var newState = this.state.items.concat(item);
    this.setState({ items: newState })
  },

  handleDelete(id) {
    $.ajax({
      url: `/api/items/${id}`,
      type: 'DELETE',
      success: () => {
        this.removeItemClient(id)
      }
    });
  },

  removeItemClient(id) {
    var newItems = this.state.items.filter((item) => {
      return item.id != id;
    });
    this.setState({ items: newItems });
  },

  handleUpdate(item) {
    $.ajax({
      url: `/api/items/${item.id}`,
      type: 'PUT',
      data: { item: item },
      success: () => {
        this.updateItems(item);
      }
    }
  )},

  handleErrors(error) {
    var message = [];
    var json_error = JSON.parse(error);
    for (var i in json_error.errors) {
      message.push(`${i} ${json_error.errors[i]}`);
    };
    this.setState({ message: message.join(', ') });
  },

  updateItems(item) {
    var items = this.state.items.filter((i) => { return i.id != item.id });
    items.push(item); this.setState({ items: items, message: null });
  },

  render() {
    return (
      <div className='row'>
        <div className='col-md-8 col-md-offset-2'>
          <FlashMessage message={this.state.message} />
          <NewItem handleSubmit={this.handleSubmit} handleErrors={this.handleErrors} />
          <AllItems items={this.state.items} handleDelete={this.handleDelete} onUpdate={this.handleUpdate} />
        </div>
      </div>
    )
  }
});
