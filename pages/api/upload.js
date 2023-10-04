import { IncomingForm } from 'formidable';
import fs from "fs";

export const config = { api: { bodyParser: false } };

const post = async (req, res) => {
  const form = new IncomingForm();
  form.parse(req, async function (err, fields, files) {
    // console.log("file", files)
    await saveFile(files.image[0]);
    return res.status(200).json({ message: 'successfully',data:files.image[0].originalFilename });
  });
};

const saveFile = async (file) => {
  // console.log("file", file)
  const data = fs.readFileSync(file.filepath);
  fs.writeFileSync(`./public/${file.originalFilename}`, data);
  fs.unlinkSync(file.filepath);
  return;
};

export default (req, res) => {
  req.method === "POST" ? post(req, res) : res.status(404).send({ message: 'not found' });
};
