import "./content.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap-trial/SplitText";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, SplitText);

import img01 from "../../../assets/image/test02.webp"
import img02 from "../../../assets/image/und-bread.webp"


const Content = () => {

    // useGSAP(() => {
    //     let contexto = gsap.context(() => {
    //         ScrollTrigger.create({
    //             trigger: ".section-number-one",
    //             start: "top top",
    //             end: "bottom 0%",
    //             scrub: 1,
    //             pin: ".section-number-one",
    //         });

    //         ScrollTrigger.create({
    //             trigger: ".section-number-two",
    //             start: "top 20%",
    //             end: "+=250%",
    //             markers: true,
    //             scrub: 1,
    //             pin: ".content-text-fixed",
    //         });
    //     });
    //     return () => {
    //         contexto.revert();
    //     };
    // }, []);

    // useGSAP(() => {
    //     let contexto = gsap.context(() => {
    //         let revealContainer = document.querySelectorAll(".reveal");

    //         revealContainer.forEach((container) => {
    //             let image = container.querySelector("img")
    //             let timeline = gsap.timeline({
    //                 scrollTrigger: {
    //                     trigger: container,
    //                     scrub: 0.5,
    //                     start: "top 0%",
    //                     end: "bottom 0%",
    //                 }
    //             })


    //             timeline.set(container, { autoAlpha: 1 })
    //             timeline.fromTo(container,
    //                 { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", duration: 1, ease: "none" },
    //                 { clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", duration: 1, ease: "none" },
    //             )

    //             const timelineChars = gsap.timeline({
    //                 scrollTrigger: {
    //                     trigger: ".section-number-one",
    //                     start: "30% 20%",
    //                     end: "bottom 0%",
    //                     scrub: 1,
    //                 }
    //             })
    //             const breads1 = new SplitText(".breads", { type: "chars" })
    //             const breadsChars1 = breads1.chars
    //             timelineChars.fromTo(breadsChars1,
    //                 { fontSize: "3vw", duration: 1, stagger: 0.05, ease: "none" },
    //                 { fontSize: "16vw", duration: 1, stagger: 0.05, ease: "none" },
    //             )

    //         })
    //     });

    //     return () => {
    //         contexto.revert();
    //     };
    // }, []);

    return (
        <div className="content">
            <div className="section-wrapper">

                {/* <section id="section" className="section-number-one one">

                    <div className="container-reveal">
                        <div id="img-one"></div>
                        <div id="img-two"></div>
                        <h1 id="breads-1" className="breads">BREADS</h1>
                        <div className="reveal">
                            <img src={img01} alt="" className="image-01" />
                            <img src={img02} alt="" className="image-02" />
                            <h1 id="breads-2" className="breads" >BREADS</h1>
                        </div>
                    </div>

                </section> */}

                {/* <div className="second">
                    <p>Our bread is handmade with carefully selected, safe, and secure ingredients, and is completely additive-free. We use organic flour and a unique formula that includes up to 75% almond milk, heavy cream, and water to create a moist, fluffy bread with a mellow flavor. Almond milk contains less fat and fewer calories than raw milk, and is rich in minerals and vitamins. It also adds natural sweetness and a mellow mouthfeel, giving it a taste more akin to brioche than ordinary bread.
                        Three different flavors are available: Basic, Chocolate, and Condensed Milk.
                    </p>

                </div> */}

                {/* <section id="section" className="section-number-two tow">
                    <div className="content-text-fixed">
                        <h1>Almond Milk Bread</h1>
                        <h2>A moist, fluffy bread with a mellow flavor.</h2>
                    </div>
                    <div className="container-images">


                        <div className="content-images co">
                            <div className="content-image-1-img-1"></div>
                            <div className="content-image-1-img-2"></div>
                        </div>

                        <div className="content-images so">
                            <div className="content-image-2-img-1"></div>
                            <div className="content-image-2-img-2"></div>
                        </div>

                    </div>
                </section> */}

                {/* <section id="section" className="section-number-trhee trhee">
                   
                </section> */}
            </div>
        </div>
    );
}

export default Content;
