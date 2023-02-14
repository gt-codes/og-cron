import { GetServerSideProps } from 'next';

export const getServerSideProps = async (context: GetServerSideProps) => {
	const { req, res } = context as any;

	// Access response headers
	const headers = req.headers;
	console.log({ headers });

	return {
		props: {
			geo: headers['x-geo'],
		},
	};
};

export default function Home({ geo }: { geo: string }) {
	return (
		<div>
			<h1>Config</h1>
			<h1>{geo}</h1>
		</div>
	);
}
