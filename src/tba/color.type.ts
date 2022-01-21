enum ColorsEnum {
  black = "black",
  label_main = "label_main",
  label_sub = "label_sub",
  label_third = "label_third",
  stroke = "stroke",
  background_main = "background_main",
  background_sub = "background_sub",
  primary = "primary",
  red = "red",
  yellow = "yellow",
  green = "green",
  blue = "blue",
  blue2 = "blue2",
  purple = "purple",
  white = "white",
}

export const Colors: { [key in ColorsEnum]: string } = {
  black: "#1e2433",
  label_main: "#434a5e",
  label_sub: "#6c738a",
  label_third: "#9da9be",
  stroke: "#d4d8df",
  background_main: "#efeff3",
  background_sub: "#f4f5f8",
  primary: "#5f6fd9",
  red: "#f25858",
  yellow: "#ffa200",
  green: "#0fd50f",
  blue: "#2867e5",
  blue2: "#3672ff",
  purple: "#7932f3",
  white: "#fff",
};

export enum ColorThemeEnum {
  primary = "primary",
  secondary = "secondary",
}
export type ColorThemeType = ColorThemeEnum | keyof typeof ColorThemeEnum;
export const ColorThemes: { [key in ColorThemeType]: string } = {
  primary: Colors.blue,
  secondary: Colors.yellow,
};
