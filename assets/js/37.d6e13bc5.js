(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{444:function(s,t,a){"use strict";a.r(t);var n=a(46),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"linux常用命令大全2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux常用命令大全2"}},[s._v("#")]),s._v(" Linux常用命令大全2")]),s._v(" "),a("h2",{attrs:{id:"目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[s._v("#")]),s._v(" 目录结构")]),s._v(" "),a("p",[a("strong",[s._v("ls [OPTION]... [FILE]...  列出目录内容")])]),s._v(" "),a("p",[s._v("当执行ls命令时，默认显示的只有非隐藏文件的文件名、以文件名进行排序及文件名代表的颜色显示。当不加参数时，默认列出当前目录的列表信息。")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-a：--all的缩写，显示所有的文件，包括隐藏文件(以.开头的文件)\n-A：--almost-all的缩写，显示所有的文件，包括隐藏文件，但不包括表示当前目录.和上级目录..这两个文件。\n-h：将文件内容大小以GB、KB等易读的方式显示\n-l：列出长数据串，显示出文件的属性与权限等数据信息(常用)  其中时间为ctime\n-d：--directory的缩写，仅列出目录本身，而不是列出目录里的内容列表\n")])])]),a("p",[a("strong",[s._v("tree 以树状图列出当前目录结构")])]),s._v(" "),a("h2",{attrs:{id:"磁盘管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#磁盘管理"}},[s._v("#")]),s._v(" 磁盘管理")]),s._v(" "),a("p",[a("strong",[s._v("df [OPTION] [FILE] 显示文件系统（某一分区）磁盘使用量")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-a  列出所有挂在的文件系统  \n-t  限制列出文件系统的类型  例如 ext4\n-h  使用人类可读的格式\n-T  显示文件系统的形式\n例如：\ndf /etc/passwd  -hT  查看/etc/passwd文件所在的文件系统，显示文件系统的类型，列出相关信息\ndf /dev/sda1 -h\ndf / -h\ndf -aT |grep sd  \n")])])]),a("p",[a("strong",[s._v("du [OPTION]... [FILE]...   显示目录或文件的大小")]),a("br"),s._v(" "),a("em",[s._v("如果[FILE]为文件，则显示文件的大小")]),a("br"),s._v(" "),a("em",[s._v("如果[FILE]为文件夹，则列出所有子文件夹，并分别统计文件夹大小（计算了文件，但默认不列出）")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-a  列出所有文件（包括文件和文件夹）\n-h  使用人类可读的格式\n-s 或 --summarize 仅显示总计（不显示子文件夹）\n例如：\ndu -sh /etc   显示/etc 文件夹的大小\ndu -h /etc/passwd   显示某个文件的大小\ndu -ah /var/log | sort -h  列出/var/log下所有文件和文件夹的大小，并从小到大排序\n")])])]),a("p",[a("strong",[s._v("mount [-t vfstype] [-o options] device dir")])]),s._v(" "),a("p",[s._v("-t vfstype 指定文件系统的类型，通常不必指定，mount 会自动选择正确的类型。")]),s._v(" "),a("blockquote",[a("p",[s._v("光盘或光盘镜像：iso9660\nDOS fat16文件系统：msdos\nWindows 9x fat32文件系统：vfat\nWindows NT ntfs文件系统：ntfs\nMount Windows文件网络共享：smbfs\nUNIX(LINUX) 文件网络共享：nfs")])]),s._v(" "),a("p",[s._v("-o options 主要用来描述设备或档案的挂接方式。")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("loop：用来把一个文件当成硬盘分区挂接上系统 \nro：采用只读方式挂接设备 \nrw：采用读写方式挂接设备 \niocharset：指定访问文件系统所用字符集\n")])])]),a("p",[s._v("--bind  建立两个目录的映射关系（完全同步）")]),s._v(" "),a("blockquote",[a("p",[s._v("有时候需要在一个目前下，映射另一个目录下的内容。或者在开通FTP账号的时候，两个目录不在一起，而又需要可以在一个账号下访问这两个目录。第一种方法就是像Server-U一样添加多个目录，另一种就是建立两个目录的映射。"),a("br"),s._v("\n我们可以使用 mount --bind 源目录 映射到的目标路径"),a("br"),s._v("\n如： mount --bind /www/dir1 /www/xxr.so/dir2"),a("br"),s._v("\n/www/dir1 为源目录"),a("br"),s._v("\n/www/xxr.so/dir2 为需要映射到的目录。"),a("br"),s._v("\n注意： dir2 目录必须是已经创建的目录，如果 dir2目录不存在是无法完成操作的。"),a("br"),s._v("\n当我们执行完上面的操作后我们可在dir2中看到 dir1 中的所有内容，如果我们对dir2中的内容进行修改或增删那么dir1中的内容也会跟着变化。因为dir2中其实并没有内容。他的所有内容都是映射自dir1，你看到内容也都是dir1k中的内容。"),a("br"),s._v("\n内容来自CSDN   https://blog.csdn.net/hotlinhao/article/details/8958704")])]),s._v(" "),a("p",[a("strong",[s._v("umount [FILE_SYS]")])]),s._v(" "),a("p",[s._v("下面两条命令分别通过设备名和挂载点卸载文件系统，同时输出详细信息：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# umount -v /dev/sda1          通过设备名卸载 \n/dev/sda1 umounted  \n# umount -v /mnt/mymount/      通过挂载点卸载 \n/tmp/diskboot.img umounted \n")])])]),a("p",[a("strong",[s._v("sync")])]),s._v(" "),a("p",[s._v("Linux sync命令用于数据同步,sync命令是在关闭Linux系统时使用的。"),a("br"),s._v("\nLinux 系统中欲写入硬盘的资料有的时候会了效率起见，会写到 filesystem buffer 中，这个 buffer 是一块记忆体空间，如果欲写入硬盘的资料存于此 buffer 中，而系统又突然断电的话，那么资料就会流失了，sync 指令会将存于 buffer 中的资料强制写入硬盘中。")]),s._v(" "),a("h2",{attrs:{id:"磁盘分区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#磁盘分区"}},[s._v("#")]),s._v(" 磁盘分区")]),s._v(" "),a("p",[a("strong",[s._v("fdisk [options] [device] 操作硬盘分区表（MBR）")]),s._v("  【过时技术】，不推荐使用")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-l 列出指定设备的分区表\n例如： \nsudo fdisk -l /dev/sda 查看sda硬盘上的分区表\nsudo fdisk -l  列出所有设备上的分区表（/proc/partitions）\nsudo fdisk /dev/sda    根据提示操作，对sda硬盘分区\n")])])]),a("p",[a("strong",[s._v("gdisk [-l] [device] 操作硬盘分区表（GPT）")])]),s._v(" "),a("p",[s._v("推荐使用GUID磁盘分区表，操作方式与fdisk类似"),a("br"),s._v(" "),a("code",[s._v("-l 列出指定设备的分区表")])]),s._v(" "),a("p",[a("strong",[s._v("parted [options] [device [command [options...]...]] 分区")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-l --list 打印出所有block设备的分区信息\n-m --machine 打印出方便机器解析的输出\n-s --script 不进入用户交互模式\n-a --alignment 对齐分区\n")])])]),a("h2",{attrs:{id:"文件转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件转换"}},[s._v("#")]),s._v(" 文件转换")]),s._v(" "),a("p",[a("strong",[s._v("dd [option] 读取、转换并输出数据")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("if=文件名：输入文件名，缺省为标准输入。即指定源文件。\nof=文件名：输出文件名，缺省为标准输出。即指定目的文件。\nbs=bytes：同时设置读入/输出的块大小为bytes个字节\ncount=blocks：仅拷贝blocks个块，块大小等于ibs指定的字节数。\n")])])]),a("p",[s._v("实例：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1.将本地的/dev/hdb整盘备份到/dev/hdd\n\ndd if=/dev/hdb of=/dev/hdd\n\n2.将/dev/hdb全盘数据备份到指定路径的image文件\n\ndd if=/dev/hdb of=/root/image\n\n注意！ 用dd备份磁盘生成的文件和源磁盘总空间差不多大\n\n3.备份磁盘开始的512个字节大小的MBR信息到指定文件\n\ndd if=/dev/hda of=/root/image count=1 bs=512\n\n4.增加swap分区文件大小\n\n第一步:创建一个大小为256M的文件:\ndd if=/dev/zero of=/swapfile bs=1024 count=262144\n第二步:把这个文件变成swap文件:\nmkswap /swapfile\n第三步:启用这个swap文件:\nswapon /swapfile\n第四步:编辑/etc/fstab文件,使在每次开机时自动加载swap文件:\n/swapfile swap swap default 0 0\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);