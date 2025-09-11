import { useEffect, useState } from "react";
import "./first.css";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { Link } from "react-router-dom";
import { Progress, Space } from 'antd';
import Loader from "./Loader";
import LoaderAnimationSVGComponent from "../components/Home/LoaderAnimationSVGComponent";
import jsPDF from 'jspdf';
import certificateim from "./certificateimage.png"

function Coursedetail() {
  const [userId, setUserId] = useState("");
  const [comp, setComp] = useState([]);
  const [uncomp, setUncomp] = useState([]);
const [loading, setLoading] = useState(true)
const [responsedata, setResponsedata] = useState('');
const [loadcerti, setLoadcerti] = useState(false);

  const ensureHtml2CanvasLoaded = async () => {
    if (window.html2canvas) return window.html2canvas;
    await new Promise((resolve, reject) => {
      const scriptEl = document.createElement('script');
      scriptEl.src = 'https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js';
      scriptEl.async = true;
      scriptEl.onload = resolve;
      scriptEl.onerror = reject;
      document.body.appendChild(scriptEl);
    });
    return window.html2canvas;
  };

  const exportCertificateDivToPdf = async (targetEl) => {
    try {
      const html2canvas = await ensureHtml2CanvasLoaded();
      const target = targetEl;
      if (!target) return;

      // Wait one more frame to ensure layout/styles are applied
      await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));

      const canvas = await html2canvas(target, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        windowWidth: 1440,
        windowHeight: 900
      });

      const imgData = canvas.toDataURL('image/png');
      // Force landscape to better match certificate aspect
      const pdf = new jsPDF({ orientation: 'landscape', unit: 'pt', format: 'a4' });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      // Scale image to fit within page while preserving aspect ratio (contain)
      const scale = Math.min(pageWidth / canvas.width, pageHeight / canvas.height);
      const renderWidth = canvas.width * scale;
      const renderHeight = canvas.height * scale;
      const x = (pageWidth - renderWidth) / 2;
      const y = (pageHeight - renderHeight) / 2;

      pdf.addImage(imgData, 'PNG', x, y, renderWidth, renderHeight, undefined, 'FAST');
      pdf.save('United ELDT Certificate.pdf');
    } catch (e) {
      console.error('Failed to export certificate PDF', e);
    }
  };

  const buildHiddenCertificateElement = (data) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'certificatemain';
    wrapper.style.position = 'fixed';
    wrapper.style.left = '-10000px';
    wrapper.style.top = '-10000px';
    wrapper.style.pointerEvents = 'none';
    // Lock to desktop layout dimensions
    wrapper.style.width = '1440px';
    wrapper.style.height = '900px';

    const content = document.createElement('div');
    content.className = 'certificatemain-content';

    const title = document.createElement('div');
    title.className = 'certificatetitle';
    title.textContent = data?.student?.fullName || '';

    const course = document.createElement('div');
    course.className = 'persentedto';
    course.textContent = `For Completing the ${data?.enrollment?.courseName || ''}`;

    const score = document.createElement('div');
    score.className = 'persentedto';
    const firstName = data?.student?.firstName || '';
    const percentage = data?.percentage != null ? `${data.percentage}%` : '96%';
    score.innerHTML = `${firstName} Scored: <b>${percentage}</b>`;

    content.appendChild(title);
    content.appendChild(course);
    content.appendChild(score);
    wrapper.appendChild(content);

    document.body.appendChild(wrapper);
    return wrapper;
  };

  const destroyHiddenElement = (el) => {
    if (el && el.parentNode) {
      el.parentNode.removeChild(el);
    }
  };

  useEffect(() => {
    const personId = localStorage.getItem("userId");
    if (personId) {
      const decoded = jwtDecode(personId);
      setUserId(decoded.id);
    }
  }, []);

  useEffect(() => {
    if (!userId) return;
    fetchUserInfo(userId);
  }, [userId]);

  const fetchUserInfo = (id) => {
    setLoading(true)
    console.log("id of user is", id)
    axios
      .get(`https://unitedeldtserver.vercel.app/api/student/${id}/courses`)
      .then((res) => {
        setComp(res.data.completedCourses);
        setUncomp(res.data.uncompletedCourses);
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching user info:", error);
      });
  };

  const fetchstudentdata = async (index) => {
    setLoadcerti(true); // Set loading state
    try {
      const res = await axios.get(
        `https://unitedeldtserver.vercel.app/api/studentinformation`,
        {
          params: { studentId: userId, enrolledIndex: index },
        }
      );
  
      if (res.data) {
        // API returns data under .data; use nested object
        setResponsedata(res.data.data);
        // Preload background image to avoid missing it in canvas
        await new Promise((resolve) => {
          const bg = new Image();
          bg.src = certificateim;
          bg.onload = resolve;
          bg.onerror = resolve;
        });
        // Build hidden DOM, capture, then clean up
        const tempEl = buildHiddenCertificateElement(res.data.data);
        await new Promise((r) => setTimeout(r, 150));
        await exportCertificateDivToPdf(tempEl);
        destroyHiddenElement(tempEl);
      } else {
        console.warn('No data found for the given student.');
      }
    } catch (error) {
      console.error('Error fetching student data:', error); // Log error
    } finally {
      setLoadcerti(false); // Reset loading state
    }
  };
  

  return (
    <div>
      <style>
        {`
          .accordion-button:focus {
            box-shadow: none;
            border-radius: 16px;
            background: #F5F5F5;
          } 
          .accordion-button{
            box-shadow: none;
            border-radius: 16px;
            background: #F5F5F5;
          }
         
          .accordion-item{
            border-radius: 16px;
            border:none;
            background: #F5F5F5;
          }
         
         
          .progress-bar {
            height: 20px;
            border-radius: 10px;
            background: grey;
          }
          .progress-fill {
            height: 100%;
            background: yellow;
          }
          .chart-container {
            position: relative;
            width: 100; // Adjust as needed
            height: 100px; // Adjust as needed
          }
        `}
      </style>
  
   {
    loading ?(<LoaderAnimationSVGComponent/>):(
      <>
          <div className="backbtn">
           <Link to="/">
                  <span className="bolding"><i class="fa-solid fa-arrow-left-long"></i><span className="mx-2">Back</span> </span>

        </Link>
      </div>


         {/* Certificate is generated in a temporary offscreen DOM node on demand for PDF only */}
    
         <div className="main-contain-regist">
      
        <div className="card-head">My Courses</div>
        <div className="card-body">
        <div class="accordion" id="accordionExample">
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
            <div class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <label className="mainlabel">Courses - Actives</label>
                <i class="accordion-arrow fas fa-chevron-down"></i> 
            </div>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <span>
                    {uncomp.map((course,index) => (
                        <>
                            <div className="progress-bar-container mainlabel">
                                <div>
                                    <Space wrap>
                                        <Progress
                                            type="circle"
                                            percent={parseFloat(course.studentProgress)}
                                            size={80}
                                            strokeColor="#FBB723"  // Change color to #FBB723
                                            strokeWidth={20}       // Increase thickness to 10 (you can adjust this value)
                                            format={() => null}
                                        />
                                    </Space>
                                    <span className="newlineitem">{course.courseName} - {course.courselangugae}</span>
                                </div>
                                <Link to={`/Alllessons/${course.enrollindex}`}>
                                    <div className="warning">Open</div>
                                </Link>
                            </div>
                        </>
                    ))}
                </span>
            </div>
        </div>
    </div>
</div>

          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingtwo">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsetwo"
                  aria-expanded="true"
                  aria-controls="collapsetwo"
                >
                  <label className="mainlabel">Quizzes</label>
                  <i class="accordion-arrow fas fa-chevron-down"></i> 

                </button>
              </h2>
              <div
                id="collapsetwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingtwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <span>
                    {uncomp.map((course,index) => (
                      <>
                        <div className="progress-bar-container mainlabel">
                <div>     <Space wrap>
  <Progress
    type="circle"
    percent={parseFloat(course.studentProgress)}
    size={80}
    strokeColor="#FBB723"  // Change color to #FBB723
    strokeWidth={20}       // Increase thickness to 10 (you can adjust this value)
    format={() => null}
  />
</Space>
<span className="newlineitem">{course.courseName} - {course.courselangugae}</span>  


                          </div>   
                          <Link to={`/quiz/${course.enrollindex}`}>
                          <div className="warning">Open</div></Link>
                        </div>
                      </>
                    ))}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingthree">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsethree"
                  aria-expanded="true"
                  aria-controls="collapsethree"
                >
                  <label className="mainlabel">Courses - Completed</label>
                  <i class="accordion-arrow fas fa-chevron-down"></i> 

                </button>
              </h2>
              <div
                id="collapsethree"
                class="accordion-collapse collapse"
                aria-labelledby="collapsethree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <span>
                    {comp.map((course) => (
                      <>
                        <div className="progress-bar-container mainlabel ">
                     <div>  <Space wrap>
  <Progress
    type="circle"
    percent={parseFloat(course.studentProgress)}
    size={80}
    strokeColor="#FBB723"  // Change color to #FBB723
    strokeWidth={20}       // Increase thickness to 10 (you can adjust this value)
    format={() => null}
  />
</Space>
<span className="newlineitem">{course.courseName} - {course.courselangugae}</span>  
   

                          </div> 
                          <Link>
                          <div onClick={()=>{fetchstudentdata(course.enrollindex)}} className="warning">
                            {
                              loadcerti ?("Pleasewait"):("Certificate")
                            }
                            </div></Link>
                        </div>
                      </>
                    ))}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
       </>
    )
   }
   
    </div>
  );
}

export default Coursedetail;


