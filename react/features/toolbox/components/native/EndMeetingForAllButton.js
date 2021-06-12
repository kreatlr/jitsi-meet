// @flow

// import _ from 'lodash';
import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';


import { createToolbarEvent, sendAnalytics } from '../../../analytics';
import { appNavigate } from '../../../app/actions';
import { disconnect } from '../../../base/connection';


const styles = {
    hangupDialogEndForAll: {
        backgroundColor: '#800000',
        borderWidth: 1,
        borderRadius: 8,
        width: '90%',
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
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
        console.log('[SHIVAM] styles.hangupDialogEndForAll is ', styles.hangupDialogEndForAll);

        return (
            <TouchableOpacity
                onPress = { this.props.onEndMeetingForAll }
                style = { styles.hangupDialogEndForAll } >
                <Text style = { styles.text1 } >End Class for all</Text>
            </TouchableOpacity>
        );
    }
}

const _mapDispatchToProps = dispatch => {
    return {
        onEndMeetingForAll: () => {
            sendAnalytics(createToolbarEvent('hangup'));
            if (navigator.product === 'ReactNative') {
                console.log('[SHIVAM] product is native');
                dispatch(appNavigate(undefined, true));
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
