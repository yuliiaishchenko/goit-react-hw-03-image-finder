// import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '34951131-d097551cc942255e7c32e5f0d';



// export const fetchImages = async (searchValue, page) => {
//     try {
//         const response = await axios.get(`${BASE_URL}`, {
//             params: {
//                 key: API_KEY,
//                 q: searchValue,
//                 image_type: 'photo',
//                 orientation: 'horizontal',
//                 page: page,
//                 per_page: 12,
//                 safesearch: true,

//             },
//         });
//         return response.data;
//     } catch (error) {
//         throw new Error(error.message);
//     }
// };

const getImages = (searchText, page = 1) => {
    return fetch(`${BASE_URL}?key=${API_KEY}&q=${searchText}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(
            new Error(
                `Oops... there are no ${searchText} images matching your search...`
            )
        );
    });
};

const api = {
    getImages,
};
export default api;