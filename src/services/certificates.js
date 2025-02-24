import {BASE_URL} from "../constants/urls";


/**
    Generates certificates for a users, certificates should be fetched from the firebase server with a seperate auth scheme
    @async
    @function generateCertificateAPI
    @param {string} token - User's token for authentication
    @returns {Promise<Response>} Promise object represents the response of certificate generation request
    @throws {Error} When the certificate generation request fails
    @example
    const response = await generateCertificateAPI("your_token_here");
    console.log(response); // Response object
*/
export async function generateCertificateAPI(token){
    return await fetch(
          BASE_URL + "/api/v1/certificate/gen",
          {
              method: "POST",
              headers: {"Content-Type": "application/json", "Authorization": `token ${token}`},
          }
      );
}