/* @flow */

import React from 'react';

import { translate } from '../../../base/i18n';
import { IconCrown } from '../../../base/icons';
import { connect } from '../../../base/redux';
import AbstractSpotlightButton, {
    _mapStateToProps,
    type Props
} from '../AbstractSpotlightButton';

import VideoMenuButton from './VideoMenuButton';

declare var interfaceConfig: Object;

/**
 * Implements a React {@link Component} which displays a button for granting
 * moderator to a participant.
 */
class SpotlightButton extends AbstractSpotlightButton {
    /**
     * Instantiates a new {@code GrantModeratorButton}.
     *
     * @inheritdoc
     */
    constructor(props: Props) {
        super(props);

        this._handleClick = this._handleClick.bind(this);
    }

    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        const { participantID, t, visible } = this.props;

        if (!visible) {
            return null;
        }

        return (
            <VideoMenuButton
                buttonText = { t('videothumbnail.spotlight') }
                displayClass = 'spotlightlink'
                icon = { IconCrown }
                id = { `spotlightlink_${participantID}` }
                // eslint-disable-next-line react/jsx-handler-names
                onClick = { this._handleClick } />
        );
    }

    _handleClick: () => void
}

export default translate(connect(_mapStateToProps)(SpotlightButton));
