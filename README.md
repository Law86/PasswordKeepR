# LockD

Ever forget your password? Of course you have! Never forget a password ever again with LockD, the newest password generator and information storage system to hit the web.

LockD was built with [EJS](https://ejs.co/), [SCSS](https://sass-lang.com/documentation/syntax), [JavaScript](https://www.javascript.com/), [jQuery](https://jquery.com/), [NodeJS](https://nodejs.dev/), [BcryptJS](https://www.npmjs.com/package/bcryptjs), [Cookie-Session](https://www.npmjs.com/package/cookie-session), [Dotenv](https://www.npmjs.com/package/dotenv), [Express](https://expressjs.com/), [Morgan](https://www.npmjs.com/package/morgan), and [PostgreSQL](https://www.npmjs.com/package/pg).

## Purpose

**_BEWARE:_ This app was created for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by Lisa Meyer, Michael Law, and Trishnarjun Kunamalla as part of our learnings at Lighthouse Labs.

## LockD in Action

Users can store login information for all their favourite sites. Are you using the same password across every site? Not anymore! LockD generates unique passwords between 8 to 128 characters and you can choose the type of characters to include.

Users love LockD! You can quickly select all passwords by category type with our handy filter menu.

Love the extra protection from long unique passwords, but hate typing it out? Not a problem with LockD! For your convenience, we have a handy clipboard feature next to every password.

Companies love LockD because employees can register with an organization to allow for an organization’s administrator to access and generate all employee passwords.

## Using LockD

To set up LockD, ensure you have NodeJS installed, then execute the following.

```
git clone https://github.com/Law86/PasswordKeepR
cd PasswordKeepR
npm i
```

### Next Steps

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Reset database: `npm run db:reset`

- Check the db folder to see what gets created and seeded in the SDB

7. Run the server: `npm run local`

- Note: nodemon is used, so you should not have to restart your server

8. Visit `http://localhost:8080/`

## Development

### Dependencies

- bcryptjs
- chalk
- cookie-session
- dotenv
- ejs
- express
- morgan
- pg
- postgres
- sass

### Development Dependencies

- nodemon

### Screenshots

!["Registration"](https://github.com/Law86/PasswordKeepR/blob/master/public/images/register-gif.gif)
!["Creating New Password"](https://github.com/Law86/PasswordKeepR/blob/master/public/images/newpass-gif.gif)
