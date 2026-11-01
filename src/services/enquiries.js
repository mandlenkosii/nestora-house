/**
 * Enquiry submission service.
 *
 * DEMONSTRATION ONLY: submissions are kept in memory for this browser session.
 * Each function is async and returns a saved record, so they can be swapped
 * for Supabase calls later without touching the form components, e.g.:
 *
 *   const { data, error } = await supabase.from('quote_requests').insert(payload).select().single()
 *
 * (uploading inspiration images to a storage bucket first).
 */

const store = {
  quoteRequests: [],
  tradeEnquiries: [],
  contactMessages: [],
  newsletter: [],
}

const delay = (ms = 700) => new Promise((resolve) => setTimeout(resolve, ms))

function save(table, prefix, payload) {
  const record = {
    id: `${prefix}-${Date.now().toString(36).toUpperCase()}`,
    createdAt: new Date().toISOString(),
    ...payload,
  }
  store[table].push(record)
  if (import.meta.env.DEV) console.info(`[demo] saved to ${table}`, record)
  return record
}

export async function submitQuoteRequest(values) {
  await delay()
  // Files cannot be persisted in demo mode; keep their metadata only.
  const { images = [], ...rest } = values
  return save('quoteRequests', 'NHQ', {
    ...rest,
    images: images.map(({ file }) => ({ name: file.name, size: file.size, type: file.type })),
  })
}

export async function submitTradeEnquiry(values) {
  await delay()
  return save('tradeEnquiries', 'NHT', values)
}

export async function submitContactMessage(values) {
  await delay()
  return save('contactMessages', 'NHC', values)
}

export async function subscribeToNewsletter(email) {
  await delay(500)
  return save('newsletter', 'NHN', { email })
}

export function getDemoSubmissions() {
  return store
}
