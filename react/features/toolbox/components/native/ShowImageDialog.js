// @flow

import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { connect } from 'react-redux';

//import { Dialog } from '../../../base/dialog';
import CustomDialog from '../../../base/dialog/components/native/CustomDialog';
import {
    isLocalParticipantModerator
} from '../../../base/participants';



type Props = {
    imageURL: String
}

const styles = {
    hangupDialogContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: 24,
        fontsize: 16,
        width: '80%',
        flex: 0,
        flexDirection: 'column',
        cursor: 'pointer',
        backgroundColor: '#273546',
        marginBottom: 10
    }
};

/**
 *
 */
class ShowImageDialog extends Component<Props,State> {

    constructor(props: Props) {
            super(props);
        }


    render() {
    const imageURL1 = this.props.imageURL;
    const imageURL2 = ""+imageURL1;
    const bodyText = "Today's Painting";
    console.log(imageURL2);
        return (

        <CustomDialog>
            <View>
                <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center"}}>
                    {bodyText}
                </Text>
                <Image
                  style={{ width: '100%', height: 200, resizeMode: 'stretch' }}
                  source= {{uri: imageURL2 }}
                />
            </View>
        </CustomDialog>
//            <Dialog
//                hideCancelButton = { true }
//                submitDisabled = { true }
//                titleKey = "Today's painting"
//                width = { 'small' }>
//                <div
//                    className = 'hangup-dialog'>
//                    <img
//                          height= "300"
//                          src= {this.props.imageURL}
//                          alt="new"
//                          />
//                </div>
//            </Dialog>
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
