import './index.css';
import liff from '@line/liff'

document.addEventListener("DOMContentLoaded", function() {
  liff
    .init({ liffId: process.env.LIFF_ID })
    .then((res) => {
        console.log("Success! you can do something with LIFF API here.")
        document.getElementById('log').innerText = JSON.stringify(res, null, 4);
    })
    .catch((error) => {
        console.log(error)
        document.getElementById('log').innerText = JSON.stringify(error, null, 4);
    })
});