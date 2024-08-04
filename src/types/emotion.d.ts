import '@emotion/react';
import { ColorsTypes, FlexTypes } from '@/styles/Theme';

declare module '@emotion/react' {
  export interface Theme {
    colors: ColorsTypes;
    flex: FlexTypes;
  }
}
