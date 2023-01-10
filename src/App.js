import React from "react";
import ProfileCard from "./ProfileCard";
import Alexa from "./images/Alexa.png";
import Cortana from "./images/cortana.png";
import Siri from "./images/mini-hero-siri.png";
import "bulma/css/bulma.css";

const App = () => {
  return (
    <div>
      {/* <div>Personal Digital Assistance</div> */}
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                image={Alexa}
                description="Alexa was created by Amazon and helps you buy things."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                image={Cortana}
                description="Cortana was made by Microsoft. who knows what is does?"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Siri"
                handle="@Siri01"
                image={Siri}
                description="Siri was made by Apple and is being phased out."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
