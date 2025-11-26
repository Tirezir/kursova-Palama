import { neon } from '@netlify/neon';

export const handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { title, content, date, image } = JSON.parse(event.body);
    const sql = neon(process.env.NETLIFY_DATABASE_URL);

    const result = await sql`
      INSERT INTO news (title, content, date, image)
      VALUES (${title}, ${content}, ${date}, ${image})
      RETURNING *
    `;

    return {
      statusCode: 201,
      body: JSON.stringify(result[0]),
      headers: { 'Content-Type': 'application/json' }
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
