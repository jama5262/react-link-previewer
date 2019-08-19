# React Link Previewer (Server Side)

This is a react app that displays a visual preview and brief description of the links passed

[![Build Status](https://travis-ci.org/jama5262/react-link-previewer.svg?branch=server)](https://travis-ci.org/jama5262/react-link-previewer)
[![Coverage Status](https://coveralls.io/repos/github/jama5262/react-link-previewer/badge.svg?branch=server)](https://coveralls.io/github/jama5262/react-link-previewer?branch=server)

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/c02bdf77a1b742ae4861)

## Endpoints
| Title | Endpoint | Method | Description |
| ------------- | ------------- | ------------- | ------------- |
| Render UI  | /  | GET  | Render the react link previewer UI  |
| Preview Links  | /preview?text=`pass urls here`  | POST  | Return link descriptions passed  |

# Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)


## Installation

### Cloning
Clone this repo to your local machine using `https://github.com/jama5262/react-link-previewer.git`

### Setup
To get started, cd into the project and follow the following steps
1. #### Create a `.env` file
Create a `.env` file and add the following port number (you can choose your preferred port number)
```
PORT=3000
```
2. #### Installing all packages
After creating the `.env` file run the following to install all the packages needed
```
npm install
```
Great the project has been setup 👍

## Usage
To start using it locally, run the following
```
npm run nodemon
```
To run in debug mode run the following
```
npm run nodemon:debug
```

For this readme file, POSTMAN is beign used or your can use your preferred service e.g **Insomnia**

By default the following postman link uses the heroku url https://react-link-preview.herokuapp.com, you can use your own localhost ulr by changing it on the postman address bar

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/c02bdf77a1b742ae4861)

### Testing

🧪 The project uses `jest`. To test, run the following. **This will display all test if they passes or not and a coverage report**
```
npm run test
```

## Contributing

To contribute, follow the follwing easy steps

### Step 1

- **Option 1**
    - Fork this repo!

- **Option 2**
    - 👯 Clone this repo to your local machine using `https://github.com/jama5262/react-link-previewer.git`

### Step 2

- **HACK AWAY!** 🔨🔨🔨

### Step 3

- 🔃 Create a new pull request

## Support

Reach out to me at one of the following medias!

- Email at jama3137@gmail.com
- Twitter [timedjama5262](https://twitter.com/timedjama5262)

## License

```
MIT License

Copyright (c) 2019 Jama Mohamed

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
