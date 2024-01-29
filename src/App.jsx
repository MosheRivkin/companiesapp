import { useState } from "react";
import { CompanyCard } from "./components/CompanyCard";
import { Logo } from "./components/Logo";
import { Footer } from "./components/Footer";
import { getData } from "./utils";
function App() {
  const [data, setData] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [err, setErr] = useState(null);
  return (
    <div className="min-h-screen flex flex-col mx-auto p-5">
      <div className="placeholder w-full h-40"></div>
      <header className="fixed top-14 left-1/2 -translate-x-1/2 gap-2 w-5/6 flex items-center mx-2 px-4 justify-between p-5  bg-base-content dark:bg-base-300 border dark:border-slate-800 rounded-3xl max-w-3xl dark:bg-opacity-70 shadow-lg  backdrop-blur-sm">
        <Logo />
        <div className="flex items-center gap-5">
          <input
            className="input input-primary bg-primar font-bold font-mono input-sm "
            type="number"
            onChange={(e) => setQuantity(e.target.value)}
          />
          <button
            className="btn btn-primary btn-sm "
            onClick={async () =>
              quantity < 0
                ? setErr("Please enter a positive number")
                : quantity > 1000
                ? setErr("Too many companies, the maximum is 1000")
                : setData((await getData(quantity)).data.data)
            }
          >
            Search
          </button>
        </div>
      </header>
      <main className="w-full flex flex-col gap-5 my-5 text-sm max-w-6xl mx-auto ">
        {data && !err ? (
          data.map((company) => (
            <CompanyCard company={company} key={company.id} />
          ))
        ) : (
          <div>
            <h1 className="text-6xl text-center font-light max-w-lg mx-auto font-sans opacity-35">
              {err ?? "Please enter the number of companies to start"}
            </h1>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
