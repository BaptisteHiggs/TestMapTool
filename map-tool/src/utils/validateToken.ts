export async function validateToken(token: string) {
  const response = await sendApiRequest(
    constructURL("example", "cjikt35x83t1z2rnxpdmjs7y7", token)
  );
  return response.number !== 401;
}

async function sendApiRequest(url: string) {
  const response = await fetch(url);
  const data = response.json();
  const number = response.status;
  return { data, number };
}

function constructURL(username: string, styleId: string, accessToken: string) {
  const url = `https://api.mapbox.com/styles/v1/${username}?access_token=${accessToken}`;
  return url;
}
