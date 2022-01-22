// @flow

import { createToolbarEvent, sendAnalytics } from '../../../analytics';
import { toggleDialog } from '../../../base/dialog';
import { translate } from '../../../base/i18n';
import { connect } from '../../../base/redux';
import { AbstractShowImageButton } from '../../../base/toolbox/components';
import type { AbstractButtonProps } from '../../../base/toolbox/components';

import ShowImageDialog from './ShowImageDialog';


/**
 * The type of the React {@code Component} props of {@link HangupButton}.
 */
type Props = AbstractButtonProps & {

    /**
     * The redux {@code dispatch} function.
     */
    dispatch: Function,
    _pathname: String
};

/**
 * Component that renders a toolbar button for leaving the current conference.
 *
 * @extends AbstractHangupButton
 */
class ShowImageButton extends AbstractShowImageButton<Props, *> {
    _hangup: Function;

    accessibilityLabel = 'toolbar.accessibilityLabel.hangup';
    label = 'Show Painting';
    tooltip = 'Show Painting';

    /**
     * Initializes a new HangupButton instance.
     *
     * @param {Props} props - The read-only properties with which the new
     * instance is to be initialized.
     */
    constructor(props: Props) {
        super(props);

        this._showImageImpl = (imageURL) => {
            console.log("image url " + imageURL);
            this.props.dispatch(toggleDialog(ShowImageDialog,{imageURL}));

        };
    }

    /**
     * Helper function to perform the actual hangup action.
     *
     * @override
     * @protected
     * @returns {void}
     */
    _showImage() {
    let urlPath = "https://www.kreatlr.com/_functions/courseDetails" + this.props._pathname;
    fetch(urlPath).then(res => res.json()).then(response =>{
                console.log("Test log");
                console.log(response.nextClassPicture);
                this._showImageImpl(response.nextClassPicture);
                });
    }
}

const _mapStateToProps = state => {
    const { locationURL } = state['features/base/connection'];
    return {
        _pathname : locationURL.pathname
    };
};

export default translate(connect(_mapStateToProps)(ShowImageButton));
