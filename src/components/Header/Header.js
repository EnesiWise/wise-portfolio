import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container id="top">
    <Div1>
      <Link
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          color: "white",
          marginBottom: "20px",
        }}
      >
        <DiCssdeck size="3rem" /> <span>Portfolio</span>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#stack">
          <NavLink>Stack</NavLink>
        </Link>
      </li>
      {/* <li>
        <Link href="/Resume">
          <NavLink>Resume</NavLink>
        </Link>
      </li> */}
      <li>
        <Link href="https://drive.google.com/file/d/1fgNYYKQRT9a1J-qe3vI0rU8TRDozYb5G/view?usp=sharing">
          <NavLink>Resume</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/enesiwise">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="www.linkedin.com/in/enesiwise-frontend-dev">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
