import { extendTheme } from "@mui/joy/styles";

declare module "@mui/joy/styles" {
  interface PaletteBackground {
    appBody: string;
    componentBg: string;
  }
}

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        background: {
          appBody: "var(--joy-palette-neutral-50)",
          componentBg: "var(--joy-palette-common-white)",
        },
      },
    },
    dark: {
      palette: {
        background: {
          appBody: "var(--joy-palette-common-black)",
          componentBg: "var(--joy-palette-neutral-900)",
        },
      },
    },
  },
  fontFamily: {
    // display: "'Inter', var(--joy-fontFamily-fallback)",s
    // body: "'Inter', var(--joy-fontFamily-fallback)",
  },
});

export default theme;
