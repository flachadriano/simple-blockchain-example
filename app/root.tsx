import {
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import "./app.css";
import { Header } from "./header";
import { Box } from "@mui/material";
import type { Route } from "./+types/root";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Blockchain" },
    { name: "description", content: "Exemplo de implementação de blockchain" },
  ];
}

export default function App() {
  return (
    <>
      <Header />
      <Box sx={{ margin: '20px' }}>
        <Outlet />
      </Box>
    </>
  );
}
