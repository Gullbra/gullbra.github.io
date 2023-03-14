import React from "react";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { scrollWidthOffset } from "../utils/scrollWidthOffset";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";


export const NavArrow = ({direction, target, additionalClass}: {direction: string, target: string, additionalClass: string}) => {

  const icon = (() => {
    switch (direction) {
      case "up": return faChevronUp
      case "down": return faChevronDown
      default: throw new Error("No icon found")
    }
  })()

  return (
    <div className="f-item-text__continue-arrow-wrapper">
      <HashLink to={target} className={`fa-hash-link ${additionalClass}`}
        // ref={refArrowDown}
        scroll={(el) => scrollWidthOffset(el, -4*12)} 
      >
        <FontAwesomeIcon icon={icon} className="fa-icon-overrides-homeslide"/> 
      </HashLink>
    </div>
  )
}

/*
 css:

.f-item-text__continue-arrow-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}
.fa-hash-link {
  transition: opacity 1000ms ease 1000ms;
  color: rgba(0,0,0,0.4);
}
.fa-icon-overrides-homeslide {
  font-size: 2rem;
  font-weight: 1000;
  animation: arrow-anim 1.2s ease-in-out 0s infinite;
}
.fa-icon-overrides-homeslide:hover {
  color: rgba(0,0,0,0.8);
}
@keyframes arrow-anim{
  0%{padding-top: 0.8rem; padding-bottom: 0.4rem;}
  50%{padding-top: 1rem; padding-bottom: 0.2rem;}
  100%{padding-top: 0.8rem; padding-bottom: 0.4rem;}
}
*/