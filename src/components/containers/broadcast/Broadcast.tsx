import React from "react";
import Image from "next/image";
import Link from "next/link";
import animeOne from "../../../../public/images/anime-three.png";
import animeTwo from "../../../../public/images/anime-two.png";
import broadCastOne from "../../../../public/images/broadcast-thumb.png";
import broadCastTwo from "../../../../public/images/broadcast-thumb-two.png";
import broadCastThree from "../../../../public/images/broadcast-thumb-three.png";
import broadCastFour from "../../../../public/images/broadcast-thumb-four.png";

const Broadcast = () => {
  return (
    <section className="section broadcast pb-0">
      <div className="container">
        <div className="row">
          <div className="col-12 fix-scroll">
            <div className="broadcast__inner">
              <div className="row align-items-center items-gap-two">
                <div className="col-12">
                  <div className="section__content broadcast__inner-content text-center">
                    <h2 className="h2">The Future of Virtual Training</h2>
                    <div className="paragraph">
                      <p>
                        Digisage revolutionizes digital learning by utilizing AI
                        to transform videos and documents into structured
                        courses, removing the need for human intervention.
                      </p>
                    </div>
                    <div className="section__content-cta">
                      <Link
                       href="#" onClick={(e) => e.preventDefault()}
                        className="btn btn--secondary"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="anime">
                <Image
                  src={animeOne}
                  alt="Image"
                  priority
                  className="anime-one"
                />
                <Image
                  src={animeTwo}
                  alt="Image"
                  priority
                  className="anime-two"
                />
              </div>
            </div>
            <div className="broadcast__inner">
              <div className="row align-items-center items-gap-two">
                <div className="col-12">
                  <div className="section__content broadcast__inner-content text-center">
                    <h2 className="h2">Netflix embracing the AI era</h2>
                    <div className="paragraph">
                      <p>
                        The entertainment industry has undergone significant
                        changes, from cinema to home video, and from cable
                        networks to on-demand platforms. Among streaming
                        leaders, Netflix distinguishes itself with its vast
                        content offerings and innovative use of Artificial
                        Intelligence (AI). Let’s explore how AI has played a
                        pivotal role in Netflix’s rise to prominence.
                      </p>
                    </div>
                    <div className="section__content-cta">
                      <Link
                        href="#" onClick={(e) => e.preventDefault()}
                        className="btn btn--secondary"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="anime">
                <Image
                  src={animeOne}
                  alt="Image"
                  priority
                  className="anime-one"
                />
                <Image
                  src={animeTwo}
                  alt="Image"
                  priority
                  className="anime-two"
                />
              </div>
            </div>
            <div className="broadcast__inner">
              <div className="row align-items-center items-gap-two">
                <div className="col-12">
                  <div className="section__content broadcast__inner-content text-center">
                    <h2 className="h2">
                      Starbucks enhances customer experiences with innovation
                    </h2>
                    <div className="paragraph">
                      <p>
                        When you think of Starbucks, you likely picture their
                        famous coffee drinks or recognizable green logo. Yet,
                        Starbucks has grown beyond a coffee retailer to become a
                        tech innovator, using AI to improve customer experiences
                        and optimize operations.
                      </p>
                    </div>
                    <div className="section__content-cta">
                      <Link
                       href="#" onClick={(e) => e.preventDefault()}
                        className="btn btn--secondary"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="anime">
                <Image
                  src={animeOne}
                  alt="Image"
                  priority
                  className="anime-one"
                />
                <Image
                  src={animeTwo}
                  alt="Image"
                  priority
                  className="anime-two"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Broadcast;
