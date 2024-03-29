import React from "react";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

import { scrollWidthOffset } from "../utils/scrollWidthOffset";
import '../styles/components/nav-arrow.css'

export const NavArrow = ({direction, target, additionalClass}: {direction: string, target: string, additionalClass: string}) => {
  const icon = (() => {
    switch (direction) {
      case "up": return faChevronUp
      case "down": return faChevronDown
      default: throw new Error("No icon found")
    }
  })()

  return (
    <div className="nav-arrow__arrow-wrapper">
      <HashLink to={target} className={`arrow-wrapper__arrow-hash-link ${additionalClass}`.trim()}
        scroll={scrollWidthOffset} 
      >
        <FontAwesomeIcon icon={icon} className={`arrow-hash-link__fa-icon-overrides ${(() => {
          switch (direction) {
            case "up": return "--anim-up"
            case "down": return "--anim-down"
            default: return ""
          }
        })()}`.trim()}/>
      </HashLink>
    </div>
  )
}