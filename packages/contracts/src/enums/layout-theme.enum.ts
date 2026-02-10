export const LayoutTheme = {
  LIGHT: 'light',
  DARK: 'dark',
  SYSTEM: 'system',
} as const;

export type TLayoutTheme = (typeof LayoutTheme)[keyof typeof LayoutTheme];
