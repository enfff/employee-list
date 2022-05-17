# employees-list
Useless WebApp developed for deliberate practice using the [MERN Stack](https://www.educative.io/edpresso/what-is-mern-stack)

## Installation

1. `git clone https://github.com/enfff/employees-list/`

### Client installation
*Make sure you're on the root folder*

2. `cd client`
3. `npm install`
4. `npm start`

### Server installation
*Make sure you're on the root folder*

2. `cd server`
3. `npm install`
4. `echo "ATLAS_URI='mongodb+srv://<username>:<password>@theuseless-webapp.tcqqm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'" > .env`
5. `echo PORT='3005' >> .env`

You can request the `<username>` and `<password>` field by [contacting me](https://t.me/Enffff) (check my GitHub bio for more contact)

## Todos

- [x] routes
- [x] ui-development
- [ ] database

## Things that requires polishing
- [ ] Create a component for showing fetching data
- [ ] Fetching data fetches data twice if you reload the `/home` page
- [ ] Show only a couple of users in the homepage (more can be requested with a proper button)
- [ ] Fix that error you get when you write a bio (/add-user) with less than 10 characters