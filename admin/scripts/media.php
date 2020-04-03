<?php

function getAllMovies(){
    $pdo = Database::getInstance()->getConnection();

    $get_movie_query = 'SELECT * FROM tbl_movie';
    $set_movie = $pdo->prepare($get_movie_query);
    $get_movie_result = $set_movie->execute();

    $movies = array();

    if ($get_movie_result) {
        while($movie = $set_movie->fetch(PDO::FETCH_ASSOC)) {
            $currentmovie = array();

            $currentmovie["id"] = $movie["movie_id"];
            $currentmovie['title'] = $movie['movie_title'];
            $currentmovie['release'] = $movie['movie_release'];
            $currentmovie['rating'] = $movie['movie_rating'];
            $currentmovie['poster'] = $movie['movie_poster'];
            $currentmovie['trailer'] = $movie['movie_trailer'];
            $currentmovie['storyline'] = $movie['movie_storyline'];

            $movies[] = $currentmovie;
        }

        return json_encode($movies);
    } else {
        return "There was an issue retrieving moviess";
    }
}