// @flow

// import _ from 'lodash';
import React, { Component } from 'react';
import { Button, Text, TouchableHighlight, View } from 'react-native';
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
            <View>
                <Button
                    onPress = { this.props.onEndMeetingForAll }
                    title = 'End Class for all'
                    color = '#841584'
                    accessibilityLabel = 'Learn more about leave class' />
                {/* <TouchableHighlight*/}
                {/*    accessibilityLabel = 'End Class For All'*/}
                {/*    accessibilityRole = 'button'*/}
                {/*    onPress = { this.props.onEndMeetingForAll } >*/}
                {/*    <View>*/}
                {/*        <Text> End Class For All</Text>*/}
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
