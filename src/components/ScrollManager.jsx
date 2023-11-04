import { useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap/gsap-core'

const ScrollManager = ({ section, onSectionChange }) => {
  const data = useScroll()
  const lastScroll = useRef(0)
  const isAnimating = useRef(false)

  data.fill.classList.add('absolute-top')

  useEffect(() => {
    gsap.to(data.el, {
      duration: 1,
      scrollTop: section * data.el.clientHeight,
      onStart: () => {
        isAnimating.current = true
      },
      onComplete: () => {
        isAnimating.current = false
      }
    })
  }, [section])

  useFrame(() => {
    if (isAnimating.current) {
      lastScroll.current = data.scroll.current
      return
    }
    const currSection = Math.floor(data.scroll.current * data.pages)
    if (data.scroll.current > lastScroll.current && currSection === 0) {
      onSectionChange(1)
    }
    if (data.scroll.current < lastScroll.current && data.scroll.current < 1 / (data.pages - 1)) {
      onSectionChange(0)
    }
    if(data.scroll.current < lastScroll.current && currSection === 2){
      onSectionChange(1)
    }
    if(data.scroll.current > lastScroll.current && data.scroll.current > 1 / (data.pages - 1)){
      onSectionChange(2)
    }
    if(data.scroll.current < lastScroll.current && currSection === 3){
      onSectionChange(2)
    }
    if(data.scroll.current > lastScroll.current && data.scroll.current > 2 * (1 / (data.pages - 1))){
      onSectionChange(3)
    }
  })


  return null
}

export default ScrollManager