// @flow

// import _ from 'lodash';
import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';


import { createToolbarEvent, sendAnalytics } from '../../../analytics';
import { appNavigate } from '../../../app/actions';
import { disconnect } from '../../../base/connection';

/**
 * An abstract implementation of a button for disconnecting a conference.
 */

const styles = {
    hangupDialogLeaveClass: {
        marginTop: 8,
        marginBottom: 20,
        backgroundColor: '#62666b',
        borderWidth: 1,
        borderRadius: 8,
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        textAlign: 'center'
    },
    text1: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        width: '100%',
        textAlign: 'center'
    }
};

// eslint-disable-next-line require-jsdoc
class LeaveMeetingButton extends Component {

    /**
     * Asjkdb.
     *
     * @returns {JSX.Element}
     */
    render() {
        console.log('[SHIVAM] styles.hangupDialogLeaveClass is ', styles.hangupDialogLeaveClass);

        return (
            <TouchableOpacity
                onPress = { this.props.onLeaveMeeting }
                style = { styles.hangupDialogLeaveClass }>
                <Text style = { styles.text1 } >Leave Class</Text>
            </TouchableOpacity>
        );
    }
}

const _mapDispatchToProps = dispatch => {
    return {
        onLeaveMeeting: () => {
            sendAnalytics(createToolbarEvent('hangup'));
            if (navigator.product === 'ReactNative') {
                console.log('[SHIVAM] product is native');
                dispatch(appNavigate(undefined, false));
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
