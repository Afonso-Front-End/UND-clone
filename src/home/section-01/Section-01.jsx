import img01 from "./image/test02.webp"
import img02 from "./image/und-bread.webp"
import "./section-01.css"

import gsap from "gsap";
import SplitText from "gsap-trial/SplitText";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Section_01() {
    useGSAP(() => {
        let contexto = gsap.context(() => {
            ScrollTrigger.create({
                trigger: ".section-01",
                start: "top top",
                end: "bottom 0%",
                scrub: 1,
                pin: ".section-01",
            });

            // ScrollTrigger.create({
            //     trigger: ".section-number-two",
            //     start: "top 20%",
            //     end: "+=250%",
            //     markers: true,
            //     scrub: 1,
            //     pin: ".content-text-fixed",
            // });
        });
        return () => {
            contexto.revert();
        };
    }, []);
    useGSAP(() => {
        let contexto = gsap.context(() => {
            let revealContainer = document.querySelectorAll(".reveal");

            revealContainer.forEach((container) => {
                let image = container.querySelector("img")
                let timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: container,
                        scrub: 0.5,
                        start: "top 0%",
                        end: "bottom 0%",
                    }
                })


                timeline.set(container, { autoAlpha: 1 })
                timeline.fromTo(container,
                    { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", duration: 1, ease: "none" },
                    { clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", duration: 1, ease: "none" },
                )

                const timelineChars = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".section-01",
                        start: "30% 20%",
                        end: "bottom 0%",
                        scrub: 1,
                    }
                })
                const breads1 = new SplitText(".breads", { type: "chars" })
                const breadsChars1 = breads1.chars
                timelineChars.fromTo(breadsChars1,
                    { fontSize: "3vw", duration: 1, stagger: 0.05, ease: "none" },
                    { fontSize: "16vw", duration: 1, stagger: 0.05, ease: "none" },
                )

            })
        });

        return () => {
            contexto.revert();
        };
    }, []);

    return (
        <section className="section-01" >

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

        </section >
    )
} 