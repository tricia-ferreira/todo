var Main = React.createClass({
  getInitialState() {
    return { tyres: [], type: null }
  },

  componentDidMount() {
    $.getJSON('/api/tyres.json', (response) => {
      this.setState({ tyres: response })
    });
  },

  handleSetType(type) {
    return { tyres: [], type: type }
  },

  render() {
    return (
      <div>
        <Header />
        <Body handleSetType={this.handleSetType} />
      </div>
    )
  }
});
