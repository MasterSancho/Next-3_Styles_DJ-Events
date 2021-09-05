import { API_URL } from 'config';

export default async (req, res) => {
 if (req.method === 'POST') {
  const { identifier, password } = req.body;

  const starapiRes = await fetch(`${API_URL}/auth/local`, {
   method: 'POST',
   headers: {
    'Content-Type': 'application/json',
   },
   body: JSON.stringify({
    identifier,
    password,
   }),
  });

  const data = await starapiRes.json();

  console.log(data.jwt);

  if (starapiRes.ok) {
   // @todo - Set cookie
   res.status(200).json({ user: data.user });
  } else {
   res
    .status(data.statusCode)
    .json({ message: data.message[0].messages[0].message });
  }
 } else {
  res.setHeader('Allow', ['POST']);
  res.status(405).json({ message: `Method ${req.method} not allowed` });
 }
};
