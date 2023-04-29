const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    welcome() {
        this.log('Successful download');
    }

    writing() {
        this.fs.copy(
            this.templatePath('index.html'),
            this.destinationPath('index.html')
        );
        this.fs.copy(
            this.templatePath('gulpfile.js'),
            this.destinationPath('gulpfile.js')
        );
        this.fs.copy(
            this.templatePath('_gitignore'),
            this.destinationPath('.gitignore')
        );
        this.fs.copy(
            this.templatePath('package.json'),
            this.destinationPath('package.json')
        );
        this.fs.copy(
            this.templatePath('package-lock.json'),
            this.destinationPath('package-lock.json')
        );
        this.fs.copy(this.templatePath('app'), this.destinationPath('app'));
    }

    end() {
        this.log(' ');
        this.log(
            'Generating success. Refer to readme to install dependencies such as Gulp'
        );
        this.log(' ');
    }
};