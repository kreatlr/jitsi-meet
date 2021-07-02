// @flow

import React from 'react';

import { Dialog } from '../../../base/dialog';
import { translate } from '../../../base/i18n';
import { connect } from '../../../base/redux';
import AbstractSpotlightDialog
    from '../AbstractSpotlightDialog';

/**
 * Dialog to confirm a grant moderator action.
 */
class SpotlightDialog extends AbstractSpotlightDialog {
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        return (
            <Dialog
                okKey = 'dialog.Yes'
                onSubmit = { this._onSubmit }
                titleKey = 'dialog.spotlightTitle'
                width = 'small'>
                <div>
                    { this.props.t('dialog.spotlight') }
                </div>
            </Dialog>
        );
    }

    _onSubmit: () => boolean;
}

export default translate(connect()(SpotlightDialog));
