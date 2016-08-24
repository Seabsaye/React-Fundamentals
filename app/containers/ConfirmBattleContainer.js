var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      isLoading: true,
      playersInfo: []
    }
  },
  componentDidMount: function () {
    var query = this.props.location.query;
            //this.props.location --> info object of given route, ie pathname, query, hash
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
      .then(function (players) {
        this.setState({
          isLoading: false,
          playersInfo: [players[0], players[1]]
        })
      }.bind(this))
      //.bind(arg) allows you to set the context ('this') inside the function .bind applied to, to arg
      //alternatively: can cache outer context (i.e. var that = this), but above method better
  },
  handleInitiateBattle: function () {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    })
  },
  render: function () {
    return (
      <ConfirmBattle
      isLoading={this.state.isLoading}
      onInitiateBattle={this.handleInitiateBattle}
      playersInfo={this.state.playersInfo}/>
    )
  }
});

module.exports = ConfirmBattleContainer;
