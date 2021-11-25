import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { text: "Machine Learning Course from Udemy" },
  { text: "Python Course from Coursera" },
  { text: "Git and Github from Youtube" },
  { text: "Data Science from Verzeo" },
];

const Acomplishments = () => (
  <Section>
    <center>
      <SectionTitle>Technologies</SectionTitle>
    </center>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
