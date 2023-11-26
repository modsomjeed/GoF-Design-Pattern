import { Youtube } from "./youtubeAPI";
import { MediaProvider } from "./spotifyAPI";

export class YoutubeAdaptor extends Youtube implements MediaProvider {
    
    getPlaylist(): string[] {
        const playlist = this.getMusicLibrary();
        return playlist.map((music) => music.name);
    }
}