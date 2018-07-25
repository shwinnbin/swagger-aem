# coding: utf-8

"""
    Adobe Experience Manager (AEM) API

    Swagger AEM is an OpenAPI specification for Adobe Experience Manager (AEM) API

    OpenAPI spec version: 2.0.0
    Contact: opensource@shinesolutions.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import sys
from setuptools import setup, find_packages

NAME = "swaggeraem"
VERSION = "0.9.1"
# To install the library, run the following
#
# python setup.py install
#
# prerequisite: setuptools
# http://pypi.python.org/pypi/setuptools

REQUIRES = ["urllib3 >= 1.15", "six >= 1.10", "certifi", "python-dateutil"]

setup(
    name=NAME,
    version=VERSION,
    description="Adobe Experience Manager (AEM) API",
    author_email="opensource@shinesolutions.com",
    url="https://github.com/shinesolutions/swagger-aem/tree/master/python",
    keywords=["Swagger", "Adobe Experience Manager (AEM) API"],
    install_requires=REQUIRES,
    packages=find_packages(),
    include_package_data=True,
    long_description="""\
    Swagger AEM is an OpenAPI specification for Adobe Experience Manager (AEM) API
    """
)
