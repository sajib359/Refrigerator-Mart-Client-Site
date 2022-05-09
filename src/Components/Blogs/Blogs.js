import React from 'react';

const Blogs = () => {
    return (
        <div>
             <h1 className="text-5xl font-bold bg-gray-400 w-fit mx-auto p-4 mt-10">
          Question & Answering Section
        </h1>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12  rounded-2xl p-5 ">
                <div className="w-full shadow-xl pb-5">
                    <div>
                        <h2 className="bg-black text-orange-500 text-2xl font-bold mb-5 p-3">Whats the Difference between Javascript and Nodejs?</h2>
                    </div>
                    <div>
                       <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--BH56MCru--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/5d3cfo8napwojszd9my6.png" alt="" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mt-5">Javascript :</h3>
                        <ul className="font-serif mt-5">
                            <li>Javascript can only be run in the browsers.</li>
                            <li>Javascript is a programming language that is used for writing scripts on the website. </li>
                            <li>Javascript is capable enough to add HTML and play with the DOM. </li>
                            <li>Javascript is used in frontend development.</li>
                            <li>It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++. </li>
                        </ul>

                        <h3 className="text-2xl font-bold mt-5">Nodejs :</h3>
                        <ul className="font-serif mt-5">
                            <li>We can run Javascript outside the browser with the help of NodeJS.</li>
                            <li>NodeJS is a Javascript runtime environment.</li>
                            <li>Nodejs is used in server-side development.</li>
                            <li>Nodejs does not have capability to add HTML tags.</li>
                            <li>Nodejs is written in C, C++ and Javascript.</li>
                        </ul>
                    </div>
                </div>

                <div className='w-full shadow-xl pb-5'>
                    <div className="bg-black text-orange-500 text-2xl font-bold mb-5 p-3">When should you use Nodejs and when should you use Mongodb?</div>
                    <div>
                        <img className='mx-auto' src="https://javabeat.net/wp-content/uploads/2015/04/node-js-mongodb.png" alt="" />
                    </div>
                    <div>
                        <p className='mt-5 p-5 font-mono '>MongoDB is the Document Oriented Database. MongoDB stores a lot of data in JSON format. MongoDB's performance is much faster than any RDBMS. MongoDB is designed to work with Large Scale Data. MongoDB can work on multiple servers. MongoDB can handle a large number of access requests easily. => There are 2 design patterns in programming. One is asynchronous programming and the other is synchronous programming. Node JS by default follows the Asynchronous pattern. That is, it does not wait for a task to be completed. In the meantime, NodeJS started another job. That’s why we use nodeJS.</p>
                    </div>
                </div>

                <div className="w-full shadow-xl pb-5">
                    <div>
                        <h2 className="bg-black text-orange-500 text-2xl font-bold mb-5 p-3">Whats the Difference between SQL and NOSQL?</h2>
                    </div>
                    <div>
                       <img className='mx-auto' src="https://webteamconcept.com/wp-content/uploads/2021/11/SQL-Vs-NoSQL1.png" alt="" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mt-5">SQL :</h3>
                        <ul className="font-serif mt-5">
                            <li>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</li>
                            <li>These databases have fixed or static or predefined schema </li>
                            <li>These databases are not suited for hierarchical data storage.Javascript is capable enough to add HTML and play with the DOM. </li>
                            <li>These databases are best suited for complex queries</li>
                            <li>Vertically Scalable</li>
                        </ul>

                        <h3 className="text-2xl font-bold mt-5">NoSQL :</h3>
                        <ul className="font-serif mt-5">
                            <li>Non-relational or distributed database system.</li>
                            <li>They have dynamic schema</li>
                            <li>These databases are best suited for hierarchical data storage.</li>
                            <li>These databases are not so good for complex queries</li>
                            <li>Horizontally scalable</li>
                        </ul>
                    </div>
                </div>

                <div className="w-full shadow-xl pb-5">
                    <div>
                        <h2 className="bg-black text-orange-500 text-2xl font-bold mb-5 p-3">Whats is the purpose of Jwt and how does it works?</h2>
                    </div>
                    <div>
                       <img src="https://curity.io/images/resources/architect/api-security/jwt.jpg" alt="" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mt-5"> Jwt:</h3>
                            <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
            

                        <h3 className="text-2xl font-bold mt-5">How does JWT works :</h3>
                        <p>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                        A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.</p>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Blogs;