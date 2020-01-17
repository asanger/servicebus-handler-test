require('dotenv').config();

const path = require('path');

// Service bus
const servicebus = require('servicebus');
const registerHandlers = require('servicebus-register-handlers');

// Run the server!
const start = async (): Promise<void> => {
    const bus = await servicebus.bus({
        user: process.env.RABBITMQ_USER,
        password: process.env.RABBITMQ_PASS,
        host: process.env.RABBITMQ_HOST,
        port: process.env.RABBITMQ_PORT,
    });

    // Register service bus handlers
    registerHandlers({
        bus,
        handleError: function handleError(msg, err) {
            msg.handle.reject(function() {
                throw err;
            });
        },
        path: path.resolve(process.cwd(), 'src/handlers'),
    });
};

start();

export {};
