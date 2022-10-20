import axios from 'axios';

export async function getHomePage(){
  try {
    let response = await axios.get("https://dev.nextjs/wp-json/json/v1/home-page");
    return response.data.map(post => {
          return {
            params: {
              id: post.id.toString(),
            },
          }
        })
  } catch (err) {
    console.log(err)
  }
  // try {
  //   let response = await axios.get('https://dev.nextjs/wp-json/wp/v2/posts?per_page=20');
  //   return response.data.map(post => {
  //     return {
  //       params: {
  //         id: post.id.toString(),
  //       },
  //     }
  //   })
  // } catch (err) {
  //   console.log(err)
  // }
}