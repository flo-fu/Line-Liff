import './index.css';
import liff from '@line/liff'

window.onload = function() {
  liff.init({
        liffId: process.env.LIFF_ID,
        // withLoginOnExternalBrowser: true
    })
    .then(() => {
        console.log("Success! you can do something with LIFF API here." + "LIFF_ID = "  + process.env.LIFF_ID)
        liff.getProfile((profile) => {
            document.getElementById('userId').innerHTML = profile.userId;
            document.getElementById('displayName').innerHTML = profile.displayName;
            document.getElementById('pictureUrl').innerHTML = profile.pictureUrl;
            document.getElementById('statusMessage').innerHTML = profile.statusMessage;
            document.getElementById('log').innerText = JSON.stringify(profile, null, 4);
        })
        .catch((error) => {
            console.log(error)
            document.getElementById('log').innerText = JSON.stringify(error, null, 4);
        });
    })
    .catch((error) => {
        console.log(error)
        document.getElementById('log').innerText = JSON.stringify(error, null, 4);
    });
};