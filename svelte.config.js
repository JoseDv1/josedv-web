import adapter from '@sveltejs/adapter-auto';

const config = {
	kit: {
		adapter: adapter(),
		alias: {
			'@firebase_app/*': './src/firebase/*',
			'@components/*': './src/components/*'
		}
	}
};

export default config;
