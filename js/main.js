import AudioComponent from "./components/TheAudioComponent.js";
import MovieComponent from "./components/TheMovieComponent.js";
import TvComponent from "./components/TheTvComponent.js";

(() => {
    const myVM = new Vue({
        data: {
            // set the default component! - you can find this in index.html
            activeComponent: MovieComponent
        },

        methods: {
            switchMovie() {
                this.activeComponent = MovieComponent
            },
            switchAudio() {
                 this.activeComponent = AudioComponent
            },
            switchTv() {
                this.activeComponent = TvComponent
            }

        }
    }).$mount("#app");
})();