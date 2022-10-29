import "./Page404.css"


function Page_404() {
    return (
        <>
            <div className="wrong-page">
                {/*
                    TODO: Add some cool text
                    Example: We could not find Your Page,
                    but we will be glad to help You find Your Pet
                */}
                <img src="images/Pawprints-4.png" alt=""/>
                <img src="images/Pawprints-0.png" alt=""/>
                <img src="images/Pawprints-4.png" alt=""/>
                <h1>
                    Page not found :(
                </h1>
            </div>
        </>
    );
}

export default Page_404;