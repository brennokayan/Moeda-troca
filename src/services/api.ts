import axios from "axios";

const api = axios.create({
  baseURL: "https://economia.awesomeapi.com.br/last/",
});

export async function getPriceBRL_USD() {
  const results = await api.get("USD-BRL");
  return results;
}
export async function getPriceBRL_EUR() {
  const results = await api.get("EUR-BRL");
  return results;
}
export async function getPriceBRL_BTC() {
  const results = await api.get("BTC-BRL");
  return results;
}
