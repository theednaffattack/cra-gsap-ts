import React, { useEffect, useState } from "react";
import { useCallbackRef } from "use-callback-ref";

import { DogButton } from "./pet-grid";
import { TweenMax, TimelineMax, Elastic, Back } from "gsap";
import { Card, DogImage, RevealH3, MainTitle } from "./styled-elements";

interface PetCardProps {
  breed: string;
  imgUrl: string;
  id: string;
}

// type TweenReturn = ReturnType<typeof TweenMax.to> | null;

const PetCard: React.FunctionComponent<PetCardProps> = props => {
  const cardRef = useCallbackRef(null, (ref: any) => ref && ref.focus());
  const imgRef = useCallbackRef(null, (ref: any) => ref && ref.focus());
  const textRef = useCallbackRef(null, (ref: any) => ref && ref.focus());

  const [mouseAnimation, setMouseAnimation] = useState<any>();
  const [clickAnimation, setClickAnimation] = useState<any>();
  const [tl] = useState(new TimelineMax({ paused: true }));

  useEffect(() => {
    console.log("useEffect setMouseAnimation");
    setMouseAnimation(
      TweenMax.to(imgRef, 1, {
        scale: 1,
        filter: "none",
        ease: Elastic.easeOut.config(1, 0.75)
      }).pause()
    );
  }, [imgRef]);

  useEffect(() => {
    setClickAnimation(tl.add("s"));
    setClickAnimation(
      tl
        .to(
          textRef,
          1,
          {
            autoAlpha: 1,
            y: 0,
            ease: Elastic.easeIn.config(1, 0.75)
          },
          "s"
        )
        .to(
          cardRef,
          0.4,
          {
            transformOrigin: "center center",
            ease: Back.easeIn.config(1.4),
            scale: 0.1
          },
          "s+=1.5"
        )
        .to(
          cardRef,
          0.4,
          {
            opacity: 0,
            display: "none"
          },
          "s+=2"
        )
    );
  }, [cardRef, textRef, tl]);

  return (
    <Card
      onMouseEnter={() => {
        console.log("mouseAnimation happening", {
          mouseAnimation: mouseAnimation.play(),
          objKeys: Object.keys(mouseAnimation)
        });
        mouseAnimation.play();
      }}
      className="dog-card "
      key={props.id}
      ref={element => {
        cardRef.current = element;
      }}
    >
      <DogImage
        ref={element => {
          imgRef.current = element;
        }}
        className="dog-image"
        alt="random dog"
        src={props.imgUrl}
      />
      <RevealH3
        ref={element => {
          textRef.current = element;
        }}
        className="reveal"
      >
        Thank you!{" "}
        <span role="img" aria-label="triple pink heart">
          💗
        </span>
      </RevealH3>
      <DogButton onClick={() => clickAnimation.play()}>AdoptMe</DogButton>
      <MainTitle>{props.breed}</MainTitle>
    </Card>
  );
};
export default PetCard;
