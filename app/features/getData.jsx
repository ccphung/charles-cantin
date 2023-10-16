const getData = async () =>  {
    const reqOptions = {
        headers: {
          Autorization: `Bearer ${process.env.API_TOKEN}`,
        },
        cache: 'no-store',
      };

    const response = await fetch(`http://127.0.0.1:1337/api/homes?populate=*`, reqOptions)

    if(!response.ok) {
        throw new Error('failed to fetch data')
    }

    return await response.json()
}

export default getData