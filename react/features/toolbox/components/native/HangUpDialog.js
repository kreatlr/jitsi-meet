// @flow

import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import CustomDialog from '../../../base/dialog/components/native/CustomDialog';
import {
    isLocalParticipantModerator
} from '../../../base/participants';


import EndMeetingForAllButton from './EndMeetingForAllButton';
import LeaveMeetingButton from './LeaveMeetingButton';

type Props = {
    _isLocalParticipantModerator: boolean
}


const styles = {
    hangupDialogContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: 24,
        fontsize: 16,
        width: '80%',
        flex: 0,
        flexDirection: 'column',
        cursor: 'pointer',
        backgroundColor: '#273546',
        marginBottom: 10
    }
};

/**
 *
 */
class HangUpDialog extends Component<Props> {

    // eslint-disable-next-line require-jsdoc
    render() {
        console.log('[SHIVAM] popup has been called');
        console.log('[SHIVAM] styles.hangupDialogContainer is ', styles.hangupDialogContainer);

        return (
            <CustomDialog
                style = { styles.hangupDialogContainer } >
                <View>
                    {this._renderEndMeetingForAll()}
                    <LeaveMeetingButton />
                </View>
            </CustomDialog>
        );
    }

    /**
     * Renders popup element.
     *
     * @returns {JSX.Element|null}
     * @private
     */
    _renderEndMeetingForAll() {
        // const state = APP.store.getState();

        console.log('[SHIVAM] _renderEndMeetingForAll is called');

        if (this.props._isLocalParticipantModerator === undefined) {
            console.log('[SHIVAM] _isLocalParticipantModerator is not defined here');
        } else {
            console.log('[SHIVAM] _isLocalParticipantModerator is ', this.props._isLocalParticipantModerator);
        }

        return this.props._isLocalParticipantModerator === true ? <EndMeetingForAllButton /> : null;
    }
}

const _mapDispatchToProps = () => {
    return {

    };
};

const _mapStateToProps = state => {
    return {
        _isLocalParticipantModerator: isLocalParticipantModerator(state)
    };
};

export default connect(_mapStateToProps, _mapDispatchToProps)(HangUpDialog);
