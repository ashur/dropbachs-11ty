module.exports = function( config )
{
	config.addFilter( 'scenes_json', scenes =>
	{
		let sceneData = scenes.map( scene =>
		{
			return {
				title: scene.data.title,
				images: scene.data.images,
			}; 
		});

		return JSON.stringify( sceneData, undefined, 4 );
	});

	return {
		dir: {
			input: 'src',
			output: 'dist',
		},

		templateFormats: ['njk', 'md'],
	};
};
