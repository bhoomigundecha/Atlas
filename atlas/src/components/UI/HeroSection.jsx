import { FaLongArrowAltRight } from "react-icons/fa";
import '../../App.css';

export const HeroSection = () => {
    return (
        <main className="hero-section main">
            <div className="conatiner grid grid-two-cols">
                <div className="hero-content">
                    <h1 className="heading-xl">
                        Explore the World, One Country at a time.
                    </h1>

                    <p className="paragraph">
                        Discover the history, culture, and beauty of every nation.
                        Sort, search and filter through countries to find the details you need.
                    </p>

                    <button className="btn btn-darken btn-inline bg-white-box">
                        Start Exploring! <FaLongArrowAltRight />
                    </button>

                </div>

                <div className="hero-image">
                    <img src="/world.png" alt="Loading" className="banner-image"></img>
                </div>
            </div>
        </main>
    );
}