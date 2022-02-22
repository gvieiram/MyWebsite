import 'react-i18next';
import pt_br from '../src/i18n/translations/pt_br.json';

declare module 'react-i18next' {
  type ResourcesType = typeof pt_br;

  interface CustomTypeOptions {
    resources: ResourcesType;
  }
}
