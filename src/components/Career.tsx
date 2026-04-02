import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>React Developer</h4>
                <h5>Neosoft Technology</h5>
              </div>
              <h3>08/2025 – 11/2025</h3>
            </div>
            <p>
              Developed responsive UI components using React.js, JavaScript, and
              reusable hooks. Optimized SQL queries and implemented joins,
              subqueries, and aggregations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Credence Analytics</h5>
              </div>
              <h3>08/2023 – 01/2025</h3>
            </div>
            <p>
              Built scalable frontend components with React.js, JavaScript, HTML,
              and CSS. Developed REST APIs for seamless frontend-backend
              integration, improved page performance, and optimized state
              management. Deployed and maintained stored procedures for database
              operations and data processing.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>Tata Consultancy Services (TCS)</h5>
              </div>
              <h3>08/2022 – 06/2023</h3>
            </div>
            <p>
              Developed internal web tools using JavaScript, HTML, and CSS.
              Integrated backend APIs and resolved production issues. Analyzed
              large datasets and ensured data integrity and consistency during ETL
              processes.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>DXC Technology</h5>
              </div>
              <h3>11/2021 – 06/2022</h3>
            </div>
            <p>
              Assisted in database schema design and created stored procedures.
              Optimized SQL queries and improved ETL workflows. Monitored and
              tuned database performance through maintenance and troubleshooting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
