
const getPricingData = async () =>  {
    const reqOptions = {
        headers: {
          Authorization: `Bearer ${process.env.API_TOKEN}`,
        },
        cache: 'no-store'
      };

    const request = await fetch(`http://localhost:1337/api/pricings?populate=*`, reqOptions)
    const response = await request.json()
    return response
}

export default getPricingData