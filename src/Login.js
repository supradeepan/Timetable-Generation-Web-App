import React, { useState,useEffect} from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';





function Login() {
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  const [ profile, setProfile ] = useState([]);

  const clientId = "386932037035-k8v833noqjk7m4auae0t83vnkrqvvg3t.apps.googleusercontent.com";


    const onLoginSuccess = (res) => {
      console.log('Login Success:', res.profileObj);
      var s;
      s = "You have logged in successfully";

      alert(s);
      setShowloginButton(false);
      setShowlogoutButton(true);
  };

  const onLoginFailure = (res) => {
      console.log('Login Failed:', res);
  };

  const onSignoutSuccess = () => {
      alert("You have been logged out successfully");
      console.clear();
      setShowloginButton(true);
      setShowlogoutButton(false);
  };

  return (
      <div>
          { showloginButton ?
              <GoogleLogin
                  clientId={clientId}
                  buttonText="Sign In"
                  onSuccess={onLoginSuccess}
                  onFailure={onLoginFailure}
                  cookiePolicy={'single_host_origin'}
                  isSignedIn={true}
              /> : null}

          { showlogoutButton ?
            
              <GoogleLogout
                  clientId={clientId}
                  buttonText="Sign Out"
                  onLogoutSuccess={onSignoutSuccess}
              >
              </GoogleLogout> : null
          }
      </div>
  );
}

export default Login;