import React from "react";
import Header from "~/commponents/Layout/commponents/Header";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
