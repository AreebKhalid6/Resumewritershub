"use client";

import { useState } from "react";
import { PrimaryButton, SecondaryButton } from "@/components/home/ui";
import { openLiveChat } from "@/components/livechat/LiveChat";
import { LeadFormModal } from "./LeadFormModal";

export function useLeadFormModal() {
  const [isOpen, setIsOpen] = useState(false);

  return {
    isOpen,
    openLeadForm: () => setIsOpen(true),
    closeLeadForm: () => setIsOpen(false),
  };
}

type LeadFormModalState = ReturnType<typeof useLeadFormModal>;

export function LeadFormModalHost({ leadForm }: { leadForm: LeadFormModalState }) {
  return (
    <LeadFormModal open={leadForm.isOpen} onClose={leadForm.closeLeadForm} />
  );
}

type PageCtaButtonsProps = {
  className?: string;
  centered?: boolean;
  leadForm?: LeadFormModalState;
  primaryLabel?: string;
  secondaryLabel?: string;
};

export function PageCtaButtons({
  className = "",
  centered = false,
  leadForm: externalLeadForm,
  primaryLabel = "Get Started Now",
  secondaryLabel = "Chat Now",
}: PageCtaButtonsProps) {
  const internalLeadForm = useLeadFormModal();
  const leadForm = externalLeadForm ?? internalLeadForm;
  const ownsModal = !externalLeadForm;

  return (
    <>
      {ownsModal && (
        <LeadFormModal open={leadForm.isOpen} onClose={leadForm.closeLeadForm} />
      )}
      <div
        className={`flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center ${centered ? "sm:justify-center" : ""} ${className}`}
      >
        <PrimaryButton
          onClick={leadForm.openLeadForm}
          className="h-[50px] w-full px-8 font-semibold sm:w-auto"
        >
          {primaryLabel}
        </PrimaryButton>
        <SecondaryButton
          onClick={openLiveChat}
          className="h-[50px] w-full px-8 font-semibold sm:w-auto"
        >
          {secondaryLabel}
        </SecondaryButton>
      </div>
    </>
  );
}

export function GetStartedButton({
  className = "h-[50px] px-8 font-semibold",
  leadForm,
  label = "Get Started Now",
}: {
  className?: string;
  leadForm?: LeadFormModalState;
  label?: string;
}) {
  const internalLeadForm = useLeadFormModal();
  const activeLeadForm = leadForm ?? internalLeadForm;
  const ownsModal = !leadForm;

  return (
    <>
      {ownsModal && (
        <LeadFormModal
          open={activeLeadForm.isOpen}
          onClose={activeLeadForm.closeLeadForm}
        />
      )}
      <PrimaryButton onClick={activeLeadForm.openLeadForm} className={className}>
        {label}
      </PrimaryButton>
    </>
  );
}

/** @deprecated Use GetStartedButton */
export const GetResumeButton = GetStartedButton;
