// @flow

import { IconEventNote } from '../../icons';

import AbstractButton from './AbstractButton';
import type { Props } from './AbstractButton';

/**
 * An abstract implementation of a button for disconnecting a conference.
 */
export default class AbstractShowImageButton<P : Props, S: *>
    extends AbstractButton<P, S> {

    icon = IconEventNote;

    /**
     * Handles clicking / pressing the button, and disconnects the conference.
     *
     * @protected
     * @returns {void}
     */
    _handleClick() {
        this._showImage();
    }

    /**
     * Helper function to perform the actual hangup action.
     *
     * @protected
     * @returns {void}
     */
    _showImage() {
        // To be implemented by subclass.
    }
}
