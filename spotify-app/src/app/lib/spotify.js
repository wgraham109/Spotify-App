
// Initializing parameters for authorization request
const clientId = '654c4280386d4eee8373786428cb36bb';
const redirectUri = 'http://localhost:3000/dashboard';
const scope = 'user-read-private user-read-email';
const authUrl = new URL("https://accounts.spotify.com/authorize");
const tokenEndpoint = new URL("https://accounts.spotify.com/api/token");


/** 
 * codeVerifier can be put through hashing algorithm to create codeChallenge at any time, 
 * but codeVerifier cannot be determined from the codeChallenge
 * */ 

export async function getCode(){
  // generate codeVerifier
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const values = crypto.getRandomValues(new Uint8Array(64));
  const randomString = values.reduce((acc, x) => acc + possible[x % possible.length], "");
  const codeVerifier = randomString;

  // function to hash a string with sha256
  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const hashed = await crypto.subtle.digest('SHA-256', data);

  // base64 encoding on a string
  const codeChallenge = btoa(String.fromCharCode(...new Uint8Array(hashed)))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');

  // Parameters for authorization request to be sent to Spotify
  const params =  {
    response_type: 'code',
    client_id: clientId,
    scope,
    code_challenge_method: 'S256',
    code_challenge: codeChallenge,
    redirect_uri: redirectUri,
  }

  // storing the codeVerifier, we can change how this is stored later
  // Next has easier way to do this?
  window.sessionStorage.setItem('code_verifier', codeVerifier);

  authUrl.search = new URLSearchParams(params).toString();
  window.location.href = authUrl.toString();

}

// getting access token using the code sent by spotify
// Sends the code and the codeVerifier, server can verify the codeChallenge using the codeVerifier
export async function getToken(code) {
  
  const code_verifier = sessionStorage.getItem('code_verifier');

  console.log("clientID: " + clientId);
  console.log("redirect uri: " + redirectUri);
  console.log("code verifier: " + code_verifier);
  console.log("code: " + code);
  
  const response = await fetch(tokenEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: {
      client_id: clientId,
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: redirectUri,
      code_verifier: code_verifier,
    },
  });

  return await response.json();
}

// Access token can then be used to obtain any spotify data
