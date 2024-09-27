import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "./EcoPantry.css";
import Footer from "./Footer";
import ecoThumbnail from "./images/ecopantry/eco-thumbnail.png";
import groceryList from "./images/ecopantry/grocery-list.png";
import recipes from "./images/ecopantry/recipes.png";
import pantry from "./images/ecopantry/pantry.png";
import donate_rescue from "./images/ecopantry/donate-rescue.png";
import communities from "./images/ecopantry/communities.png";
import research_questions from "./images/ecopantry/research-questions.png";
import up1 from "./images/ecopantry/up1.png";
import up2 from "./images/ecopantry/up2.png";
import journey from "./images/ecopantry/journey.png";
import flow from "./images/ecopantry/flow.png";
import wireframes from "./images/ecopantry/wireframes.png";
import hi_fi from "./images/ecopantry/hi-fi.png";
import team from "./images/ecopantry/team.png";

const EcoPantry = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with a 1 second animation duration
  }, []);

  const features = [
    {
      title: "Effortless Grocery Tracking",
      description:
        "Easily add food items <b>manually</b> or <b>automatically</b>. Get <b>notified</b> when an item has gone to waste before, encouraging more <b>mindful choices</b>.",
      image: groceryList,
    },
    {
      title: "Recipe Inspirations",
      description:
        "Based on your pantry’s contents, receive <b>recipe suggestions</b> to help you use up ingredients before they <b>expire</b> and avoid <b>waste</b>.",
      image: recipes,
    },
    {
      title: "Pantry at Your Fingertips",
      description:
        "Add, track, and manage pantry items through <b>manual entry</b>, <b>voice detection</b>, or <b>barcode scanning</b>, with timely reminders for upcoming <b>expiration dates</b>.",
      image: pantry,
    },
    {
      title: "Donate and Rescue Platform",
      description:
        "Seamlessly connect with local food banks to <b>donate</b> or <b>rescue</b> excess food, helping reduce waste and support your <b>community</b>.",
      image: donate_rescue,
    },
    {
      title: "Join the Food Waste Revolution",
      description:
        "Engage with others who share your commitment to reducing food waste. <b>Share</b> experiences, take on challenges, earn <b>badges</b>, and get rewarded for making a <b>difference</b>.",
      image: communities,
    },
  ];

  return (
    <div className="page-container">

      <div className="content-container">
        <header className="project-description" data-aos="fade-down">
          <h1 className="project-title">EcoPantry</h1>
          <p>
            EcoPantry is revolutionizing <strong>food conservation</strong> with
            a mobile app that simplifies waste management and promotes
            sustainability through <strong>smart tracking</strong>, recipe
            suggestions, and community engagement.
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
            <p>4 months</p>
          </div>
          <div className="detail-item" data-aos="fade-down">
            <h4>Tools</h4>
            <p>Qualtrics, Miro, Figma, R</p>
          </div>
        </div>

        <div className="project-image" data-aos="zoom-in">
          <img src={ecoThumbnail} alt="EcoPantry App Mockups" />
        </div>

        <section className="problem-section" data-aos="fade-down">
          <h2>❓ Problem</h2>
          <p>
            In 2023, a staggering <b>1.3 billion tonnes</b> of food were wasted
            globally, with Canada contributing <b>50 million tonnes</b> to that
            total. This waste occurs alongside a pressing issue:{" "}
            <b>food insecurity</b> affects <b>4 million Canadians</b>, including{" "}
            <b>1.2 million children</b>. Despite an increasing awareness of the
            environmental impacts, food waste levels remain{" "}
            <b>alarmingly high</b>.
            <br />
            <blockquote
              style={{
                fontStyle: "italic",
                margin: "1em 0",
                padding: "0.5em",
                borderLeft: "4px solid #ccc",
              }}
            >
              How might we <b>reduce food waste</b> to ensure a more{" "}
              <b>sustainable</b> environment?
            </blockquote>
          </p>
        </section>

        <section className="solution-section" data-aos="fade-down">
          <h2>💡 Solution</h2>
          <p>
            EcoPantry is a mobile app that serves as a comprehensive companion
            for managing food waste, making it easier for users to{" "}
            <b>conserve food</b> and <b>minimize waste</b>. By integrating{" "}
            <b>smart features</b> that increase awareness of{" "}
            <b>expiration dates</b>, encourage creative food use, and foster{" "}
            <b>community engagement</b>, we help users take control of their{" "}
            <b>food consumption</b>.
          </p>
          <div className="feature-container">
            {features.map((feature, index) => (
              <div className="feature-item" key={index} data-aos="fade-down">
                <div className="feature-text">
                  <h3>{feature.title}</h3>
                  <p
                    dangerouslySetInnerHTML={{ __html: feature.description }}
                  />
                </div>
                <img
                  className="feature-image"
                  src={feature.image}
                  alt={`Image of ${feature.title}`}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="research-section" data-aos="fade-down">
          <h2>🔍 Research</h2>
          <h3>Understanding the Problem</h3>
          <p>
            We conducted <b>Instagram poll surveys</b> to gather insights into
            user habits related to food waste and grocery management. The survey
            explored common practices and challenges for reducing food waste. By
            understanding these behaviors, we aim to identify opportunities for
            creating more effective strategies to promote <b>sustainability</b>{" "}
            and improve food waste <b>management</b>.
          </p>
          <div className="project-image">
            <img src={research_questions} alt="EcoPantry Research" />
          </div>

          <p>
            The survey results suggest that while most users make an effort to
            repurpose <b>leftovers</b> and avoid <b>overbuying</b> groceries,
            issues with <b>food waste</b> still persist.
          </p>
          <br />
          <h3>Research Findings</h3>
          <ul>
            <li>
              A significant number of users throw away <b>expired food</b> on a
              monthly or weekly basis.
            </li>
            <li>
              Pantry organization tends to focus on <b>food type</b> rather than
              tracking <b>expiration dates</b>.
            </li>
            <li>
              Cost-saving strategies like using <b>store discounts</b> and
              buying in <b>bulk</b> are common, but may also contribute to{" "}
              <b>over-purchasing</b>.
            </li>
          </ul>
        </section>
        <section className="persona-section" data-aos="fade-down">
          <h2>👥 User Personas</h2>
          <p>
            Based on our research insights and goals, two personas have been
            identified to guide the development and customization of our app.
            These personas highlighted diverse motivations but a shared goal: to
            reduce food waste in a manageable, user-friendly way.
          </p>
          <div className="project-image">
            <img src={up1} alt="User Persona 1" />
          </div>
          <div className="project-image">
            <img src={up2} alt="User Persona 2" />
          </div>
        </section>
        <section className="journey-section" data-aos="fade-down">
          <h2>👩🏻 User Journey</h2>
          <p>
            Understanding the unique behaviors and challenges of our users
            allowed us to map out a typical day in their lives as they interact
            with food in their households. From repurposing leftovers to
            managing pantry items, these personas helped us envision how
            EcoPantry could seamlessly fit into their routines. This led us to
            create detailed <b>user journeys</b> that capture their{" "}
            <b>motivations</b> and <b>frustrations</b> at key touchpoints.
          </p>
          <div className="project-image">
            <img src={journey} alt="User Journey" />
          </div>
          <p>
            Let's consider Emma's journey.
            <br />
            <br />
            <b>Day 1</b>: Emma discovers the app and is immediately intrigued by
            its <b>eco-friendly features</b>. She downloads it, excited to start
            managing her <b>food inventory</b> and reduce <b>waste</b>. She sets
            up her profile, explores the <b>meal planning tools</b>, and
            receives her first set of <b>personalized tips</b>.
            <br />
            <br />
            <b>Day 3</b>: Emma integrates the app into her daily routine, using
            it to plan meals and manage her inventory. She receives reminders to
            use items that are <b>close to expiring</b> and finds new recipes
            that make the most of what she has, making meal planning both{" "}
            <b>efficient</b> and
            <b>enjoyable</b>.
            <br />
            <br />
            <b>Day 6</b>: Emma participates in the <b>"Guilt-Free Mindset"</b>{" "}
            campaign through the community feature. She engages in discussions,
            donates excess groceries, and rescues surplus items. She tracks her
            <b>sustainability metrics</b>, exchanges points for{" "}
            <b>eco-friendly business</b>
            coupons, and shares her achievements, inspiring others to follow
            suit.
            <br />
            <br />
            <b>Day 10</b>: Emma checks her periodic report and user-friendly
            <b>dashboard</b>, which highlight her progress and sustainability
            efforts.
            <b> Personalized notifications</b> keep her engaged, reminding her
            to continue her eco-friendly practices and stay motivated.
          </p>
        </section>
        <section className="flow-section" data-aos="fade-down">
          <h2>🌀 User Flow</h2>
          <p>
            To address the challenges that surfaced in our users' journeys, we
            crafted a <b>user flow</b> that guides them from initial engagement
            with <b>EcoPantry</b> to effectively <b>reducing food waste</b>.
            This flow not only simplifies their <b>pantry management</b> but
            also empowers them to take more control over their <b>food usage</b>
            , keeping their <b>habits</b> and <b>needs</b> at the core of every{" "}
            <b>design decision</b>.
          </p>

          <div className="project-image">
            <img src={flow} alt="User Flow" />
          </div>
        </section>
        <section className="design-section" data-aos="fade-down">
          <h2>🌱 Designing an intuitive, eco-friendly solution</h2>
          <p>
            With these insights, we set out to design <b>EcoPantry</b>—a tool to
            help users <b>track food</b>, <b>reduce waste</b>, and make{" "}
            <b>smarter grocery choices</b>. The challenge was to create an app
            that felt both <b>practical</b> and
            <b>effortless</b>, while encouraging users to engage in{" "}
            <b>sustainable behaviors</b>.
          </p>
          <br />
          <p>
            Below, you can see the <b>wireframes</b> that illustrate the
            foundation of our <b>design approach</b>. Each screen is crafted to
            reflect our commitment to a <b>user-friendly experience</b>, from
            managing <b>inventory</b> to engaging with <b>community features</b>
            .
          </p>

          <div className="project-image">
            <img src={wireframes} alt="Wireframes" />
          </div>
          <p>
            We <b>iterated</b> on the <b>wireframes</b>, focusing on how to
            enhance <b>visual appeal</b> while maintaining <b>usability</b>.
            From <b>vibrant colors</b> to <b>refined typography</b>, our goal
            was to create a design that not only looks good but also feels{" "}
            <b>natural</b> and <b>enjoyable</b> to interact with.
          </p>
          <div className="project-image">
            <img src={hi_fi} alt="Hi-Fi Designs" />
          </div>
        </section>
        <section className="prototype-section" data-aos="fade-down">
          <h2>📱 Prototype</h2>
          <p>
            Ready to explore how <b>EcoPantry</b> helps you track food, reduce
            waste, and make smarter grocery choices?
          </p>
          <br />
          <iframe
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
            width="800"
            height="450"
            src="https://embed.figma.com/proto/EZXadAnCuQO93kwijRYypw/UXathon?page-id=6%3A13264&node-id=6-15550&node-type=frame&viewport=716%2C376%2C0.08&scaling=scale-down&content-scaling=fixed&embed-host=share"
            allowFullScreen
            title="UXathon Portfolio"
          />
        </section>
        <section className="reflections-section" data-aos="fade-down">
          <h2>💭 Reflections</h2>
          <p>What an insightful experience!</p>
          <br />
          <h4>- UXathon Overview</h4>

          <p>
            In just <strong>8 hours</strong>, we created{" "}
            <strong>EcoPantry</strong>, blending{" "}
            <strong>minimalist design</strong> with{" "}
            <strong>sustainable practices</strong>. Features like{" "}
            <strong>barcode scanning</strong>,{" "}
            <strong>voice recognition</strong>, and <strong>smart lists</strong>{" "}
            reflect our commitment to <strong>eco-friendly solutions</strong>{" "}
            while enhancing <strong>user engagement</strong>.
          </p>
          <br />
          <h4>- Next Steps</h4>

          <p>
            Given more time, we would integrate <strong>AI</strong> to provide{" "}
            <strong>personalized shopping recommendations</strong> based on{" "}
            <strong>user behavior</strong>, making the app even more{" "}
            <strong>intuitive</strong> and <strong>responsive</strong>.
          </p>
          <br />
          <h4>- Impactful Design</h4>
          <p>
            By focusing on <strong>sustainable UX</strong>, EcoPantry aims to
            promote <strong>environmental responsibility</strong> and meet{" "}
            <strong>user needs</strong> effectively. This UXathon has been a{" "}
            <strong> challenge</strong> but our efforts were rewarded since we
            won <strong>second place</strong> in this{" "}
            <strong>UX hackathon</strong>. Yay! 🥈🌟
          </p>

          <div className="project-image">
            <img src={team} alt="Team" />
          </div>
        </section>
        <Footer/>
      </div>
    </div>
  );
};

export default EcoPantry;
