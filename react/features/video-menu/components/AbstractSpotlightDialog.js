// @flow

import { Component } from 'react';

import {
    createRemoteVideoMenuButtonEvent,
    sendAnalytics
} from '../../analytics';
import { grantModerator } from '../../base/participants';
import {setFollowMe} from '../../base/conference/actions';
import {setSpotlight} from '../../base/conference/actions';

type Props = {

    /**
     * The Redux dispatch function.
     */
    dispatch: Function,

    /**
     * The ID of the remote participant to be granted moderator rights.
     */
    participantID: string,

    /**
     * Function to translate i18n labels.
     */
    t: Function
};

/**
 * Abstract dialog to confirm granting moderator to a participant.
 */
export default class AbstractSpotlightDialog
    extends Component<Props> {
    /**
     * Initializes a new {@code AbstractGrantModeratorDialog} instance.
     *
     * @inheritdoc
     */
    constructor(props: Props) {
        super(props);

        this._onSubmit = this._onSubmit.bind(this);
    }

    _onSubmit: () => boolean;

    /**
     * Callback for the confirm button.
     *
     * @private
     * @returns {boolean} - True (to note that the modal should be closed).
     */
    _onSubmit() {
        const { dispatch, participantID } = this.props;

        sendAnalytics(createRemoteVideoMenuButtonEvent(
            'grant.moderator.button',
            {
                'participant_id': participantID
            }));

        dispatch(setSpotlight(participantID));

        return true;
    }
}
