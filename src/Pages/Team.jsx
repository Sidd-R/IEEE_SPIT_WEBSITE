import TeamCard from "../components/TeamCard"
import '../styles/Team.css'
import team from "../components/Team_description"
import bgvid from '../images/video-bg-light.mp4'

export const Team = () => {
  return (
    <div className="team_container">
        <div className="team_title">
          Our Team
        </div>
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
  )
}
