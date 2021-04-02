/**
 * The prefix of the {@code localStorage} key into which {@link storeConfig}
 * stores and from which {@link restoreConfig} restores.
 *
 * @protected
 * @type string
 */
export const _CONFIG_STORE_PREFIX = 'config.js';

/**
 * The list of all possible UI buttons.
 *
 * @protected
 * @type Array<string>
 */
export const TOOLBAR_BUTTONS = [
    'microphone', 'camera', 'fullscreen',
    'fodeviceselection', 'hangup', 'chat', 'recording',
     'settings', 'raisehand',
     'filmstrip',
    'tileview', 'mute-everyone', 'mute-video-everyone',
    'security', 'toggle-camera'
];
