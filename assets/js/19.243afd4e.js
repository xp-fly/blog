(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{178:function(a,s,t){"use strict";t.r(s);var n=t(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"content"},[t("h2",{attrs:{id:"linux安装oralce客户端-instant-client"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux安装oralce客户端-instant-client","aria-hidden":"true"}},[a._v("#")]),a._v(" linux安装oralce客户端( Instant Client)")]),a._v(" "),t("h3",{attrs:{id:"oracle官网下载安装包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#oracle官网下载安装包","aria-hidden":"true"}},[a._v("#")]),a._v(" oracle官网下载安装包")]),a._v(" "),t("ul",[t("li",[a._v("https://www.oracle.com/technetwork/cn/topics/linuxx86-64soft-095635-zhs.html")]),a._v(" "),t("li",[a._v("下载  oracle-instantclient12.2-basic-12.2.0.1.0-1.x86_64.rpm 和 oracle-instantclient12.2-sqlplus-12.2.0.1.0-1.x86_64.rpm、")])]),a._v(" "),t("h3",{attrs:{id:"安装软件包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装软件包","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装软件包")]),a._v(" "),t("ul",[t("li",[a._v("rpm -i oracle-instantclient12.2-basic-12.2.0.1.0-1.x86_64.rpm")]),a._v(" "),t("li",[a._v("rpm -i oracle-instantclient12.2-sqlplus-12.2.0.1.0-1.x86_64.rp")]),a._v(" "),t("li",[a._v('sudo sh -c "echo /usr/lib/oracle/12.2/client64/lib > '),t("br"),a._v('\n/etc/ld.so.conf.d/oracle-instantclient.conf"')]),a._v(" "),t("li",[a._v("sudo ldconfig")])]),a._v(" "),t("h3",{attrs:{id:"配置环境变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置环境变量","aria-hidden":"true"}},[a._v("#")]),a._v(" 配置环境变量")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("export ORACLE_HOME=/usr/lib/oracle/12.2/client64\nexport TNS_ADMIN=$ORACLE_HOME/network/admin\nexport NLS_LANG='AMERICAN_AMERICA.AL32UTF8'\nexport LD_LIBRARY_PATH=$ORACLE_HOME:lib\nexport PATH=$ORACLE_HOME/bin:$PATH\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("h3",{attrs:{id:"配置tnsnames-ora文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置tnsnames-ora文件","aria-hidden":"true"}},[a._v("#")]),a._v(" 配置tnsnames.ora文件")]),a._v(" "),t("ul",[t("li",[a._v("mkdir -p /usr/lib/oracle/12.2/client64/network/admin/")]),a._v(" "),t("li",[a._v("vi tnsnames.ora")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("RCL =\n  (DESCRIPTION =\n    (ADDRESS = (PROTOCOL = TCP)(HOST = 10.3.1.24)(PORT = 1521))\n    (CONNECT_DATA =\n      (SERVER = DEDICATED)\n      (SID = XE)\n    )\n  )\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br")])])])}],!1,null,null,null);s.default=e.exports}}]);