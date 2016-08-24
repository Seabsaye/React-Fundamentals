var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var Link = require('react-router').Link;
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var MainContainer = require('./MainContainer');
var Loading = require('./Loading');

//trick for seeing the props you get before rendering all of the UI
// function puke (obj) {
//   return <pre>{JSON.stringify(obj, null, '  ')}</pre>
// }

function ConfirmBattle (props) {
  return props.isLoading === true
    ? <Loading speed={600} text='Waiting' />
    : <MainContainer>
        <h1>Confirm Players</h1>
        <div className='col-sm-8 col-sm-offset-2'>
          <UserDetailsWrapper header='Player One'>
            <UserDetails info={props.playersInfo[0]} />
          </UserDetailsWrapper>
          <UserDetailsWrapper header="Player Two">
            <UserDetails info={props.playersInfo[1]} />
          </UserDetailsWrapper>
        </div>
        <div className='col-sm-8 col-sm-offset-2'>
          <div className='col-sm-12' style={styles.space}>
            <button type='button' style={styles.space} className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>
              Initiate Battle!
            </button>
          </div>
          <div className='col-sm-12' style={styles.space}>
            <Link to='/playerOne'>
              <button type='button' style={styles.space} className='btn btn-lg btn-danger'>
                Reselect players
              </button>
            </Link>
          </div>
        </div>
      </MainContainer>
}

ConfirmBattle.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired
}

module.exports = ConfirmBattle;
