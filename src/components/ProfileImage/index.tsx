import React from 'react';

import { Hexagon } from './styles';

interface IHexagon {
  image: string | undefined;
}

export function ProfileImage({ image }: IHexagon) {
  return <Hexagon id="ProfileImage" src={image} alt="ProfileImage" />;
}
