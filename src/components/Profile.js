import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { loadUserDataIfNeeded } from "../actions/user";

const Profile = ({ id, dispatch, userData, isLoading }) => {
  useEffect(() => {
    dispatch(loadUserDataIfNeeded(id));
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div>
      {userData && (
        <>
          <p>City: {userData.city}</p>
          <p>Languages:</p>
          <ul>
            {userData.languages.map(language => (
              <li key={language}>{language}</li>
            ))}
          </ul>
          <p>Social:</p>
          <ul className="social-list">
            {userData.social.map(social => (
              <li key={social.label}>
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-icon social-icon_${social.label}`}
                >
                  <span>{social.label}</span>
                </a>
              </li>
            ))}
          </ul>{" "}
        </>
      )}
    </div>
  );
};

Profile.propTypes = {
  id: PropTypes.number,
  dispatch: PropTypes.func.isRequired,
  userData: PropTypes.object,
  isLoading: PropTypes.bool
};

export default Profile;
