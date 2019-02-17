## window下安装rabbitMQ
rabbitMQ是一个在AMQP协议标准基础上完整的，可服用的企业消息系统。它遵循Mozilla Public License开源协议，采用 Erlang 实现的工业级的消息队列(MQ)服务器，Rabbit MQ 是建立在Erlang OTP平台上
### 下载安装Erlang 
+ 在安装rabbitMQ之前，需要先安装Erlang
+ 下载地址：http://www.erlang.org/downloads
+ 选择对应的版本下载安装，默认安装路径，一直点击下一步
+ 检查环境变量，若没有环境变量这手动添加
### 下载安装rabbitMQ
+ 下载地址：http://www.rabbitmq.com/download.html
+ 下载完成后一直点击下一步进行安装
+ rabbitMQ 默认监听 5672 端口
### 配置
#### 配置环境变量
将路径 D:\Program Files\RabbitMQ Server\rabbitmq_server-3.6.14\sbin 添加至环境变量中
#### 激活RabbitMQ's Management Plugin
通过 rabbitMQ 的管理插件，可以更好的可视化方式查看 rabbit MQ 的实例状态
+ 开启管理插件
```text
rabbitmq-plugins.bat enable rabbitmq_management
```
+ 重启服务
```text
net stop RabbitMQ && net start RabbitMQ
// 如果出现：发生系统错误 5。 拒绝访问。
// 5 代表系统错误，使用管理员打开cmd
```
#### 创建用户名，密码和绑定角色
+ 查看已有用户和用户的角色
```text
rabbitmqctl.bat list_users
```
+ 新增用户
```text
rabbitmqctl.bat add_user username password
// 例： rabbitmqctl.bat add_user root 123456
```
+ 给用户配置角色

> 超级管理员(administrator): 可登陆管理控制台(启用management plugin的情况下)，可查看所有的信息，并且可以对用户，策略(policy)进行操作。

> 监控者(monitoring): 可登陆管理控制台(启用management plugin的情况下)，同时可以查看rabbitmq节点的相关信息(进程数，内存使用情况，磁盘使用情况等)

> 策略制定者(policymaker): 可登陆管理控制台(启用management plugin的情况下), 同时可以对policy进行管理。

> 普通管理者(management): 仅可登陆管理控制台(启用management plugin的情况下)，无法看到节点信息，也无法对策略进行管理。

> 其他的: 无法登陆管理控制台，通常就是普通的生产者和消费者。

```text
// 分配管理员角色
rabbitmqctl.bat set_user_tags root administrator
// 设置多个角色
rabbitmqctl.bat  set_user_tags  root administrator tag1 tag2 ...
```
+ 更改密码
用户guest的默认密码是guest，现在更改他的密码
```text
rabbitmqctl change_password userName newPassword
// 例： rabbitmqctl change_password guest 123456
```
+ 删除用户
```text
rabbitmqctl.bat delete_user username
```
#### 登录 rabbitMQ 管理系统
浏览器打开 http://localhost:15672/ 即可访问 rabbitMQ 的管理控制台。使用刚刚创建的用户进行登录
#### 用户权限设置
+ 设置用户权限
```text
rabbitmqctl  set_permissions  -p  VHostPath  User  ConfP  WriteP  ReadP
```
+ 查看(指定hostpath)所有用户的权限信息
```text
rabbitmqctl  list_permissions  [-p  VHostPath]
```
+ 查看指定用户的权限信息
```text
rabbitmqctl  list_user_permissions  User
```
+ 清除用户的权限信息
```text
rabbitmqctl  clear_permissions  [-p VHostPath]  User
```