// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
	production: false,
	isMockEnabled: true, // You have to switch this, when your real back-end is done
	authTokenKey: 'authce9d77b308c149d5992a80073637e4d5',
	AWS: {
		s3: {
			REGION: 'eu-central-1',
			BUCKET: 'dev-bp-dealerupload-bucket'
		},
		apiGateway: {
			REGION: 'eu-central-1',
			URL: 'https://m9o8tz6aqc.execute-api.eu-central-1.amazonaws.com/dev/'
		},
		cognito: {
			REGION: 'eu-central-1',
			USER_POOL_ID: 'eu-central-1_IAplXTGT0',
			APP_CLIENT_ID: '1ga8h3lp6sr7de5d756og3t46a',
			IDENTITY_POOL_ID: 'eu-central-1:37414467-a595-4293-8863-77f6c7a19a26'
		}
	}
};
