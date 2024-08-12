import '@emotion/react';
import { ViewPointTypes, ColorsTypes, BoxShadowTypes, FlexTypes } from '@/styles/Theme/Theme';

declare module '@emotion/react' {
  export interface Theme {
    viewPoint: ViewPointTypes;
    colors: ColorsTypes;
    boxShadow: BoxShadowTypes;
    flex: FlexTypes;
  }
}
