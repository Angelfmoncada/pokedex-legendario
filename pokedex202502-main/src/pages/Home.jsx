import Carousel from "../components/carousel/Carousel";
import slideData from '../store/carouselSlides';
import Container from "../components/panels/Container";
import HalfPagePanel from "../components/panels/HalfPagePanel";

const Home = ()=>{
    return (
        <>
            <Carousel slides={slideData} />
            <Container>
                <HalfPagePanel
                    leftNodes={(
                        <>
                            <picture>
                                <source srcSet="https://picsum.photos/id/12/640/640" media="(min-width:720px)" />
                                <img className="w-full h-full object-fit" href="https://picsum.photos/id/12/480/480"/>
                            </picture>
                        </>
                    )}
                    rightNodes={(
                        <>
                        <p className="flex justify-center items-center m-4 h-full">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus reprehenderit, beatae maxime velit facere consequatur, possimus pariatur distinctio vel deserunt molestias. Perspiciatis eius modi, sapiente aliquam beatae quaerat ipsam quos.
                        </p>
                        </>
                    )}
                />
                   <HalfPagePanel
                    invert={true}
                    leftNodes={(
                        <>
                            <picture>
                                <source srcSet="https://picsum.photos/id/13/640/640" media="(min-width:720px)" />
                                <img className="w-full h-full object-fit" href="https://picsum.photos/id/13/480/480"/>
                            </picture>
                        </>
                    )}
                    rightNodes={(
                        <>
                        <p className="flex justify-center items-center m-4 h-full">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus reprehenderit, beatae maxime velit facere consequatur, possimus pariatur distinctio vel deserunt molestias. Perspiciatis eius modi, sapiente aliquam beatae quaerat ipsam quos.
                        </p>
                        </>
                    )}
                />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium praesentium, doloremque fuga non quis totam ipsum magni deserunt odio in dignissimos natus architecto sunt cum sequi porro? Praesentium, vel quos!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsa ab quisquam, voluptatum minus itaque molestias doloremque, soluta culpa sed deserunt distinctio reprehenderit perferendis? Quod nisi recusandae debitis pariatur veniam!
                </p>
            </Container>
        </>
    )
}

export default Home;