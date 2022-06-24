import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {increaseCount} from '../../actions/index';

function Counter() {
  return (
    <>    
        <div className='circle-nav'>0{/*this.props.count*/}</div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    count: state.counter.count,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    handleIncrease: increaseCount,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);