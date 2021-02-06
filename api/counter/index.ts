import type { APIRequest } from 'aleph/types.ts'

export default async function handler(req: APIRequest) {
  req.json({ count: window.$count || 0 })
}
