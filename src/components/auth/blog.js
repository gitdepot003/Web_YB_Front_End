import React from "react";
import BackToUp from "@uiw/react-back-to-top";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "./footer";
import Header from "./header";
const shape1 = new URL("../../images/shape1.png", import.meta.url);
const illus = new URL("../../images/Picture2.png", import.meta.url);
const shape2 = new URL("../../images/shape2.png", import.meta.url);
const shape3 = new URL("../../images/shape3.png", import.meta.url);
const shape4 = new URL("../../images/shape4.png", import.meta.url);
const shape5 = new URL("../../images/shape5.png", import.meta.url);
const blog = new URL("../../images/blog.jpg", import.meta.url);
function BLOG() {
  const [Loader, setLoader] = useState(true);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Code to run after 2 seconds
      setLoader(false);
    }, 1000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array means this effect runs only once after initial render

  return (
    <>
      {Loader ? (
        <div class="preloader">
          <div class="spinner"></div>
        </div>
      ) : (
        <div>
          <Header />
          <div class="page-title-area vr-mobile">
            <div class="d-table">
              <div class="d-table-cell">
                <div class="contain">
                  <h2>Blog</h2>
                </div>
              </div>
            </div>

            <div class="shape-box1">
              <img src={shape1} alt="shape" />
            </div>
            <div class="shape-box2 rotateme">
              <img width="20px" src={shape2} alt="shape" />
            </div>
            <div class="shape-box3">
              <img width="30px" src={shape3} alt="shape" />
            </div>
            <div class="shape-box4">
              <img width="20px" src={shape4} alt="shape" />
            </div>
            <div class="shape-box5">
              <img src={shape5} alt="shape" />
            </div>
            <div class="shape-box6 rotateme">
              <img width="20px" src={shape4} alt="shape" />
            </div>
            <div class="shape-box7">
              <img width="20px" src={shape4} alt="shape" />
            </div>
            <div class="shape-box8 rotateme">
              <img width="20px" src={shape2} alt="shape" />
            </div>
          </div>

          <section class="blog-area ptb-120">
            <div class="contain">
              <div class="row">
                <div class="col-lg-8 col-md-12">
                  <div class="row">
                    <div class="col-lg-6 col-md-6">
                      <div class="single-blog-box">
                        <div class="entry-thumbnail">
                          <a href="#">
                            <img src={blog} alt="image" />
                          </a>
                        </div>

                        <div class="entry-post-content">
                          <div class="entry-meta">
                            <ul>
                              <li>
                                <i class="fas fa-calendar-alt"></i> 6 Aug 2021
                              </li>

                              <li>
                                <i class="fas fa-tags"></i>{" "}
                                <a href="#">Games</a>
                              </li>

                              <li>
                                <i class="far fa-clock"></i> 2 Mins Read
                              </li>
                            </ul>
                          </div>

                          <div class="entry-title">
                            <h3>
                              <a href="#">
                                Making Peace With The Feast Or Famine Of
                                Freelancing
                              </a>
                            </h3>
                            <p>
                              Borem ipsum dolor sit amet, adhuc iriure
                              dissentias est in, est ne diam graece tincidunt.
                            </p>
                            <a href="#" class="read-more-btn">
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-6 col-md-6">
                      <div class="single-blog-box">
                        <div class="entry-thumbnail">
                          <a href="#">
                            <img src={blog} alt="image" />
                          </a>
                        </div>

                        <div class="entry-post-content">
                          <div class="entry-meta">
                            <ul>
                              <li>
                                <i class="fas fa-calendar-alt"></i> 7 Aug 2021
                              </li>

                              <li>
                                <i class="fas fa-tags"></i>{" "}
                                <a href="#">Games</a>
                              </li>

                              <li>
                                <i class="far fa-clock"></i> 2 Mins Read
                              </li>
                            </ul>
                          </div>

                          <div class="entry-title">
                            <h3>
                              <a href="#">
                                10 Building Mobile Apps With Ionic And React
                              </a>
                            </h3>
                            <p>
                              Borem ipsum dolor sit amet, adhuc iriure
                              dissentias est in, est ne diam graece tincidunt.
                            </p>
                            <a href="#" class="read-more-btn">
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-6 col-md-6">
                      <div class="single-blog-box">
                        <div class="entry-thumbnail">
                          <a href="#">
                            <img src={blog} alt="image" />
                          </a>
                        </div>

                        <div class="entry-post-content">
                          <div class="entry-meta">
                            <ul>
                              <li>
                                <i class="fas fa-calendar-alt"></i> 6 Aug 2021
                              </li>

                              <li>
                                <i class="fas fa-tags"></i>{" "}
                                <a href="#">Games</a>
                              </li>

                              <li>
                                <i class="far fa-clock"></i> 2 Mins Read
                              </li>
                            </ul>
                          </div>

                          <div class="entry-title">
                            <h3>
                              <a href="#">
                                I Used The Web For A Day On A 5000 MB Budget
                              </a>
                            </h3>
                            <p>
                              Borem ipsum dolor sit amet, adhuc iriure
                              dissentias est in, est ne diam graece tincidunt.
                            </p>
                            <a href="#" class="read-more-btn">
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-6 col-md-6">
                      <div class="single-blog-box">
                        <div class="entry-thumbnail">
                          <a href="#">
                            <img src={blog} alt="image" />
                          </a>
                        </div>

                        <div class="entry-post-content">
                          <div class="entry-meta">
                            <ul>
                              <li>
                                <i class="fas fa-calendar-alt"></i> 9 Aug 2021
                              </li>

                              <li>
                                <i class="fas fa-tags"></i>{" "}
                                <a href="#">Games</a>
                              </li>

                              <li>
                                <i class="far fa-clock"></i> 2 Mins Read
                              </li>
                            </ul>
                          </div>

                          <div class="entry-title">
                            <h3>
                              <a href="#">
                                Created To Make You Think: Meet Our New Printed
                                Magazine
                              </a>
                            </h3>
                            <p>
                              Borem ipsum dolor sit amet, adhuc iriure
                              dissentias est in, est ne diam graece tincidunt.
                            </p>
                            <a href="#" class="read-more-btn">
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-6 col-md-6">
                      <div class="single-blog-box">
                        <div class="entry-thumbnail">
                          <a href="#">
                            <img src={blog} alt="image" />
                          </a>
                        </div>

                        <div class="entry-post-content">
                          <div class="entry-meta">
                            <ul>
                              <li>
                                <i class="fas fa-calendar-alt"></i> 24 Aug 2021
                              </li>

                              <li>
                                <i class="fas fa-tags"></i>{" "}
                                <a href="#">Games</a>
                              </li>

                              <li>
                                <i class="far fa-clock"></i> 2 Mins Read
                              </li>
                            </ul>
                          </div>

                          <div class="entry-title">
                            <h3>
                              <a href="#">
                                Popular Design News of the Week August 4, 2019
                              </a>
                            </h3>
                            <p>
                              Borem ipsum dolor sit amet, adhuc iriure
                              dissentias est in, est ne diam graece tincidunt.
                            </p>
                            <a href="#" class="read-more-btn">
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-6 col-md-6">
                      <div class="single-blog-box">
                        <div class="entry-thumbnail">
                          <a href="#">
                            <img src={blog} alt="image" />
                          </a>
                        </div>

                        <div class="entry-post-content">
                          <div class="entry-meta">
                            <ul>
                              <li>
                                <i class="fas fa-calendar-alt"></i> 25 Aug 2021
                              </li>

                              <li>
                                <i class="fas fa-tags"></i>{" "}
                                <a href="#">Games</a>
                              </li>

                              <li>
                                <i class="far fa-clock"></i> 2 Mins Read
                              </li>
                            </ul>
                          </div>

                          <div class="entry-title">
                            <h3>
                              <a href="#">
                                How to share your company vision as a leader
                              </a>
                            </h3>
                            <p>
                              Borem ipsum dolor sit amet, adhuc iriure
                              dissentias est in, est ne diam graece tincidunt.
                            </p>
                            <a href="#" class="read-more-btn">
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-6 col-md-6">
                      <div class="single-blog-box">
                        <div class="entry-thumbnail">
                          <a href="#">
                            <img src={blog} alt="image" />
                          </a>
                        </div>

                        <div class="entry-post-content">
                          <div class="entry-meta">
                            <ul>
                              <li>
                                <i class="fas fa-calendar-alt"></i> 21 Aug 2021
                              </li>

                              <li>
                                <i class="fas fa-tags"></i>{" "}
                                <a href="#">Games</a>
                              </li>

                              <li>
                                <i class="far fa-clock"></i> 2 Mins Read
                              </li>
                            </ul>
                          </div>

                          <div class="entry-title">
                            <h3>
                              <a href="#">
                                Here are the 5 most telling signs of
                                micromanagement
                              </a>
                            </h3>
                            <p>
                              Borem ipsum dolor sit amet, adhuc iriure
                              dissentias est in, est ne diam graece tincidunt.
                            </p>
                            <a href="#" class="read-more-btn">
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-6 col-md-6">
                      <div class="single-blog-box">
                        <div class="entry-thumbnail">
                          <a href="#">
                            <img src={blog} alt="image" />
                          </a>
                        </div>

                        <div class="entry-post-content">
                          <div class="entry-meta">
                            <ul>
                              <li>
                                <i class="fas fa-calendar-alt"></i> 4 Aug 2021
                              </li>

                              <li>
                                <i class="fas fa-tags"></i>{" "}
                                <a href="#">Games</a>
                              </li>

                              <li>
                                <i class="far fa-clock"></i> 2 Mins Read
                              </li>
                            </ul>
                          </div>

                          <div class="entry-title">
                            <h3>
                              <a href="#">
                                Announcing “Shape Up”, a deep dive into how we
                                work
                              </a>
                            </h3>
                            <p>
                              Borem ipsum dolor sit amet, adhuc iriure
                              dissentias est in, est ne diam graece tincidunt.
                            </p>
                            <a href="#" class="read-more-btn">
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-6 col-md-6">
                      <div class="single-blog-box">
                        <div class="entry-thumbnail">
                          <a href="#">
                            <img src={blog} alt="image" />
                          </a>
                        </div>

                        <div class="entry-post-content">
                          <div class="entry-meta">
                            <ul>
                              <li>
                                <i class="fas fa-calendar-alt"></i> 10 Aug 2021
                              </li>

                              <li>
                                <i class="fas fa-tags"></i>{" "}
                                <a href="#">Games</a>
                              </li>

                              <li>
                                <i class="far fa-clock"></i> 2 Mins Read
                              </li>
                            </ul>
                          </div>

                          <div class="entry-title">
                            <h3>
                              <a href="#">
                                How to Become a Successful Entry Level UX
                                Designer
                              </a>
                            </h3>
                            <p>
                              Borem ipsum dolor sit amet, adhuc iriure
                              dissentias est in, est ne diam graece tincidunt.
                            </p>
                            <a href="#" class="read-more-btn">
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-6 col-md-6">
                      <div class="single-blog-box">
                        <div class="entry-thumbnail">
                          <a href="#">
                            <img src={blog} alt="image" />
                          </a>
                        </div>

                        <div class="entry-post-content">
                          <div class="entry-meta">
                            <ul>
                              <li>
                                <i class="fas fa-calendar-alt"></i> 28 Aug 2021
                              </li>

                              <li>
                                <i class="fas fa-tags"></i>{" "}
                                <a href="#">Games</a>
                              </li>

                              <li>
                                <i class="far fa-clock"></i> 4 Mins Read
                              </li>
                            </ul>
                          </div>

                          <div class="entry-title">
                            <h3>
                              <a href="#">
                                Top 1000 Google web ranking changing much
                              </a>
                            </h3>
                            <p>
                              Borem ipsum dolor sit amet, adhuc iriure
                              dissentias est in, est ne diam graece tincidunt.
                            </p>
                            <a href="#" class="read-more-btn">
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-12 col-md-12">
                      <div class="pagination-area">
                        <a href="#" class="prev page-numbers">
                          <i class="fas fa-angle-double-left"></i>
                        </a>
                        <a href="#" class="page-numbers">
                          1
                        </a>
                        <span class="page-numbers current" aria-current="page">
                          2
                        </span>
                        <a href="#" class="page-numbers">
                          3
                        </a>
                        <a href="#" class="page-numbers">
                          4
                        </a>
                        <a href="#" class="next page-numbers">
                          <i class="fas fa-angle-double-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-12">
                  <aside class="widget-area" id="secondary">
                    <div className="widget_search">
                      <input
                        type="search"
                        placeholder="search...."
                        className="search-field"
                      ></input>
                      <button className="widgetButton" type="submit">
                        <i class="fas fa-search"></i>
                      </button>
                    </div>

                    <section class="widget widget_busan_posts_thumb">
                      <h3 class="widget-title">Popular Posts</h3>

                      <article class="item">
                        <a href="#" class="thumb">
                          <span class="fullimage cover bg1" role="img"></span>
                        </a>
                        <div class="info">
                          <time datetime="2019-06-30">June 30, 2021</time>
                          <h4
                            class="title usmall"
                            style={{ textAlign: "left" }}
                          >
                            <a href="#">
                              How to change yourself for the better
                            </a>
                          </h4>
                        </div>

                        <div class="clear"></div>
                      </article>

                      <article class="item">
                        <a href="#" class="thumb">
                          <span class="fullimage cover bg2" role="img"></span>
                        </a>
                        <div class="info">
                          <time datetime="2019-06-30">June 30, 2021</time>
                          <h4
                            class="title usmall"
                            style={{ textAlign: "left" }}
                          >
                            <a href="#">
                              10 Tactics for marketing your company
                            </a>
                          </h4>
                        </div>

                        <div class="clear"></div>
                      </article>

                      <article class="item">
                        <a href="#" class="thumb">
                          <span class="fullimage cover bg3" role="img"></span>
                        </a>
                        <div class="info">
                          <time datetime="2019-06-30">June 30, 2021</time>
                          <h4
                            class="title usmall"
                            style={{ textAlign: "left" }}
                          >
                            <a href="#">
                              Top 10 Google web ranking changing much
                            </a>
                          </h4>
                        </div>

                        <div class="clear"></div>
                      </article>
                    </section>

                    <section class="widget widget_recent_comments">
                      <h3 class="widget-title">Recent Comments</h3>

                      <ul>
                        <li>
                          <span class="comment-author-link">
                            <a href="#">A WordPress Commenter</a>
                          </span>
                          on
                          <a href="#">Hello world!</a>
                        </li>
                        <li>
                          <span class="comment-author-link">
                            <a href="#">Busan</a>
                          </span>
                          on
                          <a href="#">Hello world!</a>
                        </li>
                        <li>
                          <span class="comment-author-link">
                            <a href="#">Wordpress</a>
                          </span>
                          on
                          <a href="#">Hello world!</a>
                        </li>
                        <li>
                          <span class="comment-author-link">
                            <a href="#">A WordPress Commenter</a>
                          </span>
                          on
                          <a href="#">Hello world!</a>
                        </li>
                        <li>
                          <span class="comment-author-link">
                            <a href="#">Busan</a>
                          </span>
                          on
                          <a href="#">Hello world!</a>
                        </li>
                      </ul>
                    </section>

                    <section class="widget widget_recent_entries">
                      <h3 class="widget-title">Recent Posts</h3>

                      <ul>
                        <li>
                          <a href="#">
                            How to Become a Successful Entry Level UX Designer
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            How to start your business as an entrepreneur
                          </a>
                        </li>
                        <li>
                          <a href="#">How to be a successful entrepreneur</a>
                        </li>
                        <li>
                          <a href="#">
                            How to Become a Successful Entry Level UX Designer
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Protect your workplace from cyber attacks
                          </a>
                        </li>
                      </ul>
                    </section>

                    <section class="widget widget_archive">
                      <h3 class="widget-title">Archives</h3>

                      <ul>
                        <li>
                          <a href="#">May 2021</a>
                        </li>
                        <li>
                          <a href="#">April 2021</a>
                        </li>
                        <li>
                          <a href="#">June 2021</a>
                        </li>
                      </ul>
                    </section>

                    <section class="widget widget_categories">
                      <h3 class="widget-title">Categories</h3>

                      <ul>
                        <li>
                          <a href="#">Business</a>
                        </li>
                        <li>
                          <a href="#">Privacy</a>
                        </li>
                        <li>
                          <a href="#">Technology</a>
                        </li>
                        <li>
                          <a href="#">Tips</a>
                        </li>
                        <li>
                          <a href="#">Uncategorized</a>
                        </li>
                      </ul>
                    </section>

                    <section class="widget widget_meta">
                      <h3 class="widget-title">Meta</h3>

                      <ul>
                        <li>
                          <a href="#">Log in</a>
                        </li>
                        <li>
                          <a href="#">
                            Entries{" "}
                            <abbr title="Really Simple Syndication">RSS</abbr>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Comments{" "}
                            <abbr title="Really Simple Syndication">RSS</abbr>
                          </a>
                        </li>
                        <li>
                          <a href="#">WordPress.org</a>
                        </li>
                      </ul>
                    </section>

                    <section class="widget widget_tag_cloud">
                      <h3 class="widget-title">Tags</h3>

                      <div class="tagcloud">
                        <a href="#">
                          Plumbing <span class="tag-link-count"> (3)</span>
                        </a>
                        <a href="#">
                          Busan <span class="tag-link-count"> (3)</span>
                        </a>
                        <a href="#">
                          Cooling <span class="tag-link-count"> (2)</span>
                        </a>
                        <a href="#">
                          Electrical <span class="tag-link-count"> (2)</span>
                        </a>
                        <a href="#">
                          Home <span class="tag-link-count"> (1)</span>
                        </a>
                        <a href="#">
                          Maintanence <span class="tag-link-count"> (1)</span>
                        </a>
                        <a href="#">
                          Painting <span class="tag-link-count"> (1)</span>
                        </a>
                        <a href="#">
                          Tips <span class="tag-link-count"> (2)</span>
                        </a>
                      </div>
                    </section>
                  </aside>
                </div>
              </div>
            </div>
          </section>
          <Footer />
          <BackToUp style={{ zIndex: "999" }}>
            {" "}
            <i class="fas fa-arrow-up"></i>
          </BackToUp>
        </div>
      )}
    </>
  );
}

export default BLOG;
