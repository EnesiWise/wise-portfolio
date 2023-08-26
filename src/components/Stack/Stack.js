import React from "react";
import { DiCss3, DiHtml5, DiJavascript, DiReact, DiGit } from "react-icons/di";
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

const Stack = () => (
  <Section id="stack">
    <SectionDivider divider />
    <SectionTitle>Stack</SectionTitle>
    <List>
      <ListItem>
        <picture>
          <DiHtml5 size="3rem" />
        </picture>

        <ListParagraph>HTML</ListParagraph>
      </ListItem>
      <ListItem>
        <picture>
          <DiCss3 size="3rem" />
        </picture>

        <ListParagraph>CSS</ListParagraph>
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
      <ListItem>
        <picture>
          <DiGit size="3rem" />
        </picture>

        <ListParagraph>Git</ListParagraph>
      </ListItem>
    </List>
  </Section>
);

export default Stack;
