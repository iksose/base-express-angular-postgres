export const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/todo';

export const connectionObject = {
    host: 'localhost', // server name or IP address;
    port: 5432,
    database: 'todo'
};
