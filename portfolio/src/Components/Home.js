import { Profile } from './Profile';
import { SkillsList } from './SkillsList';
import { WelcomeTitle } from './WelcomeTitle';

export const Home = ({ profileClicked, setProfileClicked }) => {
  return profileClicked ? (
    <div className="Home">
      <WelcomeTitle />
      <SkillsList />
    </div>
  ) : (
    <div className="Home">
      <Profile setProfileClicked={setProfileClicked}/>
      <WelcomeTitle />
      <SkillsList />
    </div>
  );
};
