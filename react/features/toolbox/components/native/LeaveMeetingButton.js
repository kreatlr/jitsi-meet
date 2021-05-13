// @flow

// import _ from 'lodash';
import React, { Component } from 'react';
import { Text, TouchableHighlight, Button, View } from 'react-native';
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
            <View>
                <Button
                    onPress = { this.props.onLeaveMeeting }
                    title = 'Leave Class'
                    color = '#841584'
                    accessibilityLabel = 'Learn more about leave class' />

                {/* <TouchableHighlight*/}
                {/*    accessibilityLabel = 'Leave Class?'*/}
                {/*    accessibilityRole = 'button'*/}
                {/*    onPress = { this.props.onLeaveMeeting } >*/}
                {/*    <View>*/}
                {/*        <Text> Leave Class? </Text>*/}
                {/*    </View>*/}
                {/* </TouchableHighlight>*/}
            </View>
        );
    }
}

/**
 * Askdjba.
 *
 * @returns {(function(*): void)|*}
 */
// function onClick() {
//     console.log('[SHIVAM] onlicki has been called during hangup');
//
//     return (dispatch, getState) => {
//         // sendAnalytics(createToolbarEvent('hangup'));
//
//         // FIXME: these should be unified.
//         if (navigator.product === 'ReactNative') {
//             console.log('[SHIVAM] product is native');
//             dispatch(appNavigate(undefined));
//         } else {
//             console.log('[SHIVAM] product is web based');
//             dispatch(disconnect(false));
//         }
//     };
// }

// const _mapDispatchToProps(dispatch: Function, ownProps): Object {
//
//     return {
//         onEndMeetingForAll: () {
//             console.log('[SHIVAM] onlicki has been called during hangup');
//             if (navigator.product === 'ReactNative') {
//                 console.log('[SHIVAM] product is native');
//                 dispatch(appNavigate(undefined));
//             } else {
//                 console.log('[SHIVAM] product is web based');
//                 dispatch(disconnect(false));
//             }
//         }
//     };
// }

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
