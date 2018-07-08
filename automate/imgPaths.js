/**
 * @author Rich Lee
 * @time 27/02/2018 15:05
 * @abstract  create import-all-images-in-a-direction file
 * e.g: node automate/importImgs.js <js-path-depend-on-defaultPathPrefix>
 */
const shell = require("shelljs");
// const inquirer = require("inquirer");
const path = require("path");
const process = require("process");
const util = require("./util");

//process.argv[2]: jsPath
//process.argv[3]: defaultImgPath
//process.argv[4]: defaultFilename

const defaultPathPrefix = process.argv[3] || 'src/components/'
const defaultFilename = (process.argv[4] || 'imgPaths') + '.js' 

console.log(process.argv[2])
const initApi = {
  apiTemplate({ /* imgPath, */ jsPath }) {
    const defaultImgPath = process.argv[3] || (jsPath+'/img')
    const varPrefix = 'img' 
    const filenameArr = shell.ls(defaultPathPrefix+defaultImgPath).filter(function(file) { return file.match(/\.jpg$/); });
    const jsToimgPath = './'+path.relative(defaultPathPrefix+jsPath,defaultPathPrefix+defaultImgPath)+'/';
    // console.log(filenameArr)
    // console.log(jsToimgPath)
    const importStrInitArr = [];
    const varArr = [];
    filenameArr.forEach((item, index)=>{
      importStrInitArr[index] = `import ${varPrefix+index} from '${jsToimgPath+item}'`
      varArr[index] = varPrefix+index
    })
    return `
${importStrInitArr.join(';\n')};

export default [${varArr}];
    `;
  },
  createApi(obj) {
    util.createFile(
      defaultPathPrefix+obj.jsPath,
      defaultFilename,
      this.apiTemplate(obj)
    );
  }
};

initApi.createApi({jsPath: process.argv[2]})

/* const createQuestion = [
  {
    type: "input",
    name: "imgPath",
    message: "images file path: ",
    validate: util.validateDir
  },
  {
    type: "input",
    name: "jsPath",
    message: "js file path: ",
  }
];
inquirer
    .prompt(createQuestion)
    .then(initApi.createApi.bind(initApi));

function beginInit() {
  inquirer
    .prompt(createQuestion)
    .then(initApi.createApi.bind(initApi));
}
util.execFun(beginInit);

module.exports = { initApi, questions }; */
