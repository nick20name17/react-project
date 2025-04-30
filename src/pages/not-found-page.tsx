import { Link, useNavigate } from 'react-router'
import { routes } from '../config/routes'

const NotFoundPage = () => {
    const navigate = useNavigate()

    const handleGoBack = () => {
        navigate(-1)
    }

    return (
        <div className="from-background to-muted/30 flex min-h-screen flex-col items-center justify-center bg-gradient-to-b">
            <div className="container flex max-w-md flex-col items-center justify-center gap-6 px-4 py-16 text-center md:py-24">
                <div className="bg-muted rounded-full p-6"></div>

                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                    Page not found
                </h1>

                <p className="text-muted-foreground">
                    We couldn't find the page you were looking for. It might have been
                    moved, deleted, or never existed in the first place.
                </p>

                <div className="flex flex-col gap-2 sm:flex-row">
                    <Link to={routes.home}>Go home</Link>
                    <button onClick={handleGoBack}>Go back</button>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage
