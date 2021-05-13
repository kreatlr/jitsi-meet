// @flow

import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import {
    isLocalParticipantModerator, pinParticipant
} from '../../../base/participants';
import { enableHangUpPopup } from '../../actions';

import EndMeetingForAllButton from './EndMeetingForAllButton';
import LeaveMeetingButton from './LeaveMeetingButton';


// import { AbstractButton } from '../../../base/toolbox/components';

type Props = {
    _isLocalParticipantModerator: boolean
}

/**
 *
 */
class PopUp extends Component<Props> {

    // handleClick = () => {
    //     console.log('[SHIVAM] close button called');
    //     this.props.dispatch(enableHangUpPopup(true));
    // };

    // eslint-disable-next-line require-jsdoc
    render() {
        console.log('[SHIVAM] popup has been called');

        return (
            <View>
                {this._renderEndMeetingForAll()}
                <LeaveMeetingButton />
            </View>
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

        // return (dispatch, getState) => {
        //     const state = getState();
        //
        //     console.log('[SHIVAM] isLocalParticipantModerator is ', isLocalParticipantModerator(state));
        //     if (isLocalParticipantModerator(state)) {
        //         dispatch(pinParticipant(participant.pinned ? null : participant.id));
        //     }
        // };
    }
}

// function handleClick() {
//     return (dispatch, getState) => {
//         console.log('[SHIVAM] close button called');
//         dispatch(enableHangUpPopup(false));
//     };
// }

const _mapDispatchToProps = dispatch => {
    return {
        handleCloseClick: () => {
            console.log('[SHIVAM] close button called');
            dispatch(enableHangUpPopup(false));
        }
    };
};

const _mapStateToProps = state => {
    return {
        _isLocalParticipantModerator: isLocalParticipantModerator(state)
    };
};

export default connect(_mapStateToProps, _mapDispatchToProps)(PopUp);
