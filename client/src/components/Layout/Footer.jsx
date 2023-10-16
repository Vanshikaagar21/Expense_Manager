import React from "react";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer-container bg-dark text-light p-4">
      <div className="icons-container">
        <a
          href="https://github.com/Vanshikaagar21?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubOutlined className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/vanshika-agarwal-a191261a1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinOutlined className="icon" />
        </a>
      </div>
      <h6 className="text-center text-white">
        All rights reserved &copy; Vanshika
      </h6>
    </div>
  );
};

export default Footer;
