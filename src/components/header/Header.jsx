import gsap from "gsap";
import "./Header.css";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap-trial/SplitText";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import wrapper from "../../components/header/img/und-hero.webp"

gsap.registerPlugin(SplitText, ScrollTrigger);

const Header = () => {

    useGSAP(() => {

        let contexto = gsap.context(() => {
            const textLogo = new SplitText("#header-logo-2", { type: "chars" })
            const textLogoChars = textLogo.chars

            let timeline = gsap.timeline({
                onStart: () => {
                    document.body.style.overflow = 'hidden';
                },
                onComplete: () => {
                    document.body.style.overflow = 'auto';
                }
            });

            timeline.to(".hero-loader",
                { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", delay: 3, duration: 1, ease: "power4.inOut" },
            );

            gsap.fromTo(textLogoChars,
                { yPercent: 115, duration: 1, ease: "power3.inOut", delay: 1.5, stagger: 0.07 },
                { yPercent: 0, duration: 1, ease: "power3.inOut", delay: 1.5, stagger: 0.07 }
            )

            gsap.fromTo(".wrapper",
                { backgroundPositionY: 20 },
                { backgroundPositionY: 50, duration: 1.5, delay: 3 }
            );
        });

        return () => {
            contexto.revert();
        };

    }, []);

    return (
        <div className="container-header">
            <div className="content-header">

                <div className="header-wallpaper">
                    <div className="wrapper"></div>
                </div>

                <div className="header-logo" >
                    <h1 id="header-logo-1" className="logo">UUD</h1>
                </div>

                <div className="nav">
                    <nav>
                        <ul>
                            <li>shop</li>
                            <li>recipes</li>
                            <li>about</li>
                            <li>contact</li>
                            <li>cart</li>
                        </ul>
                    </nav>
                </div>

                <div className="hero-loader">
                    <div className="hero-loader-logo">
                        <h1 id="header-logo-2" className="logo">UUD</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;
