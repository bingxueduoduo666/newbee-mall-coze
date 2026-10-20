newbee-mall 商城代码（已剔除 .git 历史）
来源: github.com/newbee-ltd  (GPLv3，保留 LICENSE)
本包由 WorkBuddy 于 2026-10-20 整理，含扣子(Coze) Chat SDK 对接骨架(mall-vue3/src/coze-*.js)

目录:
  api/        Spring Boot 后端 (需 MySQL + Redis，扣子云端沙箱无法运行，仅可云端编辑)
  mall-vue3/  Vue3 用户端商城 (已接入扣子客服窗，可部署)
  admin/      Vue3 后台管理

部署提示: 在扣子编程中仅 mall-vue3 可 npm install + 构建运行；api 需自备数据库环境。
