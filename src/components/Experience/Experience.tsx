import { Container } from "./styles";
import adpushupLogo from "../../assets/adpushup.png";
import offsetfarmLogo from "../../assets/offsetfarm.png";
import ScrollAnimation from "react-animate-on-scroll";

export function Experience() {
  return (
    <Container id="experience">
      <h2>Experience</h2>
      <div className="projects">
      <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <div className="project-links">
                <div className="company-logo">
                  <img src={offsetfarmLogo} alt="Visit site" />
                </div>
              </div>
            </header>
            <div className="body">
              <h3>OffsetFarm</h3>
              <p>
                - Created the company's primary website from scratch using
                Vue.js, delivering a 25% boost in user engagement with a
                responsive and visually appealing user interface
              </p>
              <p>
                - Integrated data filtering functionality, including a reset
                filter option using Vue.js, enabling users to filter multiple
                columns simultaneously enhancing data analysis capabilities by
                20%
              </p>
              <p>
                - Enabled the integration of new products into the system and
                provided a user-friendly interface for project management
                leading to 20% reduction in time using Node.js
              </p>
              <p>
                - Optimized order management system by enabling real-time stock
                checks, automatic ordering and efficient dispatch management,
                using Node.js achieving a 50% improvement in efficiency
              </p>
              <p>
                - Implemented data visualization functionality utilizing
                Chart.js to generate diverse graphs, leading to the creation of
                multiple graphical representations
              </p>
              <p>
                - Executed a rebranding initiative using React.js, transforming
                product aesthetics to align seamlessly with the company's
                updated brand identity
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>JavaScript</li>
                <li>Vue.js</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Chart.js </li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <div className="project-links">
                <div className="company-logo">
                  <img src={adpushupLogo} alt="Visit site" />
                </div>
              </div>
            </header>
            <div className="body">
              <h3>Adpushup Software India Pvt Ltd</h3>
              <p>
                - Improved ticket response tracking in HubSpot by updating the
                effective days property calculation using JavaScript for better
                understanding of response time, and improving the customer
                satisfaction by 40%
              </p>
              <p>
                - Automated the call logging process for Google Meet and HubSpot
                using Zapier, Webhooks and Node.js, improving the time
                efficiency by 80%
              </p>
              <p>
                - Contributed to the development of Instream Adhoc dashboard
                using React.js optimizing video ad placements across websites,
                reducing ad hosting time by to 40%
              </p>
              <p>
                - Automated email consolidation for publishers using Google Apps
                Script, enhancing data tracking accuracy by 40%
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>JavaScript</li>
                <li>Vue.js</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Google Apps Script</li>
                <li>Zapier</li>
                <li>Webhook</li>
                <li>Hubspot</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

       
      </div>
    </Container>
  );
}
