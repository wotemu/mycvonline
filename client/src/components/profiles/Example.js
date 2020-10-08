import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import isEmpty from '../../validation/is-empty';
import AvatarImg from '../../img/avatar.jpg';

const Search = () => {
  const [profiles, setProfiles] = useState([]);
  const [serchProfile, setSearchProfile] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const url = 'https://myhoneypie.herokuapp.com/api/profile';
    const response = await fetch(url);
    const info = await response.json();

    setProfiles(info);
    setSearchProfile(info);
  };

  const Search = (key) => {
    const newResults = serchProfile.filter((m) =>
      m.user.name.toLowerCase().includes(key.toLowerCase())
    );
    setProfiles(newResults);
  };

  const searchResults = profiles.map((res) => (
    <p key={res.user._id}>
      <span>
        <Link to={`/profile/${res.user._id}`}> {res.user.name} </Link>
      </span>
      <span>
        <Link to={`/profile/${res.user._id}`}>
          <img
            src={isEmpty(res.filePath) ? AvatarImg : res.filePath}
            alt=""
            className="img-fluid"
            style={{ width: '40px', height: '40px' }}
          />
        </Link>
      </span>
    </p>
  ));

  return (
    <div>
      <input
        type="text"
        onChange={(event) => Search(event.target.value)}
        placeholder="Search profile..."
      />
      {/* searchResults */}
    </div>
  );
};

export default Search;
