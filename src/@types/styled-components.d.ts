import "styled-components";

import appTheme from "../assets/styles/themes/appTheme";

export type Theme = typeof appTheme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}