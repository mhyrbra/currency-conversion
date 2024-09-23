import React, { ChangeEvent, useState } from "react";

type Currency = "USD" | "EUR" | "GBP" | "JPY" | "IRR";

const App: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [fromCurrency, setFromCurrency] = useState<Currency>("USD");
  const [toCurrency, setToCurrency] = useState<Currency>("EUR");
  const [convertedAmount, setConvertedAmount] = useState<number>(0);

  const exchangeRates: Record<Currency, number> = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.75,
    JPY: 110,
    IRR: 590000,
  };

  const currencyNames: Record<Currency, string> = {
    USD: "دلار آمریکا",
    EUR: "یورو",
    GBP: "پوند انگلیس",
    JPY: "ین ژاپن",
    IRR: "ریال ایران",
  };

  const convertCurrency = () => {
    if (fromCurrency === toCurrency) {
      // setConvertedAmount(amount);
      return;
    }
    const rate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
    setConvertedAmount(amount * rate);
  };

  return (
    <div
      className="text-center w-128 border-4 p-4 text-white space-y-6"
      dir="rtl"
    >
      <h2 className="font-bold text-2xl">مبدل ارز</h2>
      <div>
        <input
          type="number"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setAmount(Number(e.target.value))
          }
          placeholder="مقدار"
          className="p-2 w-48 text-black rounded-lg"
        />
      </div>
      <div className="flex flex-row gap-3 justify-center">
        <select
          value={fromCurrency}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            setFromCurrency(e.target.value as Currency);
            setConvertedAmount(0);
          }}
          className="text-black rounded-lg p-1"
        >
          <option value="USD">دلار آمریکا</option>
          <option value="EUR">یورو</option>
          <option value="GBP">پوند انگلیس</option>
          <option value="JPY">ین ژاپن</option>
          <option value="IRR">ریال ایران</option>
        </select>
        <span className="text-xl">به</span>
        <select
          value={toCurrency}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            setToCurrency(e.target.value as Currency);
            setConvertedAmount(0);
          }}
          className="text-black rounded-lg p-1"
        >
          <option value="USD">دلار آمریکا</option>
          <option value="EUR">یورو</option>
          <option value="GBP">پوند انگلیس</option>
          <option value="JPY">ین ژاپن</option>
          <option value="IRR">ریال ایران</option>
        </select>
      </div>
      <button
        onClick={convertCurrency}
        className="border-2 py-2 px-5 text-xl rounded-2xl"
      >
        تبدیل
      </button>
      {convertedAmount > 0 && (
        <div style={{ marginTop: "20px", fontSize: "18px" }}>
          <strong>مقدار تبدیل‌شده: </strong>
          {convertedAmount.toFixed(2)} {currencyNames[toCurrency]}
        </div>
      )}
    </div>
  );
};

export default App;
