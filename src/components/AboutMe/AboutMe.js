import React from "react";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

const AboutMe = () => (
  <Section id="about">
    <SectionDivider colorAlt />
    <SectionTitle style={{ marginTop: "4rem" }}>About Me</SectionTitle>
    <SectionText>
      I love to build, design and make things look beautiful. I just want to
      build awesome apps and websites.
    </SectionText>
  </Section>
);

export default AboutMe;
