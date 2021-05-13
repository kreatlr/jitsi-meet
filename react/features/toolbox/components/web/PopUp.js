// @flow

import React, { Component } from 'react';
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
            <div className = 'modal'>
                <div className = 'modal_content'>
                    <span
                        className = 'close'
                        /* eslint-disable-next-line react/jsx-handler-names */
                        onClick = { this.props.handleCloseClick }>
            &times;
                    </span>
                    {/* <form>*/}
                    {/*    <h3>Register!</h3>*/}
                    {/*    <label>*/}
                    {/*        Name:*/}
                    {/*        <input*/}
                    {/*            name = 'name'*/}
                    {/*            type = 'text' />*/}
                    {/*    </label>*/}
                    {/*    <br />*/}
                    {/*    <input type = 'submit' />*/}
                    {/* </form>*/}
                    {this._renderEndMeetingForAll()}
                    <LeaveMeetingButton />
                </div>
            </div>
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
