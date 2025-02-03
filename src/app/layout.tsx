"use client"

import type React from "react"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import RTL from "@/app/(DashboardLayout)/layout/shared/customizer/RTL"
import { ThemeSettings } from "@/utils/theme/Theme"
import { store } from "@/store/store"
import { useSelector } from "@/store/hooks"
import type { AppState } from "@/store/store"
import { Provider } from "react-redux"
import NextTopLoader from "nextjs-toploader"
import { NextAppDirEmotionCacheProvider } from "@/utils/theme/EmotionCache"

import "@/app/api/index"
import "@/utils/i18n"
import "react-quill/dist/quill.snow.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const MyApp = ({ children }: { children: React.ReactNode }) => {
  const theme = ThemeSettings()
  const customizer = useSelector((state: AppState) => state.customizer)

  return (
    <>
      <NextTopLoader color="#5D87FF" />
      <NextAppDirEmotionCacheProvider options={{ key: "modernize" }}>
        <ThemeProvider theme={theme}>
          <RTL direction={customizer.activeDir}>
            <CssBaseline />
            {children}
          </RTL>
        </ThemeProvider>
      </NextAppDirEmotionCacheProvider>
    </>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider store={store}>
          <MyApp>{children}</MyApp>
        </Provider>
      </body>
    </html>
  )
}

