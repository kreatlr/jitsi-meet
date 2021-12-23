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
    imageURL: String
}

/**
 *
 */
class ShowImageDialog extends Component<Props,State> {

    constructor(props: Props) {
            super(props);
        }


    render() {
        return (
            <Dialog
                hideCancelButton = { true }
                submitDisabled = { true }
                titleKey = "Today's painting"
                width = { 'small' }>
                <div
                    className = 'hangup-dialog'>
                    <img
                          height= "300"
                          src= {this.props.imageURL}
                          alt="new"
                          />
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

export default connect()(ShowImageDialog);
