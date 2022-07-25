<h1>Express API created for the Project_WeLoveMovies Client for the backend capstone assignment.</h1>
<br>

This backend API was created to be used with this [project](https://github.com/DeveloperCaleb/starter-movie-front-end).

The technologies used for this project is Javascript, Node.js, PostgreSQL, and Heroku.

[Deployed API](https://fierce-mountain-99742.herokuapp.com/)

<h2>API Endpoints</h2>

<h3>Returns all movies</h3>

[List Movies](https://fierce-mountain-99742.herokuapp.com/movies)

<h3>Returns all theaters with the movies currently at those theaters</h3>

[List Theaters](https://fierce-mountain-99742.herokuapp.com/theaters)

<h3>Returns all movies that are currently showing.</h3>

[List Movies Currently Showing](https://fierce-mountain-99742.herokuapp.com/movies?is_showing=true)

<h3>Returns a movie</h3>

https://fierce-mountain-99742.herokuapp.com/movies/:movieId

<p>Replace ':movieId' in the url path with any number</p>
<h3>Returns all theaters where a movie is playing</h3>

https://fierce-mountain-99742.herokuapp.com/movies/:movieId/theaters

<p>Replace ':movieId' in the url path with any number</p>

<h3>Returns all reviews for a movie</h3>

https://fierce-mountain-99742.herokuapp.com/movies/:movieId/reviews

<p>Replace ':movieId' in the url path with any number.</p>
