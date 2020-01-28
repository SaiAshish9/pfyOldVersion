import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "antd";
import Cookies from "js-cookie";

const PrivateHeader = () => {
  const history = useHistory();

  const handleLogout = () => {
    Cookies.remove("token");
    history.push("/");
  };

  return (
    <div>
      <div className="headerNav" style={{display:"flex", justifyContent:"space-evenly" }}>
        <Link to="/gigs" className="myLink">
          GIGS
        </Link>
        <Link to="/internships" className="myLink">
          INTERNSHIPS
        </Link>
        
        <Button type="primary" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default PrivateHeader;
