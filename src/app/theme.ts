import { createTheme, CSSVariablesResolver, rem } from "@mantine/core";

export const theme = createTheme({
  fontFamily: "Poppins, Helvetica, Arial, sans-serif",
  headings: {
    fontFamily: "Poppins, Helvetica, Arial, sans-serif",
  },
  fontSizes: {
    "5xs": rem(2),
    "4xs": rem(4),
    "3xs": rem(6),
    xxs: rem(8),
    xs: rem(10),
    sm: rem(12),
    md: rem(14),
    lg: rem(16),
    xl: rem(18),
    xxl: rem(20),
    "3xl": rem(22),
    "4xl": rem(24),
    "5xl": rem(26),
  },
  lineHeights: {
    xs: "1.4",
    sm: "1.45",
    md: "1.55",
    lg: "1.6",
    xl: "1.65",
  },
  colors: {
    primary: [
      "#eeeeff",
      "#dbdbf7",
      "#b3b3e8",
      "#8a89da",
      "#6765cd",
      "#504ec7",
      "#4543c4",
      "#3736af",
      "#2e309c",
      "#25288b",
    ],
  },
  primaryColor: "primary",
  spacing: {
    "5xs": "0.125rem",
    "4xs": "0.25rem",
    "3xs": "0.5rem",
    xxs: "0.625rem",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    xxl: "1.375rem",
    "3xl": "1.5rem",
    "4xl": "1.625rem",
    "5xl": "1.75rem",
  },
  radius: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "2rem",
    xl: "3rem",
  },
  defaultRadius: "sm",
  shadows: {
    xs: "0 1px 2px rgba(0, 0, 0, 0.1)",
    sm: "0 1px 3px rgba(0, 0, 0, 0.1)",
    md: "0 2px 4px rgba(0, 0, 0, 0.1)",
    lg: "0 4px 8px rgba(0, 0, 0, 0.1)",
    xl: "0 8px 16px rgba(0, 0, 0, 0.1)",
  },
  other: {
    heroHeight: rem(260),
  },
});

export const resolver: CSSVariablesResolver = (th) => ({
  variables: {
    "--mantine-hero-height": th.other.heroHeight,
  },
  light: {},
  dark: {},
});
