import React, {Component} from 'react';

class UsersFavoriteMoviesList extends Component{
  render() {
  	return(
     <ol className="users-favorite-movies-list">
      {
      	this.props.profiles.map((profile)=>(
     		<li className="profile" key={profile.id}>
     			<p className="user-favorite-movie">
     				{
     					`${this.props.users[`${profile.userID}`].name}'s favorite movie is ${this.props.movies[`${profile.favoriteMovieID}`].name}.`
					}
     			</p>
     		</li>
     	))
      }
     </ol>
     );
	};
}

export default UsersFavoriteMoviesList;