import { MediaProvider } from "./spotifyAPI";
import { YoutubeAPI } from "./youtubeAPI";

export class YoutubeAdapter implements MediaProvider {

    private provider: YoutubeAPI | undefined;
    constructor(provider: YoutubeAPI) {
        this.provider = provider
    }

    connect(): string {
        if (!this.provider) {
            return '';
        }
        return 'Connected to ' + this.provider.connect();
    }

    getPlaylist(): string[] {
        if (!this.provider) {
            return [];
        }
        return this.provider.getMusicLibrary().map((song) => {
            return song.name;
        })
    }
}