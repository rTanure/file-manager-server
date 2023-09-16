const z = require("zod")

function createTextFile(req, res) {
  const bodySchema = z.object({
    title: z.string(),
    content: z.string()
  })

  const { title, content } = bodySchema.parse(req.body)

  res.send({title, content})
}

module.exports = {
  createTextFile
}