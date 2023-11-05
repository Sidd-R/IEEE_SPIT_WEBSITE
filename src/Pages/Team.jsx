import TeamCard from "../components/TeamCard";
import "../styles/Team.css";
import { team22 , team23} from "../components/Team_description";
// import bgvid from "../images/video-bg-light.mp4"
import Our from "../components/Our";

export const Team = () => {
  return (
    <>
    <Our x={"Team"} />
      <div className="team_container pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {
            team23.map(member => {
              return (
                <TeamCard
                  name = {member.name}
                  post = {member.post}
                  image = {member.image}
                />
              );
            })
          }
        </div>
      </div>

    <div className="font-sans text-3xl font-normal mx-8 mb-1 sm:mx-28 mt-6 text-gray-100">Previous Core</div>
    <hr className="bg-black h-0.5   mx-5 sm:mx-24" />
    <div className="team_container pb-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {team22.map(member => {
          return (
            <TeamCard
              name = {member.name}
              post = {member.post}
              image = {member.image}
            />
            );
          })
        }
      </div>
    </div>
    </>
  );
};