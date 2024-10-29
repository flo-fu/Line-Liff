import './index.css';
import liff from '@line/liff'

document.addEventListener("DOMContentLoaded", function() {
  liff
    .init({
        liffId: process.env.LIFF_ID
    })
    .then(() => {
        console.log("Success! you can do something with LIFF API here." + "LIFF_ID = "  + process.env.LIFF_ID)
        liff.getProfile((profile) => {
            document.getElementById('log').innerText = JSON.stringify(profile, null, 4);
        });
    })
    .catch((error) => {
        console.log(error)
        document.getElementById('log').innerText = JSON.stringify(error, null, 4);
    })
});