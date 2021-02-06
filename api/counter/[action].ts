import type { APIRequest } from 'aleph/types.ts'

export default async function handler(req: APIRequest) {
  let count = window.$count || 0

  switch (req.params.action) {
    case 'increase':
      count++
      window.$count = count
      req.json({ count })
      break
    case 'decrease':
      count--
      window.$count = count
      req.json({ count })
      break
    default:
      req.status(400).json({
        error: 'UnknownAction',
        status: 400,
        message: `undefined action '${req.params.action}'`
      })
      break
  }
}
