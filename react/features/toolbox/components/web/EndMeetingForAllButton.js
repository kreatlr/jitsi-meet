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
class EndMeetingForAllButton extends Component {

    /**
     * Asjkdb.
     *
     * @returns {JSX.Element}
     */
    render() {
        return (
            <div>
                <button
                    className = 'hangup-dialog end-for-all'
                    onClick = { this.props.onEndMeetingForAll }>End Class For All</button>
            </div>
        );
    }
}

const _mapDispatchToProps = dispatch => {
    return {
        onEndMeetingForAll: () => {
            sendAnalytics(createToolbarEvent('hangup'));
            if (navigator.product === 'ReactNative') {
                console.log('[SHIVAM] product is native');
                dispatch(appNavigate(undefined));
            } else {
                console.log('[SHIVAM] product is web based');
                dispatch(disconnect(false));
            }
        }
    };
};

const _mapStateToProps = state => {
    return {
    // ...
    };
};

export default connect(_mapStateToProps, _mapDispatchToProps)(EndMeetingForAllButton);
