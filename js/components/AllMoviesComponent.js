import MovieComponent from './TheMovieComponent.js';

export default {
	template: `
	<div class="container">
		<div class="row">
			<div class="col-sm-12">
				<h1 class="movie-message">{{ message }}</h1>
			</div>
		</div>

		<div class="row">
			<user v-for="(movie, index) in mList" :livemovie="movie" :key="index"></user>
		</div>
	</div>
	`,

	created: function () {
		this.fetchAllMovies();
	},

	data() {
		return {
			message: `Checkout All Movies`,

			mList: []
		}
	},

	methods: {
        retrieveVideoContent() {
            // debugger;
            let url = ('./admin/get_movies.php?allmovies=true');
    
            fetch(url)
            .then(res => res.json())
            .then(data =>{
                this.mList = data;
            })
            .catch((err) => console.log(err));

        }
    },

	components: {
		user: UserComponent
	}
   
}