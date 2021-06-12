// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Dialog } from '../../../base/dialog';
import {
    isLocalParticipantModerator
} from '../../../base/participants';

import EndMeetingForAllButton from './EndMeetingForAllButton';
import LeaveMeetingButton from './LeaveMeetingButton';

type Props = {
    _isLocalParticipantModerator: boolean
}

/**
 *
 */
class HangUpDialog extends Component<Props> {

    // eslint-disable-next-line require-jsdoc
    render() {
        console.log('[SHIVAM] popup has been called');

        return (
            <Dialog
                hideCancelButton = { true }
                submitDisabled = { true }
                titleKey = 'toolbar.hangupDialog'
                width = { 'small' }>
                <div
                    className = 'hangup-dialog'>
                    {this._renderEndMeetingForAll()}
                    <LeaveMeetingButton />
                </div>
            </Dialog>
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

        // eslint-disable-next-line max-len
        return this.props._isLocalParticipantModerator === true ? <EndMeetingForAllButton /> : null;
    }
}

const _mapStateToProps = state => {
    return {
        _isLocalParticipantModerator: isLocalParticipantModerator(state)
    };
};

export default connect(_mapStateToProps)(HangUpDialog);
