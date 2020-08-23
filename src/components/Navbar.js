import React from "react";

export const Navbar = () => {
  return (
    <div className="nav__container">
      <img
        className="nav__logo"
        src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
        alt="netflix"
      />
      <img
        className="nav__user"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
        alt="user"
      />
    </div>
  );
};
