import React from "react";
import { DiCss3, DiHtml5, DiJavascript, DiReact } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./StackStyles";

const Technologies = () => (
  <Section id="stack">
    <SectionDivider divider />
    <SectionTitle>Stack</SectionTitle>
    <List>
      <ListItem>
        <picture>
          <DiHtml5 size="3rem" />
        </picture>
        <ListContainer>
          <ListParagraph>HTML</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiCss3 size="3rem" />
        </picture>
        <ListContainer>
          <ListParagraph>CSS</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiJavascript size="3rem" />
        </picture>
        <ListParagraph>Javascript</ListParagraph>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListParagraph>React.js</ListParagraph>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
