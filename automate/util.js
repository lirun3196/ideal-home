/**
 * @author Rich Lee
 * @time 24/06/2017 19:15
 * @abstract
 */
const shell = require('shelljs')
const process = require('process')
const userInfo = require('os').userInfo()
// const moment = require('moment')

const util = {
  createComment() {
    return `/**
 * @author   ${userInfo.username}
 * @abstract
 */`
  },
  lowerFirstLetter(str) {
    /*let strToArr = [...str]
    strToArr[0] = strToArr[0].toLowerCase()
    return strToArr.join('')*/
    // learn from vue.js code, it's more elegant than mine
    return str.charAt(0).toLowerCase() + str.slice(1)
  },
  validateDir(value) {
    if (value === null || value === undefined || shell.test('-d', value)) {
      return true;
    }
    
    return 'Please enter a valid direction: ';
  },
  validateVar(value) {
    if (/^[A-Za-z_]+$/.test(value)) {
      return true;
    }
    
    return 'Please enter a valid variable(only include[A-Za-z_]): ';
  },
  validateRoute(value) {
    if (/^\/[-A-Za-z_]+\/[-A-Za-z_]+\/[A-Za-z_]+$/.test(value)) {
      return true;
    }
    
    return 'enter a valid route(/project-name/page-name/xx): ';
  },
  createFile(dir, filename, fileContent) {
    if (!shell.test('-d', dir)) {
      shell.mkdir('-p',dir);
    }
    shell.cd(dir)
    if (!shell.test('-f', filename)) {
      shell.touch(filename)
    }
    //to() will overwrite any existing file
    shell.ShellString(fileContent).to(filename)
  },
  execFun(fun){
    if(typeof fun !== 'function'){
      return console.error(`${fun.toString()} is not function`)
    }
    process.argv[2] && fun()
  }
}

module.exports = util