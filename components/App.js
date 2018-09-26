import React from "react";
import Head from "./Head";

export default ({ title, children }) => (
  <React.Fragment>
    <main>
      <Head title={title} />
      {children}
    </main>
  </React.Fragment>
);
