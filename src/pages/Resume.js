import React from "react";
import Link from "next/link";

import { Container, Div1 } from "../components/Header/HeaderStyles";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
  SocialIcons,
} from "../components/Resume/ResumeStyles";

const Resume = () => {
  return (
    <>
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
      <Section>
        <SectionDivider colorAlt />
        <SectionTitle style={{ marginTop: "2rem" }}>Resume</SectionTitle>
        <SectionText>Enesi Wise</SectionText>

        <LinkColumn>
          <LinkTitle>Contact:</LinkTitle>
          <LinkItem href="tel:070-6474-9960">+234-70-6474-9960</LinkItem>

          <LinkTitle>Email:</LinkTitle>
          <LinkItem href="mailto:enesiwise@gmail.com">
            enesiwise@gmail.com
          </LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Github:</LinkTitle>
          <SocialIcons href="https://github.com/enesiwise">
            <AiFillGithub size="3rem" />
          </SocialIcons>

          <LinkTitle>Linkedin:</LinkTitle>
          <SocialIcons href="https://linkedin.com/in/enesiwise">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </LinkColumn>
      </Section>
    </>
  );
};

export default Resume;
