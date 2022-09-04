import React from "react";
import ReactDOM from 'react-dom';

function Killer(props) {
  return (
    <div className="killer">
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
            <h1 class="font-weight-light">Killer</h1>
            <p>
              {props.killer}
              <img src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/92/IconPerks_darkSense.png"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Killer killer="Trapper" />;
root.render(element);

export default Killer;