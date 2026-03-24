# Short Response Questions

Answer each question below in your own words. Aim for 3–5 sentences per answer. Be specific — use the exact terms and concepts from the lesson.

Your responses will each be evaluated out of 6 points. You can earn 3 points for writing quality and 3 points for the accuracy and precision of the technical content per question.

---

## Question 1:

Why is it unsafe to make requests to a third-party API (like Giphy) directly from frontend JavaScript code? What specific risk does this create, and how can a malicious user exploit it?

**Your answer here**:

---

Making requests to a third party API directly from frontend JavaScript is unsafe because sensitive data like an API key is exposed in the client side code. Since this code runs in the user’s browser, anyone can open developer tools and view or extract the key. This creates the risk of unauthorized use, where someone else can use your API key without permission.
A malicious user could copy the key and use it in their own scripts or applications to send many requests to the API. This could lead to exceeding rate limits or generating unexpected charges on your account. To avoid this, API calls that require authentication should be handled on a backend server where the key can be kept private.

## Question 2:

What is the proxy server strategy? How does it help avoid exposing API Keys in client-side code while still providing access to APIs that require keys?

**Your answer here**:

---

The proxy server strategy is when you route API requests through your own backend server instead of calling the third party API directly from the frontend. The frontend sends a request to your server, and then your server forwards that request to the external API using the API key. This means the API key is stored securely on the server and never exposed in the client side code.
This approach helps avoid API key leakage because users cannot access or inspect the key through their browser. Even if someone inspects the network requests, they will only see calls to your backend, not the third party service. The server acts as a controlled middle layer that can also enforce rate limiting or validate requests before passing them along.

## Question 3:

What is an environment variable, and why do we store API keys in a .env file instead of directly in source code? What role does .gitignore play in this setup, and what could go wrong if the .env file were accidentally committed to GitHub?

**Your answer here**:

---

An environment variable is a value stored outside of your source code that your application can access at runtime, often used for sensitive data like API keys. Instead of hardcoding secrets directly in the code, developers place them in a .env file and load them into the app, which keeps the codebase cleaner and more secure. This way, the same code can run in different environments with different configurations without exposing private information.
The .gitignore file is used to prevent certain files, like .env, from being tracked and uploaded to version control systems such as GitHub. If the .env file were accidentally committed, anyone with access to the repository could see the API keys and misuse them. This could lead to unauthorized requests, hitting rate limits, or even financial charges if the API is paid.
