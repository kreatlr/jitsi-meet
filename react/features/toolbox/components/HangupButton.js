// @flow

import _ from 'lodash';

import { createToolbarEvent, sendAnalytics } from '../../analytics';
import { appNavigate } from '../../app/actions';
import { disconnect } from '../../base/connection';
import { translate } from '../../base/i18n';
import { connect } from '../../base/redux';
import { AbstractHangupButton } from '../../base/toolbox/components';
import type { AbstractButtonProps } from '../../base/toolbox/components';
import { enableHangUpPopup } from '../actions';


/**
 * The type of the React {@code Component} props of {@link HangupButton}.
 */
type Props = AbstractButtonProps & {

    /**
     * The redux {@code dispatch} function.
     */
    dispatch: Function,

    setIsOpen: boolean
};

/**
 * Component that renders a toolbar button for leaving the current conference.
 *
 * @extends AbstractHangupButton
 */
class HangupButton extends AbstractHangupButton<Props, *> {
    _hangup: Function;

    accessibilityLabel = 'toolbar.accessibilityLabel.hangup';
    label = 'toolbar.hangup';
    tooltip = 'toolbar.hangup';

    /**
     * Initializes a new HangupButton instance.
     *
     * @param {Props} props - The read-only properties with which the new
     * instance is to be initialized.
     */
    constructor(props: Props) {
        super(props);

        // const [ isOpen, setIsOpen ] = APP.store.getState;

        // const togglePopup = () => {
        //     console.log('[SHIVAM] toggle popUp called');
        //     setIsOpen(!isOpen);
        //     console.log('[SHIVAM] isOpen is ', isOpen);
        // };

        this._hangup = () => {
            sendAnalytics(createToolbarEvent('hangup'));

            this.props.dispatch(enableHangUpPopup(true));

            // // FIXME: these should be unified.
            // if (navigator.product === 'ReactNative') {
            //     this.props.dispatch(appNavigate(undefined));
            // } else {
            //     this.props.dispatch(disconnect(false));
            // }
        };
    }

    /**
     * Helper function to perform the actual hangup action.
     *
     * @override
     * @protected
     * @returns {void}
     */
    _doHangup() {
        this._hangup();
    }
}

export default translate(connect()(HangupButton));
