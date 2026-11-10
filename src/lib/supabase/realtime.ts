import type { RealtimeChannel } from "@supabase/supabase-js";

export type RealtimeStatus = "SUBSCRIBED" | "TIMED_OUT" | "CLOSED" | "CHANNEL_ERROR";

export function subscribeToChannel(
  channel: RealtimeChannel,
  onStatus: (status: RealtimeStatus) => void,
) {
  channel.subscribe(onStatus);

  return () => {
    void channel.unsubscribe();
  };
}
