import axios from 'axios';

export async function getHomePage(){
  try {
    let response = await axios.get("https://dev.nextjs/wp-json/json/v1/home-page");
    return response.data.map(posts => {
          return {
            posts
          }
        })
  } catch (err) {
    console.log(err)
  }
}