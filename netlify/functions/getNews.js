import { neon } from '@netlify/neon';

export const handler = async (event, context) => {
  try {
    const sql = neon(process.env.NETLIFY_DATABASE_URL);
    const result = await sql`SELECT * FROM news ORDER BY date DESC`;

    return {
      statusCode: 200,
      body: JSON.stringify(result),
      headers: { 'Content-Type': 'application/json' }
    };
  } catch (error) {
    console.error('Database error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Database error' })
    };
  }
};
