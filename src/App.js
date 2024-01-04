import { useState } from "react";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import './App.css'; 
import logo from './img/logo.png';

function App() {
  const [profile, setProfile] = useState(null);

  const handleChatbotButtonClick = () => {
    // Open the link in a new window
    window.open("https://lightwayit.com/work.html#chatbot", "_blank");
  };

  return (
    <div className="app-container">
      <div className="logo-container">
        <img src={logo} alt="Company Logo" className="logo" />
        <h1>SocialQ Chatbot</h1>
      </div>

      {!profile ? (
        <LoginSocialFacebook
          appId="198578376598726"
          onResolve={(response) => {
            console.log(response);
            setProfile(response.data);
          }}
          onReject={(error) => {
            console.log(error);
          }}
        >
          <FacebookLoginButton className="fb-login-button" />
        </LoginSocialFacebook>
      ) : (
        <div className="profile-container">
          <p className="logged-in-text">You are logged in as:</p>
          <h1 className="profile-name">{profile.name}</h1>
          <img src={profile.picture.data.url} alt="Profile" className="profile-picture" />

          {/* Add SocialQ Chatbot button */}
          <button onClick={handleChatbotButtonClick} className="chatbot-button">Get Started</button>
        </div>
      )}

      {!profile && (
        <div className="hero-text">
          <p>
            Welcome to SocialQ Chatbot! Engage with our intelligent chatbot powered by OpenAI.
          </p>
          <p>
            Connect through WhatsApp, Instagram, Messenger, and Telegram to receive personalized responses.
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
