import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "./EcoPantry.css";
import Footer from "./Footer";
import scarp_thumbnail from "./images/scarp/scarp-thumbnail.png";
import stats from "./images/scarp/stats.png";
import problems from "./images/scarp/problems.png";
import findings from "./images/scarp/findings.png";
import d1 from "./images/scarp/d1.png";
import d2 from "./images/scarp/d2.png";
import d3 from "./images/scarp/d3.png";
import f1 from "./images/scarp/f1.png";
// import f2 from "./images/scarp/f2.png";
// import f3 from "./images/scarp/f3.png";


const Scarp = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
}, []);
    
  return (
    <div className="page-container">
      <div className="content-container">
        <header className="project-description" data-aos="fade-down">
          <h1 className="project-title">SCARP Intranet</h1>
          <p>
            <p>
              <strong>SCARP Intranet</strong> is a <b>centralized</b> platform for improved <b>usability</b>, a single source for updated documents, and reduced reliance on email for <b>document sharing</b>.

            </p>
          </p>
        </header>

        <div className="project-details">
          <div className="detail-item" data-aos="fade-down">
            <h4>Role</h4>
            <p>
              UX/UI Researcher
              <br />
              UX/UI Designer
            </p>
          </div>
          <div className="detail-item" data-aos="fade-down">
            <h4>Timeline</h4>
            <p>4 weeks</p>
          </div>
          <div className="detail-item" data-aos="fade-down">
            <h4>Tools</h4>
            <p>
              Figma
              <br/>
              SharePoint
            </p>
          </div>
        </div>

        <div className="project-image" data-aos="zoom-in">
          <img src={scarp_thumbnail} alt="Scarp Mockups" />
        </div>

        <section className="who-section" data-aos="fade-down">
          <h2>👀 Who is UBC Applied Science?</h2>
          <p>
          UBC Applied Science is a faculty at the University of British Columbia offering programs in engineering, architecture, nursing, and regional planning. It emphasizes practical skills, innovation, and real-world problem-solving to address societal challenges in technology, health, and sustainability. 
          </p>
          <div className="project-image">
          <img src={stats} alt="Applied Science Stats"/>
          </div>
          </section>

        <section className="problem-section" data-aos="fade-down">
          <h2>❓ Problem</h2>
          <p>
          The existing <strong>intranet</strong> faces <strong>usability challenges</strong> due to a <strong>cluttered layout</strong> and <strong>non-intuitive navigation</strong>, impacting <strong>user efficiency</strong> and frustrating users attempting to access <strong>crucial information</strong>.
          <div className="project-image">
          <img src={problems} alt="Problems"/>
          </div>
            <blockquote
              style={{
                fontStyle: "italic",
                margin: "1em 0",
                padding: "0.5em",
                borderLeft: "4px solid #ccc",
              }}
            >
              How might we <strong>streamline document sharing</strong> to address <strong>version control issues</strong> and enhance <strong>collaborative work efficiency</strong> on a <strong>centralized platform</strong>?
            </blockquote>
          </p>
        </section>
        <section className="solution1-section" data-aos="fade-down">
          <h2>💡 Solution</h2>
          <h3>1. Redesigned Information Architecture</h3>
          <p> Content buckets were restructured for <strong>intuitive access</strong>, and a robust <strong>labeling system</strong> was introduced to <strong>streamline navigation</strong>. The <strong>website interface</strong> underwent a <strong>redesign</strong> to enhance <strong>user-friendliness</strong>.</p>
              {/* <div className="project-image">
          <img src={f1} alt="feature 1"/>
          </div> */}
            <h3>2. Document Management Overhaul</h3>
            <p>A <strong>centralized document repository</strong> was established, reducing reliance on <strong>email</strong> for <strong>document sharing</strong>. This overhaul facilitated <strong>efficient collaboration</strong> and addressed <strong>version control issues</strong>. The implementation included a process for <strong>continuous document updates</strong> and <strong>maintenance</strong>.</p>
            <h3>3. Enhanced Communication</h3>
            <p> The intranet has been upgraded to include an interactive <strong>"Ask the Team"</strong> section, allowing users to directly reach out to specific individuals based on the <strong>category</strong> of their questions. This intuitive feature promotes <strong>streamlined communication</strong> and ensures that inquiries are directed to the most <strong>relevant team members</strong>.</p>

          </section>
          <section className="research-section" data-aos="fade-down">
          <h2>🔍 Research</h2>
          <h3>Understanding the Problem</h3>
          <p>
        I first proceeded by performing <strong>research</strong> to uncover the <strong>challenges</strong> faced by the <strong>SCARP department</strong>. I aimed to identify the primary <strong>pain points</strong> experienced by users of the <strong>SCARP intranet</strong> to solve their problems and offer a more <strong>efficient solution</strong>.
      </p>
      <p>
        The main <strong>pain points</strong> faced by users were summarized as follows:
      </p>
            <div className="project-image">
          <img src={findings} alt="findings"/>
          </div>
          <p>
          Understanding and addressing these pain points was pivotal to ensure that the new SCARP intranet would be tailored to meet specific <b>user needs</b>.
          </p>
            </section>

            <section className="design-section" data-aos="fade-down">
          <h2>🖌️ Designs</h2>
          <h3>01. Homepage Look</h3>
          <p>The initial homepage poorly reflected the <b>SCARP brand</b> and did <b>not</b> have proper content and <b>visual layout</b>.</p>
          <p>
          After discussing with the <strong>stakeholders</strong>, I created my <strong>lo-fi wireframes</strong> and transformed them into <strong>high-fidelity designs</strong>. I considered the fact that they wanted to keep the <strong>branding</strong> of the <strong>SCARP department</strong> that emphasizes <strong>orange</strong> and <strong>blue tones</strong>. This also helps maintain <strong>consistency</strong> and <strong>brand identity</strong> throughout the designs. I was also mindful of the limitations of <strong>SharePoint</strong> and created my designs based on what was <strong>possible</strong>.
      </p>
      <div className="project-image">
          <img src={d1} alt="design 1"/>
          </div>
          <p>Changes:
      <ul>
        <li><strong>Incorporated</strong> the brand’s <strong>color scheme</strong>.</li>
        <li><strong>Streamlined navigation</strong> for improved <strong>accessibility</strong>.</li>
        <li><strong>Dynamic hero image</strong> for engaging <strong>focal point</strong>.</li>
        <li><strong>Restructured content buckets</strong> for <strong>intuitive access</strong>.</li>
        <li><strong>Updated typography</strong> for improved <strong>readability</strong>.</li>
      </ul>
      <p>
        Overall, a more <strong>cohesive</strong>, <strong>user-friendly</strong>, and <strong>aesthetically pleasing</strong> design compared to the old version.
      </p></p>
      <h3>02. Homepage Content</h3>
      <div className="project-image">
          <img src={d2} alt="design 2"/>
          </div>
      <p>Changes:
      <ul>
        <li><strong>Previous content</strong> was <strong>irrelevant</strong> on the homepage.</li>
        <li>Replaced with <strong>categorized cards</strong> for <strong>efficient navigation</strong>.</li>
        <li><strong>Cleaner design</strong> reduces <strong>clutter</strong>, enhancing <strong>visibility</strong>.</li>
        <li><strong>Clear presentation</strong> aids <strong>understanding</strong> of <strong>system status</strong> and <strong>interaction</strong>.</li>
      </ul></p>
      <h3>03. Contact page</h3>
      <p>
        The initial <strong>'Contact Us'</strong> page had a <strong>list view</strong> of all the contacts, which is <strong>challenging to navigate</strong> and <strong>comprehend quickly</strong>. Therefore, I decided to introduce the content using <strong>cards</strong> so that users can easily <strong>scan</strong> and <strong>identify individual contacts</strong>, improving <strong>visibility</strong> and <strong>recognition</strong>. This emphasizes the importance of presenting information in a format that enhances <strong>user understanding</strong> and <strong>engagement</strong>.
      </p>
      <div className="project-image">
          <img src={d3} alt="design 3"/>
          </div>
          <h2>👩🏻‍💻 Implementation</h2>
      <p>
        My primary responsibilities also involved <strong>translating the designs</strong> into SharePoint as follows:
      </p>
      <ul>
        <li>
          Ensured <strong>seamless integration</strong> of new <strong>information architecture</strong> and <strong>design aesthetics</strong> into the SharePoint environment.
        </li>
        <li>
          Configured SharePoint settings, created and organized <strong>document libraries</strong>, and <strong>customized intranet appearance</strong>.
        </li>
        <li>
          Produced <strong>libraries</strong> for each page, and created <strong>views for sub-categories</strong>, but faced limitations in <strong>flexibility</strong> due to SharePoint constraints.
        </li>
      </ul>
      <h2>🧐Future: Usability Studies</h2>
      <p>
        I am planning to conduct <strong>usability studies</strong> to evaluate the effectiveness of the redesigned <strong>SCARP intranet</strong>. After finalizing the <strong>hi-fi designs</strong>, diverse faculty and staff members will engage with the intranet to perform daily tasks. These studies aim to gather <strong>insights</strong>, identify <strong>pain points</strong>, and perform <strong>design iterations</strong> to improve the <strong>user experience</strong>.
      </p>
      <h2>🎬 <strong>Conclusion</strong></h2>
      <p>
        In conclusion, the SCARP Intranet redesign project has been a comprehensive journey aimed at addressing <strong>usability challenges</strong> and <strong>inefficiencies</strong> faced by faculty and staff. Through a <strong>user-centric design process</strong>, I have restructured <strong>information architecture</strong>, enhanced <strong>navigation</strong>, and introduced a <strong>cleaner</strong>, more <strong>efficient layout</strong>. The <strong>iterative nature</strong> of the design and incorporation of <strong>feedback</strong> from stakeholders ensures that the final intranet meets the specific needs of the SCARP community.
      </p>
      <p>
        This redesign not only improves the overall <strong>user experience</strong> but also aligns with key <strong>design principles</strong>, such as <strong>information architecture</strong>, <strong>consistency</strong>, and <strong>efficiency of use</strong>. The introduction of new features, such as the <strong>"ask the team"</strong> section, aims to ensure improved <strong>communication</strong> and <strong>collaboration</strong>.
      </p>
      <h2>🙇🏻‍♀️ <strong>Learnings</strong></h2>
      <ul>
        <li>
          <strong>User-Centric Designs</strong> and <strong>Continuous Iterations</strong>: I have learned the importance of user-centric design and continuous iteration. Prioritizing the needs of SCARP faculty and staff was crucial in crafting a solution that resonates with end users.
        </li>
        <li>
          <strong>Navigating Constraints in SharePoint Design</strong>: I have learned the limitations of designing for SharePoint, emphasizing the importance of aligning creative vision with platform constraints. Certain design elements may face challenges during implementation, including constraints on visuals, functionalities, and responsiveness.
        </li>
        <li>
          <strong>Collaboration and Communication</strong>: I gained insights into the technical aspects of implementing design changes within SharePoint, highlighting the importance of collaboration between design and IT teams. This experience underscored the need for solutions that are both visually appealing and practical within the platform's constraints.
        </li>
      </ul>
      <p>
        In conclusion, this experience was valuable in shaping my approach to future design projects, emphasizing a holistic understanding of <strong>user needs</strong> and the <strong>technical landscape</strong> in which the solutions are deployed.
      </p>
            </section>
            <Footer/>
        </div>
    </div>
  );
};

export default Scarp;
