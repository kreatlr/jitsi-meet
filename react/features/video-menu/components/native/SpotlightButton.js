// @flow

import { translate } from '../../../base/i18n';
import { connect } from '../../../base/redux';
import AbstractSpotlightButton, {
    _mapStateToProps
} from '../AbstractSpotlightButton';

export default translate(connect(_mapStateToProps)(AbstractSpotlightButton));
