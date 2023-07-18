import "./App.css";
import WhyChooseUsCard from "./components/why_choose_us";
import chooselocal from "./icons/chooselocal.svg";

function App() {
  return (
    <div className="App">
      <div className="card-wrapper">
        <div className="main-heading-wrapper">
          <div className="why-industry-heading">
            Why The Industry Choose Clickdee?
          </div>
          <div className="why-industry-subHead">
            We understand performance marketing from every angle and every stage
            of the tunnel.Our client trust that{" "}
          </div>
        </div>
        <WhyChooseUsCard
          colorChange={true}
          image={chooselocal}
          title={"Choose Your Local Targeting"}
          description={
            "Our targeted and tracked calls are tailored to your business needs, audience, and geolocation."
          }
        />
        <WhyChooseUsCard
          colorChange={false}
          image={chooselocal}
          title={"Track Your Conversion"}
          description={
            "Our targeted and tracked calls are tailored to your business needs, audience, and geolocation."
          }
        />
        <WhyChooseUsCard
          colorChange={true}
          image={chooselocal}
          title={"Customized Campaigns"}
          description={
            "Our targeted and tracked calls are tailored to your business needs, audience, and geolocation."
          }
        />
        <WhyChooseUsCard
          image={chooselocal}
          colorChange={false}
          title={"Get dedicated support team"}
          description={
            "Our targeted and tracked calls are tailored to your business needs, audience, and geolocation."
          }
        />
        <WhyChooseUsCard
          colorChange={true}
          image={chooselocal}
          title={"Quality Assurance"}
          description={
            "Our targeted and tracked calls are tailored to your business needs, audience, and geolocation."
          }
        />
      </div>
    </div>
  );
}

export default App;
