import { Link } from 'react-router-dom'
const NotFound = () => {
    return (
        <main>
            <h4>U lost?</h4>
            <p>This page does not exist</p>
            <Link to="/">Go fish</Link>
        </main>
    )
}

export default NotFound