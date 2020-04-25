import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
	type: 'mysql',
	host: 'localhost',
	port: 8889,
	username: 'root',
	password: 'root',
	database: 'nuxtnestshop',
	entities: [__dirname + '/**/*.entity.{js,ts}'],
	synchronize: false,
	migrationsRun: false,
	migrations: [__dirname + '/migrations/*.{js,ts}'],
	cli: {
		migrationsDir: 'src/migrations',
	}
};

export = config;