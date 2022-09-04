import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://upload.wikimedia.org/wikipedia/en/b/b7/Dead_by_Daylight_Steam_header.jpg"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Dead by Daylight Randomiser</h1>
            <p>
                Dead by Daylight is a survival horror asymmetric multiplayer online game developed by Behaviour Interactive.
                This application lets you randomise your killer or survivor perks to give you a fun challenge and added variety!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;