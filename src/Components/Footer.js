import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";
export default function Footer() {
  return (
    <MDBFooter className="bg-light footerBac text-center text-white">
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright:
        <a className="text-white" href="boutissante.issam.dev@gmail.com">
          boutissante.issam.dev@gmail.com
        </a>
      </div>
    </MDBFooter>
  );
}
