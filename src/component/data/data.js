const BASE_URL = 'https://yalantis-react-school-api.yalantis.com/api/task0/users';

export const getUsers = () => {

   return  fetch(BASE_URL)
        .then(response => {
            if (!response.ok) {
                throw Promise.reject(
                    `${response.status} - ${response.statusText}`
                )
            }
            return response.json();
        })

}

