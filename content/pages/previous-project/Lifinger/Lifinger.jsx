import React, { Component } from "react";
import ReactPlayer from "react-player";
import "../../../../src/ProjectStyle.css";


export default class Lifinger extends Component {
  render() {
    return (
      <div>
        <div id="Home"></div>
        <div className="Content">
          <div className="section  ">
            <h1 className="title"> The Problem </h1>
            <p className="description">
              We found out that there are problems for people delivering well in
              town. We have delivery services in long-distance, what about in
              the same city? People always have problems delivering stuff in the
              same city. The only existing solution is to ask help from friends
              or bring the item by themselves.
            </p>
            <div className="singlewrapper">
              <img
                src="https://cdn.jsdelivr.net/gh/Big-Bro222/StaticFileServer/big-bro222.github.io/projects/Lifinger/Natrualistic_Observation.png"
                className="WideImage"
                alt="NatrualisticObservationUrl"
              ></img>
              <img
                src="https://cdn.jsdelivr.net/gh/Big-Bro222/StaticFileServer/big-bro222.github.io/projects/Lifinger/Brainstorming_1.png"
                className="WideImage"
                alt="Brainstorming1Url"
              ></img>
              <p className="Figurediscription">
                Figure1 Pictures from brainstorming and screen shot during
                Naturalistic Observation
              </p>
            </div>
          </div>

          <div className="section ">
            <h1 className="title"> The solution </h1>
            <p className="description">
              Our design vision is to build a platform that provides on-the-way
              delivery service that connects people with stuff to send to
              individuals already heading that way.
            </p>

            <div className="singlewrapper">
              <img
                src="https://cdn.jsdelivr.net/gh/Big-Bro222/StaticFileServer/big-bro222.github.io/projects/Lifinger/brainstorming2.png"
                className="WideImage"
                alt="brainstorming2Url"
              ></img>
              <p className="Figurediscription">Figure2 Design vision</p>
            </div>
          </div>

          <div className="section  ">
            <h1 className="title"> User Research </h1>
            <p className="description">
              We conducted interviews on 17 individuals, age ranges from 20 to
              47 years old to identify user needs and user patterns. Our main
              questions were:
              <ul>
                <li>
                  Is there any situation that people would prefer to pay money
                  for help rather than ask for help from friends?
                </li>
                <li>
                  Do people willing to pay to increase their efficiency and save
                  time?
                </li>
                <li>What's their concern about help from strangers?</li>
              </ul>
            </p>

            <h1 className="title">User need</h1>
            <div className="singlewrapper">
              <img
                src="https://cdn.jsdelivr.net/gh/Big-Bro222/StaticFileServer/big-bro222.github.io/projects/Lifinger/User_need.png"
                className="WideImage"
                alt="UserneedUrl"
              ></img>
            </div>
            <h1 className="title">User pattern</h1>
            <p className="description">
              <ul>
                <li>
                  Friendship-oriented individuals tend to like to ask for
                  assistance from a friend. And also thinks this can enhance the
                  relationship between each other
                </li>
                <li>
                  Efficiency-oriented individuals can accept to pay a small
                  amount of money which increases their efficiency dramatically.
                </li>
              </ul>
            </p>

            <div className="singlewrapper">
              <img
                src="https://cdn.jsdelivr.net/gh/Big-Bro222/StaticFileServer/big-bro222.github.io/projects/Lifinger/behavior_pattern.png"
                className="WideImage"
                alt="behaviorpatternUrl"
              ></img>
              <p className="Figurediscription">
                Figure3 Behavior pattern analysis
              </p>
            </div>
          </div>

          <div className="section ">
            <h1 className="title"> Identify user and scenario </h1>
            <p className="description">
              To better communicate in our group and keep on the same page, we
              build four personas and one scenario for the user. We selected the
              primary persona, which we felt that her needs matches our user
              needs most.
            </p>

            <div className="singlewrapper">
              <img
                src="https://cdn.jsdelivr.net/gh/Big-Bro222/StaticFileServer/big-bro222.github.io/projects/Lifinger/Persona.png"
                className="WideImage"
                alt="PersonaUrl"
              ></img>
              <p className="Figurediscription">Figure4 Persona Analysis</p>
            </div>
            <h1 className="title">Scenario</h1>
            <p className="description">
              Lucy forgot to return the dictionary to Anna after the homework
              discussion. However, she lives far away from the place Anna lives
              in. Then Lucy posts a mission on lifinger and Julia accepted the
              mission because she is heading to the city center to buy a coat.
              Julia brings the book to Anna by her way to the city center and
              Lucy doesn’t have to travel a long distance just for a book.
            </p>
          </div>
          <div className="section  ">
            <h1 className="title"> Paper prototype&user evaluation </h1>
            <p className="description">
              We defined two different types of interaction. One is list view
              another is the map view. We ended in conflicts about which is more
              practical. So we conducted user evaluation to test both
              prototypes.
            </p>

            <p className="description">
              According to our test objects, they thought that the map view is
              more intuitive and they need the information of location as
              essential information. So we decide to use the map view
              interaction as the main one.
            </p>

            <div className="singlewrapper">
              <img
                src="https://cdn.jsdelivr.net/gh/Big-Bro222/StaticFileServer/big-bro222.github.io/projects/Lifinger/PaperPrototype1.png"
                className="WideImage"
                alt="PaperPrototype1Url"
              ></img>
              <img
                src="https://cdn.jsdelivr.net/gh/Big-Bro222/StaticFileServer/big-bro222.github.io/projects/Lifinger/lofi_evaluation_1.png"
                className="WideImage"
                alt="lofievaluation1Url"
              ></img>
              <img
                src="https://cdn.jsdelivr.net/gh/Big-Bro222/StaticFileServer/big-bro222.github.io/projects/Lifinger/Herustic_Evaluation_for_Lifinger_1.png"
                className="WideImage"
                alt="HerusticEvaluationUrl"
              ></img>

              <p className="Figurediscription">Figure4 Persona Analysis</p>
            </div>

            <p className="description">
              Regarding to the evaluation part, we used two evaluation
              techniques. At first, we conduct user testing with five users to
              fix the system. Also, according to their feedback we decided to
              use a ballpoint pen instead of a pencil. We then did a heuristic
              evaluation to further investigate our system breakdowns.
            </p>
          </div>

          <div className="section ">
            <h1 className="title"> Iteration </h1>
            <p className="description">
              After the user evaluation phase, we redesigned our paper prototype
              (Click here to see the redesign)and built an interactive version
              via Marvel.
            </p>

            <div className="singlewrapper">
              <img
                src="https://cdn.jsdelivr.net/gh/Big-Bro222/StaticFileServer/big-bro222.github.io/projects/Lifinger/Marvel.png"
                className="WideImage"
                alt="MarvelUrl"
              ></img>
              <img
                src="https://cdn.jsdelivr.net/gh/Big-Bro222/StaticFileServer/big-bro222.github.io/projects/Lifinger/PaperPrototypeChart.png"
                className="WideImage"
                alt="PaperPrototypeChartUrl"
              ></img>
              <p className="Figurediscription">
                Figure5 First version paper prototype& paper prototype
                evaluation
              </p>
            </div>
          </div>

          <div className="section  ">
            <h1 className="title"> Improvements </h1>
            <p className="description">
              And to get a better understanding of the layout of the final
              product, we built a middle fidelity version. We did a third round
              iteration for improving the Final output.
            </p>
            <p className="description">
              <ul>
                <li>The state of selection is not clear enough</li>
                <li>Fat finger effect for the return button</li>
              </ul>
            </p>
            <div className="singlewrapper">
              <img
                src="https://cdn.jsdelivr.net/gh/Big-Bro222/StaticFileServer/big-bro222.github.io/projects/Lifinger/Improvement1.png"
                className="WideImage"
                alt="Improvement1Url"
              ></img>
              <img
                src="https://cdn.jsdelivr.net/gh/Big-Bro222/StaticFileServer/big-bro222.github.io/projects/Lifinger/improvement2.png"
                className="WideImage"
                alt="improvement2Url"
              ></img>
              <p className="Figurediscription">
                Figure5 First version paper prototype& paper prototype
                evaluation
              </p>
            </div>
          </div>

          <div className="section ">
            <h1 className="title"> Improvements </h1>
            <div className="video-wrapper">
              <ReactPlayer
                className="video"
                width="100%"
                height="300px"
                url="https://youtu.be/pgqII2If7vM"
                loop
                controls
              />
            </div>
          </div>
          <div className="section  ">
            <h1 className="title"> Self-reflection </h1>
            <p className="description">
              In this design project, we truly searched for an interesting
              problem that doesn't have many solutions in the current market. I
              found building an "interactive" paper prototype useful, which is
              fast and more intuitive than the traditional paper prototype. What
              makes me surprised is that we conducted several iteration loops
              and still can find errors. This makes me realize the importance of
              iteration.
            </p>
            <p className="description">
              As for the breakdown of the design, we haven't really thought
              about the business model of the product, which may need more
              reflection on it.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
