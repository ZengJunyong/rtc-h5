<template>
    <div>
        Testing docx-templates from browser ...
    </div>
</template>

<script>
  import createReport from "docx-templates";

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
        data: {
          "甲方简称": "优客工场",
          "甲方全称": "北京鹏达优客工场创业投资有限公司",
          "房间列表": [
            {
              "房间号": "102",
              "工位号": "123",
              "月租金": "3223"
            },
            {
              "房间号": "103",
              "工位号": "124",
              "月租金": "2000"
            }
          ],
          "合计": 5223
        }
      };
    },
    mounted() {
      this.$http.get("static/template.docx", { responseType: "arraybuffer" }).then((res) => {
        this.onTemplateChosen(res.body);
      });
    },
    methods: {
      async onTemplateChosen(template) {
        // Create report
        console.log("Creating report (can take some time) ...");
        const report = await createReport({
          template,
          data: {
            "甲方简称": "优客工场",
            "甲方全称": "北京鹏达优客工场创业投资有限公司",
            "房间列表": [
              {
                "房间号": "102",
                "工位号": "123",
                "月租金": "3223"
              },
              {
                "房间号": "103",
                "工位号": "124",
                "月租金": "2000"
              }
            ],
            "合计": 5223
          }
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

</style>
