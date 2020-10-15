import React from 'react';
import { Link } from 'react-router-dom';
import isEmpty from '../../validation/is-empty';
import AvatarImg from '../../img/avatar.jpg';
import Spinner from '../common/Spinner';

class Search extends React.Component {
  state = {
    isLoading: true,
    profiles: [],
    error: null
  };

  apiProfiles = [];

  fetchUsers() {
    fetch(`https://myhoneypie.herokuapp.com/api/profile`)
      .then((response) => response.json())
      .then((data) => {
        this.apiProfiles = data;
        this.setState({
          profiles: data,
          isLoading: false
        });
      })
      .catch((error) => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchUsers();
  }

  onChangeHandler(e) {
    let newArray = this.apiProfiles.filter((d) => {
      return (
        (d.user && d.user.name.toLowerCase().indexOf(e.target.value) !== -1) ||
        d.status.toLowerCase().indexOf(e.target.value) !== -1
      );
    });
    this.setState({
      profiles: newArray
    });
  }

  render() {
    const { isLoading, profiles, error } = this.state;
    return (
      <div>
        <section className="headline-profiles">
          <h2>Search Profiles by Name or Profession</h2>
          <div className=" form-group m-3 ">
            <form>
              <input
                type="text"
                value={this.state.value}
                placeholder="Search here..."
                onChange={this.onChangeHandler.bind(this)}
                className="form-control input-lg p-2"
              />
            </form>
          </div>
        </section>
        <section className="boxes">
          {error ? <p>{error.message}</p> : null}

          {!isLoading ? (
            profiles.map((m) => {
              return (
                <div className="box" key={m.user && m.user._id}>
                  <Link to={`/profile/${m.user && m.user._id}`}>
                    <img
                      src={isEmpty(m.filePath) ? AvatarImg : m.filePath}
                      alt=""
                      className="img-fluid"
                      style={{ maxWidth: '140px', maxHeight: '140px' }}
                    />
                  </Link>
                  <h6>{m.user && m.user.name}</h6>
                  <p>{m.status} </p>
                  <Link
                    to={`/profile/${m.user && m.user._id}`}
                    className="btn-small"
                  >
                    View Profile
                  </Link>
                </div>
              );
            })
          ) : (
            <Spinner />
          )}
        </section>
      </div>
    );
  }
}

export default Search;
