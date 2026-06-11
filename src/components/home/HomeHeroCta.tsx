"use client";

import { MessageCircle } from "lucide-react";
import { PrimaryButton, SecondaryButton } from "./ui";
import { openLiveChat } from "@/components/livechat/LiveChat";
import {
  LeadFormModalHost,
  useLeadFormModal,
} from "@/components/shared/PageCtaButtons";

export function HomeHeroCta() {
  const leadForm = useLeadFormModal();

  return (
    <>
      <LeadFormModalHost leadForm={leadForm} />
      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap">
        <PrimaryButton
          onClick={leadForm.openLeadForm}
          className="h-[50px] w-full whitespace-nowrap px-8 font-semibold sm:w-auto"
        >
          Get Started Now
        </PrimaryButton>
        <SecondaryButton
          onClick={openLiveChat}
          className="h-[50px] w-full gap-2 whitespace-nowrap px-8 font-semibold sm:w-auto"
        >
          <MessageCircle className="h-5 w-5 shrink-0" aria-hidden />
          Chat with an Expert
        </SecondaryButton>
      </div>
    </>
  );
}
