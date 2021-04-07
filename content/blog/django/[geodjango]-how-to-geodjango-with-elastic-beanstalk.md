---
title: "[GeoDjango] How to GeoDjango with AWS Elastic Beanstalk"
date: 2021-04-05 00:04:82
category: django
thumbnail: { thumbnailSrc }
draft: false
---

- GeoDjango has 4 dependencies
    - postGIS
    - GEOS
    - PROJ
    - GDAL

<br>

- problem starts from installing GDAL
- you can't simply install GDAL by package manager
- even if you do, you can't deploy on EBS

<br>

```bash
[Instance: i-09abc588f4df144cb] Command failed on instance. Return code: 1 Output: (TRUNCATED)...jango.core.exceptions.ImproperlyConfigured: Could not find the GDAL library (tried "gdal", "GDAL", "gdal2.2.0", "gdal2.1.0", "gdal2.0.0", "gdal1.11.0", "gdal1.10.0", "gdal1.9.0"). Is GDAL installed? If it is, try setting GDAL_LIBRARY_PATH in your settings. 
container_command 01_migrate in .ebextensions/db-migrate.config failed. For more detail, check /var/log/eb-activity.log using console or EB CLI.
```
<br>

## How to GeoDjango with AWS Elastic Beanstalk

- AWS has postGIS installed already.
- Connect EB with EC2.
- When you `eb init`, create key-pair.
    - If you did `eb init` already,
        - `eb init --interactive`
        - select AWS region
        - choose environment you are working on
        - pass codeComment
        - when it asks for key-pair name, create new key-pair.
- `eb ssh` into secret shell.
- Install libraries in there!
- Follow the script below.

<br>


```bash
wget http://download.osgeo.org/geos/geos-3.7.0.tar.bz2
tar xjf geos-3.7.0.tar.bz2
cd geos-3.7.0
./configure
make
sudo make install
cd ..
wget http://download.osgeo.org/proj/proj-5.2.0.tar.gz
wget http://download.osgeo.org/proj/proj-datumgrid-1.5.tar.gz
tar xzf proj-5.2.0.tar.gz
cd proj-5.2.0/nad
tar xzf ../../proj-datumgrid-1.5.tar.gz
cd ..
./configure
make
sudo make install
cd ..
wget http://download.osgeo.org/gdal/2.3.1/gdal-2.3.1.tar.gz
tar xzf gdal-2.3.1.tar.gz
cd gdal-2.3.1
sudo yum-config-manager --enable epel -y
sudo yum -y update
sudo yum -y install make automake gcc gcc-c++ libcurl-devel proj-devel geos-devel autoconf automake gdal
cd /tmp
curl -L http://download.osgeo.org/gdal/2.3.1/gdal-2.3.1.tar.gz | tar zxf -
cd gdal-2.3.1/
./configure --prefix=/usr/local --without-python
make -j4
sudo make install
cd /usr/local
tar zcvf ~/gdal-2.3.1-amz1.tar.gz *
gdalinfo --version
```

<br>

- The order of ( geos → proj → gdal ) is very important!

<br>

---

<br>

<U>Reference</U>


[https://medium.com/@shudson250/a-how-to-geodjango-deployed-on-aws-368948453f4d](https://medium.com/@shudson250/a-how-to-geodjango-deployed-on-aws-368948453f4d)

<br>

<br>