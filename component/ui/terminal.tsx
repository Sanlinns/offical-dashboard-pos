"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type TerminalLine = {
  type: "command" | "output" | "success";
  content: string;
};

type TerminalProps = {
  commands: string[];
  outputs?: Record<number, string[]>;
  username?: string;
  className?: string;
  typingSpeed?: number;
  delayBetweenCommands?: number;
  initialDelay?: number;
  loop?: boolean;
  restartDelay?: number;
};

type TokenType =
  | "command"
  | "flag"
  | "string"
  | "number"
  | "operator"
  | "path"
  | "default";

type Token = {
  type: TokenType;
  value: string;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function useInView(ref: React.RefObject<HTMLElement | null>, once = true) {
  const [inView, setInView] = useState(false);
  const triggered = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || (once && triggered.current)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          setInView(true);

          if (once) {
            triggered.current = true;
            observer.disconnect();
          }
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, once]);

  return inView;
}

function tokenizeCommand(text: string): Token[] {
  const tokens: Token[] = [];
  const words = text.split(/(\s+)/);
  let isFirstWord = true;

  for (const word of words) {
    if (/^\s+$/.test(word)) {
      tokens.push({ type: "default", value: word });
      continue;
    }

    if (word.startsWith("--") || word.startsWith("-")) {
      tokens.push({ type: "flag", value: word });
      isFirstWord = false;
      continue;
    }

    if (/^["'].*["']$/.test(word)) {
      tokens.push({ type: "string", value: word });
      isFirstWord = false;
      continue;
    }

    if (/^\d+$/.test(word)) {
      tokens.push({ type: "number", value: word });
      isFirstWord = false;
      continue;
    }

    if (/^[|>&<]+$/.test(word)) {
      tokens.push({ type: "operator", value: word });
      isFirstWord = true;
      continue;
    }

    if (word.includes("/") || word.startsWith(".") || word.startsWith("~")) {
      tokens.push({ type: "path", value: word });
      isFirstWord = false;
      continue;
    }

    if (isFirstWord) {
      tokens.push({ type: "command", value: word });
      isFirstWord = false;
      continue;
    }

    tokens.push({ type: "default", value: word });
  }

  return tokens;
}

const tokenColors: Record<TokenType, string> = {
  command: "text-emerald-400",
  flag: "text-sky-400",
  string: "text-amber-300",
  number: "text-purple-400",
  operator: "text-red-400",
  path: "text-cyan-300",
  default: "text-neutral-300",
};

function SyntaxHighlightedText({ text }: { text: string }) {
  const tokens = tokenizeCommand(text);

  return (
    <>
      {tokens.map((token, index) => (
        <span
          key={`${token.value}-${index}`}
          className={tokenColors[token.type]}
        >
          {token.value}
        </span>
      ))}
    </>
  );
}

export function Terminal({
  commands,
  outputs = {},
  username = "sakura-pos",
  className,
  typingSpeed = 38,
  delayBetweenCommands = 900,
  initialDelay = 400,
  loop = true,
  restartDelay = 1800,
}: TerminalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const inView = useInView(containerRef, true);

  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [currentText, setCurrentText] = useState("");
  const [commandIndex, setCommandIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [outputIndex, setOutputIndex] = useState(-1);
  const [cursorVisible, setCursorVisible] = useState(true);

  const [phase, setPhase] = useState<
    | "idle"
    | "typing"
    | "executing"
    | "outputting"
    | "pausing"
    | "done"
    | "restarting"
  >("idle");

  const currentCommand = commands[commandIndex] ?? "";

  const currentOutputs = useMemo(() => {
    return outputs[commandIndex] ?? [];
  }, [outputs, commandIndex]);

  const isLastCommand = commandIndex === commands.length - 1;

  const resetTerminal = () => {
    setLines([]);
    setCurrentText("");
    setCommandIndex(0);
    setCharIndex(0);
    setOutputIndex(-1);
  };

  useEffect(() => {
    if (!inView) return;
    if (phase !== "idle") return;

    const timer = window.setTimeout(() => {
      setPhase("typing");
    }, initialDelay);

    return () => window.clearTimeout(timer);
  }, [inView, phase, initialDelay]);

  useEffect(() => {
    if (phase !== "typing") return;

    if (charIndex < currentCommand.length) {
      const timer = window.setTimeout(() => {
        setCurrentText(currentCommand.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, typingSpeed + Math.random() * 25);

      return () => window.clearTimeout(timer);
    }

    const timer = window.setTimeout(() => {
      setPhase("executing");
    }, 120);

    return () => window.clearTimeout(timer);
  }, [phase, charIndex, currentCommand, typingSpeed]);

  useEffect(() => {
    if (phase !== "executing") return;

    setLines((prev) => [
      ...prev,
      {
        type: "command",
        content: currentCommand,
      },
    ]);

    setCurrentText("");

    if (currentOutputs.length > 0) {
      setOutputIndex(0);
      setPhase("outputting");
      return;
    }

    if (isLastCommand) {
      setLines((prev) => [
        ...prev,
        {
          type: "success",
          content: "✔ POS workflow complete",
        },
      ]);
      setPhase("done");
      return;
    }

    setPhase("pausing");
  }, [phase, currentCommand, currentOutputs.length, isLastCommand]);

  useEffect(() => {
    if (phase !== "outputting") return;

    if (outputIndex >= 0 && outputIndex < currentOutputs.length) {
      const timer = window.setTimeout(() => {
        setLines((prev) => [
          ...prev,
          {
            type: "output",
            content: currentOutputs[outputIndex],
          },
        ]);

        setOutputIndex((prev) => prev + 1);
      }, 160);

      return () => window.clearTimeout(timer);
    }

    if (outputIndex >= currentOutputs.length) {
      const timer = window.setTimeout(() => {
        if (isLastCommand) {
          setLines((prev) => [
            ...prev,
            {
              type: "success",
              content: "✔ POS workflow complete",
            },
          ]);
          setPhase("done");
          return;
        }

        setPhase("pausing");
      }, 350);

      return () => window.clearTimeout(timer);
    }
  }, [phase, outputIndex, currentOutputs, isLastCommand]);

  useEffect(() => {
    if (phase !== "pausing") return;

    const timer = window.setTimeout(() => {
      setCommandIndex((prev) => prev + 1);
      setCharIndex(0);
      setOutputIndex(-1);
      setPhase("typing");
    }, delayBetweenCommands);

    return () => window.clearTimeout(timer);
  }, [phase, delayBetweenCommands]);

  useEffect(() => {
    if (phase !== "done") return;

    if (!loop) return;

    const timer = window.setTimeout(() => {
      setPhase("restarting");
    }, restartDelay);

    return () => window.clearTimeout(timer);
  }, [phase, loop, restartDelay]);

  useEffect(() => {
    if (phase !== "restarting") return;

    resetTerminal();

    const timer = window.setTimeout(() => {
      setPhase("typing");
    }, 350);

    return () => window.clearTimeout(timer);
  }, [phase]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!contentRef.current) return;
    contentRef.current.scrollTop = contentRef.current.scrollHeight;
  }, [lines, currentText, phase]);

  const prompt = (
    <span className="text-neutral-500">
      <span className="text-sky-400">{username}</span>
      <span className="text-emerald-500">:</span>
      <span className="text-sky-300">~</span>
      <span className="text-neutral-500">$</span>{" "}
    </span>
  );

  return (
    <div
      ref={containerRef}
      className={cn("w-full font-mono text-xs", className)}
    >
      <div className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 shadow-xl">
        <div className="flex items-center gap-2 border-b border-white/10 bg-neutral-900 px-4 py-3.5">
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>

          <div className="flex-1 text-center">
            <span className="truncate text-sm font-black tracking-wide text-neutral-100 md:text-base">
              POS Live Activity — bash
            </span>
          </div>

          <div className="w-[52px]" />
        </div>

        <div
          ref={contentRef}
          className="h-64 overflow-y-auto p-4 font-mono scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-transparent"
        >
          {lines.map((line, index) => (
            <div
              key={`${line.content}-${index}`}
              className="whitespace-pre-wrap leading-relaxed"
            >
              {line.type === "command" ? (
                <span>
                  {prompt}
                  <SyntaxHighlightedText text={line.content} />
                </span>
              ) : (
                <span
                  className={
                    line.type === "success" || line.content.startsWith("✔")
                      ? "text-emerald-400"
                      : line.content.startsWith("⚠")
                        ? "text-amber-300"
                        : "text-neutral-400"
                  }
                >
                  {line.content}
                </span>
              )}
            </div>
          ))}

          {phase === "typing" && (
            <div className="whitespace-pre-wrap leading-relaxed">
              {prompt}
              <SyntaxHighlightedText text={currentText} />
              <span className="ml-0.5 inline-block h-4 w-2 bg-neutral-300 align-middle" />
            </div>
          )}

          {phase !== "typing" && phase !== "restarting" && (
            <div className="whitespace-pre-wrap leading-relaxed">
              {prompt}
              <span
                className={cn(
                  "inline-block h-4 w-2 bg-neutral-300 align-middle transition-opacity duration-100",
                  !cursorVisible && "opacity-0"
                )}
              />
            </div>
          )}

          {phase === "restarting" && (
            <div className="text-neutral-500">restarting workflow...</div>
          )}
        </div>
      </div>
    </div>
  );
}