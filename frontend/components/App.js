import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card'


const api_key = 'DEMO_KEY'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`



function App() {
  const [data, setData] = useState()

  useEffect (() => {
    // eslint-disable-next-line no-unused-vars
    function getPhoto() {
      axios.get(URL)
      .then(res => {
        console.log(res.data)
        setData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    }
    getPhoto()
    // setData({
    //   "date": "2024-08-25",
    //   "explanation": "Do underground oceans vent through canyons on Saturn's moon Enceladus?  Long features dubbed tiger stripes are known to be spewing ice from the moon's icy interior into space, creating a cloud of fine ice particles over the moon's South Pole and creating Saturn's mysterious E-ring.  Evidence for this has come from the robot Cassini spacecraft that orbited Saturn from 2004 to 2017.  Pictured here, a high resolution image of Enceladus is shown from a close flyby.  The unusual surface features dubb...",
    //   "hdurl": "https://apod.nasa.gov/apod/image/2408/EnceladusStripes_Cassini_3237.jpg",
    //   "media_type": "image",
    //   "service_version": "v1",
    //   "title": "Fresh Tiger Stripes on Saturn's Enceladus",
    //   "url": "https://apod.nasa.gov/apod/image/2408/EnceladusStripes_Cassini_960.jpg"
    //   // ^^Hardcoded API fetching to reduce number of API calls during development (API calls restricted to 40 uses)^^
    // })
  }, [])

  if (!data) return 'Fetching Data...'
  return (
    <section>
      <Card 
      title={data.title}
      text={data.explanation}
      imageURL={data.url}
      author={data.copyright}
      date={data.date}
      />
    </section>
  )
}

export default App
