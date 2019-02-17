# 背景
    使用pm2管理node应用后，如果不定时去删除日志文件。应用的日志输出文件会越来越大。所以需要一个管理node应用日志的功能
# pm2 输出日志配置
```json
apps: [{
    name: 'nodeApp',
    script: 'index.js',
    exec_mode: 'cluster',
    instances: 1,
    env: {
      NODE_ENV: 'development'
    },
    out_file: './pm2Logs/out.log', // 错误输出目录
    error_file: './pm2Logs/error.log', // 打印日志输出目录
    log_date_format: 'YYYY-MM-DD HH:mm:ss SSS', // 时间格式
    merge_logs: true
  }]
```
# 使用pm2模块pm2-logrotate进行日志分割
## 安装
    pm2 install pm2-logrotate
## 查看配置
    pm2 get pm2-logrotate
```json
  key            │ value               │
├────────────────┼─────────────────────┤
│ retain         │ 30                  │   最大日志文件个数
│ max_size       │ 10M                 │   日志文件的大小限制
│ compress       │ false               │   是否压缩
│ dateFormat     │ YYYY-MM-DD_HH-mm-ss │   输出日志文件的时间格式
│ workerInterval │ * * 1 * * *         │   crontab表达式，定时检查日志文件大小
│ rotateModule   │ true                │   是否输出到指定app目录下
│ rotateInterval │ */1 * * * *         │   crontab表达式，定时分割日志文件
│ TZ             │ Etc/GMT-8           |   设置时区
```
## 设置配置
    详见 [pm2-logrotate](https://github.com/keymetrics/pm2-logrotate)
## 清空
    pm2 set pm2-logrotate