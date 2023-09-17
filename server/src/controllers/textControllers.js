const z = require("zod")
const fs = require("fs")
const path = require("path")
const temp_path = __dirname

async function createTextFile(req, res) {
  const bodySchema = z.object({
    title: z.string(),
    content: z.string()
  })

  const { title, content } = bodySchema.parse(req.body)

  const rootPath = path.resolve(path.join(__dirname), "../../")
  const filePath = path.join(`${rootPath}/temp/${title}.txt`)

  fs.writeFile(filePath, content, () => {
    res.sendFile(filePath)
  })



  setTimeout(() => {
    fs.unlink(filePath, ()=>console.log("Arquivo deletado"))
  }, 3000);

  
}

module.exports = {
  createTextFile
}