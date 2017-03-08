function reqParam() {
	throw new Error ('This is a required param!');
}
(function () {
	const validateSearch = (value) => {
		return new Promise((resolve, reject) =>{
			if (value.trim() === "") {
				reject("Input a value");
			}
			resolve(value);
		});
	};
	const addTrackToHTML = (track) => {
		const {name, preview_url, id, album} = track;
		const imageUrl = album.images[1].url;
		const div = document.createElement('div');
		div.classList.add('ui', 'card', 'dimmable');
		div.innerHTML = getCardMarkup(name, preview_url, id, album, imageUrl, false);
		results.appendChild(div);

		div.addEventListener('click', () => {
			PlaylistManager.addTrack(track);
			const currentIndex = PlaylistManager.tracks.length -1;

			const PlaylistTrack = document.createElement('div');
			playlistTrack.classList.add('ui', 'card', 'trackid' + id);
			playlistTrack.innerHTML = `
<div class="item playlist-track trackid-${id}">
	<a href="#" class="playlist-close js-playlist-close">
		<i class="icon remove"></i>

	</a>
	<div class="ui tiny image">
		<img src="${imageUrl}">
	</div>
</div>
		<audio controls style="width: 100%;">
			<source src="${preview_url}">
		</audio>
			`
			playlist.appendChild(playlistTrack)

			// get the AUDIO tag
			const audio = playlistTrack.querySelector('audio');

			audio.addEventListener('play', ()=>{
				PlaylistManager.currentSong = currentIndex;
			});
			audio.addEventListener('ended', () => {
				console.log("done!")
				const nextTrackId = PlaylistManager.getNextSong();
				setTimeout(()=>{
					document.querySelector('.trackid-${nextTrackId} audio').play();
				}, 1000);
				})
		const closeBtn = playlistTrack.querySelector('.js-playlist-close');
		closeBtn.addEventListener('click', () => {
			if (PlaylistManager.currentSong === currentIndex) {
				const nextTrackId = PlaylistManager.getNextSong();
				setTimeout(() => {
					document.querySelector('.trackid-${nextTrackId} audio').play();
				}, 500);
			}
				PlaylistManager.removeById(id);
				playlist.removeChild(playlistTrack);
			})			
		})
	}
	const button = document.querySelector('.js-search');
	const input = document.querySelector('.js-input');
	const results = document.querySelector('.js-searchresult');
	const playlist = document.querySelector('.js-playlist');

	const getCardMarkup = (name, preview_url, id, album, imageUrl, isDimmed) => {
		let html = `
		<div class="image">
			<img src = "${imageUrl}">
		</div>
		<div class="content">
			<a class="header">${name}</a>
			<div class="meta">${album.name}</div>
			<div class="descirption">
				<audio controls class = "${id} style="width": 100%;">
					<source src="${preview_url}">
				</audio>
			</div>
		</div>
	`;	
	}







