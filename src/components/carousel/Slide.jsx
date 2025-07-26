const Slide = (
    {
        imgMobile,
        imgTable,
        imgDesktop,
        children
    }
) => {
    return (
        <div className="carousel-slide">
            <picture>
                <source srcSet={imgDesktop} media="(min-width:1025px)" />
                <source srcSet={imgTable} media="(min-width:720px)" />
                <img src={imgMobile} />
            </picture>
            <section className="carousel-action">
                {children}
            </section>
        </div>
    );
}

export default Slide;