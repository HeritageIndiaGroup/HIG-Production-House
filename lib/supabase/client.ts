import { createBrowserClient } from "@supabase/ssr"

export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !key) {
    // Return a safe stub client to avoid crashes when env vars are missing
    const stub = {
      auth: {
        async getUser() {
          return { data: { user: null }, error: null } as const
        },
        async signInWithPassword() {
          return { data: null, error: new Error("Supabase not configured.") } as const
        },
        async signOut() {
          return { error: null } as const
        },
      },
      from() {
        const builder: any = {
          select: async () => ({ data: [], error: null }),
          eq: () => builder,
          gte: () => builder,
          order: () => builder,
          insert: async () => ({ data: null, error: null }),
          update: async () => ({ data: null, error: null }),
          delete: async () => ({ data: null, error: null }),
        }
        return builder
      },
      storage: {
        from() {
          return {
            upload: async () => ({ data: null, error: new Error("Supabase not configured.") }),
            getPublicUrl: () => ({ data: { publicUrl: "" } }),
          }
        },
      },
    }
    return stub as any
  }

  return createBrowserClient(url, key)
}
