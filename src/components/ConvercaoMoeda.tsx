import { Divider, Typography } from "@mui/material";

interface Props {
    title: string
    valor: number,
    RealTo: number
    Moeda: number
    to: "EUR" | "USD" | "BTC"
}

export function ConvercaoMoeda({valor, RealTo, Moeda, title, to}: Props) {
  return (
    <>
      <Divider />

      <Typography>
        {title}: <br />{" "}
        {(valor * RealTo).toLocaleString("pt-br", {
          style: "currency",
          currency: to,
        })}{" "}
        /{" "}
        {valor.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
        <br />
        {(valor * Moeda).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}{" "}
        /{" "}
        {valor.toLocaleString("pt-BR", {
          style: "currency",
          currency: to,
        })}
      </Typography>
    </>
  );
}
