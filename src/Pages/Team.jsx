import TeamCard from "../components/TeamCard"
import '../styles/Team.css'
import team from "../components/Team_description"
import bgvid from '../images/video-bg-light.mp4'
import Our from "../components/Our"

export const Team = () => {
  return (
    <>
    <Our x={"Team"}/>
    <div className="team_container pb-6">
        <div className="team_cards">
          {team.map(member => {
            return(
              <TeamCard 
                name = {member.name}
                post = {member.post}
                image = {member.image}
              />
            )
            })
          }
        </div>
      </div>
      </>
  )
}
