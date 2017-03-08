    /*******************
        GENERAL UTILITY FUNCTIONS
    ********************/

    function reqParam() {
        throw new Error('This is a required param!');
    }

    /*******************
        DATA TASKS
    ********************/

    const SpotifyAPI = {};

    /*
        @func search
        @param {string} q
        @param {string} type
        @returns {Promise}
        @desc - takes a searchQuery and optional
        type arg, returns promise that makes
        call to Spotify API
    */
    SpotifyAPI.search = (q = reqParam(), type = 'track') => {

    }; // SpotifyAPI.search

    /*
        @func getTrack
        @param {string} trackId
        @returns {Promise}
        @desc - takes a trackId and 
        returns promise that makes
        call to Spotify API
    */
    SpotifyAPI.getTrack = (trackId = reqParam()) => {

    }; // SpotifyAPI.getTrack

    /*
        @func getTracks
        @param {Array} trackIds
        @returns {Promise}
        @desc - takes trackIds and 
        returns promise that makes
        calls to Spotify API for ALL
        tracks. Promise returns when you have
        successfully retrieved *all* the tracks
        in provided array
        HINT: using async / await will make this easier
        HINT2: you could also use Promise.all
    */
    SpotifyAPI.getTracks = (trackIds = reqParam()) => {

    }; // SpotifyAPI.getTracks

    // HINT3: if you use async / await here, the ^ above will
    // look like this:
    // SpotifyAPI.getTracks = async (trackIds = reqParam()) => {}

    /*******************
        PLAYLIST MANAGEMENT
    ********************/

    const PlaylistManager = {};

    // this array will store the trackIds for all the
    // chosen songs by user
    PlaylistManager.tracks = [];

    // this number will refer to the CURRENT song 
    // since our tracks variable is an array, current song
    // is really just an index of that array
    PlaylistManager.currentSong = 0;

    /*
        @func addTrack
        @param {string} trackId

        @desc - takes a trackId and 
        adds it to the end of the array
        @example - here's how you would use this code:
                   PlaylistManager.addTrack('trackId');
    */
    PlaylistManager.addTrack = (trackId = reqParam()) => {

    }; // PlaylistManager.addTrack

    /*
        @func render
        @returns {Promise}
        @desc - takes your PlaylistManager.tracks
        calls SpotifyAPI.getTracks
        when that returns, converts the 
        track objects to HTML strings
        joins this array and returns ONE string
        @example - here's how this would work
           PlaylistManager.render().then((html) => {
        console.log(html);
           });
           // "<div>
            <audio src="trackURL" id="trackId"></audio></div>"
           // obviously, more audio tags if there are more
           // than one trackId in PlaylistManager.tracks
    */
    PlaylistManager.render = () => {

    }; // PlaylistManager.render

    // STRETCH GOALS: pass in a callback to your render,
    // addToUI(tracks), that actually do the work of building
    // your HTML string.
    // the advantage of doing this is that now, your render
    // no longer is *only* building HTML, which is what your UI is
    // written in


    /*
        @func playNextSong
        @desc - pauses current song 
        plays next song
    */
    PlaylistManager.playNextSong = () => {
        // first, use the PlaylistManager.currentSong
        // to get trackId of *current* song

        // then, find this ID in your DOM and pause song

        // next, increment your PlaylistManager.currentSong

        // after that, get trackId of *new* current song

        // finally, find this ID in your DOM and play song
    }; // PlaylistManager.playNextSong

    // STRETCH GOALS: pass in two callbacks to your playNextSong,
    // play(trackId) and pause(trackId), that determine how to
    // actually play and pause your tracks
    // the advantage of doing this is that now, your playNextSong
    // no longer is dependent on your HTML, which is what your UI is
    // written in