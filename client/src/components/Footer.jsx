import React from "react";

const Footer = () => {
  return (
    <footer className="rounded-5 shadow  px-4  bg-light ">
      <div className="row">
        <div className="col-12 mb-4 ">
          
        </div>

        <div className="col-12 col-md-6 col-lg-3 mb-1 ">
          <h5>Our Labs</h5>
          <ul className="list-unstyled text-small">
            <li>
              <a className="link-secondary text-decoration-none" href="#">
                Clinical Laboratories
              </a>
            </li>
            <li>
              <a className="link-secondary text-decoration-none" href="#">
                Pathology Laboratories
              </a>
            </li>
            <li>
              <a className="link-secondary text-decoration-none" href="#">
                Microbiology Laboratories
              </a>
            </li>
            <li>
              <a className="link-secondary text-decoration-none" href="#">
                Hematology Laboratories
              </a>
            </li>
            <li>
              <a className="link-secondary text-decoration-none" href="#">
                Biochemistry Laboratories
              </a>
            </li>
            <li>
              <a className="link-secondary text-decoration-none" href="#">
                Genetics Laboratories
              </a>
            </li>
          </ul>
        </div>

        <div className="col-6 col-md-6 col-lg-3 mb-1">
          <h5>Tests</h5>
          <ul className="list-unstyled text-small">
            <li>
              <a className="link-secondary text-decoration-none" href="#">
                CT Scan
              </a>
            </li>
            <li>
              <a className="link-secondary text-decoration-none" href="#">
                MRI
              </a>
            </li>
            <li>
              <a className="link-secondary text-decoration-none" href="#">
                Ultrasound
              </a>
            </li>
            <li>
              <a className="link-secondary text-decoration-none" href="#">
                ECG Test
              </a>
            </li>
            <li>
              <a className="link-secondary text-decoration-none" href="#">
                more...
              </a>
            </li>
          </ul>
        </div>

        <div className="col-6 col-md-6 col-lg-3 mb-1">
          <h5>Locations</h5>
          <ul className="list-unstyled text-small">
            <li>
              <a className="link-secondary text-decoration-none" href="#">
                Delhi
              </a>
            </li>
            <li>
              <a className="link-secondary text-decoration-none" href="#">
                Ghaziabad
              </a>
            </li>
            <li>
              <a className="link-secondary text-decoration-none" href="#">
                Noida
              </a>
            </li>
            <li>
              <a className="link-secondary text-decoration-none" href="#">
                Gurgaon
              </a>
            </li>
          </ul>
        </div>

        <div className="col-6 col-md-6 col-lg-3 mb-1">
          <h5>About</h5>
          <ul className="list-unstyled text-small">
            <li>
              <a className="link-secondary text-decoration-none" href="#">
                Team
              </a>
            </li>
            <li>
              <a className="link-secondary text-decoration-none" href="#">
                Locations
              </a>
            </li>
            <li>
              <a className="link-secondary text-decoration-none" href="#">
                Privacy
              </a>
            </li>
            <li>
              <a className="link-secondary text-decoration-none" href="#">
                Terms
              </a>
            </li>
          </ul>
        </div>
        <h2 className="logo-h1 text-center ">H²-HealthHarbor &copy; {new Date().getFullYear()}</h2>
      </div>
    </footer>
  );
};

export default Footer;
