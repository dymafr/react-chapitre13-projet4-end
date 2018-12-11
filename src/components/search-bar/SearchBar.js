import React, { Component } from 'react';
import { Formik } from 'formik';
import apiMovie from '../../conf/api.movie';
import { parseApiMovie } from '../../utils/api.movie.tools';

export default class SearchBar extends Component {
  
  submit = (values, actions) => {
    // console.log(values);
    const query = '?' + Object.keys(values).map( key => `${ key }=${ values[key ]}&`).join('')
    apiMovie.get('/search/movie' + query)
            .then( response => response.data.results )
            .then( moviesApi => {
              const movies = moviesApi.map(parseApiMovie)
              actions.setSubmitting(false);
              this.props.updateMovies(movies);
            })
            .catch( err => console.log(err));

  }
  
  render() {
    return (
      <Formik
        onSubmit={ this.submit }
        initialValues={ { query: '', sort_by: 'popularity.desc' } }
      >
        { ({ handleSubmit, handleChange, handleBlur, isSubmitting }) => (
          <form className="d-flex flex-row p-2 m-2" onSubmit={ handleSubmit }>
            <input name="query" className="flex-fill form-control mr-2" placeholder="Search ..." onChange={ handleChange } onBlur={ handleBlur } />
            <select name="sort_by" className="mr-2 form-control w-25" onChange={ handleChange } onBlur={ handleBlur }>
              <option value="popularity.desc">Popularite</option>
              <option value="release_date.desc">Date</option>
              <option value="vote_average.desc">Vote</option>
            </select>
            <button className="btn btn-small btn-success" type="submit" disabled={ isSubmitting } >Submit</button>
          </form>
        )}

      </Formik>
    )
  }
}