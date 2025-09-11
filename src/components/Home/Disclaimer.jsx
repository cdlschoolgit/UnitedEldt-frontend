import React from "react";
import { Translator, Translate } from "react-auto-translate";
import CallToPhone from "./CallToPhone";

export default function ({ language }) {
  return (
    <div>
      <Translator
        from="en"
        to={language || "en"}
        googleApiKey="AIzaSyAajLbnGViR4-G9cLML5HrVv7w0XdJr-9M"
      >

        <div className="call-to-phone-block">
          <div className="container-full">
            <CallToPhone language={language} />
          </div>
        </div>
      </Translator>
    </div>
  );
}
