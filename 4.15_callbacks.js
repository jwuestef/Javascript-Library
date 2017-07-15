Functions can make it easier to deal with discontinuous events. 

For example, suppose there is a sequence that begins with a user interaction, making a request 
of the server, and finally displaying the server’s response. 

The naïve way to write that would be:
	request = prepare_the_request( );
	response = send_request_synchronously(request);
	display(response);
The problem with this approach is that a synchronous request over the network will leave the client in a frozen state. 

If either the network or the server is slow, the degradation in responsiveness will be unacceptable.
A better approach is to make an asynchronous request, providing a callback function that will be invoked when the server’s response is received. 

An asynchronous function returns immediately, so the client isn’t blocked:
	request = prepare_the_request( );
	send_request_asynchronously(request, function (response) {
		display(response);
	});
We pass a function parameter to the send_request_asynchronously function that will be called when the response is available.