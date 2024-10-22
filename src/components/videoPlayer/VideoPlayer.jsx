import {
    MediaController,
    MediaControlBar,
    MediaTimeRange,
    MediaTimeDisplay,
    MediaVolumeRange,
    MediaPlayButton,
    MediaSeekBackwardButton,
    MediaSeekForwardButton,
    MediaMuteButton,
} from 'media-chrome/react';
import './videoplayer.css'
const VideoPlayer = ({ videoSrc }) => {
    return (
        <MediaController>
            <video
                slot="media"
                src={videoSrc}
                preload="auto"
                muted
                crossOrigin=""
            />
            <MediaControlBar>
                <MediaPlayButton></MediaPlayButton>
                <MediaSeekBackwardButton></MediaSeekBackwardButton>
                <MediaSeekForwardButton></MediaSeekForwardButton>
                <MediaTimeRange></MediaTimeRange>
                <MediaTimeDisplay showDuration></MediaTimeDisplay>
                <MediaMuteButton></MediaMuteButton>
                <MediaVolumeRange></MediaVolumeRange>
                <media-fullscreen-button></media-fullscreen-button>
            </MediaControlBar>
        </MediaController>
    );
};

export default VideoPlayer;