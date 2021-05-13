// @flow

import { HANGUP_POPUP_ENABLED } from './actionTypes';

/**
 * Enables/Disables the hanup popup.
 *
 * @param {boolean} hangupPopupEnabled - Whether to enable hangup popup or not.
 * @returns {{hangupPopupEnabled: boolean, type: string}}
 */
export function enableHangUpPopup(hangupPopupEnabled: boolean) {
    return {
        type: HANGUP_POPUP_ENABLED,
        hangupPopupEnabled
    };
}
