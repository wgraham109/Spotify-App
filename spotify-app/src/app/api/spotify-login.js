

// Generate random string with "high entropy"
const generateRandomString = (length) => {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const values = crypto.getRandomValues(new Uint8Array(length));
    return values.reduce((acc, x) => acc + possible[x % possible.length], "");
}

/** 
 * codeVerifier can be put through hashing algorithm to create codeChallenge at any time, 
 * but codeVerifier cannot be determined from the codeChallenge
 * so the codeVerifier stays private
 * */ 
const codeVerifier  = generateRandomString(64);
  
// function to hash a string with sha256
const sha256 = async (plain) => {
  const encoder = new TextEncoder()
  const data = encoder.encode(plain)
  return window.crypto.subtle.digest('SHA-256', data)
}

// function encode a string in base 64
const base64encode = (input) => {
  return btoa(String.fromCharCode(...new Uint8Array(input)))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

// Hashing the codeVerifier
const hashed = await sha256(codeVerifier)
const codeChallenge = base64encode(hashed);

// Initializing parameters for authorization request
const clientId = process.env.SPOTIFY_CLIENT_ID;
const redirectUri = 'http://localhost:3000';
const scope = 'user-read-private user-read-email';
const authUrl = new URL("https://accounts.spotify.com/authorize")

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
window.localStorage.setItem('code_verifier', codeVerifier);

authUrl.search = new URLSearchParams(params).toString();
window.location.href = authUrl.toString();

// sending the authorization request to spotify for a code, can also change this
const urlParams = new URLSearchParams(window.location.search);

//code is the response code sent by spotify
let code = urlParams.get('code');

// getting access token using the code sent by spotify
// Sends the code and the codeVerifier, server can verify the codeChallenge using the codeVerifier
const getToken = async code => {

  // stored in the previous step
  let codeVerifier = localStorage.getItem('code_verifier');

  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: clientId,
      grant_type: 'authorization_code',
      code,
      redirect_uri: redirectUri,
      code_verifier: codeVerifier,
    }),
  }

  const body = await fetch(url, payload);
  const response = await body.json();
  //store the access token, we can change how this is stored/what we do with it
  localStorage.setItem('access_token', response.access_token);
}

// Access token can then be used to obtain any spotify data
