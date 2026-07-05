// "use client"

// import Link from "next/link"
// import { ChevronRight } from "lucide-react"
// import { motion } from "motion/react"

// type AnimatedBadgeProps = {
//   text?: string
//   color?: string 
//   href?: string 
// }

// function hexToRgba(hexColor: string, alpha: number): string {
//   const hex = hexColor.replace("#", "")
//   if (hex.length === 3) {
//     const r = parseInt(hex[0] + hex[0], 16)
//     const g = parseInt(hex[1] + hex[1], 16)
//     const b = parseInt(hex[2] + hex[2], 16)
//     return `rgba(${r}, ${g}, ${b}, ${alpha})`
//   }
//   if (hex.length === 6) {
//     const r = parseInt(hex.substring(0, 2), 16)
//     const g = parseInt(hex.substring(2, 4), 16)
//     const b = parseInt(hex.substring(4, 6), 16)
//     return `rgba(${r}, ${g}, ${b}, ${alpha})`
//   }
//   return hexColor
// }

// const AnimatedBadge = ({
//   color = "#22d3ee",

// }: AnimatedBadgeProps) => {
//   const content = (
//     <motion.div
//       initial={false}
//       whileInView={{
//         opacity: 1,
//         y: 0,
//         filter: "blur(0px)",
//       }}
//       transition={{
//         duration: 0.3,
//         delay: 0.1,
//         ease: "easeInOut",
//       }}
//       viewport={{ once: true }}
//     >
//       <div className="pointer-events-none absolute inset-x-0 bottom-full h-20 w-[165px]">
//         <svg
//           className="h-full w-full"
//           width="100%"
//           height="100%"
//           viewBox="0 0 50 50"
//           fill="none"
//         >
//           <g mask="url(#ml-mask-1)">
//             <circle
//               className="multiline ml-light-1"
//               cx="0"
//               cy="0"
//               r="20"
//               fill="url(#ml-white-grad)"
//             />
//           </g>
//           <defs>
//             <mask id="ml-mask-1">
//               <path
//                 d="M 69 49.8 h -30 q -3 0 -3 -3 v -13 q 0 -3 -3 -3 h -23 q -3 0 -3 -3 v -13 q 0 -3 -3 -3 h -30"
//                 strokeWidth="0.6"
//                 stroke="white"
//               />
//             </mask>
//             <radialGradient id="ml-white-grad" fx="1">
//               <stop offset="0%" stopColor={color} />
//               <stop offset="20%" stopColor={color} />
//               <stop offset="100%" stopColor="transparent" />
//             </radialGradient>
//           </defs>
//         </svg>
//       </div>
//     </motion.div>
//   )
//   return (
//     <>
//           {content}
        
//       <style>
//         {`    
// .multiline {
//   offset-anchor: 10px 0px;
//   animation: multiline-animation-path;
//   animation-iteration-count: infinite;
//   animation-timing-function: linear;
//   animation-duration: 3s;
// }

// .ml-light-1 {
//   offset-path: path(
//     "M 69 49.8 h -30 q -3 0 -3 -3 v -13 q 0 -3 -3 -3 h -23 q -3 0 -3 -3 v -13 q 0 -3 -3 -3 h -50"
//   );
// }

// @keyframes multiline-animation-path {
//   0% {
//     offset-distance: 0%;
//   }
//   50% {
//     offset-distance: 100%;
//   }
//   100% {
//     offset-distance: 100%;
//   }
// }`}
//       </style>
//     </>
//   )
// }

// export default AnimatedBadge










"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { motion } from "motion/react"

type AnimatedBadgeProps = {
  text?: string
  color?: string 
  href?: string 
}

function hexToRgba(hexColor: string, alpha: number): string {
  const hex = hexColor.replace("#", "")
  if (hex.length === 3) {
    const r = parseInt(hex[0] + hex[0], 16)
    const g = parseInt(hex[1] + hex[1], 16)
    const b = parseInt(hex[2] + hex[2], 16)
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }
  if (hex.length === 6) {
    const r = parseInt(hex.substring(0, 2), 16)
    const g = parseInt(hex.substring(2, 4), 16)
    const b = parseInt(hex.substring(4, 6), 16)
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }
  return hexColor
}

const AnimatedBadge = ({
  color = "#22d3ee",

}: AnimatedBadgeProps) => {
  const content = (
    <motion.div
      initial={false}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.3,
        delay: 0.1,
        ease: "easeInOut",
      }}
      viewport={{ once: true }}
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-full h-20 w-[165px]">
        <svg
          className="h-full w-full"
          width="100%"
          height="100%"
          viewBox="0 0 50 50"
          fill="none"
        >
          <g mask="url(#ml-mask-1)">
            <circle
              className="multiline ml-light-1"
              cx="0"
              cy="0"
              r="20"
              fill="url(#ml-white-grad)"
            />
          </g>
          <defs>
            <mask id="ml-mask-1">
              <path
                d="M 69 59.8 h -30 q -3 0 -5 -3 v -20 q 0 -3 -3 -3 h -30 q -3 1 -3 -3 v -23 q 0 -3 -3 -3 h -20 v -20 q 15 -0 -3 "
                strokeWidth="0.8"
                stroke="white"
              />
            </mask>
            <radialGradient id="ml-white-grad" fx="1">
              <stop offset="0%" stopColor={color} />
              <stop offset="15%" stopColor={color} />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </motion.div>
  )
  return (
    <>
          {content}
        
      <style>
        {`    
.multiline {
  offset-anchor: 10px 0px;
  animation: multiline-animation-path;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-duration: 6s;
}

.ml-light-1 {
  offset-path: path(
    "M 25 49.8 h 14 q -3 0 -3 -3 v -13 q 0 -3 -3 -3 h -23 q -3 0 -3 -3 v -13 q 0 -3 -3 -3 h -50"
  );
}

@keyframes multiline-animation-path {
  0% {
    offset-distance: 0%;
  }
  50% {
    offset-distance: 100%;
  }
  100% {
    offset-distance: 100%;
  }
}`}
      </style>
    </>
  )
}

export default AnimatedBadge






