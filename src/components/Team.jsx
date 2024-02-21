import TeamMember1 from "../assets/last.jpg";
import TeamMember2 from "../assets/Professional headshot in London.jpg";
import TeamMember3 from "../assets/Portrait Of Female Nurse Wearing Scrubs In Hospital.jpg";

function Team() {
  return (
    <section class="Team">
      <h2 class="title">Our Team</h2>

      <div class="team-items">
        <div class="team-card">
          <img class="imgT" src={TeamMember1} alt="team" />
          <h2>Director</h2>
        </div>

        <div class="team-card">
          <img class="imgT" src={TeamMember2} alt="team" />
          <h2>Deputy Director</h2>
        </div>

        <div class="team-card">
          <img class="imgT" src={TeamMember3} alt="team" />
          <h2>Physician Assistant</h2>
        </div>
      </div>
    </section>
  );
}

export default Team;
