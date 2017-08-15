var NewItem= React.createClass({
  handleClick() {
    var name = this.refs.name.value;
    var description = this.refs.description.value;
    $.ajax({
      url: '/api/items',
      type: 'POST',
      data: { item: { name: name, description: description } },
      success: (item) => {
        this.props.handleSubmit(item);
      },
      error: (item) => {
        this.props.handleErrors(item.responseText);
      }
    });
  },

  render() {
    return (
      <div>
        <input ref='name' placeholder='Enter the name of the item' />
        <input ref='description' placeholder='Enter a description' />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
});
