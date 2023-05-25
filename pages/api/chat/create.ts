import type { NextApiRequest, NextApiResponse } from 'next'
import { request } from 'services'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { message, userId, conversationId } = req.body
  try {
    const data = await request(
      `${process.env.NEXT_PUBLIC_CHAT_BOT_API_BASE_URL}/chat-messages`,
      {
        method: 'POST',
        headers: new Headers({
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_CHAT_BOT_API_KEY}`,
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
          inputs: {},
          query: message,
          response_mode: 'blocking',
          conversation_id: conversationId || null,
          user: userId
        })
      }
    )
    return res.status(200).json({ success: true, data })
  } catch (err) {
    console.log(err)
    return res.status(200).json({ success: false, data: {} })
  }
}
