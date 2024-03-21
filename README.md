URL Shortener Service
This is a URL shortening service built using Node.js and Express.js.

Description
The service allows users to generate short, easy-to-share URLs from long URLs. It also provides analytics for each shortened URL, including the total number of clicks and visit history.

Features
-Shorten long URLs into unique short links.
-Retrieve the original long URL from the short link.
-View analytics for each shortened URL, including total clicks and visit history.

Installation
-Clone this repository to your local machine.
-Install dependencies using npm install.
-Configure MongoDB connection in mongodb/connection.js.
-Start the server using npm start.

Endpoints

POST /url: Generate a new short URL from a long URL.
GET /url/:shortId: Retrieve the original long URL from the short URL.
GET /url/analytics/:shortId: View analytics for the shortened URL, including total clicks and visit history.

Technologies Used

Node.js
Express.js
MongoDB
Mongoose
Shortid

Contributors
Adeeb Khan
adeebkhan4200@gmail.com
