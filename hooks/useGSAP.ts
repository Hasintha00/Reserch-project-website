'use client'
import { useEffect } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

// 1. Fade up stagger — for cards, list items
export function useFadeUpStagger(
  containerRef: React.RefObject<HTMLElement>,
  childSelector: string,
  options?: { stagger?: number; delay?: number; start?: string }
) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(childSelector,
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0,
          duration: 0.85,
          ease: 'power3.out',
          stagger: options?.stagger ?? 0.12,
          delay: options?.delay ?? 0,
          scrollTrigger: {
            trigger: containerRef.current,
            start: options?.start ?? 'top 78%',
            toggleActions: 'play none none reverse',
          }
        }
      )
    }, containerRef)
    return () => ctx.revert()
  }, [])
}

// 2. Slide in from left
export function useSlideInLeft(
  containerRef: React.RefObject<HTMLElement>,
  childSelector: string,
  stagger = 0.15
) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(childSelector,
        { opacity: 0, x: -60 },
        {
          opacity: 1, x: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 78%',
            toggleActions: 'play none none reverse',
          }
        }
      )
    }, containerRef)
    return () => ctx.revert()
  }, [])
}

// 3. Slide in from right
export function useSlideInRight(
  containerRef: React.RefObject<HTMLElement>,
  childSelector: string,
  stagger = 0.15
) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(childSelector,
        { opacity: 0, x: 60 },
        {
          opacity: 1, x: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 78%',
            toggleActions: 'play none none reverse',
          }
        }
      )
    }, containerRef)
    return () => ctx.revert()
  }, [])
}

// 4. Scale in — for achievement cards, icons
export function useScaleIn(
  containerRef: React.RefObject<HTMLElement>,
  childSelector: string,
  stagger = 0.1
) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(childSelector,
        { opacity: 0, scale: 0.88 },
        {
          opacity: 1, scale: 1,
          duration: 0.75,
          ease: 'back.out(1.4)',
          stagger,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 78%',
            toggleActions: 'play none none reverse',
          }
        }
      )
    }, containerRef)
    return () => ctx.revert()
  }, [])
}

// 5. Gold underline reveal — for section titles
export function useUnderlineReveal(ref: React.RefObject<HTMLElement>) {
  useEffect(() => {
    if (!ref.current) return
    const line = ref.current.querySelector('.gold-underline')
    if (!line) return
    gsap.fromTo(line,
      { scaleX: 0, transformOrigin: 'left center' },
      {
        scaleX: 1, duration: 0.9, ease: 'power3.out', delay: 0.3,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        }
      }
    )
  }, [])
}

// 6. Parallax on hero background
export function useHeroParallax(imageRef: React.RefObject<HTMLElement>) {
  useEffect(() => {
    gsap.to(imageRef.current, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: imageRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
      }
    })
  }, [])
}

// 7. Counter animation — for stats
export function useCountUp(
  ref: React.RefObject<HTMLElement>,
  end: number,
  duration = 2
) {
  useEffect(() => {
    const obj = { val: 0 }
    gsap.to(obj, {
      val: end,
      duration,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
        once: true,
      },
      onUpdate: () => {
        if (ref.current) ref.current.textContent = Math.round(obj.val).toString()
      }
    })
  }, [])
}

// 8. Horizontal scroll for timeline (optional milestones)
export function useHorizontalScroll(
  containerRef: React.RefObject<HTMLElement>,
  trackRef: React.RefObject<HTMLElement>
) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalWidth = trackRef.current?.scrollWidth ?? 0
      const viewWidth = containerRef.current?.offsetWidth ?? 0
      
      gsap.to(trackRef.current, {
        x: -(totalWidth - viewWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: () => `+=${totalWidth}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        }
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])
}
