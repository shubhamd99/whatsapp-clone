export default {
	id: '1',
	users: [{
		id: 'u1',
		name: 'Vadim',
		imageUri: 'https://gravatar.com/avatar/296ec2ca57578ee89e043f4b662d9e91?s=400&d=robohash&r=x',
	}, {
		id: 'u2',
		name: 'Shubham',
		imageUri: 'https://gravatar.com/avatar/ea23d75af7f782778fb7327d38f677b3?s=400&d=robohash&r=x',
	}],
	messages: [{
		id: 'm1',
		content: 'OK',
		createdAt: '2021-02-10T12:48:00.000Z',
		user: {
			id: 'u1',
			name: 'Vadim',
		},
	}, {
		id: 'm2',
		content: 'Lorem Ipsum, preparing for the stream now.',
		createdAt: '2021-02-03T14:49:00.000Z',
		user: {
			id: 'u2',
			name: 'Shubham',
		},
	}, {
		id: 'm4',
		content: 'It is a bit tough, as I have 2 specializations.',
		createdAt: '2021-01-03T14:50:00.000Z',
		user: {
			id: 'u1',
			name: 'Vadim',
		},
	}, {
		id: 'm3',
		content: 'What about you?',
		createdAt: '2021-01-03T14:49:40.000Z',
		user: {
			id: 'u2',
			name: 'Shubham',
		},
	}, {
		id: 'm6',
		content: 'I am good, good',
		createdAt: '2021-02-03T14:49:00.000Z',
		user: {
			id: 'u2',
			name: 'Shubham',
		},
	}, {
		id: 'm8',
		content: 'How are you, Shubham!',
		createdAt: '2020-12-03T14:53:00.000Z',
		user: {
			id: 'u1',
			name: 'Vadim',
		},
	}]
}