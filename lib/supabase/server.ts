import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

/**
 * Especially important if using Fluid compute: Don't put this client in a
 * global variable. Always create a new client within each function when using
 * it.
 */
export async function createClient() {
  const cookieStore = await cookies()

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  // If Supabase env is not configured, return a safe stub to avoid build-time crashes
  if (!url || !key) {
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

  return createServerClient(url, key, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
        } catch {
          // The "setAll" method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
    },
  })
}
