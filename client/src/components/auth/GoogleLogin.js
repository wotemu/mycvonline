import React from 'react';
import api from '../../utils/api';
import { GoogleLogin } from 'react-google-login';

const LoginWithGoogle = () => {
  const sendGoogleToken = (tokenId) => {
    api
      .post('/auth/googlelogin', {
        idToken: tokenId
      })
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        window.location = '/dashboard';
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const responseGoogle = (response) => {
    sendGoogleToken(response.tokenId);
  };
  const responseFailureGoogle = (response) => {
    sendGoogleToken(response.tokenId);
  };

  return (
    <div className="">
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT}
        onSuccess={responseGoogle}
        onFailure={responseFailureGoogle}
        cookiePolicy={'single_host_origin'}
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            className="p-2 border-0"
            style={{
              borderRadius: '3px'
            }}
          >
            {' '}
            <i className="fab fa-google" style={{ color: 'red' }} />
            <span className="pl-2">Sign In with Google</span>
          </button>
        )}
      ></GoogleLogin>
    </div>
  );
};

export default LoginWithGoogle;
