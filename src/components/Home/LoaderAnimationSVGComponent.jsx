import * as React from "react";
import {gsap} from "gsap"

const LoaderAnimationSVGComponent = (props) => {
  React.useEffect(() => {
    const introLogoAnimation = gsap
      .timeline({ repeat: -1 })

      .fromTo(
        "#circles .cls-4",
        {
          y: 200,
        },
        {
          duration: 2,
          y: -100,
        }
      )
      .fromTo("#blob", { y: 200 }, { y: 0, duration: 1.5 }, "-=1.3");

    return () => {
      introLogoAnimation.kill();
    };
  }, []);

  return (
    <div className="truckLoaderContainer">
      <div className="truckLoaderInner">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1071.3 508.57"
          {...props}
        >
          <defs>
            <style>
              {
                ".cls-1{fill:#fbb723;}.cls-2{fill:#2b292a;stroke:#2b292a;}.cls-2,.cls-4{stroke-miterlimit:10;}.cls-3{fill:#fff;}.cls-4{fill:none;stroke:#fbb723;}"
              }
            </style>
          </defs>
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <g id="circles">
                <circle className="cls-4" cx={575.88} cy={206.59} r={3.66} />
                <circle className="cls-4" cx={606.39} cy={203.27} r={3.66} />
                <circle className="cls-4" cx={588.1} cy={217.54} r={2.7} />
                <circle className="cls-4" cx={645.82} cy={214.83} r={3.48} />
                <circle className="cls-4" cx={597.9} cy={243.43} r={3.48} />
                <circle className="cls-4" cx={612.49} cy={250.93} r={2.15} />
                <circle className="cls-4" cx={626.44} cy={214.13} r={2.15} />
                <circle className="cls-4" cx={626.44} cy={241.56} r={2.15} />
                <circle className="cls-4" cx={636.8} cy={255.29} r={2.15} />
                <circle className="cls-4" cx={580.07} cy={283.44} r={4.19} />
                <circle className="cls-4" cx={603.2} cy={292.82} r={3.19} />
                <circle className="cls-4" cx={620.52} cy={282.86} r={2.62} />
                <circle className="cls-4" cx={643.54} cy={293.01} r={2.23} />
                <circle className="cls-4" cx={590.19} cy={265.15} r={2.1} />
                <circle className="cls-4" cx={575.88} cy={256.38} r={2.1} />
                <circle className="cls-4" cx={583.3} cy={243.43} r={2.1} />
                <circle className="cls-4" cx={882.67} cy={203.27} r={3.48} />
                <circle className="cls-4" cx={671.61} cy={205.37} r={3.48} />
                <circle className="cls-4" cx={895.11} cy={295.25} r={3.48} />
                <circle className="cls-4" cx={905.04} cy={258.98} r={3.48} />
                <circle className="cls-4" cx={943.5} cy={202.67} r={3.48} />
                <circle className="cls-4" cx={900.74} cy={226.4} r={2.15} />
                <circle className="cls-4" cx={895.11} cy={278.16} r={2.15} />
                <circle className="cls-4" cx={901.56} cy={211.98} r={2.15} />
                <circle className="cls-4" cx={929.7} cy={215.13} r={2.15} />
                <circle className="cls-4" cx={952.4} cy={217.28} r={2.15} />
                <circle className="cls-4" cx={897.26} cy={244.47} r={2.15} />
                <circle className="cls-4" cx={919.42} cy={270.9} r={2.15} />
                <circle className="cls-4" cx={918.54} cy={204.79} r={2.15} />
                <circle className="cls-4" cx={915.15} cy={231.81} r={3.94} />
                <circle className="cls-4" cx={860.65} cy={216.22} r={2.1} />
                <circle className="cls-4" cx={911.21} cy={285.97} r={2.1} />
                <circle className="cls-4" cx={868.07} cy={203.27} r={2.1} />
                <circle className="cls-4" cx={675.27} cy={222.74} r={3.66} />
                <circle className="cls-4" cx={689.18} cy={237.58} r={1.83} />
                <circle className="cls-4" cx={683.69} cy={250.93} r={1.83} />
                <circle className="cls-4" cx={690.01} cy={205.59} r={2.66} />
                <circle className="cls-4" cx={671.61} cy={289.63} r={3.66} />
                <circle className="cls-4" cx={691.01} cy={281.32} r={2.12} />
                <circle className="cls-4" cx={708.28} cy={292.82} r={2.12} />
                <circle className="cls-4" cx={744.32} cy={280.51} r={2.35} />
                <circle className="cls-4" cx={739.62} cy={295.25} r={2.35} />
                <circle className="cls-4" cx={722.34} cy={287.2} r={3.58} />
                <circle className="cls-4" cx={763.22} cy={213.1} r={3.66} />
                <circle className="cls-4" cx={782.63} cy={204.79} r={2.12} />
                <circle className="cls-4" cx={773.35} cy={274.35} r={2.12} />
                <circle className="cls-4" cx={799.89} cy={216.29} r={2.12} />
                <circle className="cls-4" cx={759.56} cy={260.6} r={2.12} />
                <circle className="cls-4" cx={847.86} cy={238.29} r={2.12} />
                <circle className="cls-4" cx={823.22} cy={275.01} r={2.12} />
                <circle className="cls-4" cx={811.74} cy={294.94} r={2.12} />
                <circle className="cls-4" cx={838.29} cy={219.89} r={2.35} />
                <circle className="cls-4" cx={817.85} cy={206.91} r={2.35} />
                <circle className="cls-4" cx={781.4} cy={253.14} r={2.35} />
                <circle className="cls-4" cx={779.05} cy={234.7} r={3.58} />
                <circle className="cls-4" cx={782.56} cy={292.1} r={4.98} />
                <circle className="cls-4" cx={830.67} cy={248.73} r={3.58} />
                <circle className="cls-4" cx={839.83} cy={277.12} r={2.78} />
                <circle className="cls-4" cx={669.05} cy={267.24} r={3.66} />
              </g>
              <path
                id="blob"
                className="cls-1"
                d="M540.27,302.43h504.61l17.18-35.2c9.87-20.22-2.89-42.94-28.49-50.73L825,153A61.83,61.83,0,0,0,797,151.22c-1.41,0-2.83.08-4.26.2L570.5,170.11c-27.29,2.3-47,21.63-44.15,43.18L537,292A32.48,32.48,0,0,0,540.27,302.43Z"
              />
              <g id="complete-conver">
                <path
                  className="cls-2"
                  d="M798.79,221.15H787.54v55.17h11.25c14.33,0,21.42-7.71,21.42-23v-9.25C820.21,228.7,813.12,221.15,798.79,221.15Z"
                />
                <path
                  className="cls-2"
                  d="M.5.5V508.07H1070.8V.5ZM654.69,301.75H561.91v-106h91.7v25.43H596v14.64h49.32v24.35H596v16.18h58.72Zm95.7,0H661.93v-106H696v78.9h54.4Zm49,0H753.48v-106H799.4c37,0,55.63,17.72,55.63,53C855,284.18,836.54,301.75,799.4,301.75Zm158.43-78.91H923.16v78.91H889.1V222.84H854.27V195.72H957.83Z"
                />
                <g id="united">
                  <path
                    className="cls-3"
                    d="M235.76,261.15c0,13.73-4.38,24.25-13,31.4a56.21,56.21,0,0,1-37,10.81,56.94,56.94,0,0,1-37.1-10.81c-8.76-7.3-13-17.67-13-31.4v-60H168v59.58c0,5.7,1.46,10.23,4.53,13.59,2.92,3.35,7.3,5,13.14,5s10.22-1.75,13.15-5.11a19.14,19.14,0,0,0,4.67-13.44V201.13h32.27Z"
                  />
                  <path
                    className="cls-3"
                    d="M293.75,222.74q13.37,0,20.15,7.45c4.39,5,6.72,12.12,6.72,21.47v50H291.56V255.16a11.42,11.42,0,0,0-2.63-7.88,8.67,8.67,0,0,0-7.16-3.07A11.71,11.71,0,0,0,277,245a11.54,11.54,0,0,0-4,2.68,12,12,0,0,0-3.36,8.61v45.28H240.59V224.49h23.8l1.9,11.69a35.07,35.07,0,0,1,27.46-13.44Z"
                  />
                  <path
                    className="cls-3"
                    d="M324.27,215.44V195.72h29.06v19.72Zm0,86.17V224.49h29.06v77.12Z"
                  />
                  <path
                    className="cls-3"
                    d="M408.54,224.49v19.72H392.18v29.36c0,3.5.59,6.13,1.76,7.74,1.16,1.46,3.35,2.33,6.42,2.33h8.18v17.09a35.66,35.66,0,0,1-38.56-2c-4.52-3.07-6.86-8.48-6.86-15.92V244.21H352.31V224.49h12l6.28-23.36h21.61v23.36Z"
                  />
                  <path
                    className="cls-3"
                    d="M447.09,222.74c14.17,0,24.83,3.36,32.28,9.93s11.25,16.8,11.25,30.38v5H432.78c0,5.55,1.17,9.78,3.65,12.56s6.43,4.23,11.83,4.23c4.82,0,8.47-1,10.67-3.07a10.24,10.24,0,0,0,3.5-8.17h28.19A25.7,25.7,0,0,1,480,295.47a51.87,51.87,0,0,1-31.11,7.89,50.42,50.42,0,0,1-33.3-9.93c-7.89-6.72-11.83-16.8-11.83-30.38,0-13.14,3.8-23.37,11.54-30.09S433.51,222.74,447.09,222.74Zm1.17,18.55c-9.2,0-14.31,4.38-15.33,13h28.33A11.92,11.92,0,0,0,453.38,242,12.58,12.58,0,0,0,448.26,241.29Z"
                  />
                  <path
                    className="cls-3"
                    d="M546,301.61l-2.49-11A27.72,27.72,0,0,1,519,303.36a29.45,29.45,0,0,1-24.1-10.23c-5.69-6.86-8.47-16.94-8.47-30.23,0-13.14,2.92-23.22,8.47-29.94s13.73-10.22,24.1-10.22c8.76,0,16.06,2.92,21.61,8.91V195.72h29.06V301.61Zm-18-57.4c-8.32,0-12.56,5-12.56,15V267c0,9.93,4.24,14.9,12.56,14.9,4.38,0,7.45-1.46,9.64-4.53s3.22-7,3.22-11.83v-4.82c0-4.82-1-8.76-3.22-11.83A11.16,11.16,0,0,0,528,244.21Z"
                  />
                </g>
                <path
                  className="cls-3"
                  d="M943.09,187v6.73h-2.91V187h-3v-2.32h8.84V187Z"
                />
                <path
                  className="cls-3"
                  d="M954.94,193.68v-3.26a19.69,19.69,0,0,1,.21-2.87h0l-1.67,6.13h-2.28l-1.68-6.11h-.06c.06.54.12,1.08.19,1.62s0,.82,0,1.23v3.26H947v-9.05h4.1l1.38,5.23h0l1.35-5.23h4v9.05Z"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};
export default LoaderAnimationSVGComponent;
