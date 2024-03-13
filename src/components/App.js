// create your App component here
import React, { useEffect, useState } from "react";

function App () {
    const fetchAPI = "https://dog.ceo/api/breeds/image/random"

    const [image, setImage] = useState(null)

    useEffect(() => {
        fetch(fetchAPI)
            .then((resp) => resp.json())
            .then((data) => (setImage(data.message)))

            .catch(error => {
                console.error("Error fetching dog image", error)
            })
    }, [])

    if (!image) {
        return <p>Loading...</p>
    }


    return (
        <div>
            <img src={image} alt="A Random Dog" />
        </div>
    )
}

export default App 