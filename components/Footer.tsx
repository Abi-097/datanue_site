import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md3:grid-cols-4  gap-8">
          <div>
            {" "}
            {/* Replaced <span> with <div> */}
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Product
            </h3>
            <ul className="space-y-2">
              <li>Data movement</li>
              <li>Transformations</li>
              <li>Security</li>
              <li>Governance</li>
              <li>Extensibility +</li>
              <li>Management</li>
              <li>Connectors</li>
              <li>Deployment options</li>
            </ul>
          </div>
          <div>
            {" "}
            {/* Replaced <span> with <div> */}
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Pricing
            </h3>
            <ul className="space-y-2">
              <li>Plans</li>
              <li>All features</li>
              <li>Free Plan</li>
              <li>Y Combinator promotions</li>
            </ul>
          </div>
          <div>
            {" "}
            {/* Replaced <span> with <div> */}
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>Blog</li>
              <li>Documentation</li>
              <li>Case studies</li>
              <li>Events</li>
              <li>Resource center</li>
              <li>Services</li>
              <li>Learn</li>
              <li>Status</li>
              <li>Support portal</li>
            </ul>
          </div>
          <div>
            {" "}
            {/* Replaced <span> with <div> */}
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>About Fivetran</li>
              <li>Culture</li>
              <li>Careers</li>
              <li>News</li>
              <li>Contact us</li>
              <li>Legal</li>
              <li>Privacy policy</li>
              <li>Cookie settings</li>
              <li>Terms of service</li>
              <li>Cookie list</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
