import './index.css';
import liff from '@line/liff'

document.addEventListener("DOMContentLoaded", function() {
    liff.init({
        liffId: process.env.LIFF_ID,
    })
    .then(() => {
        console.log("Success! you can do something with LIFF API here." + "LIFF_ID = "  + process.env.LIFF_ID)
        liff.getProfile()
        .then((profile) => {
            document.getElementById('userId').innerHTML = profile.userId;
            document.getElementById('displayName').innerHTML = profile.displayName;
            document.getElementById('pictureUrl').innerHTML = profile.pictureUrl;
            document.getElementById('statusMessage').innerHTML = profile.statusMessage;
        })
        .catch((error) => {
            document.getElementById('log').innerText += JSON.stringify(error, null, 4);
            console.log(error);
        });
    })
    .catch((error) => {
        console.log(error);
    });
});