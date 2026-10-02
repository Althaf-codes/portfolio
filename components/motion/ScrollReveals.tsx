'use client';

import { useEffect } from 'react';

/** Enhance server-rendered content without hiding it before JavaScript is ready. */
export function ScrollReveals() {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const elements = [...document.querySelectorAll<HTMLElement>('main [data-scroll-reveal]')];
    const animations = new Set<Animation>();
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const element = entry.target as HTMLElement;
        observer.unobserve(element);
        if (!element.hasAttribute('data-reveal-pending')) continue;
        element.removeAttribute('data-reveal-pending');
        if (preference.matches) continue;
        const animation = element.animate([
          { opacity: 0, transform: 'translateY(14px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ], { duration: 500, delay: element.dataset.scrollReveal === 'media' ? 70 : 0,
          easing: 'cubic-bezier(.22,1,.36,1)', fill: 'backwards' });
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      }
    }, { threshold: 0, rootMargin: '0px 0px -24px 0px' });

    if (!preference.matches) {
      for (const element of elements) {
        // Preserve the initial viewport and restored/deep-linked scroll positions.
        if (element.getBoundingClientRect().top < window.innerHeight) continue;
        element.setAttribute('data-reveal-pending', '');
        observer.observe(element);
      }
    }
    function showAll() {
      observer.disconnect();
      elements.forEach(element => element.removeAttribute('data-reveal-pending'));
      animations.forEach(animation => animation.cancel());
      animations.clear();
    }
    function onPreferenceChange() { if (preference.matches) showAll(); }
    function onFocus(event: FocusEvent) {
      const element = (event.target as HTMLElement).closest<HTMLElement>('[data-scroll-reveal]');
      if (!element) return;
      element.removeAttribute('data-reveal-pending');
      observer.unobserve(element);
      element.getAnimations().forEach(animation => animation.finish());
    }
    preference.addEventListener('change', onPreferenceChange);
    document.addEventListener('focusin', onFocus);
    return () => {
      showAll();
      preference.removeEventListener('change', onPreferenceChange);
      document.removeEventListener('focusin', onFocus);
    };
  }, []);
  return null;
}
