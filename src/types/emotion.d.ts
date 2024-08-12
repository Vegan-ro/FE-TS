import '@emotion/react';
import { ViewPointTypes, ColorsTypes, FlexTypes } from '@/styles/Theme';

declare module '@emotion/react' {
  export interface Theme {
    viewPoint: ViewPointTypes;
    colors: ColorsTypes;
    flex: FlexTypes;
  }
}
