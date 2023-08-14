import { useEffect, useState } from "react";
import { Box, TextField, Typography, Divider } from "@mui/material";
import {
  getPriceBRL_USD,
  getPriceBRL_EUR,
  getPriceBRL_BTC,
} from "./services/api";
import { ConvercaoMoeda } from "./components/ConvercaoMoeda";

interface IPricesBRL_USD {
  USDBRL: {
    ask: string;
  };
}
interface IPricesBRL_EUR {
  EURBRL: {
    ask: string;
  };
}
interface IPricesBRL_BTC {
  BTCBRL: {
    ask: string;
  };
}

export default function App() {
  const [dataBRL_USD, setDataBRL_USD] = useState<IPricesBRL_USD>({
    USDBRL: { ask: "" },
  });
  const [dataBRL_EUR, setDataBRL_EUR] = useState<IPricesBRL_EUR>({
    EURBRL: { ask: "" },
  });
  const [dataBRL_BTC, setDataBRL_BTC] = useState<IPricesBRL_BTC>({
    BTCBRL: { ask: "" },
  });
  const [valor, setValor] = useState<number>(0);

  async function getPricesBRL_USD() {
    await getPriceBRL_USD().then((results) => {
      setDataBRL_USD(results.data);
    });
  }
  async function getPricesBRL_EUR() {
    await getPriceBRL_EUR().then((results) => {
      setDataBRL_EUR(results.data);
    });
  }
  async function getPricesBRL_BTC() {
    await getPriceBRL_BTC().then((results) => {
      setDataBRL_BTC(results.data);
    });
  }
  const RealToDolar = Number(1 / Number(dataBRL_USD.USDBRL.ask));
  const RealToEuro = Number(1 / Number(dataBRL_EUR.EURBRL.ask));
  const RealToBtc = Number(1 / Number(dataBRL_BTC.BTCBRL.ask));
  const Dolar = Number(dataBRL_USD.USDBRL.ask);
  const Euro = Number(dataBRL_EUR.EURBRL.ask);
  const BTC = Number(dataBRL_BTC.BTCBRL.ask);
  useEffect(() => {
    getPricesBRL_USD();
    getPricesBRL_EUR();
    getPricesBRL_BTC();
  }, []);
  return (
    <>
      <Box
        m={2}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        textAlign={"center"}
        gap={2}
      >
        <Typography variant="h4">Câmbio</Typography>
        <TextField
          type="number"
          label="Valor a ser transformado... "
          onChange={(event) => {
            setValor(Number(event.target.value));
          }}
        />
        <Box
          width={"100%"}
          my={2}
          display={"flex"}
          flexDirection={"column"}
          gap={2}
        >
          <ConvercaoMoeda
            title="Dolar"
            valor={valor}
            RealTo={RealToDolar}
            Moeda={Dolar}
            to={"USD"}
          />
          <ConvercaoMoeda
            title="Euro"
            valor={valor}
            RealTo={RealToEuro}
            Moeda={Euro}
            to={"EUR"}
          />
          <ConvercaoMoeda
            title="BitCoin"
            valor={valor}
            RealTo={RealToBtc}
            Moeda={BTC}
            to={"BTC"}
          />
          <Divider />
        </Box>
      </Box>
    </>
  );
}
