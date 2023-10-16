
const getHomeData = async () =>  {
    const reqOptions = {
        headers: {
          Authorization: `Bearer ${process.env.API_TOKEN}`,
        },
        cache: 'no-store'
      };

    const request = await fetch(`http://127.0.0.1:1337/api/homes?populate=*`, reqOptions)
    const response = await request.json()

    return response
}

export default getHomeData