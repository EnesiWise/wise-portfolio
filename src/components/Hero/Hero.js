import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi There,
        <br />I am Enesi Wise
      </SectionTitle>
      <SectionText>
        I am a Front-End Web Developer, <br />I Build Responsive and Beautiful
        Websites.
      </SectionText>

      <a href="#about">
        <Button>Learn More</Button>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;
