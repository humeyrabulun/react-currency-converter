import React, { useState } from 'react'
import "../css/currency.css"
import { TiArrowRightThick } from "react-icons/ti";
import axios from 'axios';


let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_tHWAJl7Bb8A6wVSHjZg2nGR9dkNAJSQejr6kLiEA";


function Currency() {

    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("TRY");
    const [result, SetResult] = useState(0);

    const exchange = async () => {
        // console.log(amount, fromCurrency, toCurrency);

        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
        const result = (response.data.data[toCurrency] * amount);
        SetResult(result);

    }

    return (
        <div className='currency-div'>

            <div style={{ marginTop: "-20px", fontFamily: "Arial, sans-serif", textAlign: "center", height: 70, width: 500, backgroundColor: 'black', color: "white" }}>
                <h3 style={{ marginTop: "25px" }}>DÖVİZ KURU HESAPLA</h3>


            </div>

            <div style={{ marginTop: "20px" }}>
                <input
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    type="number" className='amount' placeholder="Enter amount" />

                <select onChange={(e) => setFromCurrency(e.target.value)} className='from-currency-option'>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                </select>

                <TiArrowRightThick style={{
                    marginTop: "10px",
                    color: "black",
                    fontSize: "30px",
                }} />

                <select onChange={(e) => setToCurrency(e.target.value)} className='to-currency-option'>
                    <option>TRY</option>
                    <option>EUR</option>
                    <option>USD</option>
                </select>

                <input value={result} onChange={(e) => SetResult(e.target.value)} type="number" className='result' placeholder="Result" />


            </div>

            <div><button onClick={exchange} style={{
                marginTop: "30px",
                color: "white",
                background: "red",
                width: 100,
                height: 40,
            }}>Çevir</button></div>
        </div>
    )
}

export default Currency