import { Skills } from '../../../components/Skills';
import { Text, Title } from '../../../styles/global';
import { Specs } from './styles';

type TAbout = {
  title: string;
  text: string;
};

type TSkills = {
  title: string;
};

interface IAbout {
  about: TAbout;
  skills: TSkills;
  image: string | undefined;
}

export function About({ about, skills, image }: IAbout) {
  return (
    <Specs>
      <span>
        <img src={image} alt="Character wireframe" />
      </span>
      <div className="specs-content">
        <div className="content">
          <Title>{about.title}</Title>
          <Text>{about.text}</Text>
        </div>

        <div className="content">
          <Title>{skills.title}</Title>
          <Skills />
        </div>
      </div>
    </Specs>
  );
}
