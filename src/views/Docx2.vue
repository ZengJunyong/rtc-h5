<template>
    <div>
        <p>1）获取填充到Word模板中的数据，为JSON格式，如下</p>
        <textarea v-model="data"></textarea>
        <p>2）Ajax得到Word模板，存放在 public/static/template.docx</p>
        <p>3）用 JSON数据 + Word模板 生成新的Word文档，点击
            <button @click="generateDoc">开始</button>
            执行
        </p>
    </div>
</template>

<script>
  const json = require("../config/template.json");
  // const nzhcn = require("nzh/cn");
  const saveDataToFile = (data, fileName, mimeType) => {
    const blob = new Blob([data], { type: mimeType });
    const url = window.URL.createObjectURL(blob);
    downloadURL(url, fileName, mimeType);
    setTimeout(() => {
      window.URL.revokeObjectURL(url);
    }, 1000);
  };

  const downloadURL = (data, fileName) => {
    const a = document.createElement("a");
    a.href = data;
    a.download = fileName;
    document.body.appendChild(a);
    a.style = "display: none";
    a.click();
    a.remove();
  };

  export default {
    name: "docx2",
    data() {
      return {
        data: JSON.stringify(json, null, 4)
      };
    },
    methods: {
      generateDoc() {
        var docx = require("docx");
        var doc = new docx.Document();

        var paragraph = new docx.Paragraph("Some cool text here.");
        paragraph.addRun(new docx.TextRun("Lorem Ipsum Foo Bar"));
        doc.addParagraph(paragraph);

        var packer = new docx.Packer();
        packer.toBuffer(doc).then((buffer) => {
          // fs.writeFileSync("My First Document.docx", buffer);
          saveDataToFile(
            buffer,
            "合同.docx",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          );
        });
      }
    }
  };
</script>

<style scoped lang="scss">
    textarea {
        width: 600px;
        height: 600px;
    }

    p {
        color: green;
    }
</style>
