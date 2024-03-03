import React, { useState } from "react";
import logo from "../../images/logo.png";
import "./Mainpage.css";
import pic from "../../images/feature-1.png";
import pic1 from "../../images/feature-2.png";
import pic2 from "../../images/feature-3.png";
import pic3 from "../../images/feature-4.png";

const Mainpage = () => {
  const [shows, setShows] = useState(0);
  const [shows1, setShows1] = useState(0);
  const [shows2, setShows2] = useState(0);
  const [shows3, setShows3] = useState(0);
  const [shows4, setShows4] = useState(0);
  const [shows5, setShows5] = useState(0);
  const show = () => {
    if (shows === 0) {
      document.getElementById("answer").style.display = "block";
      setShows(1);
    } else {
      document.getElementById("answer").style.display = "none";
      setShows(0);
    }
  };
  const show1 = () => {
    if (shows1 === 0) {
      document.getElementById("answer1").style.display = "block";
      setShows1(1);
    } else {
      document.getElementById("answer1").style.display = "none";
      setShows1(0);
    }
  };
  const show2 = () => {
    if (shows2 === 0) {
      document.getElementById("answer2").style.display = "block";
      setShows2(1);
    } else {
      document.getElementById("answer2").style.display = "none";
      setShows2(0);
    }
  };
  const show3 = () => {
    if (shows3 === 0) {
      document.getElementById("answer3").style.display = "block";
      setShows3(1);
    } else {
      document.getElementById("answer3").style.display = "none";
      setShows3(0);
    }
  };
  const show4 = () => {
    if (shows4 === 0) {
      document.getElementById("answer4").style.display = "block";
      setShows4(1);
    } else {
      document.getElementById("answer4").style.display = "none";
      setShows4(0);
    }
  };
  const show5 = () => {
    if (shows5 === 0) {
      document.getElementById("answer5").style.display = "block";
      setShows5(1);
    } else {
      document.getElementById("answer5").style.display = "none";
      setShows5(0);
    }
  };
  return (
    <div className="container">
      <div className="display">
        <div className="home">
          <div className="header">
            <div className="logo">
              <img className="image" src={logo} alt="logo" />
            </div>
            <div className="sigin">
              <button className="lang">English</button>
              <button className="sign">SignIn</button>
            </div>
          </div>
          <div className="content">
            <div className="contentbox">
              {" "}
              <h1 className="heading">Unlimited movies, TV shows and more</h1>
              <h4 className="paragraph">Watch anywhere. Cancel anytime.</h4>
              <h4 className="paragraph">
                Ready to watch? Enter your email to create or restart your
                membership.
              </h4>
              <div className="inputbox">
                <input type="text" placeholder="Email Address" />
                <button className="get">Get Started</button>
              </div>
            </div>{" "}
          </div>
        </div>
      </div> <hr style={{marginTop:"-0%"}} />
   
      <div className="subject">
        <div style={{ marginLeft: "-5%" }} className="pic">
          <img src={pic} alt="logo" />
        </div>
        <div style={{ marginLeft: "-5%" }} className="para">
          <h1> Enjoy on your TV </h1>
          <h4>
            Watch on smart TVs, PlayStation, Xbox, Chromecast,
            <br />
            Apple TV, Blu-ray players and more.
          </h4>
        </div>
      </div>{" "}
      <hr/>
      <div className="subject">
        <div className="para">
          <h1>
            {" "}
            Download your shows to <br /> watch offline{" "}
          </h1>
          <h4>
            Save your favourites easily and always have something to watch.
          </h4>
        </div>{" "}
        <div style={{ marginLeft: "-25%" }} className="pic">
          <img src={pic1} alt="logo" />
        </div>
      </div>{" "}
      <hr/>
      <div className="subject">
        <div style={{ marginLeft: "-5%" }} className="pic">
          <img src={pic2} alt="logo" />
        </div>
        <div style={{ marginLeft: "-5%" }} className="para">
          <h1> Watch everywhere</h1>
          <h4>
            Stream unlimited movies and TV shows
            <br />
            on your phone, tablet, laptop, and TV.
          </h4>
        </div>{" "}
      </div>{" "}
      <hr/>
      <div className="subject">
        <div className="para">
          <h1> Create profiles for kids</h1>
          <h4>
            Send children on adventures with their favourite characters in a
            space <br />
            made just for them—free with your membership.
          </h4>
        </div>{" "}
        <div style={{ marginLeft: "-25%" }} className="pic">
          <img src={pic3} alt="logo" />
        </div>
      </div>   <hr style={{height:"15px"}}/>
      <div className="fqa">
        <h1> Frequently Asked Questions </h1>
        <p onClick={show} className="ques">
          What is netflix?{" "}
        </p>
        <span id="answer">
          Netflix is a streaming service that offers a wide variety of
          award-winning TV shows, movies, anime, documentaries and more – on
          thousands of internet-connected devices.
          <br />
          You can watch as much as you want, whenever you want, without a single
          ad – all for one low monthly price. There's always something new to
          discover, and new TV shows and movies are added every week!
        </span>
        <p onClick={show1} className="ques">
          How much does Netflix cost?
        </p>
        <span id="answer1">
          Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
          streaming device, all for one fixed monthly fee. Plans range from ₹149
          to ₹649 a month. No extra costs, no contracts.
          <br />
        </span>
        <p onClick={show2} className="ques">
          Where can i watch
        </p>
        <span id="answer2">
          Watch anywhere, anytime. Sign in with your Netflix account to watch
          instantly on the web at netflix.com from your personal computer or on
          any internet-connected device that offers the Netflix app, including
          smart TVs, smartphones, tablets, streaming media players and game
          consoles.
          <br /> You can also download your favourite shows with the iOS,
          Android, or Windows 10 app. Use downloads to watch while you're on the
          go and without an internet connection. Take Netflix with you anywhere.
        </span>
        <p onClick={show3} className="ques">
          How do i cancel{" "}
        </p>
        <span id="answer3">
          Netflix is flexible. There are no annoying contracts and no
          commitments. You can easily cancel your account online in two clicks.
          There are no cancellation fees – start or stop your account anytime.
        </span>
        <p onClick={show4} className="ques">
          What is netflix{" "}
        </p>
        <span id="answer4">
          Netflix has an extensive library of feature films, documentaries, TV
          shows, anime, award-winning Netflix originals, and more. Watch as much
          as you want, anytime you want.
        </span>{" "}
        <p onClick={show5} className="ques">
          Is Netflix Good for Kids?{" "}
        </p>
        <span id="answer5">
          The Netflix Kids experience is included in your membership to give
          parents control while kids enjoy family-friendly TV shows and films in
          their own space.
          <br /> Kids profiles come with PIN-protected parental controls that
          let you restrict the maturity rating of content kids can watch and
          block specific titles you don’t want kids to see.
        </span>
        <span>
          Ready to watch? Enter your email to create or restart your membership.
        </span>
        <div className="inputboxs">
          <input type="text" placeholder="Email Address" />
          <button className="get">Get Started</button>
        </div>{" "}
      </div>
      <hr style={{marginTop:"0"}} />
      <div  className="footer">
        <div className="link">
          <a href="">Questions? Call 000-800-919-1694</a>
          <a href="">FAQ</a> <a href="">Investor Relations</a>
          <a href="">Privacy</a>
          <a href="">Speed Test</a>
        </div>
        <div className="link">
          <a href="">Help Centre</a>
          <a href="">Jobs</a>
          <a href="">Privacy</a>
          <a href="">Cookie Preferences</a>
          <a href="">Speed Test</a>
        </div>
        <div className="link">
          <a href="">Account</a>
          <a href="">Ways to Watch</a>
          <a href="">Corporate Information</a>
          <a href="">Only on Netflix</a>
        </div>
        <div className="link">
          <a href="">Media Centre</a>
          <a href="">Netflix India</a>
          <a href="">Terms of Use</a>
          <a href="">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
