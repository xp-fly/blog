mysql配置详解(5.7)

[client]

port = 3306

socket = /tmp/mysql.sock

default-character-set = utf8mb4
# 支持utf8mb4编码

[mysql]

prompt="MySQL [\d]> "
#登录数据库后显示当前位置

auto-rehash
#开启数据库tab补全


on-auto-rehash
#关闭数据库tab补全

[mysqld]

port = 3306
#监听端口设置



socket = /tmp/mysql.sock
#指定sock存放位置

basedir = /usr/local/mysql
#Mysql的安装路径

datadir = /samba/mysql
#Mysql的数据库存放路径

pid-file = /samba/mysql/mysql.pid
#Mysql的进程文存放位置

user = mysql
#Mysql使用的用户

bind-address = 0.0.0.0
#允许所有人连接根据 可以需求设置

server-id = 1
#Mysql的server id 根据需求修改

init-connect = 'SET NAMES utf8mb4'
character-set-server = utf8mb4
#utf8mb4编码是utf8编码的超集，兼容utf8，并且能存储4字节的表情字符

skip-name-resolve
# 禁止MySQL对外部连接进行DNS解析，使用这一选项可以消除MySQL进行DNS解析的时间。但需要注意，如果开启该选项，
则所有远程主机连接授权都要使用IP地址方式，否则MySQL将无法正常处理连接请求

#skip-networking
#关闭MySQL的TCP/IP连接方式

back_log = 300
# MySQL能有的连接数量。当主要MySQL线程在一个很短时间内得到非常多的连接请求，这就起作用，
然后主线程花些时间(尽管很短)检查连接并且启动一个新线程。back_log值指出在MySQL暂时停止回答新请求之前的短时间内多少个请求可以被存在堆栈中。
如果期望在一个短时间内有很多连接，你需要增加它。也就是说，如果MySQL的连接数据达到max_connections时，新来的请求将会被存在堆栈中，
以等待某一连接释放资源，该堆栈的数量即back_log，如果等待连接的数量超过back_log，将不被授予连接资源。
另外，这值（back_log）限于您的操作系统对到来的TCP/IP连接的侦听队列的大小。
你的操作系统在这个队列大小上有它自己的限制（可以检查你的OS文档找出这个变量的最大值），试图设定back_log高于你的操作系统的限制将是无效的。

max_connections = 2568
#设置Mysql的最大连接数

max_connect_errors = 100
#防止暴力破解超过100次后禁止连接 成功连接一次后会清零


open_files_limit = 65535
#设置Mysql打开文件数

table_open_cache = 1024
#设置缓存表的最大数目

max_allowed_packet = 500M
#限制插入和更新最大值

binlog_cache_size = 1M
#设置binlog使用内存大小（事务）

max_heap_table_size = 8M
#Mysql内存表容量设置

tmp_table_size = 128M
#增加临时表的大小设置

read_buffer_size = 2M
#Mysql读入缓冲区大小设置

read_rnd_buffer_size = 8M
#Mysql随机读缓冲区大小设置

sort_buffer_size = 8M
# MySQ需要排序 会话 的缓存大小

join_buffer_size = 8M
#表间关联缓存的大小

key_buffer_size = 256M
#指定用于索的缓存区大小

thread_cache_size = 64
#用来缓存空闲线程

query_cache_type = 1
#给所有查询做缓存

query_cache_size = 64M
#指定Mysql查询缓冲区的大小

query_cache_limit = 2M
#指定单个查询能够使用的缓冲区大小

ft_min_word_len = 4
# MyISAM 引擎表全文索引包含的最小词长度


log_bin = mysql-bin
#开启binlog

binlog_format = mixed
#使用mixed日志格式

expire_logs_days = 7
#binlog过期清理时间

log_error = /samba/mysql/mysql-error.log
#错误日志指定



slow_query_log = 1
#开启慢查询

long_query_time = 1
#超过1秒的SQL会记录到下面的日志文件
slow_query_log_file = /samba/mysql/mysql-slow.log

performance_schema = 0
#用于收集数据库服务器性能（修改之后需要重新启动mysql）

explicit_defaults_for_timestamp
#lower_case_table_names = 1

skip-external-locking
#用于多进程条件下为MyISAM数据表进行锁定



default_storage_engine = InnoDB
#默认开启innoDB存储引擎

#default-storage-engine = MyISAM

#MyiSAM

innodb_file_per_table = 1
#innoDB为独立表空间模式，每个数据库的每个表都会生成一个数据空间

innodb_open_files = 500
#限制innodb能打开的数据表

innodb_buffer_pool_size = 1024M
#设置越大，在存取表的时候所需要的I/O越少&nbsp; 根据服务器情况设置


innodb_write_io_threads = 4
innodb_read_io_threads = 4
# innodb使用后台线程处理数据页上的读写 I/O请求,根据 CPU 核数设置



innodb_thread_concurrency = 0
#0表示不限制并发链接数

innodb_purge_threads = 1
# InnoDB中的清除操作是一类定期回收无用数据的操作，
#默认情况下参数设置为0(不使用单独线程)，1 时表示使用单独的清除线程

innodb_flush_log_at_trx_commit = 2
# 0：如果innodb_flush_log_at_trx_commit的值为0,log buffer每秒就会被刷写日志文件到磁盘，提交事务的时候不做任何操作（执行是由mysql的master thread线程来执行的。
主线程中每秒会将重做日志缓冲写入磁盘的重做日志文件(REDO LOG)中。不论事务是否已经提交）默认的日志文件是ib_logfile0,ib_logfile1

1：当设为默认值1的时候，每次提交事务的时候，都会将log buffer刷写到日志。
2：如果设为2,每次提交事务都会写日志，但并不会执行刷的操作。每秒定时会刷到日志文件。要注意的是，并不能保证100%每秒一定都会刷到磁盘，这要取决于进程的调度。
每次事务提交的时候将数据写入事务日志，而这里的写入仅是调用了文件系统的写入操作，而文件系统是有 缓存的，所以这个写入并不能保证数据已经写入到物理磁盘
默认值1是为了保证完整的ACID。当然，你可以将这个配置项设为1以外的值来换取更高的性能，但是在系统崩溃的时候，你将会丢失1秒的数据。
设为0的话，mysqld进程崩溃的时候，就会丢失最后1秒的事务。设为2,只有在操作系统崩溃或者断电的时候才会丢失最后1秒的数据。InnoDB在做恢复的时候会忽略这个值。

总结
设为1当然是最安全的，但性能页是最差的（相对其他两个参数而言，但不是不能接受）。如果对数据一致性和完整性要求不高，完全可以设为2，如果只最求性能，例如高并发写的日志服务器，设为0来获得更高性能


innodb_log_buffer_size = 2M
# 此参数确定些日志文件所用的内存大小，以M为单位。缓冲区更大能提高性能，但意外的故障将会丢失数据。

innodb_log_file_size = 32M
# 此参数确定数据日志文件的大小，更大的设置可以提高性能，但也会增加恢复故障数据库所需的时间

innodb_log_files_in_group = 3
# 为提高性能，MySQL可以以循环方式将日志文件写到多个文件。

innodb_max_dirty_pages_pct = 90
# innodb主线程刷新缓存池中的数据，使脏数据比例小于90%

innodb_lock_wait_timeout = 120
# InnoDB事务在被回滚之前可以等待一个锁定的超时秒数。InnoDB在它自己的锁定表中自动检测事务死锁并且回滚事务。InnoDB用LOCK TABLES语句注意到锁定设置。默认值是50秒



bulk_insert_buffer_size = 8M
# 批量插入缓存大小， 这个参数是针对MyISAM存储引擎来说的。适用于在一次性插入100-1000+条记录时， 提高效率。默认值是8M。可以针对数据量的大小，翻倍增加。


myisam_sort_buffer_size = 64M

# MyISAM设置恢复表之时使用的缓冲区的尺寸，当在REPAIR TABLE或用CREATE INDEX创建索引或ALTER TABLE过程中排序 MyISAM索引分配的缓冲区


myisam_max_sort_file_size = 10G
# 如果临时文件会变得超过索引，不要使用快速排序索引方法来创建一个索引。注释：这个参数以字节的形式给出



myisam_repair_threads = 1
# 如果该值大于1，在Repair by sorting过程中并行创建MyISAM表索引(每个索引在自己的线程内)

interactive_timeout = 28800
# 服务器关闭交互式连接前等待活动的秒数。交互式客户端定义为在mysql_real_connect()中使用CLIENT_INTERACTIVE选项的客户端。默认值：28800秒（8小时）



wait_timeout = 28800
# 服务器关闭非交互连接之前等待活动的秒数。在线程启动时，根据全局wait_timeout值或全局interactive_timeout值初始化会话wait_timeout值，
取决于客户端类型(由mysql_real_connect()的连接选项CLIENT_INTERACTIVE定义)。参数默认值：28800秒（8小时）
MySQL服务器所支持的最大连接数是有上限的，因为每个连接的建立都会消耗内存，因此我们希望客户端在连接到MySQL Server处理完相应的操作后，
应该断开连接并释放占用的内存。如果你的MySQL Server有大量的闲置连接，他们不仅会白白消耗内存，而且如果连接一直在累加而不断开，
最终肯定会达到MySQL Server的连接上限数，这会报'too many connections'的错误。对于wait_timeout的值设定，应该根据系统的运行情况来判断。
在系统运行一段时间后，可以通过show processlist命令查看当前系统的连接状态，如果发现有大量的sleep状态的连接进程，则说明该参数设置的过大，
可以进行适当的调整小些。要同时设置interactive_timeout和wait_timeout才会生效。
[mysqldump]

quick

max_allowed_packet = 500M
#服务器发送和接受的最大包长度
[myisamchk]

key_buffer_size = 256M

sort_buffer_size = 8M

read_buffer = 4M

write_buffer = 4M



#skip-grant-tables
#跳过授权表 忘记密码root密码时添加此选项

#innodb_force_recovery 配置项讲解
innodb_force_recovery影响整个InnoDB存储引擎的恢复状况。默认为0，表示当需要恢复时执行所有的恢复操作（即校验数据页/purge undo/insert buffer merge/rolling back&forward），当不能进行有效的恢复操作时，mysql有可能无法启动，并记录错误日志；
innodb_force_recovery可以设置为1-6,大的数字包含前面所有数字的影响。当设置参数值大于0后，可以对表进行select,create,drop操作,但insert,update或者delete这类操作是不允许的。
1(SRV_FORCE_IGNORE_CORRUPT):忽略检查到的corrupt页。
2(SRV_FORCE_NO_BACKGROUND):阻止主线程的运行，如主线程需要执行full purge操作，会导致crash。
3(SRV_FORCE_NO_TRX_UNDO):不执行事务回滚操作。
4(SRV_FORCE_NO_IBUF_MERGE):不执行插入缓冲的合并操作。
5(SRV_FORCE_NO_UNDO_LOG_SCAN):不查看重做日志，InnoDB存储引擎会将未提交的事务视为已提交。
6(SRV_FORCE_NO_LOG_REDO):不执行前滚的操作。