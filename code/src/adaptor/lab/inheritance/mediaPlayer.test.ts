import { MediaPlayer } from './mediaPlayer';
import { SpotifyAPI } from './spotifyAPI';
import { YoutubeAdaptor } from './youtubeAdaptor';

describe('Media Player', () => {
  it('should get nothing if not specific provider.', () => {
    const mediaPlayer = new MediaPlayer();
    expect(mediaPlayer.connect()).toEqual('');
    expect(mediaPlayer.getPlaylist()).toEqual([]);

    mediaPlayer.setProvider(new SpotifyAPI());
    expect(mediaPlayer.connect()).toEqual('Connected to Spotify');

    const playlist = mediaPlayer.getPlaylist();
    expect(playlist).toEqual([
      'spotify.song1',
      'spotify.song2',
      'spotify.song3',
    ]);

    expect(mediaPlayer.play(playlist[0])).toEqual('Playing spotify.song1');
    expect(mediaPlayer.play(playlist[1])).toEqual('Playing spotify.song2');
    expect(mediaPlayer.play(playlist[2])).toEqual('Playing spotify.song3');
  });

  it('should be able to play musics from Youtube playlist, with Adaptor pattern.', () => {
    const mediaPlayer = new MediaPlayer();
    const youtubeAdaptor = new YoutubeAdaptor();
    mediaPlayer.setProvider(youtubeAdaptor);

    const playlist = mediaPlayer.getPlaylist();

    expect(playlist).toEqual([
      'youtube.song1',
      'youtube.song2',
      'youtube.song3'
    ]);
  });
});
