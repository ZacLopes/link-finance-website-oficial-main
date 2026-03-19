import { createClient as createSupabaseClient } from "@supabase/supabase-js"

export const createSupabaseServerClient = () => {
  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl) {
    console.error("SUPABASE_URL não está definida nas variáveis de ambiente")
    throw new Error("SUPABASE_URL is required")
  }

  if (!supabaseKey) {
    console.error("SUPABASE_SERVICE_ROLE_KEY não está definida nas variáveis de ambiente")
    throw new Error("SUPABASE_SERVICE_ROLE_KEY is required")
  }

  // Validar formato da URL
  try {
    new URL(supabaseUrl)
  } catch {
    console.error("SUPABASE_URL tem formato inválido:", supabaseUrl)
    throw new Error("SUPABASE_URL has invalid format")
  }

  // Validar se a chave parece válida (deve ser uma string longa)
  if (supabaseKey.length < 50) {
    console.error("SUPABASE_SERVICE_ROLE_KEY parece inválida (muito curta)")
    throw new Error("SUPABASE_SERVICE_ROLE_KEY appears to be invalid")
  }

  try {
    return createSupabaseClient(supabaseUrl, supabaseKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false,
      },
      global: {
        headers: {
          "Content-Type": "application/json",
        },
      },
    })
  } catch (error) {
    console.error("Erro ao criar cliente Supabase:", error)
    throw error
  }
}

export const createClient = createSupabaseServerClient
