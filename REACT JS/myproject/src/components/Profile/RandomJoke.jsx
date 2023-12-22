import axios from "axios"
import { useEffect, useState } from "react";
import BarLoader from "react-spinners/BarLoader";
import './Profile.css'

const RandomJoke = () => {
    const [joke, setJoke] = useState('')
    const [loading, setLoading] = useState(true)
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
        width: '350px'
    };

    async function loadJoke() {
        try {
            const options = {
                method: 'GET',
                url: process.env.REACT_APP_RANDOM_JOKE,
                params: {
                  format: 'json',
                  blacklistFlags: 'nsfw,racist'
                },
                headers: {
                  'X-RapidAPI-Key': process.env.REACT_APP_RANDOM_JOKE_KEY,
                  'X-RapidAPI-Host': process.env.REACT_APP_RANDOM_JOKE_HOST
                }
              };
              
              try {
                  const response = await axios.request(options);
                  console.log(response.data);
                  setJoke(response.data)
                  setLoading(false)
              } catch (error) {
                  console.error(error);
              }
        } catch (error) {
            console.log('Error fetching joke:', error);
        }
    }

    useEffect(() => {
        loadJoke()
    }, [])

    return (
        <div className="card-body text-center">
            {loading ? (
                // Display the BarLoader while loading
                <BarLoader
                    cssOverride={override}
                    color="purple" />
            ) : joke ? (
                // Display the quote if quote is not null
                <div>
                    <h6>This can make you giggle</h6>
                    <h4 className="setup">{joke.setup}</h4>
                    <h4 className="delivery">{joke.delivery}</h4>
                </div>
            ) : (
                // Handle the case when quote is null
                <p>No quote available</p>
            )}
        </div>
    )
}

export default RandomJoke