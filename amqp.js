var amqp = require('amqplib/callback_api')

amqp.connect('amqp://localhost', function(err, conn) {
	if (!conn)
		console.log(err)
	
	conn.createChannel( function(err , ch){
		
		var q = 'task queue';
		var workerId = process.argv[2]

		ch.assertQueue(q , {durable: false});

		ch.consume( q, function( msg ){//consume takes three args -> queue, callback , ack/noAck options
			
			console.log( `${workerId} worker recieved -->  ${msg.content.toString()}` );//since the message is in raw binary form
			
		} , {noAck: true})
		
	}) 
});