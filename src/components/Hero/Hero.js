import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
  Link,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey there,
        </SectionTitle>
        <SectionText>
          Hey there, This is Suhas B G. I am a Web Developer & Data Scientist
          eager to learn new things.
        </SectionText>
        <Button
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/files/SUHAS BG_resume-converted (1).pdf";
          }}
        >
          My Resume
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
