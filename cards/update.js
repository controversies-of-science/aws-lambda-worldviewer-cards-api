import { success, failure } from '../libs/response-lib';

const
	AWS = require('aws-sdk'), // eslint-disable-line import/no-extraneous-dependencies
	dynamoDb = new AWS.DynamoDB.DocumentClient();

AWS.config.update({region:'us-west-1'});

export const update = (event, context, callback) => {
	const slug = event.pathParameters.slug;
	const timestamp = new Date().toISOString();
	const data = JSON.parse(event.body);

	const params = {
		TableName: process.env.DYNAMODB_TABLE,
		Item: {
			slug: data.slug, // partition key

			shortSlug: data.shortSlug,
			cardName: data.cardName,
			cardSummary: data.cardSummary,
			cardCategory: data.cardCategory,
			text: data.text, // array of paragraphs
			cardAuthor: data.cardAuthor,
			gplusUrl: data.gplusUrl,
			publishDate: data.publishDate,
			updateDate: data.updateDate,
			images: data.images,
			timestamp,
		},
	};

	dynamoDb.put(params, (dbError) => {
		if (dbError) {
			console.error(dbError);
			callback(null, failure(dbError));
		} else {
			callback(null, success(params.Item));
		}
	});
};
