const API_ROOT = 'http://localhost:3001';
//
// export const fetch = (endpoint) => {
//     const fullUrl = API_ROOT + endpoint;

//     return fetch(fullUrl)
//         .then(response =>
//             response.json().then(json => {
//                 if (!response.ok) {
//                     return Promise.reject(json)
//                 }
//
//                 return Promise.resolve(json);
//             })
//         )
// };