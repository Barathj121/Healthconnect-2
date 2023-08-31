import { useState, useCallback } from "react";
import Visits from "../components/Visits";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./HealthRecordManagement.css";
const HealthRecordManagement = () => {
  const [isVisitsOpen, setVisitsOpen] = useState(false);
  const navigate = useNavigate();

  const onImage20IconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/user-perspective");
  }, [navigate]);

  const openVisits = useCallback(() => {
    setVisitsOpen(true);
  }, []);

  const closeVisits = useCallback(() => {
    setVisitsOpen(false);
  }, []);

  return (
    <>
      <div className="health-record-management">
        <div className="navbar5">
          <div className="navbar-child11" />
          <div className="navbar-child12" />
          <b className="community-forum5">
            <p className="community6">Community</p>
            <p className="community6">Forum</p>
          </b>
          <img className="image-11-icon5" alt="" src="/image-11@2x.png" />
          <img className="image-10-icon5" alt="" src="/image-10@2x.png" />
          <b className="schedule-appointment5">
            <p className="community6">Schedule</p>
            <p className="community6">Appointment</p>
          </b>
          <b className="support-ngos5">
            <p className="community6">Support</p>
            <p className="community6">NGO’s</p>
          </b>
          <img className="image-12-icon6" alt="" src="/image-12@2x.png" />
          <b className="personal-health-tracker-container5">
            <p className="community6">Personal</p>
            <p className="community6">{`Health Tracker `}</p>
          </b>
          <img className="image-15-icon6" alt="" src="/image-15@2x.png" />
          <b className="your-health-record-container5">
            <p className="community6">Your Health</p>
            <p className="community6">Record</p>
          </b>
          <img className="image-16-icon5" alt="" src="/image-16@2x.png" />
          <b className="health-cart5">Health cart</b>
          <img className="image-17-icon6" alt="" src="/image-17@2x.png" />
          <b className="wellness-reward-prgram5">Wellness Reward Prgram</b>
          <img
            className="image-20-icon6"
            alt=""
            src="/image-20@2x.png"
            onClick={onImage20IconClick}
          />
          <b className="loginsignup5">Login/Signup</b>
          <img className="image-18-icon6" alt="" src="/image-18@2x.png" />
          <b className="rewards5">Rewards</b>
          <b className="experience5">Experience</b>
          <img className="image-19-icon6" alt="" src="/image-19@2x.png" />
          <div className="navbar-child13" onClick={onRectangle2Click} />
          <img
            className="healthcare-low-resolution-logo-icon5"
            alt=""
            src="/healthcarelowresolutionlogocolorontransparentbackground-2-1@2x.png"
          />
          <img className="image-9-icon5" alt="" src="/image-9@2x.png" />
        </div>
        <div className="footer12">
          <div className="footer13" />
          <div className="footer-9-dark4">
            <div className="background4" />
            <div className="footer-ui4">
              <div className="poltica-de-privacidad-parent1">
                <div className="poltica-de-privacidad4">
                  Política de Privacidad
                </div>
                <div className="poltica-de-privacidad4">
                  Términos y Condiciones
                </div>
                <div className="poltica-de-privacidad4">Código de Conducta</div>
              </div>
              <div className="footer14">
                <div className="icontwitter-parent2">
                  <img
                    className="icontwitter4"
                    alt=""
                    src="/icontwitter2.svg"
                  />
                  <img className="iconlink4" alt="" src="/iconlink4.svg" />
                  <img
                    className="icontwitter4"
                    alt=""
                    src="/iconlinkedin4.svg"
                  />
                  <img
                    className="icontwitter4"
                    alt=""
                    src="/iconfacebook4.svg"
                  />
                </div>
              </div>
              <div className="divider4" />
              <div className="empresa8">
                <b className="empresa9">Empresa</b>
                <div className="sobre-nosotros4">Sobre Nosotros</div>
                <div className="soluciones4">Soluciones</div>
                <div className="insights4">Insights</div>
              </div>
              <div className="categoras8">
                <b className="categoras9">Categorías</b>
                <div className="poltica-de-privacidad4">Contratar Talento</div>
                <div className="poltica-de-privacidad4">
                  Desarrollar Talento
                </div>
                <div className="poltica-de-privacidad4">
                  Herramientas de Gamificación
                </div>
              </div>
              <div className="competencias-digitales-parent2">
                <div className="poltica-de-privacidad4">{`Competencias Digitales `}</div>
                <div className="poltica-de-privacidad4">
                  Competencias Comerciales
                </div>
                <div className="poltica-de-privacidad4">Liderazgo</div>
              </div>
            </div>
          </div>
        </div>
        <div className="health-record-management-child" />
        <div className="health-record-management-item" />
        <div className="health-record-management-inner" />
        <b className="overview">Overview</b>
        <b className="progress-plan">{`Progress & Plan`}</b>
        <div className="health-record-management-child1" onClick={openVisits} />
        <b className="visits1">Visits</b>
        <b className="documents1">Documents</b>
        <img className="image-142-icon" alt="" src="/image-142@2x.png" />
        <img className="image-143-icon" alt="" src="/image-143@2x.png" />
        <img className="image-144-icon" alt="" src="/image-144@2x.png" />
        <img className="image-146-icon" alt="" src="/image-146@2x.png" />
        <img className="image-147-icon" alt="" src="/image-147@2x.png" />
        <img className="image-148-icon" alt="" src="/image-148@2x.png" />
        <img className="image-149-icon" alt="" src="/image-149@2x.png" />
      </div>
      {isVisitsOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeVisits}
        >
          <Visits onClose={closeVisits} />
        </PortalPopup>
      )}
    </>
  );
};

export default HealthRecordManagement;
