import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import HexagonChart from './fire';


import { PureComponent } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

import { getUserIdFromAuth2 } from "../../Redux/actions/GetSellerIdFromAuthActionCreators2";
import { useSelector } from "react-redux";
const register = new URL("../../images/rEGISTEREDBLACK.png", import.meta.url);
const register2 = new URL("../../images/careerconfusion.png", import.meta.url);
const illus = new URL("../../images/google-play-badge.png", import.meta.url);
const illus2 = new URL(
  "../../images/Webp.net-resizeimage.png",
  import.meta.url
);
function End() {
  const { resetToken } = useParams();
  const [newPassword, setNewPassword] = useState("");
  const [cPassword, setcPassword] = useState("");
  const [data2, setdata2] = useState([]);
  const [score2, setscore2] = useState();

  console.log(resetToken);
  const baseUrls = "http://localhost:8000";
  const baseUrl = "https://server.youthbuzz.in";
  const id = useSelector((state) => state.get_user_id.user_id);

  const fetchData2 = async (e) => {
    try {
      const response = await axios.get(`${baseUrl}/api/v1/test/getone2/${id}`);

      console.log(response.data.data.user.score);
      setdata2([response.data.data.user]);
    } catch (error) {}
  };

  // Update chart data when scores are available

  useEffect(() => {
    fetchData2();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const names = ['R', 'I', 'A', 'S', 'E', 'C'];
// Replace with your data

  return (
    <div style={{ textAlign: "center" }}>
      <div class="header" style={{ textAlign: "left" }} id="myHeader">
        <p>
          <a href="https://theyouthbuzz.com/" target="_blank">
            <img
              src={register}
              className="head-p"
              alt="loading..."
            />
          </a>
        </p>

        <div>
          <div id="Recapta-Verify" className="Recapta-Verify"></div>
        </div>
      </div>
      {data2.map((item) => {
        return (
          <div class="main">
            <section class="signup">
              <div class="container">
                <div class="signup-content">
                  <div class="signup-form">
                    <h2 class="form-title">
                      Hey <span class="name">{item.username}</span>
                    </h2>
                    <td>
                      Here are the scores of your Professional and occupational
                      interests according to the test that you just gave.
                    </td>
                  </div>
                  <div class="signup-image">
                    <figure>
                      <img
                        src={register2}
                        alt="career assesment sing up image"
                      />
                    </figure>
                    <h1 class="signup-image-link">
                      Identify your career potentials
                    </h1>
                  </div>
                </div>
              </div>
            </section>

            <section class="signup">
              <div class="container">
                <div class="signup-content2">
                  <div class="signup-form" style={{ margin: "auto" }}>
                    <h2 class="form-title">Your Score</h2>
                    <td>
                      This score presents your occupational interest scores out
                      of ten on six major occupational fields.{" "}
                    </td>{" "}
                    <br />
                    <td>
                      The higher the number, the more you are aligned towards a
                      particular occupational interest.{" "}
                    </td>
                    <p class="usertime">
                      {" "}
                      Time taken <span class="time_taken"></span>
                    </p>
                  </div>
                  {item.score.map((item2) => {
                    return (
                      <div>
                        <div class="signup-image" style={{ margin: "auto" }}>
                          <table class="table">
                            <thead>
                              <tr>
                                <th>Intrest Field</th>
                                <th>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </th>
                                <th>Score</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Realistic</td>
                                <td></td>
                                <td>
                                  <span class="RealisticS">
                                    {item2.Realistic}
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>Investigative</td>
                                <td> </td>
                                <td>
                                  <span class="InvestigativeS">
                                    {item2.Investigative}
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>Artistic</td>
                                <td> </td>
                                <td>
                                  <span class="ArtisticS">
                                    {item2.Artistic}
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>Social</td>
                                <td> </td>
                                <td>
                                  <span class="SocialS">{item2.Social}</span>
                                </td>
                              </tr>
                              <tr>
                                <td>Enterprising</td>
                                <td> </td>
                                <td>
                                  <span class="EnterprisingS">
                                    {item2.Enterprising}
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>Conventional</td>
                                <td> </td>
                                <td>
                                  <span class="ConventionalS">
                                    {item2.Conventional}
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
            {item.score.map((item2) => {
              return (
                <div>
                  <section class="signup">
                    <div class="container">
                      <div class="signup-content">
                        <div class="signup-form">
                          <h2 class="form-title">Intrest Radar</h2>
                          <a>
                            This Radar chart is a graphical presentation of your
                            occupational interests along the same six major
                            occupational fields based on the score of the test
                            that you just gave.
                          </a>
                          <br></br>
                          <table>
                            <thead>
                              <tr>
                                <th>Code</th>
                                <th>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </th>
                                <th>Field</th>
                                <th>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </th>
                                <th>Score</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>R</td>
                                <th>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </th>
                                <td>Realistic</td>
                                <th>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </th>
                                <td>
                                  <span class="RealisticSS">
                                    {item2.Realistic}
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>I</td>
                                <th>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </th>
                                <td>Investigative</td>
                                <th>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </th>
                                <td>
                                  <span class="InvestigativeSS">
                                    {item2.Investigative}
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>A</td>
                                <th>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </th>
                                <td>Artistic</td>
                                <th>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </th>
                                <td>
                                  <span class="ArtisticSS">
                                    {item2.Artistic}
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>S</td>
                                <th>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </th>
                                <td>Social</td>
                                <th>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </th>
                                <td>
                                  <span class="SocialSS">{item2.Social}</span>
                                </td>
                              </tr>
                              <tr>
                                <td>E</td>
                                <th>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </th>
                                <td>Enterprising</td>
                                <th>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </th>
                                <td>
                                  <span class="EnterprisingSS">
                                    {item2.Enterprising}
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>C</td>
                                <th>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </th>
                                <td>Conventional</td>
                                <th>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </th>
                                <td>
                                  <span class="ConventionalSS">
                                    {item2.Conventional}
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <br></br>
                          <a>
                            Below you can find a detailed explanation of each
                            occupational field along with your score for better
                            insight.
                          </a>
                        </div>
                        <div id="chart" style={{ marginTop: "80px" }}>
                          {/* <Radar
                            data={{ 
                              labels: [ "Realistic",
                              "Investigative",
                              "Artistic",
                              "Social",
                              "Enterprising",
                              "Conventional"],
                              datasets: [
                                {
                                  label: '# of Votes',
                                  data: [
                                
                                    item2.Realistic,
                                    item2.Investigative,
                                    item2.Artistic,
                                    item2.Social,
                                    item2.Enterprising,
                                    item2.Conventional,
                                 
                                  ],
                                  backgroundColor: 'rgba(255, 99, 132, 0.2)',
                                  backgroundColor: 'rgba(255, 99, 132, 0.2)',
                                  borderColor: 'rgba(255, 99, 132, 1)',
                                  borderWidth: 2,
                                },
                              ],
                            }
                          }
                          />  */}
                           <HexagonChart id="myHexagonChart" sideLength={200} names={names} values={[
                                 item2.Realistic/10,
                                 item2.Investigative/10,
                                 item2.Artistic/10,
                                 item2.Social/10,
                                 item2.Enterprising/10,
                                 item2.Conventional/10,

                           ]} />
    
                          
                        </div>
                      </div>
                    </div>
                  </section>

                  <section class="signup">
                    <div class="container">
                      <div class="signup-content">
                        <div class="signup-form">
                          <h2 class="form-title">Realistic</h2>
                          <td>
                            Doers. Who prefer to work with things and love to be
                            assertive, competitive & understand by doing.
                          </td>
                        </div>
                        <div class="signup-image">
                          <h2>
                            <span class="RS">{item2.Realistic}</span>/10
                          </h2>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section class="signup">
                    <div class="container">
                      <div class="signup-content">
                        <div class="signup-form">
                          <h2 class="form-title">Investigative</h2>
                          <td>
                            Thinkers. Who prefer to work with data and love to
                            observe, organize and understand information.
                          </td>
                        </div>
                        <div class="signup-image">
                          <h2>
                            <span class="IV">{item2.Investigative}</span>/10
                          </h2>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section class="signup">
                    <div class="container">
                      <div class="signup-content">
                        <div class="signup-form">
                          <h2 class="form-title">
                            Get the expert's guidance.<span class="name"></span>
                          </h2>
                          <td>
                            We bring to you the Open Counsellors Network where
                            we match you with a suitable career counselor so
                            that you end up getting guidance the way you
                            expertise in and not in the expertise of others.
                          </td>
                          <br></br>
                          <td>
                            Download the Youth Buzz app now & take your One
                            Giant leap to active learning.
                          </td>
                        </div>
                        <div class="signup-image">
                          <div class="container">
                            <iframe
                              class="responsive-iframe"
                              src="https://www.youtube.com/embed/iktv0sG2MII"
                            ></iframe>
                            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/z3-QIappZlY?si=AVK77Flfeoh2D422" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="disable"></iframe> */}
                          </div>
                          <p>
                            <a
                              href="https://play.google.com/store/apps/details?id=youthbuzz.com.youthbuzz"
                              target="_blank"
                            >
                              <img
                                src={illus}
                                alt="Youth buzz Career counselling app on Google play store"
                              />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section class="signup">
                    <div class="container">
                      <div class="signup-content">
                        <div class="signup-form">
                          <h2 class="form-title">Artistic</h2>
                          <td>
                            Creators. Who prefer to work with ideas & things.
                            Love to be open, creative, inventive, and try new
                            against the rule.
                          </td>
                        </div>
                        <div class="signup-image">
                          <h2>
                            <span class="AC">{item2.Artistic}</span>/10
                          </h2>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section class="signup">
                    <div class="container">
                      <div class="signup-content">
                        <div class="signup-form">
                          <h2 class="form-title">Social</h2>
                          <td>
                            Helpers. Who prefer to work with people and find
                            comfort in helping others.
                          </td>
                        </div>
                        <div class="signup-image">
                          <h2>
                            <span class="SC">{item2.Social}</span>/10
                          </h2>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section class="signup">
                    <div class="container">
                      <div class="signup-content">
                        <div class="signup-form">
                          <h2 class="form-title">
                            Access this report later too?
                            <span class="name"></span>
                          </h2>
                          <td>
                            Get the Youth buzz app from the play store and
                            request a copy of this report from the same number
                            to access it later as well.
                          </td>
                          <br></br>
                          <td>And also get the benefit of :</td>
                          <ul>
                            <li>Career guidance from experts</li>
                            <li>
                              Detailed report of 10 pages with an improvement
                              plan
                            </li>
                            <li>Latest info on all thing Youth & Career</li>
                            <li>
                              Multiple Psychoanalysis tests to further evaluate
                              your skills
                            </li>
                          </ul>
                          <td>
                            Download the Youth Buzz app now & take your One
                            Giant leap to active learning.
                          </td>
                          <p>
                            <a
                              href="https://play.google.com/store/apps/details?id=youthbuzz.com.youthbuzz"
                              target="_blank"
                            >
                              <img
                                src={illus}
                                alt="Youth Buzz Career assesment app on google play store"
                              />
                            </a>
                          </p>
                        </div>
                        <div class="signup-image">
                          <p>
                            <a
                              href="https://play.google.com/store/apps/details?id=youthbuzz.com.youthbuzz"
                              target="_blank"
                            >
                              <img
                                src={illus2}
                                alt="Youth Buzz Career assesment app on google play store"
                              />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section class="signup">
                    <div class="container">
                      <div class="signup-content">
                        <div class="signup-form">
                          <h2 class="form-title">Enterprising</h2>
                          <td>
                            Persuaders. Who prefer to work with people and data,
                            and value reputation, power, money, and status.
                          </td>
                        </div>
                        <div class="signup-image">
                          <h2>
                            <span class="EP">{item2.Enterprising}</span>/10
                          </h2>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section class="signup">
                    <div class="container">
                      <div class="signup-content">
                        <div class="signup-form">
                          <h2 class="form-title">Conventional</h2>
                          <td>
                            Organizers. Who prefer to work with data and find
                            comfort in emphasize rules and regulations.
                          </td>
                        </div>
                        <div class="signup-image">
                          <h2>
                            <span class="CV">{item2.Conventional}</span>/10
                          </h2>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section class="signup">
                    <div class="container">
                      <div class="signup-content">
                        <div class="signup-form">
                          <h2 style={{ marginTop: "100px" }} class="form-title">
                            Know more ?<span class="name"></span>
                          </h2>
                          <td>
                            While this score report reveals a lot about your
                            occupational interests based on your performance in
                            the test, we still recommend having a one-on-one
                            session with the expert counselors to get a complete
                            assured picture.
                          </td>
                          <br></br>
                          <td>
                            Download the Youth Buzz app now & take your One
                            Giant leap to active learning
                          </td>
                        </div>
                        <div class="signup-image">
                          <div class="signup-content">
                            <iframe
                              class="responsive-iframe"
                              src="https://www.youtube.com/embed/z3-QIappZlY"
                            ></iframe>
                          </div>
                          <p>
                            <a
                              href="https://play.google.com/store/apps/details?id=youthbuzz.com.youthbuzz"
                              target="_blank"
                            >
                              <img
                                src={illus}
                                alt="Youth Buzz Career assesment app on google play store"
                              />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section class="signup">
                    <div class="container footerr">
                      <br></br>
                      <p style={{ marginTop: "20px" }}>
                        Analyze again ? Click on the button below
                      </p>

                      <Link to="/quiz" class="signup-image-link">
                        <button
                          type="submit"
                          name="signup"
                          id="signup"
                          class="form-submit"
                          value="Restart the test"
                          onclick="location.href='index.html'"
                        >
                          Restart the test
                        </button>
                      </Link>
                    </div>
                  </section>

                  <section class="signup">
                    <div class="container">
                      <br></br>
                      <a
                        style={{ marginTop: "10px" }}
                        className="footerr"
                        href="https://theyouthbuzz.com/social/"
                        target="_blank"
                        class="signup-image-link"
                      >
                        Contact us
                      </a>
                      <p className="footerr">
                        Copyrights Youth Buzz educom LLP 2021
                      </p>
                    </div>
                  </section>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default End;
