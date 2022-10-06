/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';
import colors from './themes';

declare module 'styled-components' {
  type ThemeType = typeof colors;

  export interface DefaultTheme extends ThemeType {}
}
