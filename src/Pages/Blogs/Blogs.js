import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div tabIndex={0} className="w-4/5 mx-auto my-5 p-5 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Difference between SQL and NoSQL
                </div>
                <div className="collapse-content">
                    <p> The five critical differences between SQL vs NoSQL are: <br />

                        SQL databases are relational, NoSQL databases are non-relational. SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                </div>
            </div>
            <div tabIndex={0} className="w-4/5 mx-auto my-5 p-5 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is JWT, and how does it work?
                </div>
                <div className="collapse-content">
                    <p> JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved. The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information. How it works? Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key. User sign-in using username and password or google/facebook. Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. Resource server then verifies the authenticity of the token using the secret salt/ public key.</p>
                </div>
            </div>
            <div tabIndex={0} className="w-4/5 mx-auto my-5 p-5 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is the difference between javascript and NodeJS?
                </div>
                <div className="collapse-content">
                    <p> JavaScript is a lightweight, object-oriented scripting language, used to build dynamic HTML pages with interactive effects on web pages. The code can only be executed and run in a web browser, as it is an interpreted scripting language. It is commonly used for game and mobile application development.
                        It was originally known as LiveScript which was later renamed and has an extension of .js. Programming Language C has highly influenced JavaScript’s syntax. <br />
                        <br /> Node JS is cross-platform, which comes with a large number of modules and is used in web creation. It can also be used to create a variety of applications like web apps, chat apps, command-line apps, etc. With a filename extension of .js, Node JS is used majorly in building network programs.
                        Node.js enables JavaScript code to run outside the browser. It provides a cross-platform runtime environment with event-driven, non-blocking I/O for creating highly scalable server-side JavaScript applications.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="w-4/5 mx-auto my-5 p-5 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How does NodeJS handle multiple requests at the same time?
                </div>
                <div className="collapse-content">
                    <p>Given a NodeJS application, since Node is single threaded, say if processing involves a Promise.all that takes 8 seconds, does this mean that the client request that comes after this request would need to wait for eight seconds? No. NodeJS event loop is single threaded. The entire server architecture for NodeJS is not single threaded. <br />
                        <br /> Before getting into the Node server architecture, to take a look at typical multithreaded request response model, the web server would have multiple threads and when concurrent requests get to the webserver, the webserver picks threadOne from the threadPool and threadOne processes requestOne and responds to clientOne and when the second request comes in, the web server picks up the second thread from the threadPool and picks up requestTwo and processes it and responds to clientTwo. threadOne is responsible for all kinds of operations that requestOne demanded including doing any blocking IO operations. <br />
                        <br /> The fact that the thread needs to wait for blocking IO operations is what makes it inefficient. With this kind of a model, the webserver is only able to serve as much requests as there are threads in the thread pool. <br />
                        <br />NodeJS Web Server maintains a limited Thread Pool to provide services to client requests. Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue . NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded. In other words, EventLoop is the listener for the EventQueue. So, we have an event queue where the requests are being placed and we have an event loop listening to these requests in the event queue. What happens next? <br />
                        The listener(the event loop) processes the request and if it is able to process the request without needing any blocking IO operations, then the event loop would itself process the request and sends the response back to the client by itself. If the current request uses blocking IO operations, the event loop sees whether there are threads available in the thread pool, picks up one thread from the thread pool and assigns the particular request to the picked thread. That thread does the blocking IO operations and sends the response back to the event loop and once the response gets to the event loop, the event loop sends the response back to the client. <br />
                        <br /> How is NodeJS better than traditional multithreaded request response model? With traditional multithreaded request/response model, every client gets a different thread where as with NodeJS, the simpler request are all handled directly by the EventLoop. This is an optimization of thread pool resources and there is no overhead of creating the threads for every client request.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;