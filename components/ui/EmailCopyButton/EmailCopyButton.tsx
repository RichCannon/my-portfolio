"use client";

import React, { memo, useEffect, useState } from "react";
import ButtonBorderMagic from "../ButtonBorderMagic";
import Lottie from "react-lottie";
import confettiData from "@/data/confetti.json";
import { IoCopyOutline } from "react-icons/io5";
import { MY_EMAIL } from "@/data";

const EmailCopyButton = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(MY_EMAIL);
  };

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [copied]);

  return (
    <div className={``}>
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Lottie
          options={{
            loop: copied,
            autoplay: copied,
            animationData: confettiData,
          }}
        />
      </div>
      <ButtonBorderMagic
        disabled={copied}
        onClick={handleCopy}
        className="!bg-[#161a31]"
        icon={<IoCopyOutline />}
      >
        {copied ? "Email copied!" : "Copy my email"}
      </ButtonBorderMagic>
    </div>
  );
};

export default memo(EmailCopyButton);
