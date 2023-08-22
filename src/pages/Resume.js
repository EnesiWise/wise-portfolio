import React from "react";
import Link from "next/link";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import { Container, Div1 } from "../components/Header/HeaderStyles";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
  ListParagraph,
  ListTitle,
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
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
        {/* <BgAnimation /> */}

        <SectionDivider colorAlt />
        <SectionTitle style={{ marginTop: "2rem" }}>Resume</SectionTitle>
        <ListTitle>Enesi Wise</ListTitle>

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

        <SectionText>Objective:</SectionText>
        <ListParagraph>
          Passionate and dedicated Frontend Developer eager to contribute
          technical skills and creativity to build engaging user experiences.
          Seeking an opportunity to learn and grow while working on challenging
          projects.
        </ListParagraph>
        <SectionText>Education:</SectionText>
        <ListParagraph>
          Bachelor of Science in Computer Science <br />
          [University Name]
          <br />
          [Location]
          <br />
          [Graduation Date]
        </ListParagraph>

        <SectionText>Skills:</SectionText>
        <ListParagraph>
          <ul>
            <li> * Proficient in HTML5, CSS3, and JavaScript</li>
            <li> * Familiarity with responsive design principles</li>
            <li> * Experience with version control systems like Git</li>
            <li> * Basic knowledge of web performance optimization</li>
            <li> * Ability to collaborate in cross-functional teams</li>
            <li> * Strong problem-solving and debugging skills</li>
          </ul>
        </ListParagraph>

        <SectionText>Certifications:</SectionText>
        <ListParagraph>
          <li>
            * Frontend Web Development Certificate - [Online Course Platform] -
            [Date]
          </li>
        </ListParagraph>

        <SectionText>References:</SectionText>
        <ListParagraph>Available upon request.</ListParagraph>
      </Section>

      <FooterWrapper>
        <LinkList />
        <CompanyContainer>
          <Slogan>Making the web for you 🙂</Slogan>
        </CompanyContainer>
      </FooterWrapper>
    </>
  );
};

export default Resume;
