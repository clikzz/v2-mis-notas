"use client"

import { useState, useEffect } from "react"
import { createClient } from "@/lib/client"
import type { Session, SupabaseClient } from "@supabase/supabase-js"

export function useSupabaseSession() {
  const [session, setSession] = useState<Session | null>(null)
  const [supabase, setSupabase] = useState<SupabaseClient | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const supabaseInstance = createClient()
    setSupabase(supabaseInstance)

    const {
      data: { subscription },
    } = supabaseInstance.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      setLoading(false)
    })

    supabaseInstance.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setLoading(false)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return { session, supabase, loading }
}

