import React from "react";
import Wrapper, { A } from "./Wrapper";

function LeftMenuFooter() {
  return (
    <Wrapper>
      <div className="poweredBy">
        <p>Powered By</p>
        <A
          href="https://reactavancado.com.br/"
          key="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Avançado
        </A>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
