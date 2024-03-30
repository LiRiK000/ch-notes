"use client";

import { useEffect, useState } from "react";

import { CoverImageModal } from "../modals/CoverImageModal";
import { SettingsModal } from "../modals/SettingsModal";
import { TrashModal } from "../modals/TrashModal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <SettingsModal />
      <CoverImageModal />
      <TrashModal />
    </>
  );
};
