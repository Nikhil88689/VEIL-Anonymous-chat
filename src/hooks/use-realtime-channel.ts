"use client";

import type { RealtimeChannel } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

import { subscribeToChannel, type RealtimeStatus } from "@/lib/supabase/realtime";

export function useRealtimeChannel(channel: RealtimeChannel | null) {
  const [status, setStatus] = useState<RealtimeStatus>("CLOSED");

  useEffect(() => {
    if (!channel) {
      return undefined;
    }

    return subscribeToChannel(channel, setStatus);
  }, [channel]);

  return channel ? status : "CLOSED";
}
