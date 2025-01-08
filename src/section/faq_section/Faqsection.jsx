import React, { useEffect } from 'react'
import './faqsection.css'
import gsap from 'gsap'

const Faqsection = () => {
  useEffect(() => {
    // Enable hardware acceleration for GSAP animations
    gsap.config({
      force3D: true
    });

    // Use will-change to hint browser about animations
    gsap.set(['.faq-svg', '.faq-svg-text', '.faq-svg path', '.faq-svg circle'], {
      willChange: 'transform'
    });

    // Set initial states for SVG elements
    gsap.set('.faq-svg path:not([mask])', { 
      strokeDasharray: function(i, el) {
        return el.getTotalLength();
      },
      strokeDashoffset: function(i, el) {
        return -el.getTotalLength();
      }
    });

    gsap.set('.faq-svg-text', { 
      strokeDasharray: function(i, el) {
        return el.getTotalLength();
      },
      strokeDashoffset: function(i, el) {
        return -el.getTotalLength();
      },
      fill: 'none'
    });

    gsap.set('.faq-svg circle', { 
      scale: 0,
    });

    gsap.set('.portfolio-svg path[mask]', { 
      opacity: 0
    });

    // Set initial state for faqs and gradient
    gsap.set(['.faqs', '.faqgradient'], {
      y: 100,
      opacity: 0
    });

    // Animation timeline
    const faqSvgTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.faq-section',
        start: 'top center',
        toggleActions: 'play none none reverse'
      }
    });

    faqSvgTl
      .to('.faq-svg path:not([mask])', {
        strokeDashoffset: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.2
      })
      .to('.faq-svg-text', {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: "power2.out",
        stagger: {
          each: 0.1,
          from: "start"
        }
      }, "-=0.5")
      .to('.faq-svg circle', {
        scale: 1,
        duration: 1,
        ease: "back.out(1.7)",
      }, "-=0.5")
      .to('.faq-svg path[mask]', {
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
        stagger: {
          amount: 0.5,
          from: "start"
        }
      }, "-=0.5")
      .to('.faq-svg-text', {
        fill: 'white',
        fillOpacity: 0.25,
        duration: 0.5,
        ease: "power2.inOut",
        stagger: {
          each: 0.1,
          from: "start"
        }
      }, "-=0.5")
      .to(['.faqs'], {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1
      }, "-=0.5")
      .to(['.faqgradient'], {
        y: 0,
        opacity: 0.3,   
        duration: 1,
        ease: "power3.out",
        stagger: 0.1
      }, "-=0.5");

    return () => {
      // Cleanup will-change
      gsap.set(['.faq-svg', '.faq-svg-text', '.faq-svg path', '.faq-svg circle'], {
        willChange: 'auto'
      });
      gsap.set(['.faqs', '.faqgradient'], { clearProps: 'all' });
      faqSvgTl.kill();
    };
  }, []);

  return (
    <section className="faqsection">
        <svg className='faq-svg' width="482" height="126" viewBox="0 0 482 126" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="path-1-outside-1_379_2" maskUnits="userSpaceOnUse" x="76.0002" y="89" width="107" height="28" fill="black">
<rect fill="white" x="76.0002" y="89" width="107" height="28"/>
<path d="M81.5347 91.368H100.383V97.096H84.3187C83.7107 97.096 83.4227 97.416 83.4227 98.056V100.392H100.287V105.768H83.4227V113H77.6307V95.336C77.6307 92.648 78.9427 91.368 81.5347 91.368ZM120.435 94.888L128.243 112.04C128.403 112.392 128.499 112.68 128.595 113H122.067C122.003 112.712 121.907 112.488 121.811 112.264L120.659 109.64H107.859L106.739 112.232C106.643 112.488 106.547 112.744 106.515 113H99.8269C99.9229 112.68 100.019 112.392 100.179 112.04L107.923 94.888C109.139 92.2 111.091 90.888 114.195 90.888C117.203 90.888 119.219 92.2 120.435 94.888ZM109.971 104.872H118.547L115.219 97.128C115.027 96.648 114.643 96.456 114.227 96.456C113.843 96.456 113.491 96.616 113.267 97.128L109.971 104.872ZM144.065 112.424H138.913C135.169 112.424 132.385 111.112 130.465 109C128.769 107.144 127.745 104.68 127.745 101.896C127.745 98.856 129.057 96.072 131.137 94.152C132.993 92.424 135.521 91.368 138.913 91.368H144.065C147.457 91.368 149.985 92.424 151.841 94.152C153.921 96.072 155.233 98.856 155.233 101.896C155.233 104.968 153.889 108.296 151.169 110.152L155.073 114.472C155.329 114.728 155.521 115.048 155.649 115.304H147.841C147.745 115.144 147.585 114.92 145.377 112.36C144.961 112.392 144.513 112.424 144.065 112.424ZM144.193 97.096H138.753C136.897 97.096 135.745 97.608 134.881 98.44C133.921 99.304 133.345 100.584 133.345 101.96C133.345 103.208 133.825 104.36 134.625 105.224C135.521 106.216 136.833 106.824 138.753 106.824H144.193C146.113 106.824 147.425 106.216 148.321 105.224C149.121 104.36 149.601 103.208 149.601 101.96C149.601 100.584 149.025 99.304 148.065 98.44C147.201 97.608 146.049 97.096 144.193 97.096ZM180.193 91.368V97.096H164.641C163.937 97.096 163.553 97.256 163.297 97.512C163.009 97.8 162.849 98.184 162.849 98.632C162.849 99.112 163.073 99.528 163.393 99.784C163.649 100.008 163.969 100.104 164.641 100.104H174.145C176.577 100.104 178.209 100.872 179.361 102.056C180.513 103.24 181.217 104.84 181.217 106.536C181.217 108.104 180.609 109.608 179.617 110.76C178.433 112.136 176.705 113 174.145 113H157.377V107.464H173.121C174.017 107.464 174.465 107.272 174.753 106.92C174.977 106.664 175.105 106.312 175.105 105.928C175.105 105.48 174.945 105.064 174.657 104.776C174.369 104.456 173.953 104.296 173.121 104.296H164.321C161.441 104.296 159.777 103.528 158.625 102.344C157.473 101.16 156.801 99.592 156.801 97.832C156.801 96.104 157.505 94.504 158.657 93.32C159.809 92.136 161.441 91.368 164.321 91.368H180.193Z"/>
</mask>
<path className='faq-svg-text' d="M100.383 91.368H101.383V90.368H100.383V91.368ZM100.383 97.096V98.096H101.383V97.096H100.383ZM83.4227 100.392H82.4227V101.392H83.4227V100.392ZM100.287 100.392H101.287V99.392H100.287V100.392ZM100.287 105.768V106.768H101.287V105.768H100.287ZM83.4227 105.768V104.768H82.4227V105.768H83.4227ZM83.4227 113V114H84.4227V113H83.4227ZM77.6307 113H76.6307V114H77.6307V113ZM81.5347 92.368H100.383V90.368H81.5347V92.368ZM99.3827 91.368V97.096H101.383V91.368H99.3827ZM100.383 96.096H84.3187V98.096H100.383V96.096ZM84.3187 96.096C83.8468 96.096 83.3099 96.2231 82.9086 96.657C82.5215 97.0755 82.4227 97.6069 82.4227 98.056H84.4227C84.4227 97.9675 84.433 97.9299 84.4339 97.927C84.434 97.9268 84.4309 97.9369 84.4216 97.9538C84.4121 97.971 84.3975 97.9926 84.3768 98.015C84.3559 98.0376 84.3328 98.0567 84.3096 98.0716C84.2868 98.0863 84.2681 98.0944 84.2572 98.0982C84.2375 98.1052 84.2513 98.096 84.3187 98.096V96.096ZM82.4227 98.056V100.392H84.4227V98.056H82.4227ZM83.4227 101.392H100.287V99.392H83.4227V101.392ZM99.2867 100.392V105.768H101.287V100.392H99.2867ZM100.287 104.768H83.4227V106.768H100.287V104.768ZM82.4227 105.768V113H84.4227V105.768H82.4227ZM83.4227 112H77.6307V114H83.4227V112ZM78.6307 113V95.336H76.6307V113H78.6307ZM78.6307 95.336C78.6307 94.14 78.9225 93.4488 79.3199 93.0489C79.7162 92.6503 80.3897 92.368 81.5347 92.368V90.368C80.0877 90.368 78.8092 90.7257 77.9014 91.6391C76.9948 92.5512 76.6307 93.8439 76.6307 95.336H78.6307ZM120.435 94.888L128.243 112.04L128.595 113V114H129.939L129.553 112.713L128.595 113ZM122.067 113L121.091 113.217L121.265 114H122.067V113ZM121.811 112.264L122.73 111.87L122.727 111.862L121.811 112.264ZM120.659 109.64L121.575 109.238L121.312 108.64H120.659V109.64ZM107.859 109.64V108.64H107.202L106.941 109.243L107.859 109.64ZM106.739 112.232L105.821 111.835L105.811 111.858L105.803 111.881L106.739 112.232ZM106.515 113V114H107.398L107.507 113.124L106.515 113ZM99.8269 113L98.8691 112.713L98.4829 114H99.8269V113ZM100.179 112.04L101.089 112.454L101.09 112.451L100.179 112.04ZM107.923 94.888L107.012 94.4758L107.012 94.4765L107.923 94.888ZM109.971 104.872L109.051 104.48L108.459 105.872H109.971V104.872ZM118.547 104.872V105.872H120.065L119.466 104.477L118.547 104.872ZM115.219 97.128L114.29 97.4994L114.295 97.5112L114.3 97.5228L115.219 97.128ZM113.267 97.128L112.351 96.7272L112.347 96.7364L113.267 97.128ZM119.525 95.3023L127.333 112.454L129.153 111.626L121.345 94.4737L119.525 95.3023ZM127.333 112.454C127.467 112.749 127.548 112.99 127.637 113.287L129.553 112.713C129.45 112.37 129.339 112.035 129.153 111.626L127.333 112.454ZM128.595 112H122.067V114H128.595V112ZM123.043 112.783C122.957 112.394 122.825 112.092 122.73 111.87L120.892 112.658C120.989 112.884 121.049 113.03 121.091 113.217L123.043 112.783ZM122.727 111.862L121.575 109.238L119.743 110.042L120.895 112.666L122.727 111.862ZM120.659 108.64H107.859V110.64H120.659V108.64ZM106.941 109.243L105.821 111.835L107.657 112.629L108.777 110.037L106.941 109.243ZM105.803 111.881C105.716 112.113 105.572 112.482 105.523 112.876L107.507 113.124C107.522 113.006 107.57 112.863 107.675 112.583L105.803 111.881ZM106.515 112H99.8269V114H106.515V112ZM100.785 113.287C100.874 112.99 100.955 112.749 101.089 112.454L99.2686 111.626C99.0828 112.035 98.9719 112.37 98.8691 112.713L100.785 113.287ZM101.09 112.451L108.834 95.2995L107.012 94.4765L99.2675 111.629L101.09 112.451ZM108.834 95.3002C109.384 94.0853 110.065 93.2554 110.894 92.72C111.723 92.1845 112.786 91.888 114.195 91.888V89.888C112.5 89.888 111.035 90.2475 109.808 91.04C108.581 91.8326 107.678 93.0027 107.012 94.4758L108.834 95.3002ZM114.195 91.888C115.551 91.888 116.609 92.1823 117.446 92.721C118.283 93.2595 118.977 94.0923 119.524 95.3002L121.346 94.4758C120.676 92.9957 119.755 91.8285 118.528 91.039C117.301 90.2497 115.847 89.888 114.195 89.888V91.888ZM109.971 105.872H118.547V103.872H109.971V105.872ZM119.466 104.477L116.138 96.7332L114.3 97.5228L117.628 105.267L119.466 104.477ZM116.147 96.7566C115.783 95.8468 114.995 95.456 114.227 95.456V97.456C114.282 97.456 114.29 97.4683 114.275 97.4589C114.268 97.4546 114.265 97.4506 114.265 97.4513C114.266 97.4524 114.277 97.4654 114.29 97.4994L116.147 96.7566ZM114.227 95.456C113.895 95.456 113.513 95.5263 113.151 95.7555C112.788 95.9861 112.526 96.3261 112.351 96.7272L114.183 97.5288C114.208 97.4712 114.228 97.4446 114.234 97.4366C114.24 97.4298 114.236 97.4357 114.222 97.4445C114.209 97.4532 114.197 97.4571 114.193 97.4582C114.19 97.4589 114.2 97.456 114.227 97.456V95.456ZM112.347 96.7364L109.051 104.48L110.891 105.264L114.187 97.5196L112.347 96.7364ZM130.465 109L131.205 108.327L131.203 108.325L130.465 109ZM131.137 94.152L131.815 94.8868L131.819 94.8839L131.137 94.152ZM151.841 94.152L151.16 94.8839L151.163 94.8868L151.841 94.152ZM151.169 110.152L150.606 109.326L149.659 109.972L150.427 110.822L151.169 110.152ZM155.073 114.472L154.331 115.142L154.348 115.161L154.366 115.179L155.073 114.472ZM155.649 115.304V116.304H157.267L156.544 114.857L155.649 115.304ZM147.841 115.304L146.984 115.818L147.275 116.304H147.841V115.304ZM145.377 112.36L146.134 111.707L145.804 111.324L145.3 111.363L145.377 112.36ZM134.881 98.44L135.55 99.1833L135.563 99.172L135.575 99.1603L134.881 98.44ZM134.625 105.224L135.367 104.554L135.359 104.545L134.625 105.224ZM148.321 105.224L147.587 104.545L147.579 104.554L148.321 105.224ZM148.065 98.44L147.372 99.1603L147.384 99.172L147.396 99.1833L148.065 98.44ZM144.065 111.424H138.913V113.424H144.065V111.424ZM138.913 111.424C135.425 111.424 132.919 110.212 131.205 108.327L129.725 109.673C131.852 112.012 134.913 113.424 138.913 113.424V111.424ZM131.203 108.325C129.673 106.651 128.745 104.426 128.745 101.896H126.745C126.745 104.934 127.865 107.637 129.727 109.675L131.203 108.325ZM128.745 101.896C128.745 99.1459 129.932 96.625 131.815 94.8868L130.459 93.4172C128.182 95.519 126.745 98.5661 126.745 101.896H128.745ZM131.819 94.8839C133.471 93.3455 135.747 92.368 138.913 92.368V90.368C135.295 90.368 132.515 91.5025 130.456 93.4201L131.819 94.8839ZM138.913 92.368H144.065V90.368H138.913V92.368ZM144.065 92.368C147.231 92.368 149.507 93.3455 151.16 94.8839L152.523 93.4201C150.463 91.5025 147.683 90.368 144.065 90.368V92.368ZM151.163 94.8868C153.046 96.625 154.233 99.1459 154.233 101.896H156.233C156.233 98.5661 154.796 95.519 152.519 93.4172L151.163 94.8868ZM154.233 101.896C154.233 104.715 152.994 107.696 150.606 109.326L151.733 110.978C154.784 108.896 156.233 105.221 156.233 101.896H154.233ZM150.427 110.822L154.331 115.142L155.815 113.802L151.911 109.482L150.427 110.822ZM154.366 115.179C154.515 115.328 154.65 115.542 154.755 115.751L156.544 114.857C156.392 114.554 156.143 114.128 155.78 113.765L154.366 115.179ZM155.649 114.304H147.841V116.304H155.649V114.304ZM148.699 114.79C148.608 114.638 148.501 114.492 148.171 114.094C147.836 113.69 147.238 112.987 146.134 111.707L144.62 113.013C145.724 114.293 146.31 114.982 146.631 115.37C146.958 115.764 146.978 115.81 146.984 115.818L148.699 114.79ZM145.3 111.363C144.884 111.395 144.471 111.424 144.065 111.424V113.424C144.556 113.424 145.038 113.389 145.454 113.357L145.3 111.363ZM144.193 96.096H138.753V98.096H144.193V96.096ZM138.753 96.096C136.682 96.096 135.267 96.68 134.188 97.7197L135.575 99.1603C136.223 98.536 137.112 98.096 138.753 98.096V96.096ZM134.212 97.6967C133.037 98.7547 132.345 100.307 132.345 101.96H134.345C134.345 100.861 134.806 99.8533 135.55 99.1833L134.212 97.6967ZM132.345 101.96C132.345 103.468 132.926 104.861 133.891 105.903L135.359 104.545C134.724 103.859 134.345 102.948 134.345 101.96H132.345ZM133.883 105.894C134.999 107.13 136.6 107.824 138.753 107.824V105.824C137.067 105.824 136.043 105.302 135.367 104.554L133.883 105.894ZM138.753 107.824H144.193V105.824H138.753V107.824ZM144.193 107.824C146.347 107.824 147.947 107.13 149.063 105.894L147.579 104.554C146.903 105.302 145.88 105.824 144.193 105.824V107.824ZM149.055 105.903C150.02 104.861 150.601 103.468 150.601 101.96H148.601C148.601 102.948 148.222 103.859 147.587 104.545L149.055 105.903ZM150.601 101.96C150.601 100.307 149.91 98.7547 148.734 97.6967L147.396 99.1833C148.141 99.8533 148.601 100.861 148.601 101.96H150.601ZM148.759 97.7197C147.679 96.68 146.264 96.096 144.193 96.096V98.096C145.834 98.096 146.723 98.536 147.372 99.1603L148.759 97.7197ZM180.193 91.368H181.193V90.368H180.193V91.368ZM180.193 97.096V98.096H181.193V97.096H180.193ZM163.297 97.512L162.59 96.8049L162.59 96.8049L163.297 97.512ZM163.393 99.784L164.051 99.0314L164.035 99.0169L164.018 99.0031L163.393 99.784ZM179.361 102.056L178.644 102.753L178.644 102.753L179.361 102.056ZM179.617 110.76L178.859 110.107L178.859 110.108L179.617 110.76ZM157.377 113H156.377V114H157.377V113ZM157.377 107.464V106.464H156.377V107.464H157.377ZM174.753 106.92L174 106.261L173.989 106.274L173.979 106.287L174.753 106.92ZM174.657 104.776L173.914 105.445L173.931 105.465L173.95 105.483L174.657 104.776ZM158.625 102.344L159.342 101.647L159.342 101.647L158.625 102.344ZM158.657 93.32L159.374 94.0174L159.374 94.0174L158.657 93.32ZM179.193 91.368V97.096H181.193V91.368H179.193ZM180.193 96.096H164.641V98.096H180.193V96.096ZM164.641 96.096C163.783 96.096 163.1 96.2952 162.59 96.8049L164.004 98.2191C164.02 98.2034 164.045 98.1807 164.117 98.1567C164.202 98.1285 164.36 98.096 164.641 98.096V96.096ZM162.59 96.8049C162.106 97.289 161.849 97.9312 161.849 98.632H163.849C163.849 98.4368 163.912 98.311 164.004 98.2191L162.59 96.8049ZM161.849 98.632C161.849 99.4267 162.22 100.126 162.768 100.565L164.018 99.0031C163.926 98.93 163.849 98.7973 163.849 98.632H161.849ZM162.734 100.537C163.266 101.001 163.888 101.104 164.641 101.104V99.104C164.342 99.104 164.193 99.0814 164.117 99.0614C164.067 99.0481 164.061 99.0402 164.051 99.0314L162.734 100.537ZM164.641 101.104H174.145V99.104H164.641V101.104ZM174.145 101.104C176.339 101.104 177.702 101.785 178.644 102.753L180.078 101.359C178.716 99.9595 176.815 99.104 174.145 99.104V101.104ZM178.644 102.753C179.627 103.764 180.217 105.118 180.217 106.536H182.217C182.217 104.562 181.398 102.716 180.078 101.359L178.644 102.753ZM180.217 106.536C180.217 107.847 179.707 109.123 178.859 110.107L180.375 111.413C181.511 110.093 182.217 108.361 182.217 106.536H180.217ZM178.859 110.108C177.886 111.238 176.448 112 174.145 112V114C176.961 114 178.979 113.034 180.375 111.412L178.859 110.108ZM174.145 112H157.377V114H174.145V112ZM158.377 113V107.464H156.377V113H158.377ZM157.377 108.464H173.121V106.464H157.377V108.464ZM173.121 108.464C174.15 108.464 174.964 108.242 175.527 107.553L173.979 106.287C173.953 106.319 173.922 106.349 173.831 106.381C173.718 106.421 173.507 106.464 173.121 106.464V108.464ZM175.506 107.579C175.904 107.123 176.105 106.53 176.105 105.928H174.105C174.105 106.094 174.05 106.205 174 106.261L175.506 107.579ZM176.105 105.928C176.105 105.249 175.862 104.567 175.364 104.069L173.95 105.483C174.028 105.561 174.105 105.711 174.105 105.928H176.105ZM175.4 104.107C174.834 103.478 174.07 103.296 173.121 103.296V105.296C173.483 105.296 173.677 105.332 173.781 105.366C173.862 105.393 173.888 105.417 173.914 105.445L175.4 104.107ZM173.121 103.296H164.321V105.296H173.121V103.296ZM164.321 103.296C161.641 103.296 160.262 102.592 159.342 101.647L157.908 103.041C159.292 104.464 161.24 105.296 164.321 105.296V103.296ZM159.342 101.647C158.368 100.646 157.801 99.3262 157.801 97.832H155.801C155.801 99.8578 156.578 101.674 157.908 103.041L159.342 101.647ZM157.801 97.832C157.801 96.3798 158.392 95.026 159.374 94.0174L157.94 92.6226C156.618 93.982 155.801 95.8282 155.801 97.832H157.801ZM159.374 94.0174C160.296 93.0689 161.646 92.368 164.321 92.368V90.368C161.236 90.368 159.321 91.2031 157.94 92.6226L159.374 94.0174ZM164.321 92.368H180.193V90.368H164.321V92.368Z" fill="white" fill-opacity="0.25" mask="url(#path-1-outside-1_379_2)"/>
<circle cx="217" cy="102" r="5" transform="rotate(-90 217 102)" fill="#D9D9D9" fill-opacity="0.3"/>
<circle cx="217" cy="102" r="4.5" transform="rotate(-90 217 102)" stroke="white" stroke-opacity="0.25"/>
<path d="M221.5 102.09L299.41 102.09C303.05 102.09 306 99.1397 306 95.4999V95.4999V81.4999V81.4999C306 77.0816 309.582 73.4999 314 73.4999L345 73.4999C349.419 73.4999 353 77.0816 353 81.4999V81.4999V95.4999V95.4999C353 99.1397 355.951 102.09 359.591 102.09H408.41C414.535 102.09 419.5 97.125 419.5 90.9999V90.9999V9.49988C419.5 4.80546 423.306 0.999878 428 0.999878V0.999878L505 0.999878" stroke="white" stroke-opacity="0.25"/>
        </svg>

      <div className="faqs" style={{ WebkitTapHighlightColor: 'transparent' }}>
        <details className="faq" style={{ WebkitTapHighlightColor: 'transparent' }}>
          <summary 
            className="question" 
            style={{ 
              WebkitTapHighlightColor: 'transparent',
              outline: 'none',
              userSelect: 'none',
              WebkitUserSelect: 'none',
              MozUserSelect: 'none',
              msUserSelect: 'none',
              touchAction: 'manipulation'
            }}
          >
            <span>What technologies and platforms do you specialize in?</span>
            <svg 
              className="faq-icon" 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                className="vertical" 
                d="M10 2L10 18" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round"
              />
              <path 
                className="horizontal" 
                d="M2 10L18 10" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round"
              />
            </svg>
          </summary>
          <p className="answer">
            We specialize in HTML, CSS, JavaScript, React, WordPress, Shopify and other popular web development frameworks and platforms.
          </p>
        </details>

        <details className="faq">
          <summary className="question">
            <span>I don't know which website platform is best for me. What should I do?</span>
            <svg className="faq-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="vertical" d="M10 2L10 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path className="horizontal" d="M2 10L18 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </summary>
          <p className="answer">We assess your needs, goals, and budget to recommend the best website platform for you, ensuring it aligns with your business objectives and technical requirements.</p>
        </details>

        <details className="faq">
          <summary className="question">
            <span>How long does it take to develop a website?</span>
            <svg className="faq-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="vertical" d="M10 2L10 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path className="horizontal" d="M2 10L18 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </summary>
          <p className="answer">The timeline varies depending on the complexity and requirements of the project. A typical website can take anywhere from 1 to 12 weeks.</p>
        </details>

        <details className="faq">
          <summary className="question">
            <span>How do you charge for your services?</span>
            <svg className="faq-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="vertical" d="M10 2L10 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path className="horizontal" d="M2 10L18 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </summary>
          <p className="answer">After an initial meeting to understand your needs and project requirements, we provide a tailored proposal.</p>
        </details>

        <details className="faq">
          <summary className="question">
            <span>How do you ensure the security of my website?</span>
            <svg className="faq-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="vertical" d="M10 2L10 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path className="horizontal" d="M2 10L18 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </summary>
          <p className="answer">We implement best security practices including SSL, regular updates, security audits, and firewalls to protect your website.</p>
        </details>

        <details className="faq">
          <summary className="question">
            <span>How do you handle project changes or scope creep?</span>
            <svg className="faq-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="vertical" d="M10 2L10 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path className="horizontal" d="M2 10L18 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </summary>
          <p className="answer">We follow a flexible approach to handle changes, and any scope changes will be discussed and approved before implementation.</p>
        </details>

        <details className="faq">
          <summary className="question">
            <span>Do you offer post-launch support and maintenance?</span>
            <svg className="faq-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="vertical" d="M10 2L10 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path className="horizontal" d="M2 10L18 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </summary>
          <p className="answer">Yes, we provide free 6 months ongoing support and maintenance to ensure your website runs smoothly. Our support services include bug fixes, security monitoring, and performance optimization.</p>
        </details>
      </div>
      <div className="faqgradient"></div>
    </section>
  )
}

export default Faqsection