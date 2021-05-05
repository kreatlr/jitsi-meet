// @flow

// import type { Dispatch } from 'redux';

// import VideoLayout from '../../../modules/UI/videolayout/VideoLayout';

import { UPDATE_LAST_LARGE_VIDEO_MEDIA_EVENT } from './actionTypes';

export * from './actions.any';


/**
 * Resizes the large video container based on the dimensions provided.
 *
 * @param {number} width - Width that needs to be applied on the large video container.
 * @param {number} height - Height that needs to be applied on the large video container.
 * @returns {Function}
 */
// eslint-disable-next-line no-unused-vars,require-jsdoc
export function resizeLargeVideo(width: number, height: number) {
    return (dispatch: Dispatch<any>, getState: Function) => {
        // eslint-disable-next-line no-unused-vars
        const state = getState();

        console.log('[SHIVAM] called resizeLargeVideo ', height, width);

        // const largeVideo = state['features/large-video'];
        //
        // console.log('[SHIVAM] called resizeLargeVideo ', height, width);
        //
        // if (largeVideo) {
        //     const largeVideoContainer = VideoLayout.getLargeVideo();
        //
        //     console.log('[SHIVAM] large video is present, calling resize ', height, width);
        //
        //     largeVideoContainer.updateContainerSize(width, height);
        //     largeVideoContainer.resize();
        // }
    };
}

/**
 * Updates the last media event received for the large video.
 *
 * @param {string} name - The current media event name for the video.
 * @returns {{
 *     type: UPDATE_LAST_LARGE_VIDEO_MEDIA_EVENT,
 *     name: string
 * }}
 */
export function updateLastLargeVideoMediaEvent(name: String) {
    return {
        type: UPDATE_LAST_LARGE_VIDEO_MEDIA_EVENT,
        name
    };
}
