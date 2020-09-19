import React from "react";
import "./Widgets.css";
/*
<iframe id="ea-editor-preview" class="ea-editor-preview" name="preview" allow="autoplay; fullscreen" data-hj-allow-iframe="1" src="https://static.elfsight.com/apps/weather/release/991bd826-d9a1-4369-8fc1-eb28bea96cdb/preview/index.html"></iframe>
*/
function Widgets() {
  return (
    <div className="widgets">
      <div className="widget">
        <iframe
          title="widgets"
          src="https://www.powr.io/weather/u/df88961c_1599294021#platform=iframe"
          height="100%"
          style={{ border: "none", overflow: "hidden", borderRadius: "10px" }}
          scrolling="yes"
          frameBorder="0"
          allow="autoplay"
        ></iframe>
      </div>

      <div className="widget">
        <iframe
          title="covid-19"
          src="https://ourworldindata.org/grapher/total-cases-covid-19?tab=map&region=Asia"
          height="100%"
          style={{ border: "none", overflow: "hidden", borderRadius: "10px" }}
          scrolling="no"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
}

export default Widgets;
