import React from "react";

import "./copyright.scss";

const Copyright: React.FC = () => (
  <div className="copyright">&copy; {new Date().getFullYear()} Your Name</div>
);

export default Copyright;
