const AppTheme = {
  colors:{
    lightred: "rgba(175, 47, 47, 0.15)",
    primary: "#ff5a5f",
    grey: "rgba(77, 77, 77, .8)"
  },
  styles:{
    thickBorderBottom: "1px solid rgba(192,192,192, 1)",
    lightBorderBottom: "1px solid rgba(243, 241, 239, 1)",
    boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.1)"
  }
}

export type themeType = typeof AppTheme

export default AppTheme