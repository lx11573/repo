module.exports = {
	branches: [
		'master',
		{ name: 'alpha', prerelease: true },
		{ name: 'beta', prerelease: true },
		{ name: 'RC', prerelease: true },
	],
	plugins: [
		[
			'@semantic-release/commit-analyzer',
			{
				preset: 'angular',
				releaseRules: [
					{
						type: 'refactor',
						release: 'patch',
					},
					{
						type: 'style',
						release: 'patch',
					},
					{
						type: 'chore',
						release: 'patch',
					},
					{
						type: 'perf',
						release: 'patch',
					},
					{
						type: 'build',
						release: 'patch',
					},
					{
						type: 'ci',
						release: 'patch',
					},
				],
			},
		],
		[
			'@semantic-release/release-notes-generator',
			{
				config: 'conventional-changelog-cmyr-config',
			},
		],
		[
			'@semantic-release/changelog',
			{
				changelogFile: 'CHANGELOG.md',
			},
		],
		'@semantic-release/npm',
		[
			'@semantic-release/git',
			{
				assets: ['package.json', 'CHANGELOG.md'],
				message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
			},
		],
	],
};
