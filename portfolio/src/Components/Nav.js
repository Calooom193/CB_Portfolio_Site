export const Nav = ({ profileClicked, setProfileClicked }) => {
  const handleClick = () => {
    setProfileClicked((currentState) => {
      return !currentState;
    });
  };

  return (
    <div className="Nav">
      <button onClick={handleClick}>profile</button>
    </div>
  );
};
