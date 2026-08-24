"use client";

import { motion } from "motion/react";

type IsometricBoxProps = {
  className?: string;
  size?: number;
  darkMode?: boolean;
  opened?: boolean;
};

export function IsometricBox({
  className,
  size = 285,
  darkMode = true,
  opened = true,
}: IsometricBoxProps) {
  const stroke = darkMode
    ? "rgba(255,255,255,0.11)"
    : "rgba(15,23,42,0.18)";

  const strokeSoft = darkMode
    ? "rgba(255,255,255,0.07)"
    : "rgba(15,23,42,0.12)";

  const outerStroke = darkMode
    ? "rgba(255,255,255,0.1)"
    : "rgba(15,23,42,0.18)";

  const leftFace = darkMode ? "#0c0d10" : "#eef2f7";
  const rightFace = darkMode ? "#111317" : "#e8edf5";
  const lidFace = darkMode ? "#17191d" : "#ffffff";
  const lidFaceSoft = darkMode ? "#101216" : "#eef2f7";
  const inner = darkMode ? "#030405" : "#dbe4ef";

  const dash = darkMode
    ? "rgba(255,255,255,0.07)"
    : "rgba(100,116,139,0.18)";

  return (
    <div className={className}>
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 320 290"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full overflow-visible"
        initial={false}
        animate={opened ? "open" : "closed"}
      >
        <defs>
          <filter id="boxGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="14" />
          </filter>

          <filter id="softShadow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="8" />
          </filter>

          <linearGradient id="leftBoxFace" x1="90" y1="120" x2="135" y2="230">
            <stop offset="0%" stopColor={leftFace} />
            <stop offset="100%" stopColor={darkMode ? "#08090b" : "#e8edf5"} />
          </linearGradient>

          <linearGradient id="rightBoxFace" x1="230" y1="120" x2="185" y2="230">
            <stop offset="0%" stopColor={rightFace} />
            <stop offset="100%" stopColor={darkMode ? "#0a0b0d" : "#dde5ef"} />
          </linearGradient>

          <linearGradient id="lidGrad" x1="160" y1="26" x2="160" y2="112">
            <stop offset="0%" stopColor={lidFace} />
            <stop offset="100%" stopColor={lidFaceSoft} />
          </linearGradient>
        </defs>

        {/* soft background glow */}
        <motion.ellipse
          cx="160"
          cy="154"
          rx="86"
          ry="62"
          fill={
            darkMode
              ? "rgba(255,255,255,0.018)"
              : "rgba(255,255,255,0.55)"
          }
          filter="url(#boxGlow)"
          initial={{ opacity: 1 }}
          animate={
            opened
              ? { opacity: 0.95, scale: 1.06 }
              : { opacity: 0.45, scale: 0.92 }
          }
          transition={{ duration: 0.3 }}
        />

        {/* inner glow only when opened */}
        <motion.ellipse
          cx="160"
          cy="118"
          rx="44"
          ry="18"
          fill={
            darkMode
              ? "rgba(255,255,255,0.04)"
              : "rgba(251,191,36,0.18)"
          }
          filter="url(#boxGlow)"
          initial={{ opacity: 1 }}
          animate={
            opened
              ? { opacity: 1, scale: 1.05, y: -2 }
              : { opacity: 0, scale: 0.7, y: 6 }
          }
          transition={{ duration: 0.28 }}
        />

        {/* floor shadow */}
        <motion.ellipse
          cx="160"
          cy="244"
          rx="62"
          ry="12"
          fill={darkMode ? "rgba(0,0,0,0.34)" : "rgba(15,23,42,0.08)"}
          filter="url(#softShadow)"
          initial={{ opacity: 1 }}
          animate={
            opened
              ? { opacity: 0.75, scaleX: 1 }
              : { opacity: 0.5, scaleX: 0.92 }
          }
          transition={{ duration: 0.3 }}
        />

        <motion.g
          animate={opened ? { y: [0, -2, 0] } : { y: 0 }}
          transition={{
            duration: 4.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* opened lid */}
          <motion.g
            initial={false}
            animate={
              opened
                ? {
                    opacity: 1,
                    y: -42,
                    rotate: -1.5,
                    scale: 1,
                  }
                : {
                    opacity: 0,
                    y: -6,
                    rotate: 0,
                    scale: 0.92,
                  }
            }
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 18,
            }}
            style={{ transformOrigin: "160px 106px" }}
          >
            <path
              d="
                M160 40
                C166 40 172 42 178 45
                L234 75
                C241 79 245 83 245 88
                L245 95
                L160 140
                L75 95
                L75 88
                C75 83 79 79 86 75
                L142 45
                C148 42 154 40 160 40Z
              "
              fill="url(#lidGrad)"
              stroke={outerStroke}
              strokeWidth="2.1"
              strokeLinejoin="round"
            />

            <path
              d="M160 49L233 87L160 126L87 87L160 49Z"
              fill={darkMode ? "#111316" : "#f8fafc"}
              stroke={strokeSoft}
              strokeWidth="1.4"
              strokeLinejoin="round"
            />

            <path
              d="
                M160 68
                C164 68 168 69 172 71
                L202 87
                C206 89 206 92 202 94
                L172 110
                C168 112 164 113 160 113
                C156 113 152 112 148 110
                L118 94
                C114 92 114 89 118 87
                L148 71
                C152 69 156 68 160 68Z
              "
              fill={inner}
              stroke={stroke}
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </motion.g>

          {/* closed lid: only visible when box is closed */}
          <motion.g
            initial={false}
            animate={
              opened
                ? { opacity: 0, y: -6, scale: 0.96 }
                : { opacity: 1, y: 0, scale: 1 }
            }
            transition={{ duration: 0.2 }}
          >
            <path
              d="
                M160 64
                C166 64 172 66 178 69
                L236 100
                C243 104 247 108 247 114
                L247 122
                L160 168
                L73 122
                L73 114
                C73 108 77 104 84 100
                L142 69
                C148 66 154 64 160 64Z
              "
              fill="url(#lidGrad)"
              stroke={stroke}
              strokeWidth="2"
              strokeLinejoin="round"
            />

            <path
              d="M160 74L235 113L160 153L85 113L160 74Z"
              fill={darkMode ? "#111316" : "#f8fafc"}
              stroke={strokeSoft}
              strokeWidth="1.5"
              strokeLinejoin="round"
            />

            <path
              d="
                M160 93
                C164 93 168 94 172 96
                L202 112
                C206 114 206 117 202 119
                L172 135
                C168 137 164 138 160 138
                C156 138 152 137 148 135
                L118 119
                C114 117 114 114 118 112
                L148 96
                C152 94 156 93 160 93Z
              "
              fill={inner}
              stroke={stroke}
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </motion.g>

          {/* opened box top rim: no inside panel */}
          <motion.g
            initial={false}
            animate={
              opened
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: -6, scale: 0.96 }
            }
            transition={{ duration: 0.2 }}
          >
            {/* outer lip outline only */}
            <path
              d="
                M160 64
                C166 64 172 66 178 69
                L236 100
                C243 104 247 108 247 114
                L247 122
                L160 168
                L73 122
                L73 114
                C73 108 77 104 84 100
                L142 69
                C148 66 154 64 160 64Z
              "
              fill="none"
              stroke={stroke}
              strokeWidth="2"
              strokeLinejoin="round"
            />

            {/* inner opening only */}
            {/* <path
              d="
                M160 93
                C164 93 168 94 172 96
                L202 112
                C206 114 206 117 202 119
                L172 135
                C168 137 164 138 160 138
                C156 138 152 137 148 135
                L118 119
                C114 117 114 114 118 112
                L148 96
                C152 94 156 93 160 93Z
              "
              fill={darkMode ? "#020304" : "#dbe4ef"}
              stroke={stroke}
              strokeWidth="1.6"
              strokeLinejoin="round"
            /> */}

            {/* inside depth shadow */}
            <path
              d="M118 112L160 134L202 112L160 96Z"
              fill={darkMode ? "rgba(0,0,0,0.72)" : "rgba(15,23,42,0.08)"}
            />
          </motion.g>

          {/* left body */}
          <path
            d="
              M73 122
              L160 168
              L160 230
              C160 236 155 240 149 237
              L84 204
              C77 200 73 194 73 186
              Z
            "
            fill="url(#leftBoxFace)"
            stroke={stroke}
            strokeWidth="2"
            strokeLinejoin="round"
          />

          {/* right body */}
          <path
            d="
              M247 122
              L160 168
              L160 230
              C160 236 165 240 171 237
              L236 204
              C243 200 247 194 247 186
              Z
            "
            fill="url(#rightBoxFace)"
            stroke={stroke}
            strokeWidth="2"
            strokeLinejoin="round"
          />

          {/* outer rounded shell left */}
          <path
            d="
              M78 118
              C69 121 64 127 64 137
              L64 183
              C64 196 71 206 83 212
              L96 219
            "
            fill="none"
            stroke={outerStroke}
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* outer rounded shell right */}
          <path
            d="
              M242 118
              C251 121 256 127 256 137
              L256 183
              C256 196 249 206 237 212
              L224 219
            "
            fill="none"
            stroke={outerStroke}
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* bottom rounded edge */}
          <path
            d="
              M96 219
              L148 245
              C156 249 164 249 172 245
              L224 219
            "
            fill="none"
            stroke={outerStroke}
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* top body edge */}
          <path
            d="M73 122L160 168L247 122"
            stroke={
              darkMode
                ? "rgba(255,255,255,0.075)"
                : "rgba(255,255,255,0.75)"
            }
            strokeWidth="1.1"
          />

          {/* center vertical edge */}
          <path
            d="M160 168V234"
            stroke={
              darkMode
                ? "rgba(255,255,255,0.085)"
                : "rgba(100,116,139,0.22)"
            }
            strokeWidth="1.2"
          />

          {/* dashed lines left */}
          <path
            d="M91 136V198"
            stroke={dash}
            strokeWidth="1"
            strokeDasharray="4 5"
          />
          <path
            d="M107 144V207"
            stroke={dash}
            strokeWidth="1"
            strokeDasharray="4 5"
          />
          <path
            d="M123 152V216"
            stroke={dash}
            strokeWidth="1"
            strokeDasharray="4 5"
          />
          <path
            d="M140 160V225"
            stroke={dash}
            strokeWidth="1"
            strokeDasharray="4 5"
          />

          {/* dashed lines right */}
          <path
            d="M180 160V225"
            stroke={dash}
            strokeWidth="1"
            strokeDasharray="4 5"
          />
          <path
            d="M197 152V216"
            stroke={dash}
            strokeWidth="1"
            strokeDasharray="4 5"
          />
          <path
            d="M213 144V207"
            stroke={dash}
            strokeWidth="1"
            strokeDasharray="4 5"
          />
          <path
            d="M229 136V198"
            stroke={dash}
            strokeWidth="1"
            strokeDasharray="4 5"
          />
        </motion.g>
      </motion.svg>
    </div>
  );
}
