import { useState } from "react";
import axios from "axios";
import appLogo from "./assets/appLogo.svg";
import appLogoMobail from "./assets/appLogoMobail.png";
import Male from "./assets/male.svg";
import Female from "./assets/female.svg";

import { ThemeControler } from "./ThemeControler";
const getData = (quantity) =>
  axios.get(`https://fakerapi.it/api/v1/companies?_quantity=${quantity}`);

function App() {
  const [data, setData] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [err, setErr] = useState(null);
  return (
    <div className="min-h-screen flex flex-col mx-auto p-5">
      <div className="placeholder w-full h-40"></div>
      <header className="fixed top-14 left-1/2 -translate-x-1/2 gap-2 w-5/6 flex items-center mx-2 px-4 justify-between p-5  bg-base-content dark:bg-base-300 border dark:border-slate-800 rounded-3xl max-w-3xl dark:bg-opacity-70 shadow-lg  backdrop-blur-sm">
        <img src={appLogo} alt="app logo" className="w-1/3 hidden sm:block" />
        <img
          src={appLogoMobail}
          alt="app logo mobail"
          className="sm:hidden w-6 h-6"
        />
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
        {data ? (
          data.map((company) => (
            <div
              className="flex flex-col sm:flex-row items-start w-full h-1/6 bg-slate-200 dark:bg-white rounded-xl p-5 px-16 justify-around dark:text-slate-600"
              key={company.id}
            >
              <div className="flex flex-col w-1/3">
                <h6 className="font-bold">{company.name}</h6>
                <small>{company.email}</small>
                <p>{company.country}</p>
              </div>
              <div className="w-1/3">
                <h6 className="flex gap-2 items-center">
                  CONTACT MAN
                  {company.contact.gender === "male" ? (
                    <img src={Male}></img>
                  ) : (
                    <img src={Female}></img>
                  )}
                </h6>
                <ol>
                  <li className="flex gap-2">
                    <strong>Name</strong>
                    {company.contact.firstname}
                  </li>
                  <li className="flex gap-2">
                    <strong>Email</strong>
                    {company.contact.email}
                  </li>
                  <li className="flex gap-2">
                    <strong>Phone</strong>
                    {company.contact.phone}
                  </li>
                </ol>
              </div>
              <div className="w-1/3">
                <h6>ADDRESSES</h6>
                <ul className="text-sm list-disc list-inside">
                  {company.addresses.map((address) => (
                    <li className="flex gap-1" key={address.zipcode}>
                      <strong>{address.city}</strong>- {address.street}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))
        ) : (
          <div>
            <h1 className="text-6xl text-center font-light max-w-lg mx-auto font-sans opacity-35">
              {err ?? "Please enter the number of companies to start"}
            </h1>
          </div>
        )}
      </main>
      <footer className="fixed bottom-14 left-1/2 -translate-x-1/2 p-2 px-5  w-10/12 max-w-sm h-10 flex justify-between bg-base-100 dark:bg-opacity-30 bg-opacity-50  backdrop-blur-sm dark:bg-base-300 border dark:border-slate-800 rounded-3xl">
        <ThemeControler />
      </footer>
    </div>
  );
}

export default App;
