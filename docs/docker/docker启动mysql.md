# docker 启动 mysql

## 官方镜像

- docker pull mysql:5.7

## 自定义镜像

### 创建映射目录

```sh
cd /Users/xxx/apps/mysql
mkdir conf
mkdir logs
mkdir -p data/mysql
```

### 新建 my.cnf 文件

```sh
cd conf
vi my.cnf

[mysqld]
character-set-server=utf8mb4

[client]
default-character-set=utf8mb4

[mysql]
default-character-set=utf8mb4
```

## 启动

### shell脚本

```bash
#!/bin/bash
cur_dir=`pwd`
docker stop mysql5.7
docker rm mysql5.7
docker run --name mysql5.7 -v ${cur_dir}/conf/my.cnf:/etc/mysql/my.cnf -v ${cur_dir}/logs:/logs -v ${cur_dir}/data/mysql:/var/lib/mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7
````

### docker-compose