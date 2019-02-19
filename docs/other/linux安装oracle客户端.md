## linux安装oralce客户端( Instant Client)
### oracle官网下载安装包
- https://www.oracle.com/technetwork/cn/topics/linuxx86-64soft-095635-zhs.html
- 下载  oracle-instantclient12.2-basic-12.2.0.1.0-1.x86_64.rpm 和 oracle-instantclient12.2-sqlplus-12.2.0.1.0-1.x86_64.rpm、
### 安装软件包
- rpm -i oracle-instantclient12.2-basic-12.2.0.1.0-1.x86_64.rpm
- rpm -i oracle-instantclient12.2-sqlplus-12.2.0.1.0-1.x86_64.rp
- sudo sh -c "echo /usr/lib/oracle/12.2/client64/lib > \
      /etc/ld.so.conf.d/oracle-instantclient.conf"
- sudo ldconfig
### 配置环境变量
```
export ORACLE_HOME=/usr/lib/oracle/12.2/client64
export TNS_ADMIN=$ORACLE_HOME/network/admin
export NLS_LANG='AMERICAN_AMERICA.AL32UTF8'
export LD_LIBRARY_PATH=$ORACLE_HOME:lib
export PATH=$ORACLE_HOME/bin:$PATH
```
### 配置tnsnames.ora文件
- mkdir -p /usr/lib/oracle/12.2/client64/network/admin/
- vi tnsnames.ora
```
RCL =
  (DESCRIPTION =
    (ADDRESS = (PROTOCOL = TCP)(HOST = 10.3.1.24)(PORT = 1521))
    (CONNECT_DATA =
      (SERVER = DEDICATED)
      (SID = XE)
    )
  )
```