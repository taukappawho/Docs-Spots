// export const refreshTokenSetup = (res) => {
//   // Timing to renew access token
//   let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

//   const refreshToken = async () => {
//     const newAuthRes = await res.reloadAuthResponse();
//     // refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
//     refreshTiming = (newAuthRes.expires_in || 6- 5 * 60) * 1000;
//     // console.log('newAuthRes:', newAuthRes);
//     console.log('new auth token: ', newAuthRes.id_token);
//     sessionStorage.setItem('token', newAuthRes.tokenId);
//     // sessionStorage.setItem('authToken', newAuthRes.id_token);

//     // Setup the other timer after the first one
//     setTimeout(refreshToken, refreshTiming);
//   };

//   // Setup first refresh timer
//   setTimeout(refreshToken, refreshTiming);
// };