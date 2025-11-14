import { Link } from "react-router-dom"

const ComingSoon = () => {
    return <div className="flex flex-col items-center justify-start">
    <h1>Coming Soon</h1>
    <h2>This page is under construction.</h2>
    <section>
        <Link to="/">Go Home</Link>
    </section>
    </div>
}
 
export { ComingSoon }