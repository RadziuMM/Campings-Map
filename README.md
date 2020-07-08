# Campings-Map

A small project to share ur campings spots with the community. Created for outdoor lovers. <p style="text-decoration: line-through solid black">Everything is hosted in Heroku at page: https://campingmap.herokuapp.com/#/</p>.No longer hosted.

## Getting Started

Download by using git:

```
$git clone https://github.com/RadziuMM/Campings-Map.git
```
or u can download it manually.

### Prerequisites

To run this site locally you need node.js, npm or yarn, and vue.js.

### Installing

Install all dependencies manually from package.json expect express.
Express is added only for Heroku server and installing it locally can crash the Vue server.

## Deployment

To deploy that project locally using the command:

```
yarn serve
```

or 

```
npm serve
```
To get better performance you should build the project before deploy:

```
yarn build
```

or
```
npm build
```
To deploy that on the server just copy files on it. Make sure the server installs all dependencies.

## Contributing

Feel free to add a pull request.

## Authors

* **Radosław Mazurczak** - *Everything* 

## License

This project is licensed under the GNU GPL License.

## Acknowledgments

* You can easily change backend server in ./src/components/SPA_views/Map.vue file.Paste you're backend server link into "const url".

