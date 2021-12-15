export const loginApi = {
    login(credentials) {
        return fetch('https://noroff-react-txt-forum-api.herokuapp.com/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        .then(async (response) => {

            if (!response.ok) {
                const { error = 'something wrong' } = await response.json()
                throw new Error(error)
            }

            return response.json()
        })
    }
}