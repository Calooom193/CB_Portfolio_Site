export const Profile = ({ setProfileClicked }) => {
  const handleClick = () => {
    setProfileClicked((currentState) => {
      return !currentState;
    });
  };

  return (
    <div scroll="no" className="Profile">
      <header className="Profile-header">
        <button onClick={handleClick}>x</button>
        <img src="https://i.imgur.com/8MfyAAb.jpg" alt="" />
        <h4>Callum Beever</h4>
        <p>Front-end developer, Game development enthusiast</p>
      </header>
    </div>
  );
};

// "https://i.imgur.com/8MfyAAb.jpg"
// "https://i.imgur.com/V4inYRX.jpg"
