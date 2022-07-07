export const Nav = ({ profileClicked, setProfileClicked }) => {
  const handleClick = () => {
    setProfileClicked((currentState) => {
      return !currentState;
    });
  };

  return (
    <div className="Nav">
      <img src="https://i.imgur.com/8MfyAAb.jpg" alt="" onClick={handleClick}/>
      <button onClick={handleClick}>{"Bio"}</button>
    </div>
  );
};
