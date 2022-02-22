import React, { useState } from 'react';

import { Container, SkillBar, Progress, Skill } from './styles';

interface SkillsProps {
  skills: {
    done: string;
    name: string;
  }[];
}

export function Skills({ skills }: SkillsProps) {
  // const [style, setStyle] = useState({});

  // skills.map(skill => {
  //   setTimeout(() => {
  //     const newStyle = {
  //       opacity: 1,
  //       width: `${skill.done}%`,
  //     };

  //     setStyle(newStyle);
  //   }, 200);
  // });

  return (
    <>
      {skills.map(skill => (
        <Container>
          <Skill>{skill.name}</Skill>

          <SkillBar>
            <Progress style={{ width: `${skill.done}%`, opacity: 1 }}>
              {skill.done}%
            </Progress>
          </SkillBar>
        </Container>
      ))}
    </>
  );
}
