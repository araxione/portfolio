import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "./EcoPantry.css";
import Footer from "./Footer";
import byteBroom from "./images/bytebroom/bytebroom.png";
import affinity from "./images/bytebroom/affinity.png";
import lo_fi from "./images/bytebroom/lo-fi.png";
import wireframes from "./images/bytebroom/wireframes.png";
import count from "./images/bytebroom/error-count.png";
import time from "./images/bytebroom/time.png";
import anova from "./images/bytebroom/anova.png";
import main_effects from "./images/bytebroom/main-effects.png";
import sus from "./images/bytebroom/sus.png";

const ByteBroom = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with a 1 second animation duration
  }, []);

  // const features = [
  //   {
  //     title: "Effortless Grocery Tracking",
  //     description:
  //       "Easily add food items <b>manually</b> or <b>automatically</b>. Get <b>notified</b> when an item has gone to waste before, encouraging more <b>mindful choices</b>.",
  //     image: groceryList,
  //   },
  //   {
  //     title: "Recipe Inspirations",
  //     description:
  //       "Based on your pantry’s contents, receive <b>recipe suggestions</b> to help you use up ingredients before they <b>expire</b> and avoid <b>waste</b>.",
  //     image: recipes,
  //   },
  //   {
  //     title: "Pantry at Your Fingertips",
  //     description:
  //       "Add, track, and manage pantry items through <b>manual entry</b>, <b>voice detection</b>, or <b>barcode scanning</b>, with timely reminders for upcoming <b>expiration dates</b>.",
  //     image: pantry,
  //   },
  //   {
  //     title: "Donate and Rescue Platform",
  //     description:
  //       "Seamlessly connect with local food banks to <b>donate</b> or <b>rescue</b> excess food, helping reduce waste and support your <b>community</b>.",
  //     image: donate_rescue,
  //   },
  //   {
  //     title: "Join the Food Waste Revolution",
  //     description:
  //       "Engage with others who share your commitment to reducing food waste. <b>Share</b> experiences, take on challenges, earn <b>badges</b>, and get rewarded for making a <b>difference</b>.",
  //     image: communities,
  //   },
  // ];

  return (
    <div className="page-container">
      <div className="content-container">
        <header className="project-description" data-aos="fade-down">
          <h1 className="project-title">ByteBroom</h1>
          <p>
            <p>
              <strong>ByteBroom</strong> is a{" "}
              <strong>file decluttering tool</strong> designed to help users
              efficiently manage their <strong>digital storage</strong> by
              simplifying the process of organizing and deleting unnecessary
              files. It offers features like{" "}
              <strong>decluttering reminders</strong>,{" "}
              <strong>file breakdowns</strong>, and{" "}
              <strong>duplicate detection</strong>, ensuring a seamless and{" "}
              <strong>user-friendly experience</strong>.
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
            <p>4 months</p>
          </div>
          <div className="detail-item" data-aos="fade-down">
            <h4>Tools</h4>
            <p>
              Qualtrics, Miro, <br />
              Figma, R
            </p>
          </div>
          <div className="detail-item" data-aos="fade-down">
            <h4> Team</h4>
            <p>
              Judy, Beth, <br />
              Mariam, Matthew
            </p>
          </div>
        </div>

        <div className="project-image" data-aos="zoom-in">
          <img src={byteBroom} alt="ByteBroom App Mockups" />
        </div>

        <section className="problem-section" data-aos="fade-down">
          <h2>❓ Problem</h2>
          <p>
            <p>
              <strong>Managing digital clutter</strong> is a growing challenge
              as people accumulate vast amounts of <strong>files</strong>.
              Whether it's <strong>school assignments</strong>,{" "}
              <strong>personal photos</strong>, or{" "}
              <strong>professional documents</strong>, <strong>storage</strong>{" "}
              fills up quickly, leading to frustration and inefficiencies. This
              issue is compounded by existing{" "}
              <strong>file management tools</strong>, which often lack a
              long-term, cohesive approach to organizing <strong>data</strong>.
            </p>
            <p>
              As a <strong>university student</strong>, I found myself
              constantly overwhelmed with{" "}
              <strong>cluttered digital storage</strong>, with coursework from
              previous semesters clogging my devices. This personal experience,
              combined with insights from fellow students, became the foundation
              for developing <strong>ByteBroom</strong>—an intuitive tool aimed
              at simplifying <strong>digital file decluttering</strong> for
              students.
            </p>

            <blockquote
              style={{
                fontStyle: "italic",
                margin: "1em 0",
                padding: "0.5em",
                borderLeft: "4px solid #ccc",
              }}
            >
              How might we help students manage their <b>digital storage</b>{" "}
              efficiently and make the <b>decluttering process</b> less
              overwhelming?
            </blockquote>
          </p>
        </section>

        <section className="solution-section" data-aos="fade-down">
          <h2>💡 Solution</h2>
          <p>
            <strong>ByteBroom</strong> is a{" "}
            <strong>file-decluttering tool</strong> designed specifically for{" "}
            <strong>students</strong>. It simplifies the decision-making process
            with <strong>user-friendly features</strong> like{" "}
            <strong>duplicate detection</strong>,{" "}
            <strong>file breakdowns</strong>, and{" "}
            <strong>smart deletion techniques</strong>. ByteBroom enables users
            to regain control over their <strong>storage</strong>, helping them
            identify what to keep and what to discard.
          </p>
        </section>
        {/* <div className="feature-container">
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
          </div> */}

        <section className="research-section" data-aos="fade-down">
          <h2>🔍 Research</h2>
          <h3>Understanding the Problem</h3>
          <p>
            To validate the concept of this interface and better understand
            users’ <strong>digital storage behaviors</strong>, we conducted a{" "}
            <strong>field study</strong> using two key methods: an{" "}
            <strong>online questionnaire</strong> and{" "}
            <strong>remote semi-structured interviews</strong>.
          </p>
          {/* <br /> */}
          <h3>Focal Points for Field Study</h3>
          <p>The field study focused on understanding:</p>
          <ul>
            <li>
              The <strong>strategies</strong> users employ to organize or
              prioritize their files.
            </li>
            <li>
              What <strong>factors</strong> motivate individuals to declutter
              their storage.
            </li>
            <li>
              <strong>Reasons behind reluctance</strong> to delete files
              regularly.
            </li>
            <li>
              How <strong>storage limitations</strong> influence digital
              behavior.
            </li>
            <li>
              The role of <strong>individual differences</strong> in shaping
              digital storage management styles.
            </li>
          </ul>
          {/* <br /> */}
          <h3>Study Protocol</h3>
          <p>
            Our protocol included both <strong>quantitative</strong> and{" "}
            <strong>qualitative data collection</strong>:
          </p>
          <ul>
            <li>
              <strong>Online Questionnaire</strong>: Distributed via{" "}
              <b>UBC Qualtrics</b> to students over 17 years old, gathering data
              on digital storage management.
            </li>
            <li>
              <strong>Remote Semi-Structured Interviews</strong>: Seven students
              were interviewed via Zoom. The interviews were recorded and
              transcribed, and notes were taken to supplement the recordings.
              Each interview lasted 15 to 30 minutes.
            </li>
          </ul>
          {/* <br /> */}
          <h3>Study Findings</h3>
          <div className="project-image" data-aos="zoom-in">
            <img src={affinity} alt="ByteBroom Affinity Map" />
          </div>
          <h3>Key Insights</h3>
          <ul>
            <li>
              <strong>Lack of clarity on what to delete</strong>: Many students
              were unsure which files were still relevant, leading to hesitation
              and incomplete decluttering.
            </li>
            <li>
              <strong>Overwhelming number of files</strong>: The sheer volume of
              digital content was a significant barrier to effective
              organization.
            </li>
            <li>
              <strong>Fragmented solutions</strong>: Existing tools were often
              seen as incomplete, requiring students to use multiple apps to
              fully manage their storage.
            </li>
          </ul>
          {/* <br /> */}
          <h3>Lo-fi Prototyping</h3>
          <p>
            Drawing from these insights, we created{" "}
            <strong>low-fidelity sketches</strong>, creating visual
            representations of the prototype to iterate on{" "}
            <strong>layout</strong> and <strong>user flow</strong>. These
            sketches laid the groundwork for the{" "}
            <strong>desktop application</strong>, focusing on essential features
            like <strong>decluttering reminders</strong>,{" "}
            <strong>file breakdowns</strong>, and{" "}
            <strong>duplicate detection</strong>. Our primary goal was to ensure
            that the design was <strong>user-friendly</strong> and aligned with
            the behaviors identified during our research.
          </p>
          <div className="project-image" data-aos="zoom-in">
            <img src={lo_fi} alt="Lo-Fi" />
          </div>
          <p>
            Here is a link to the <strong>narrated video</strong> demonstrating
            how a user completes tasks with our prototype:{" "}
            <a
              href="https://www.youtube.com/watch?v=aWuiBX5uW8s"
              target="_blank"
            >
              Watch the video.
            </a>
          </p>
          {/* <br /> */}
          <p>
            We also created some <strong>wireframes</strong> to visualize the
            initial concepts for the <strong>ByteBroom interface</strong>. These
            wireframes focus on <strong>key features</strong> that will enhance
            the <strong>user experience</strong> and facilitate effective{" "}
            <strong>digital storage management</strong>.
          </p>
          <div className="project-image" data-aos="zoom-in">
            <img src={wireframes} alt="Wireframes" />
          </div>

          <h3>Walkthrough Report</h3>

          <p>
            During the <strong>cognitive walkthrough</strong>, we conducted five
            tasks to support the three task examples:
          </p>

          <ul>
            <li>
              <strong>Read the “Tips to declutter more effectively”</strong> by
              Megan Smith. This task benefits all users by providing guidance to
              improve digital file management proactively.
            </li>
            <li>
              <strong>View the file breakdown</strong> of the “Downloads” folder
              for the month of February. This allows users to assess the state
              of digital clutter and identify space-consuming files.
            </li>
            <li>
              <strong>Create a new reminder</strong> scheduled for April 7th,
              2024, at 8 am. This task encourages proactive decluttering,
              helping users streamline their digital management.
            </li>
            <li>
              <strong>Only keep the CPSC 440 lectures</strong> and delete all
              the other unused documents. This aligns with the user's goal to
              prioritize relevant materials and declutter unnecessary files.
            </li>
            <li>
              <strong>Delete all duplicate files</strong>. This addresses the
              challenge of freeing up storage by eliminating redundant content.
            </li>
          </ul>

          <p>
            The walkthrough revealed that while most tasks were performed
            smoothly, there were <strong>usability challenges</strong>:
          </p>

          <ul>
            <li>
              <strong>Task 3</strong>: Users deviated from the expected
              interaction sequence when entering the reminder details. We plan
              to refine the process by allowing more flexible input orders.
            </li>
            <li>
              <strong>Task 4</strong>: Some users struggled to retain specific
              files, indicating a gap in the system’s affordance for selecting
              files to keep. Future iterations will include clearer affordances
              or instructions.
            </li>
          </ul>

          <p>
            This prompted us to investigate which{" "}
            <strong>file selection method</strong> (“select to keep”, “select to
            delete”, and “deselect to keep”) would best suit our design.
          </p>
        </section>
        <section className="experiment-section" data-aos="fade-down">
          <h2>🧑🏻‍💻 Experiment</h2>

          <h3>Experiment Design</h3>
          <p>
            To determine the most effective{" "}
            <strong>file selection method</strong>, we conducted a{" "}
            <strong>1x3 between-group design experiment</strong> with 8
            participants. Each participant was assigned one of three selection
            methods and asked to complete a task of decluttering a simulated
            file system.
          </p>
          {/* <br /> */}
          <h3>Conditions</h3>
          <p>The three methods tested were:</p>
          <ul>
            <li>
              <strong>Select to keep</strong>: Users manually select the files
              they want to keep, while unselected files are deleted.
            </li>
            <li>
              <strong>Select to delete</strong>: Users manually select the files
              they want to delete, while unselected files are kept.
            </li>
            <li>
              <strong>Deselect to keep</strong>: Users deselect the files they
              want to keep, leaving the rest for deletion.
            </li>
          </ul>
          {/* <br /> */}
          <h3>Between-Group Design</h3>
          <p>
            We used a <strong>between-group design</strong> to avoid learning
            effects, ensuring that each participant only completed the task
            once. This design allowed for shorter sessions and minimized biases
            that could arise from repeating the task under different conditions.
          </p>
          {/* <br /> */}
          <h3>Procedure</h3>
          <p>
            The experiment lasted <strong>30 minutes</strong> and was conducted
            remotely via Zoom. Participants accessed the{" "}
            <strong>ByteBroom prototype</strong> and performed the task while
            sharing their screen. We measured two key{" "}
            <strong>dependent variables</strong>:
          </p>
          <ul>
            <li>
              <strong>Error count</strong>: The number of incorrectly selected
              files.
            </li>
            <li>
              <strong>Completion time</strong>: The time taken to complete the
              task, recorded in seconds.
            </li>
          </ul>
          {/* <br /> */}
          <h3>Post-Task Interview</h3>
          <p>
            After completing the task, participants were asked to provide
            feedback through a <strong>semi-structured interview</strong>.
            Additionally, we used the{" "}
            <strong>System Usability Scale (SUS)</strong> to assess their
            overall experience with the file selection method.
          </p>
          {/* <br /> */}
          <h3>Limitations</h3>
          <p>
            Despite the insights gained, the experiment had a small sample size
            of <strong>8 participants</strong>, which limited the
            generalizability of the findings. The simplified file system (
            <strong>12 files</strong>) may not accurately reflect real-world
            conditions. Conducting the experiment remotely also introduced{" "}
            <b>potential latency issues</b>, and using a stopwatch for timing
            could have led to minor{" "}
            <b>inconsistencies in task completion measurements</b>.
          </p>
        </section>
        <section className="results-section" data-aos="fade-down">
          <h2>📊 Results</h2>
          <h3>Quantitative Findings</h3>
          <p>
            The experiment assessed the effectiveness and accuracy of the three{" "}
            <strong>file selection methods</strong> by recording{" "}
            <strong>error count</strong> and <strong>completion time</strong>{" "}
            for each participant. The results showed that the “
            <strong>select to delete</strong>” method performed the best in both
            categories:
          </p>

          <ul>
            <li>
              <strong>Error count</strong>: "Select to delete" had the lowest
              error count (0.5), followed by "deselect to keep" (1.5), while
              "select to keep" had the highest error count (4.95).
            </li>
            <div className="project-image" data-aos="zoom-in">
              <img src={count} alt="Error Count" />
            </div>
            <li>
              <strong>Completion time</strong>: "Select to delete" was also the
              fastest method, with an average completion time of 31.5 seconds,
              while "select to keep" was the slowest at 64.5 seconds.
            </li>
            <div className="project-image" data-aos="zoom-in">
              <img src={time} alt="Completion Time" />
            </div>
          </ul>

          <p>
            A <strong>one-way ANOVA</strong> using R confirmed that while each
            method had its strengths, there were no statistically significant
            differences in overall completion time or error count.
          </p>
          <div className="project-image" data-aos="zoom-in">
            <img src={anova} alt="Anova" />
          </div>
          <p>
            Additionally, we observed a significant main effect of the file
            selection method on <strong>error count</strong> (Figure 1) and{" "}
            <strong>completion time</strong> (Figure 2).
          </p>
          <div className="project-image" data-aos="zoom-in">
            <img src={main_effects} alt="Main Effects" />
          </div>
          {/* <br /> */}
          <h3>Qualitative Feedback</h3>
          <p>
            After the experiment, participants were asked to answer 10 questions
            as part of a short interview. The interview questions followed the{" "}
            <strong>System Usability Scale (SUS)</strong> format as shown in
            Table 4.
          </p>
          <div className="project-image" data-aos="zoom-in">
            <img src={sus} alt="SUS" />
          </div>
          <p>
            Participants were also interviewed using the System Usability Scale
            (SUS). The “<strong>deselect to keep</strong>” method achieved the
            highest SUS score of 87.5, making it the most preferred option among
            users. Despite its unconventional approach, participants found it
            easier and less error-prone. However, some noted that the
            terminology used in this method felt awkward and could be refined
            for better clarity.
          </p>
          {/* <br /> */}
          <p>
            All methods scored above 68 on the SUS, indicating acceptable{" "}
            <strong>usability levels</strong>. Additionally, users expressed
            confidence in their ability to use the system without technical
            support, reinforcing the system’s <strong>ease of use</strong>.
          </p>
        </section>
        <section className="design-section" data-aos="fade-down">
          <h2>🖌️ Designs</h2>
          <p>
            From the experiment, we learned that students valued{" "}
            <strong>simplicity</strong> and <strong>clarity</strong>. This led
            to several design iterations, focusing on making{" "}
            <strong>ByteBroom</strong> accessible for both first-time and
            returning users.
          </p>
          {/* <br /> */}
          <h3>Prototyping Approach</h3>
          <p>
            To test different <strong>file selection methods</strong>, we
            designed a <strong>desktop application</strong> that helps users
            efficiently manage their digital files. The desktop format was
            selected because it offers more flexibility and better supports{" "}
            <strong>file navigation</strong> and <strong>organization</strong>.
          </p>
          {/* <br /> */}
          <p>Our prototype has two main parts:</p>
          <ul>
            <li>
              <strong>Dashboard (horizontal)</strong>: The dashboard provides an
              overview of key features like{" "}
              <strong>decluttering reminders</strong>,{" "}
              <strong>file breakdowns</strong>, and{" "}
              <strong>file cleanup</strong>.
            </li>
            <li>
              <strong>File deletion (vertical)</strong>: This feature focuses on
              testing the different selection methods—
              <strong>select to keep</strong>, <strong>select to delete</strong>
              , and <strong>deselect to keep</strong>—through a simulated file
              system.
            </li>
          </ul>
          {/* <br /> */}
          <p>
            We used a <strong>minimalist design</strong> to make the interface
            simple and easy to use. Key principles like{" "}
            <strong>Fitt’s Law</strong> were applied, using clear icons and
            labels to help users quickly find what they need.{" "}
            <strong>Visual hierarchy</strong> was created through font sizes and
            weights, guiding the user’s attention to important elements.
          </p>
          {/* <br /> */}
          <p>
            We followed key <strong>usability principles</strong>, ensuring:
          </p>
          <ul>
            <li>
              <strong>Clear system status</strong>: Users always know which
              documents are selected.
            </li>
            <li>
              <strong>User control</strong>: Options to cancel or undo actions
              are easily accessible.
            </li>
            <li>
              <strong>Error prevention</strong>: Modal dialogs help prevent
              mistakes.
            </li>
            <li>
              <strong>Low cognitive load</strong>: Design elements are easy to
              locate and interact with.
            </li>
          </ul>
          {/* <br /> */}
          <p>
            The prototype was built using <strong>Figma</strong> and focuses on{" "}
            <strong>simplicity</strong> and <strong>usability</strong>. This
            allowed us to concentrate on key features and interactions.
          </p>
          {/* <br /> */}
          <p>
            Here is a link to the <strong>narrated video</strong> demonstrating
            how a user completes tasks with our prototype:{" "}
            <a href="https://youtu.be/HaDNtA4vums" target="_blank">
              Watch the video.
            </a>
          </p>
        </section>
        <section className="reflections-section" data-aos="fade-down">
          <h2>💭 Reflections</h2>
          <h3>Challenges & Learnings</h3>
          <p>
            Our study highlighted the tension between{" "}
            <strong>efficiency</strong> and <strong>user familiarity</strong>.
            While "<strong>select to delete</strong>" was the fastest method,
            many users preferred "<strong>deselect to keep</strong>" due to its
            perceived ease. This insight reinforced the importance of balancing{" "}
            <strong>innovation</strong> with <strong>user expectations</strong>{" "}
            when designing digital tools.
          </p>
          {/* <br /> */}
          <h3>Future Directions</h3>
          <p>
            Moving forward, <strong>ByteBroom</strong> can expand beyond student
            users to a broader audience, incorporating{" "}
            <strong>AI-driven suggestions</strong> for personalized decluttering
            strategies. Additionally, integration with{" "}
            <strong>cloud storage platforms</strong> would enhance its utility
            in real-world scenarios.
          </p>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default ByteBroom;
