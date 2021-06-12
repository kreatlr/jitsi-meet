// @flow

// import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';


import { createToolbarEvent, sendAnalytics } from '../../../analytics';
import { appNavigate } from '../../../app/actions';
import { disconnect } from '../../../base/connection';

/**
 * An abstract implementation of a button for disconnecting a conference.
 */

// eslint-disable-next-line require-jsdoc
class LeaveMeetingButton extends Component {

    /**
     * Asjkdb.
     *
     * @returns {JSX.Element}
     */
    render() {
        return (
            <div>
                <button
                    className = 'hangup-dialog leave-class'
                    onClick = { this.props.onLeaveMeeting }> Leave Class </button>
            </div>
        );
    }
}

const _mapDispatchToProps = dispatch => {
    return {
        onLeaveMeeting: () => {
            sendAnalytics(createToolbarEvent('hangup'));
            if (navigator.product === 'ReactNative') {
                console.log('[SHIVAM] product is native');
                dispatch(appNavigate(undefined));
            } else {
                console.log('[SHIVAM] product is web based');
                dispatch(disconnect(false, false));
            }
        }
    };
};

const _mapStateToProps = state => {
    return {
    // ...
    };
};

export default connect(_mapStateToProps, _mapDispatchToProps)(LeaveMeetingButton);
