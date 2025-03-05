import "./Footer.css"
export default function Footer(){
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="logo-section">
          <img src="https://dashboard.codeparrot.ai/api/image/Z8WpfwzCSFMSOJF9/asset-4.png" alt="Logo 1" className="logo" />
          <img src="https://dashboard.codeparrot.ai/api/image/Z8WpfwzCSFMSOJF9/76264147.png" alt="Logo 2" className="logo" />
          <p className="summit-text">
            THE MOST INNOVATIVE ENTREPRENEURSHIP SUMMIT OF INDIA
          </p>
        </div>

        <div className="info-section">
          <div className="info-column">
            <h2>ADDRESS</h2>
            <p>E-CELL, IIIT GUWAHATI<br />ASSAM - 781015</p>
          </div>

          <div className="info-column">
            <h2>EMAIL</h2>
            <p>ecell@iiitg.ac.in</p>
          </div>

          <div className="info-column">
            <h2>FOLLOW US</h2>
            <div className="social-icons">
              <a href="https://www.instagram.com/ecell.iiitguwahati?igsh=c25ldzhxemJrczZi" className="social-link">
                <img src="https://dashboard.codeparrot.ai/api/image/Z8WpfwzCSFMSOJF9/instagra.png" alt="Instagram" />
              </a>
              <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A13682469&keywords=e-cell%20iiit%20guwahati&origin=RICH_QUERY_SUGGESTION&position=1&searchId=6e1b3136-c3e6-42a3-8d25-a28b0f87f5b1&sid=%3Bgh&spellCorrectionEnabled=false" className="social-link">
                <img src="https://dashboard.codeparrot.ai/api/image/Z8WpfwzCSFMSOJF9/linkedin.png" alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>MADE IN PANIC BY ECELL TECHNICAL TEAM (2025)</p>
      </div>
    </div>
  );
};

Footer.defaultProps = {
  address: "E-CELL, IIIT GUWAHATI\nASSAM - 781015",
  email: "ecell@iiitg.ac.in",
  summitText: "THE MOST INNOVATIVE ENTREPRENEURSHIP SUMMIT OF INDIA",
  footerNote: "MADE IN PANIC BY ECELL TECHNICAL TEAM (2025)"
};