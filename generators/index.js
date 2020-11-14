var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('appname', { type: String, required: false });

    this.log(args);
  }
  writing() {
    this.fs.copyTpl(this.templatePath(), this.destinationPath());
    this.deleteDestination('/package-lock.json');
    this.fs.extendJSON(this.destinationPath('package.json'), {
      name: this.options.appname || this.appname,
    });
  }
  install() {
    this.npmInstall();
  }
};
