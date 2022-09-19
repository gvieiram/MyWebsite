/* eslint-disable @typescript-eslint/ban-types */
import { TFunction } from 'i18next';

import TSupportedLocales from './supportedLocales';

export interface IConfig {
  name: string;
  locales: TSupportedLocales[];
  meta?: { [key: string]: any };
}

export type TBlock = (object: {
  locale: TSupportedLocales;
  i18n: TFunction;
}) => {};

export default interface IBlockFileContent extends IConfig {
  block: TBlock;
}
