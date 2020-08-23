import React from "react";
import { Link } from "react-router-dom";

export const UserPage = () => {
  return (
    <div className="user__content">
      <h1 className="user__title">Who's watching?</h1>
      <Link to="/netflix" style={{ textDecoration: "none" }}>
        <img
          className="user__img"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
          alt="user"
        />
        <h2 className="user__name">Usuario</h2>
      </Link>
    </div>
  );
};
