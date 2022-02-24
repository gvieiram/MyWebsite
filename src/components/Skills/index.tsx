import React from 'react';
import { useTranslation } from 'react-i18next';

import { Container, SkillBar, Progress, Skill } from './styles';

export function Skills() {
  const { t } = useTranslation('home', { useSuspense: false });
  const skillsElements = t('skills');
  // const [style, setStyle] = useState({});

  // skills.map(skill => {
  //   setTimeout(() => {
  //     const newStyle = {
  //       opacity: 1,
  //       width: `${skill.value}%`,
  //     };

  //     setStyle(newStyle);
  //   }, 200);
  // });

  return (
    <>
      {skillsElements.map(skill => (
        <Container key={skill.name}>
          <Skill>{skill.name}</Skill>

          <SkillBar>
            <Progress style={{ width: `${skill.value}%`, opacity: 1 }}>
              {skill.value}%
            </Progress>
          </SkillBar>
        </Container>
      ))}
    </>
  );
}
