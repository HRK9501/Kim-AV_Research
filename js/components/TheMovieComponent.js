export default {
        props: ['livemovie'],

        name: "TheMovieComponent",
    
        template: `
        <div class="row">
            <div class="col-12 order-1 order-md-2 col-md-9 media-container">
                <video autoplay controls muted src="video/BackToTheFuture.mp4" class="fs-video"></video>
            </div>

            <div class="col-12 order-2 order-md-1 col-md-3 media-container">
                <h4 class="media-title">Back to the future</h4>
                <p class="media-details">Back to the Future is a 1985 American science fiction film directed by Robert Zemeckis and written by Zemeckis and Bob Gale. It stars Michael J. Fox as teenager Marty McFly, who accidentally travels back in time from 1985 to 1955, where he meets his future parents and becomes his mother's romantic interest.</p>
                <span class="media-time">1h 56m</span>
                <span class="media-year">1985</span>
            </div>
        </div>
        `,
    
        data: function () {
            return {
                currentMediaDetails: {},
                allRetrievedVideos: []
            }
        },


    
}
