Setup Steps:

1. Go to https://www.themoviedb.org/ Register an account to get an API key.

2. Create your React Native project using Expo

IMPORTANT (PLEASE READ):

1. Use v3 of the API and authenticate your requests using your API Key https://developers.themoviedb.org/3

2. API endpoints to be used (all GET endpoints):

`Movies`
now playing
popular
top rated
upcoming

`Search`
movie
multi
tv

`TV`
airing today
on the air
popular
top_rated

3. Do NOT use any of the wrapper libraries to make requests to the API, instead use the native fetch function/axios npm package. Marks will be deducted if wrapper libraries are used.

4. When doing the show page, please only pass the movie/media ID returned from the API and DO ANOTHER GET request for a singular object using the /movie/${movie_id} path. Do not pass the information from the list item on the index page.

Desired Functionality:

Create three tabs. The first and third tabs should fetch from the movie and tv endpoints respectively. There should be a dropdown box displayed with the sub type within that respective endpoint. Upon selecting another selection from that dropdown box, the list of results should update to reflect the updated response from the new query. Likewise, when selecting another tab the results list should update to display the updated media and search type. When the search results tab is clicked, it should initially display a message prompting the user to enter a search query term nothing is entered in the input box. There should be a dropdown box in the search form which is used to modify the type of search being done.

Every list item should have a more details button that takes you to the show page for that movie/media. It should display everything the list item displays plus the overview text that's returned from the API.