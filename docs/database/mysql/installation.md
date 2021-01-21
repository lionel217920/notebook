# MySQL Installing 

- [MySQL Community Downloads](https://dev.mysql.com/downloads/)
- [DOCUMENTATION](https://dev.mysql.com/doc/refman/8.0/en/installing.html)

## Add firewalld port

```bash
firewall-cmd --zone=public --add-port=3306/tcp --permanent 
firewall-cmd --reload
```

## Linux Yum Repository

- [下载地址](https://dev.mysql.com/downloads/repo/yum/)
- [官方文档](https://dev.mysql.com/doc/refman/8.0/en/linux-installation-yum-repo.html)

### Adding the MySQL Yum Repository

1. Remove MARIADB

```bash
rpm -qa | grep mariadb
```

```bash
sudo yum -y remove mariadb-libs-5.5.68-1.el7.x86_64
```

2. Adding the MySQL Yum Repository

```bash
wget https://dev.mysql.com/get/mysql80-community-release-el7-3.noarch.rpm
sudo yum install -y mysql80-community-release-el7-3.noarch.rpm
```

3. check that the MySQL Yum repository has been successfully

```bash
yum repolist enabled | grep "mysql.*-community.*"
```

### Selecting a Release Series

1. See all the subrepositories in the MySQL Yum repository

```bash
yum repolist all | grep mysql
yum repolist enabled | grep mysql
```

When using the MySQL Yum repository, **the latest GA series (currently MySQL 8.0) is selected for installation by default**. 

2. Change the Release Series

such as disable the subrepository for the 5.7 series and enable the one for the 8.0 series:

```bash
sudo yum-config-manager --disable mysql57-community
sudo yum-config-manager --enable mysql80-community
```
Besides using yum-config-manager or the dnf config-manager command, you can also select a release series by editing manually the `/etc/yum.repos.d/mysql-community.repo` file.

**change the enabled=1 or 0**

```yaml
# Enable to use MySQL 8.0
[mysql80-community]
name=MySQL 8.0 Community Server
baseurl=http://repo.mysql.com/yum/mysql-8.0-community/el/6/$basearch/
enabled=1
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-mysql
```

### Disabling the Default MySQL Module

RHEL8 and Oracle Linux 8 include a MySQL module that is enabled by default. **(EL8 systems only)**

```bash
sudo yum module disable mysql
```

### Installing and Starting

```bash
sudo yum -y install mysql-community-server
```

This installs the package for MySQL server (**mysql-community-server**) and also packages for the components required to run the server, including packages for the client (**mysql-community-client**), the common error messages and character sets for client and server (**mysql-community-common**), and the shared client libraries (**mysql-community-libs**).

Start the MySQL server with the following command:

```bash
systemctl start mysqld
```
commands such as:

- stop
- start
- status
- restart

### Find and reset super password

```bash
sudo grep 'temporary password' /var/log/mysqld.log
```

```bash
mysql -u root -p
ALTER USER 'root'@'localhost' IDENTIFIED BY 'MyNewPass4!';
```

### Modify Remote Connection

```sql
update user set Host = '%' where User = 'root'
flush privileges;
```

