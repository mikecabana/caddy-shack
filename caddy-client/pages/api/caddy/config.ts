import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const url = 'http://caddy-api:5000';
	try {
		const response = await axios.get(url);
		const data = response.data;
		res.status(200).json({ data });
	} catch (e) {
		res.status(400).json({ e });
	}
};
