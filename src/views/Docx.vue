<template>
    <div>
        <p>1）获取填充到Word横板中的数据，为JSON格式，如下</p>
        <textarea v-model="data"></textarea>
        <p>2）Ajax得到Word横板，存放在 public/static/template.docx</p>
        <p>3）用 JSON数据 + Word横板 生成新的Word文档，点击
            <button @click="generateDoc">开始</button>
            执行
        </p>
    </div>
</template>

<script>
  import createReport from "docx-templates";

  const json = require("../config/template.json");

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
    name: "docx",
    data() {
      return {
        data: JSON.stringify(json, null, 4)
      };
    },
    methods: {
      generateDoc() {
        this.$http.get("static/template.docx", { responseType: "arraybuffer" }).then((res) => {
          this.onTemplateChosen(res.body);
        });
      },
      async onTemplateChosen(template) {
        // Create report
        console.log("Creating report (can take some time) ...");
        const report = await createReport({
          template,
          data: JSON.parse(this.data)
        });

        // Save report
        saveDataToFile(
          report,
          "report.docx",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        );
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
