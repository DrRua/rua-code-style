const fs = require("fs")
const path = require("path")
const packageFile = require("../package.json")
const process = require("child_process")

let verArr = packageFile.version.split(".")
verArr[2] = (parseInt(verArr[2]) + 1).toString()

packageFile.version = verArr.join(".")
// 写入文件
fs.writeFileSync(
  path.resolve(__dirname, "../package.json"),
  JSON.stringify(packageFile, null, 2)
)

process.exec("npm publish", (err, stdout, stderr) => {
  console.log('[ err ] >', err)
  console.log('[ stdout ] >', stdout)
  console.log('[ stderr ] >', stderr)
})
