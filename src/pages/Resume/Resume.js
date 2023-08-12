import React from "react";
import Link from "next/link";
import { Section } from "../../styles/GlobalComponents";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "../../components/Header/HeaderStyles";

const Resume = () => {
  return (
    <Container>
      <Div1>
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            margin: "5px 15px",
          }}
        >
          &larr;
        </Link>
      </Div1>
    </Container>
  );
};

export default Resume;
