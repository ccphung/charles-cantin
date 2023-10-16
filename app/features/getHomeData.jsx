export const getHomeData = async () =>  {
  const reqOptions = {
      headers: {
        Authorization: `bearer ${process.env.API_TOKEN}`,
      },
      cache: 'no-store'
    };

  const request = await fetch(`http://127.0.0.1:1337/api/homes?populate=*`, reqOptions)
  const response = await request.json()
  return await response
}
